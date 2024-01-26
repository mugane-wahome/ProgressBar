import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Components/Progress_bar'; 


function getColor(percentage) {
  const red = Math.round(percentage * 20.55); 
  return `()`; 
}

function App() {
  const [count, setCount] = useState(0); 
  const [progress, setProgress] = useState(0); 
  const [maxValue, setMaxValue] = useState(100);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (!Number.isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
      setCount(inputValue);
      setProgress(inputValue); 
    }
  };

  const barStyle = {
    width: `${count}%`,
    backgroundColor: getColor(count),
  };

  return (
    <>
      
      <div className='main'>
      <h1>PROGRESS BAR</h1>
      <div className="BAR">
        
        <progress id="progress-bar" value={count} max={maxValue} />
        <div className="progress-text">{count}%</div>
        <div className="input">
          <h2>Input percentage</h2>
          <input type="number" name="" id="input" placeholder="" onChange={handleInputChange} />
        </div>
        
      </div>
      </div>
    </>
  );
}

export default App;
