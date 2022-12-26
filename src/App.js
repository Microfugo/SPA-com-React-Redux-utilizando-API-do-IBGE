import React from 'react';
import './App.css';
import Localidades from './componentes/Localidades';
import Logo from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
      </header>
      <div>    <Localidades></Localidades>
      </div>
    </div>
  );
}

export default App;
