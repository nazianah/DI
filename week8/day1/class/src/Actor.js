// Actor.js
import React, { useState } from 'react';

const Actor = ({ initialState }) => {
  const [state, setState] = useState(initialState);

  return (
    <div>
      <h2>{`${state.firstName} ${state.lastName}`}</h2>
      <img src={state.image} alt={`${state.firstName} ${state.lastName}`} style={{ maxWidth: '100px' }} />
    </div>
  );
};

export default Actor;
