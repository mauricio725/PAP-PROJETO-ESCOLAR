import React, { useState, useEffect } from "react";
import Icone1 from "./img/icone1.png";

const Cabecalho = ({ setCurrentPage }) => {
  const [scrollDir, setScrollDir] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setScrollDir("down");
    } else {
      setScrollDir("up");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const handleClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // fecha o menu ao clicar
  };

  return (
    <header className={`cabecalho ${scrollDir === "down" ? "hide" : "show"}`}>
      <img src={Icone1} alt="Ícone 1" className="logo-img" />
      <nav>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "active" : ""}>
          <li onClick={() => handleClick("home")}>Home</li>
          <li onClick={() => handleClick("servicos")}>Serviços</li>
          <li onClick={() => handleClick("reservas")}>Reservas</li>
          <li onClick={() => handleClick("contactos")}>Contactos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;






