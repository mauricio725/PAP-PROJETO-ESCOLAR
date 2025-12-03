import React, { useState } from 'react';
import Cabecalho from './Cabecalho';
import Home from './Home';
import Rodape from './Rodape';
import Loader from './Loader';
import './css/style.css';

export default function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished && <Loader onFinish={() => setLoadingFinished(true)} />}
      {loadingFinished && (
        <>
          <Cabecalho />
          <Home />
          <Rodape />
        </>
      )}
    </>
  );
}







