import React from 'react';

class App extends React.Component {
  state = {
    message: '',
    post: '',
    responseToPost: '',
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      this.setState({ message: res });
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: this.state.post }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      this.setState({ responseToPost: res });
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <header><h1>{this.state.message}</h1></header>
        <h2>Post to server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;