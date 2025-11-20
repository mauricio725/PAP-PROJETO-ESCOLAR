// src/App.jsx
import React from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";

// Importa imagens do template
import pic01 from "./assets/images/pic01.jpg";
import pic02 from "./assets/images/pic02.jpg";
import pic03 from "./assets/images/pic03.jpg";
import pic04 from "./assets/images/pic04.jpg";
import pic05 from "./assets/images/pic05.jpg";
import pic06 from "./assets/images/pic06.jpg";
import pic07 from "./assets/images/pic07.jpg";

function App() {
  return (
    <div id="page-wrapper">
      {/* Header */}
      <header id="header" className="alt">
        <h1><a href="/">Minha PAP</a></h1>
        <nav><a href="#menu">Menu</a></nav>
      </header>

      {/* Menu */}
      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/project">Projeto</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
          <a href="#" className="close">Close</a>
        </div>
      </nav>

      {/* Banner */}
      <section id="banner">
        <div className="inner">
          <div className="logo"><span className="icon fa-gem"></span></div>
          <h2>Minha PAP</h2>
          <p>Descrição resumida do projeto ou tema da PAP</p>
        </div>
      </section>

      {/* Wrapper Sections */}
      <section id="wrapper">

        {/* Seção 1 */}
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="#" className="image"><img src={pic01} alt="" /></a>
            <div className="content">
              <h2 className="major">Seção 1</h2>
              <p>Descrição da primeira parte do projeto / PAP.</p>
              <a href="#" className="special">Learn more</a>
            </div>
          </div>
        </section>

        {/* Seção 2 */}
        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="#" className="image"><img src={pic02} alt="" /></a>
            <div className="content">
              <h2 className="major">Seção 2</h2>
              <p>Descrição da segunda parte do projeto / PAP.</p>
              <a href="#" className="special">Learn more</a>
            </div>
          </div>
        </section>

        {/* Seção 3 */}
        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a href="#" className="image"><img src={pic03} alt="" /></a>
            <div className="content">
              <h2 className="major">Seção 3</h2>
              <p>Descrição da terceira parte do projeto / PAP.</p>
              <a href="#" className="special">Learn more</a>
            </div>
          </div>
        </section>

        {/* Seção 4 / Features */}
        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">Destaques</h2>
            <p>Resumo geral ou destaques importantes do projeto / PAP.</p>
            <section className="features">
              <article>
                <a href="#" className="image"><img src={pic04} alt="" /></a>
                <h3 className="major">Feature 1</h3>
                <p>Descrição da feature 1.</p>
                <a href="#" className="special">Learn more</a>
              </article>
              <article>
                <a href="#" className="image"><img src={pic05} alt="" /></a>
                <h3 className="major">Feature 2</h3>
                <p>Descrição da feature 2.</p>
                <a href="#" className="special">Learn more</a>
              </article>
              <article>
                <a href="#" className="image"><img src={pic06} alt="" /></a>
                <h3 className="major">Feature 3</h3>
                <p>Descrição da feature 3.</p>
                <a href="#" className="special">Learn more</a>
              </article>
              <article>
                <a href="#" className="image"><img src={pic07} alt="" /></a>
                <h3 className="major">Feature 4</h3>
                <p>Descrição da feature 4.</p>
                <a href="#" className="special">Learn more</a>
              </article>
            </section>
            <ul className="actions">
              <li><a href="#" className="button">Browse All</a></li>
            </ul>
          </div>
        </section>

      </section>

      {/* Footer */}
      <section id="footer">
        <div className="inner">
          <h2 className="major">Contacto</h2>
          <p>Informações de contacto ou mensagem final.</p>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;

