import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const changeNumber = (step) => {
    const newNumber = number + step;
    setNumber(newNumber);
  };

  return (
    <div className="App">
      <button className="btn btn-success" onClick={() => changeNumber(1)}>
        +
      </button>
      <p className="inline">{number}</p>
      <button className="btn btn-danger" onClick={() => changeNumber(-1)}>
        -
      </button>
    </div>
  );
}

export default App;
