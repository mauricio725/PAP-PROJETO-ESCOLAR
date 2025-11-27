import React, { useState } from "react";
import "./css/style.css";

const Reservas = () => {
  const [reserva, setReserva] = useState({ nome: "", data: "", hora: "" });

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva enviada:", reserva);
    alert("Reserva efetuada!");
    setReserva({ nome: "", data: "", hora: "" });
  };

  return (
    <section id="reservas" className="reservas">
      <h2>Efetue a sua Reserva</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={reserva.nome}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="data"
          value={reserva.data}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="hora"
          value={reserva.hora}
          onChange={handleChange}
          required
        />
        <button type="submit">Reservar</button>
      </form>
    </section>
  );
};

export default Reservas;
