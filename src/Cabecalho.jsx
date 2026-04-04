import React, { useState } from "react";
import logo from "./img/icone1.png";

export default function Cabecalho({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cabecalho">
      <div className="logo" onClick={() => setCurrentPage("home")}>
        <img src={logo} alt="Logo" />
      </div>

      <nav>
        <ul className="desktop">
          <li onClick={() => setCurrentPage("home")}>Início</li>
          <li onClick={() => setCurrentPage("servicos")}>Serviços</li>
          <li onClick={() => setCurrentPage("contactos")}>Contactos</li>
          <li onClick={() => setCurrentPage("sobre")}>Sobre Nós</li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`mobile ${menuOpen ? "active" : ""}`}>
          <li onClick={() => { setCurrentPage("home"); setMenuOpen(false); }}>Início</li>
          <li onClick={() => { setCurrentPage("servicos"); setMenuOpen(false); }}>Serviços</li>
          <li onClick={() => { setCurrentPage("contactos"); setMenuOpen(false); }}>Contactos</li>
          <li onClick={() => { setCurrentPage("sobre"); setMenuOpen(false); }}>Sobre Nós</li>
        </ul>
      </nav>
    </header>
  );
}
