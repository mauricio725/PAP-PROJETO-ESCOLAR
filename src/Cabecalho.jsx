import React, { useState, useEffect } from "react";

const Cabecalho = ({ setCurrentPage }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Fecha menu ao mudar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <header className={`cabecalho ${showHeader ? "show" : "hide"}`}>
      <div className="logo">ASMP Transportes</div>

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





