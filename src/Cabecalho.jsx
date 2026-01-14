import React, { useState } from "react";

export default function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cabecalho">
      <div className="logo">MinhaLogo</div>

      {/* Menu Desktop */}
      <nav>
        <ul className="desktop">
          <li>Início</li>
          <li>Serviços</li>
          <li>Contactos</li>
          <li>Sobre Nós</li>
        </ul>

        {/* Hamburger Mobile */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Mobile */}
        <ul className={`mobile ${menuOpen ? "active" : ""}`}>
          <li onClick={() => setMenuOpen(false)}>Início</li>
          <li onClick={() => setMenuOpen(false)}>Serviços</li>
          <li onClick={() => setMenuOpen(false)}>Contactos</li>
          <li onClick={() => setMenuOpen(false)}>Sobre Nós</li>
        </ul>
      </nav>
    </header>
  );
}


