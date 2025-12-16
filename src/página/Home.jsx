import React from "react";
import "../css/style.css";                // CSS
import fundo from "../assets/img/fundo.jpg";   // Imagem
import icone1 from "../assets/img/icone1.png"; // Imagem

// <-- o teu PNG

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
      <div className="home-texto">

        <img 
          src={icone1} 
          alt="Ícone ASPM" 
          className="logo-home"
        />

        <h2 className="animado">ASMP Transportes e Turismo Lda.</h2>
      </div>
    </div>
  );       
} 

