import React, { useState } from 'react';
import quotes from './data/quotes.json'; 


function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState('#ffffff');
  const [shadowColor, setShadowColor] = useState('#000000'); 

  const generateRandomQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    setQuote(newQuote);

    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(newColor);

    const newShadowColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
    setShadowColor(newShadowColor);
  };

  
    return (
      <div className="App" style={{ backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '20px', textAlign: 'center', fontSize: '2.5em', borderRadius: '25px'  }}>
          <header className="App-header" style={{ color: color, textShadow: `2px 2px 4px ${shadowColor}` }}>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
            <button style={{ backgroundColor: color }} onClick={generateRandomQuote}>
              New Quote
            </button>
          </header>
        </div>
      </div>
    );
}

export default App;