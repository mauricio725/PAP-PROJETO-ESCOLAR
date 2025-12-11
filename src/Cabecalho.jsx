import React, { useState } from "react";
import Login from "./login/Login";
import icone1 from "./img/icone1.png";

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

      <div className="logo-icone">
        <img src={icone1} alt="Ícone" className="icone-img" />
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
















