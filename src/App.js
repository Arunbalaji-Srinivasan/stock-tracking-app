import React from 'react';
import logo from './logo.svg';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Addepar Take Home Test - Stock Trading Web Application
        </p>
      </header>
    </div>
  );
}

export default App;
