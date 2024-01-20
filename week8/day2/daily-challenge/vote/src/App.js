import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const handleVote = (index) => {
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index] = {
        ...newLanguages[index],
        votes: newLanguages[index].votes + 1,
      };
      return newLanguages;
    });
  };

  return (
    <div>
      <h1>Vote for Your Favorite Language</h1>
      <ul className="languages-list">
        {languages.map((language, index) => (
          <li key={index} className="language-item">
            <span>{language.name}: {language.votes} votes</span>
            <button onClick={() => handleVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
