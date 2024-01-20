import React from 'react';
import './Exercise.css';

const styleHeader = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
};

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={styleHeader}>Styled Header</h1>
        <p className="para">Styled Paragraph</p>
        <a href="https://octopus.developers.institute/courses/collection/6/course/35/section/367/chapter/1325">exerciseXP</a>
        <ul> <b>This is a list!</b>
          <li>Coffe</li>
          <li>Tea</li>
          <li>Milkshake</li>
        </ul>
        <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" width="500" height="333"></img>
      </div>
    );
  }
}

export default Exercise;