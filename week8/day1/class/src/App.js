// App.js
import React from 'react';
import Actor from './Actor';

const App = () => {
  const actors = [
    {
      firstName: 'John',
      lastName: 'Doe',
      image: 'https://png.pngtree.com/element_pic/12/03/20/1656e3fa305853d.jpg',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png',
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      image: 'https://assets.stickpng.com/images/61d183263a856e0004c6334a.png',
    },
  ];

  return (
    <div>
      <h1>List of Actors</h1>
      {actors.map((actor, index) => (
        <Actor key={index} initialState={actor} />
      ))}
    </div>
  );
};

export default App;
