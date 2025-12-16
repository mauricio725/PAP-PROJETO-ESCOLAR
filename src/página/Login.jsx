import React, { useState } from "react";
import "../css/style.css";

export default function Login({ abrirRegister }) {
  const [loginOpen, setLoginOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const fecharLogin = (e) => {
    if (e.target.className === "login-overlay") {
      setLoginOpen(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setMensagem("Preencha todos os campos!");
      return;
    }
    console.log("Login:", email, senha);
    setMensagem("Login realizado!"); // Placeholder
    setLoginOpen(false);
  };

  return (
    <>
      {loginOpen && (
        <div className="login-overlay" onClick={fecharLogin}>
          <div className="login-container">
            <form onSubmit={handleLogin}>
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="input-field"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button type="submit" className="btn-home">
                Entrar
              </button>
              {mensagem && <div className="mensagem">{mensagem}</div>}

              {/* Link para registro */}
              <div className="mt-4 text-center text-sm text-gray-600">
                Não tem conta?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={abrirRegister}
                >
                  Regista
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


