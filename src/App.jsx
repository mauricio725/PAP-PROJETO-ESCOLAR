import React from 'react';
import Cabecalho from './Cabecalho';
import Home from './Home';
import Rodape from './Rodape';
import Loader from './Loader';
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










