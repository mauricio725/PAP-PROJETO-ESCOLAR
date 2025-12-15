import React from 'react';
import Cabecalho from './componentes/Cabecalho';
import Home from './página/Home';
import Rodape from './componentes/Rodape';
import Loader from './componentes/Loader';
import './css/style.css';

export default function App() {
  return (
    <Loader>
      <Cabecalho />
      <Home />
      <Rodape />
    </Loader>
  );
}










