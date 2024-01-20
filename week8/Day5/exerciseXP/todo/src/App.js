import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text, crossed: false }]);
    setText('');
  };

  const handleTodoClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].crossed = !newTodos[index].crossed;
    setTodos(newTodos);
  };

  const handleTodoDoubleClick = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleTodoClick(index)}
            onDoubleClick={() => handleTodoDoubleClick(index)}
            className={todo.crossed ? 'completed' : ''}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;