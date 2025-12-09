import React from "react";
import "./css/style.css";
import fundo from "./img/fundo.jpg"; // coloca a tua imagem aqui

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
      <div className="home-texto">
        <h1 className="bem-vindo">Bem-vindo</h1>
        <h2 className="animado">ASPM Transportes e Turismo</h2>
      </div>
    </div>
  );       
}





