import React, { useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import Home from "./página/Home";
import Rodape from "./componentes/Rodape";
import Loader from "./componentes/Loader";
import Login from "./página/Login";
import Register from "./página/Register";
import "./css/style.css";

export default function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegister, setMostrarRegister] = useState(false);

  return (
    <Loader>
      <Cabecalho 
        abrirLogin={() => setMostrarLogin(true)}
        abrirRegister={() => setMostrarRegister(true)}
      />
      <Home />
      <Rodape />

      {mostrarLogin && (
        <Login abrirRegister={() => {
          setMostrarLogin(false);
          setMostrarRegister(true);
        }} />
      )}

      {mostrarRegister && (
        <Register fecharRegister={() => setMostrarRegister(false)} />
      )}
    </Loader>
  );
}










