import React, { useState } from "react";

export default function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cabecalho">
       <div className="logo-area">
      <img src="./img/icone1.png" alt="logo" className="logo" />
      <span className="titulo">ASPM Transportes e Turismo</span>
    </div>

      <div className="menu-icone" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>

      {menuOpen && (
        <nav className="menu-opcoes">
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Contactos</a>
          <a href="#">Sobre Nós</a>
        </nav>
      )}
    </header>
  );
}





