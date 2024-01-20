import React from 'react';

class Webhook extends React.Component {
    async postData() {
        const response = await fetch('https://webhook.site/f0fa6878-53bd-4211-b637-baac6a6cf7d8', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key1: 'Yu',
            email: 'awushu6@gmail.com',
            name: 'Tanikete',
            lastname: 'Sookeera',
            age: 23,
          }),
        });
      
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
        } else if (response.headers.get('Content-Type').includes('application/json')) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log(await response.text());
        }
      }
  render() {
    return (
      <div>
        <button onClick={() => this.postData()}>Send Data</button>
      </div>
    );
  }
}

export default Webhook;