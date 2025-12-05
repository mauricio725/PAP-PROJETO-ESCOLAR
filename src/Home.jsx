import React from "react";
import fundo from "./img/fundo.jpg";

export default function Home() {
  return (
    <main
      className="home"
      style={{
        backgroundImage: `url(${fundo})`
      }}
    >
      <div className="home-texto">
        <h1 className="bem-vindo">Bem-vindo</h1>
        <h2 className="animado">Veja Nossos Serviços, Reserva, Viaje!</h2>
      </div>
    </main>
  );
}



