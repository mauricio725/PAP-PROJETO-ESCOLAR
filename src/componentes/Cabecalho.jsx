import React, { useState } from "react";
import Login from "../página/Login";
import icone1 from "../assets/img/icone1.png";


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
      <h2 className="cabecalho-titulo">Bem Vindo</h2>

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
          <a
            href="#"
            onClick={() => {
              setLoginOpen(true);
              setMenuOpen(false);
            }}
          >
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
















