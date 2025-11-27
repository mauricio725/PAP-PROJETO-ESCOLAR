import React from "react";
import "./css/style.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div className="logo">MinhaMarca</div>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contactos">Contactos</a></li>
          <li><a href="#reservas">Reservas</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;
