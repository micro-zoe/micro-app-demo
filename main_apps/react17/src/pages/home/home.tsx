import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import './home.css';

function App() {
  return (
    <div className="App">
      <Link to='/page2'>跳转page2</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
