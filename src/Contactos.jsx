import React, { useState, useEffect } from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/style.css';
import '../css/responsive.css';

export default function Contactos() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => { document.title = 'Contactos — A S M P Transportes e Turismo, Lda.'; }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with actual submission logic
    setTimeout(() => {
      setStatus('enviado');
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 800);
  };

  return (
    <div>
      <div className="hero_area">
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid ">
              <div className="contact_nav">
                <a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span>Call : +01 123455678990</span></a>
                <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span>Email : demo@gmail.com</span></a>
                <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span>Location</span></a>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html"><span>A S M P Transportes e Turismo, Lda.</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  ">
                    <li className="nav-item "><a className="nav-link" href="index.html">Home </a></li>
                    <li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html"> About</a></li>
                    <li className="nav-item active"><a className="nav-link" href="contact.html">Contact Us <span className="sr-only">(current)</span> </a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a></li>
                    <li className="nav-item">
                      <form className="form-inline">
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                      </form>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <section className="contact_section layout_padding-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                  <div><input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required /></div>
                  <div><input name="phone" type="text" placeholder="Phone Number" value={form.phone} onChange={handleChange} /></div>
                  <div><input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /></div>
                  <div><textarea name="message" className="message-box" placeholder="Message" value={form.message} onChange={handleChange} required /></div>
                  <div className="btn_box"><button type="submit" className="btn btn-primary">{status === 'sending' ? 'SENDING' : 'SEND'}</button></div>
                </form>
                {status === 'enviado' && <div className="alert alert-success mt-2">Mensagem enviada. Obrigado!</div>}
              </div>
            </div>
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap" style={{ width: '100%', height: '400px', background: '#eee' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span>Location</span></a>
                  <a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span>Call +01 1234567890</span></a>
                  <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span>demo@gmail.com</span></a>
                </div>
              </div>
              <div className="info_social">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html"><img src="images/nav-bullet.png" alt=""/>Home</a>
                  <a href="about.html"><img src="images/nav-bullet.png" alt=""/>About</a>
                  <a href="service.html"><img src="images/nav-bullet.png" alt=""/>Services</a>
                  <a href="contact.html"><img src="images/nav-bullet.png" alt=""/>Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved By <a href="https://html.design/">Free Html Templates</a></p>
        </div>
      </section>
    </div>
  );
}
