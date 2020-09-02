import React from 'react';
import logo from '../../../public/images/logo.svg';
import './App.scss';
import Counter from '../counter';
import Controls from '../controls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Controls />
      </header>
    </div>
  );
}

export default App;
