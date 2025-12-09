import React, { useState } from "react";
import icone from "./img/icone1.png";
import Login from "./login/Login";

export default function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const fecharLogin = (e) => {
    if (e.target.classList.contains("login-overlay")) {
      setLoginOpen(false);
    }
  };

  return (
    <header className="cabecalho">
      <div className="logo-area">
        <img src={icone} alt="logo" className="logo" />
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
          <a href="#" onClick={() => setLoginOpen(true)}>
            Login
          </a>
        </nav>
      )}

      {loginOpen && (
        <div className="login-overlay" onClick={fecharLogin}>
          <div className="login-container">
            <Login />
          </div>
        </div>
      )}
    </header>
  );
}







