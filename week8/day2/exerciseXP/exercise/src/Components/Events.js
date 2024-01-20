import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`Your input is: ${event.target.value}`);
    }
  };

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>clickMe</button>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />
      <button onClick={toggleState}>{isToggleOn ? 'on' : 'off'}</button>
    </div>
  );
}

export default Events;
