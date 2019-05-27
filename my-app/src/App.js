import React from 'react';
import logo from './logo.svg';
import './App.css';

const myHeaders = new Headers({
  "Authorization": "Token token=f2b15a0105d45",
  "Content-Type": "application/json"
});

const myInit = {
  method: 'GET',
  headers: myHeaders
};

fetch('https://turismoi.pe/api/v1/regions.json?only_with_packages=1', myInit)
.then(rpta => rpta.json())
.then(resultado => console.log(resultado))


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
