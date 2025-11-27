import React from "react";
import Loader from "./Loader.jsx";
import Cabecalho from "./Cabecalho.jsx";
import Servicos from "./Servicos.jsx";
import Contactos from "./Contactos.jsx";
import Reservas from "./Reservas.jsx";
import Rodape from "./Rodape.jsx";
import "./css/style.css";

const App = () => {
  return (
    <>
      <Loader />
      <div className="app">
        <Cabecalho />
        <Servicos />
        <Contactos />
        <Reservas />
        <Rodape />
      </div>
    </>
  );
};

export default App;



