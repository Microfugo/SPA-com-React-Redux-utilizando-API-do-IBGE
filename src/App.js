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
      <div>    
        <p>Selecione aqui o estado e municipio para pesquisar suas informações</p>
        <Localidades></Localidades>
      </div>
    </div>
  );
}

export default App;
