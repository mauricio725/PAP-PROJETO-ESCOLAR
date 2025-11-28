import React from "react";

const Reservas = () => {
  return (
    <section>
      <h1>Faça sua Reserva</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="date" />
        <input type="time" />
        <textarea placeholder="Observações"></textarea>
        <button type="submit">Reservar</button>
      </form>
    </section>
  );
};

export default Reservas;
