import './App.css';
import React, { useState } from 'react';
import GreenButton from './components/GreenButton';
import RedButton from './components/RedButton';

function App() {

  const [buttonCount, setButtonCount] = useState(31);

  const plus = () => {
    setButtonCount(buttonCount + 1);
  }

  const [redButtonCount, setRedButtonCount] = useState(47);

  const minus = () => {
    setRedButtonCount(redButtonCount - 1);
  }

  return (
    <div className="App">
      <div>Labas rytas</div>
      <GreenButton buttonCount={redButtonCount} plus={plus} />
      <RedButton count={buttonCount} minus={minus} />
    </div>
  );
}

export default App;
