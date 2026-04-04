import { Link } from "react-router-dom";

export default function SobreNos() {
  return (
    <section>
      <div className="card-preta">
        <h1>Sobre Nós</h1>

        <p>
          A <strong>ASMP Transportes e Turismo</strong> é uma empresa dedicada ao
          transporte de passageiros, oferecendo soluções seguras, confortáveis e
          adaptadas às necessidades de cada cliente. Com experiência no setor e
          um compromisso constante com a qualidade, garantimos um serviço
          profissional, pontual e de confiança.
        </p>

        <h2>Especialidades</h2>
        <ul>
          <li>Transporte Escolar</li>
          <li>Transporte Ocupacional</li>
          <li>Transporte de Turismo</li>
          <li>Serviços Personalizados para Grupos e Eventos</li>
        </ul>

        <p>
          O nosso objetivo é proporcionar viagens tranquilas, seguras e
          eficientes, sempre com foco no bem‑estar dos passageiros.
        </p>

        <Link to="/contactos" className="btn-vermelho">
          Contactar Empresa
        </Link>
      </div>
    </section>
  );
}
