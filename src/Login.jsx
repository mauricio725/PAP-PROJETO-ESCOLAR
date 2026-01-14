import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de login simples
    if (email === "teste@teste.com" && senha === "1234") {
      setMensagem("Login efetuado com sucesso!");
    } else {
      setMensagem("Email ou senha incorretos.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input
        type="email"
        className="input-field"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="input-field"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {mensagem && <div className="mensagem">{mensagem}</div>}
    </form>
  );
}
