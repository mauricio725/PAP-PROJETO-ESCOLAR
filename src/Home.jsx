import React from "react";
import "./css/style.css";
import fundo from "./img/fundo.jpg"; 
import icone1 from "./img/icone1.png"; // <-- o teu PNG

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
      <div className="home-texto">

        {/* Imagem no lugar do "Bem-vindo" */}
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






