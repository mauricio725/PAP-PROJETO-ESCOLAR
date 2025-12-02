import React, { useState } from "react";
import "./css/style.css";

const Contactos = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado:", form);
    alert("Mensagem enviada!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contactos" className="contactos">
      <h2>Contacte-nos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="info-contacto">
        <p>Email: asmptransporteseturismo@gmail.com</p>
        <p>Telefone: +351 937 917 760</p>
      </div>
    </section>
  );
};

export default Contactos;
