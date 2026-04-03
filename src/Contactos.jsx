export default function Contactos() {
  return (
    <section className="contactos pagina-preta">
      <h1>Contactos</h1>

      <div className="contactos-container">
        
        {/* INFORMAÇÕES */}
        <div className="contactos-info card-preta">
          <h2>Informações</h2>

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

        {/* FORMULÁRIO */}
        <div className="contactos-form card-preta">
          <h2>Enviar Mensagem</h2>

          <form>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefone" pattern="[0-9]{9}" required />
            <textarea placeholder="Mensagem" rows="5" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {/* MAPA */}
      <div className="contactos-mapa card-preta">
        <iframe
          title="Mapa ASMP"
          src="https://www.google.com/maps?q=Rua+da+Arte+X%C3%A1vega,+3060-693+Tocha,+Cantanhede&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
