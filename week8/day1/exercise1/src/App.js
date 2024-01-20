import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals.js';
import Exercise from './Exercise.js';

const MyElement = <h1> I Love JSX </h1>;
const sum = 5 + 5;

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
favAnimal:['Horse','Turtle', 'Elephant', 'Monkey']
};
function App() {
  return (
    <div>
      <p>Hello World</p>
      {MyElement}
      <p>React is {sum} times better with JSX</p>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favoriteAnimals={user.favAnimal} />
    </div>
  );
}

export default App;
