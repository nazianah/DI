 import React from "react";

class Child extends React.Component {
    componentWillUnmount() {
      alert('Child component will unmount!');
    }
  
    render() {
      return <h1>Hello World!</h1>;
    }
  }
  
  class Mount extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: true };
      this.handleDelete = this.handleDelete.bind(this);
    }
  
    handleDelete() {
      this.setState({ show: false });
    }
  
    render() {
      return (
        <div>
          {/* ... rest of your code ... */}
          {this.state.show ? <Child /> : null}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    }
  }
  
  export default Mount;