import React, { useState } from "react";
import { Link } from"react-router-dom";
import icone1 from "./img/icone1.png";
import "./css/style.css";

export default function Contactos() {
  return (
    <section className="contactos pagina-preta">
      <h1>Contactos</h1>
      <div className="contactos-topo">
        <div className="contactos-info">
           <h2 className="form-titulo">Informações</h2>
          <p><strong>Empresa:</strong><br />A S M P Transportes e Turismo, Lda.</p>
          <p><strong>Morada:</strong><br />Rua da Arte Xávega, 3060-693 Tocha, Cantanhede</p>
          <p><strong>Telefone:</strong><br />+351 937 917 760</p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:asmptransporteseturismo@gmail.com">
              asmptransporteseturismo@gmail.com
            </a>
          </p>
        </div>
<div className="contactos-form">
  <h2 className="form-titulo">Enviar Mensagem</h2>
  <form>
    <input type="text" placeholder="Nome" className="input-field" required />
    <input type="email" placeholder="Email" className="input-field" required />
    <input type="tel" placeholder="Telefone" className="input-field" pattern="[0-9]{9}" required />
    <textarea placeholder="Mensagem" rows="5" required></textarea>
    <button type="submit">Enviar</button>
  </form>
</div>
</div>


      {/* MAPA */}
      <div className="contactos-mapa">
        <iframe
          title="Mapa ASMP"
          src="https://www.google.com/maps?q=Rua+da+Arte+X%C3%A1vega,+3060-693+Tocha,+Cantanhede&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
