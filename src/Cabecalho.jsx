import React, { useState } from 'react';
import icon1 from './img/icone1.png';
import './css/style.css';

export default function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="cabecalho">
      <div className="cab-left">
        <img src={icon1} alt="Logo" className="logo" />
      </div>
      <div className="cab-right">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        {menuOpen && (
          <nav className="menu-dropdown">
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        )}
      </div>
    </header>
  );
}


