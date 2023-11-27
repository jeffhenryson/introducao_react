import React, { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import './App.css';

function App() {
  const [nome, setNome] = useState('');

  return (
    <div>
      <h1>State Lift: </h1>
      <SeuNome setNome={setNome} />
      {nome && <Saudacao nome={nome} />}
    </div>
  );
}

export default App;
