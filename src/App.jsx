import React, { useEffect, useState } from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/style.css';
import '../css/responsive.css';

export default function App() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => { document.title = 'A S M P Transportes e Turismo, Lda.'; }, []);

  useEffect(() => {
    let t2;
    const t1 = setTimeout(() => {
      setFading(true);
      t2 = setTimeout(() => setVisible(false), 600);
    }, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div>
      {visible && (
        <div id="page-loader" className={`page-loader${fading ? ' fade-out' : ''}`} aria-hidden={visible ? 'false' : 'true'}>
          <div className="spinner" role="status" aria-label="Carregando">
            <span className="dot" aria-hidden="true"></span>
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}

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
                    <li className="nav-item active"><a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html"> About</a></li>
                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
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

        <section className="slider_section ">
          <div className="slider_bg_box"><img src="images/slider-bg.jpg" alt=""/></div>
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 ">
                      <div className="detail-box">
                        <h1>We Provide best <br/>Transport Service</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?</p>
                        <div className="btn-box"><a href="#" className="btn1">Get A Quote</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container "><div className="row"><div className="col-md-7 "><div className="detail-box">
                  <h1>We Provide best <br/>Transport Service</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?</p>
                  <div className="btn-box"><a href="#" className="btn1">Get A Quote</a></div>
                </div></div></div></div>
              </div>
              <div className="carousel-item">
                <div className="container "><div className="row"><div className="col-md-7 "><div className="detail-box">
                  <h1>We Provide best <br/>Transport Service</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?</p>
                  <div className="btn-box"><a href="#" className="btn1">Get A Quote</a></div>
                </div></div></div></div>
              </div>
            </div>
            <ol className="carousel-indicators"><li data-target="#customCarousel1" data-slide-to="0" className="active"></li><li data-target="#customCarousel1" data-slide-to="1"></li><li data-target="#customCarousel1" data-slide-to="2"></li></ol>
          </div>
        </section>
      </div>

      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container"><h2>Our <span>Services</span></h2><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p></div>
            <div className="row">
              <div className="col-md-6 "><div className="box "><div className="img-box"><img src="images/s1.png" alt=""/></div><div className="detail-box"><h5>Air Transport</h5><p>fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><a href="#">Read More</a></div></div></div>
              <div className="col-md-6 "><div className="box "><div className="img-box"><img src="images/s2.png" alt=""/></div><div className="detail-box"><h5>Cargo Transport</h5><p>fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><a href="#">Read More</a></div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding-bottom">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container"><h2>About <span>Us</span></h2></div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-6 "><div className="img-box"><img src="images/about-img.jpg" alt=""/></div></div>
          </div>
        </div>
      </section>

      <section className="track_section layout_padding">
        <div className="track_bg_box"><img src="images/track-bg.jpg" alt=""/></div>
        <div className="container"><div className="row"><div className="col-md-6"><div className="heading_container"><h2>Track Your Shipment</h2></div>
          <p>Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic error porro. Deserunt officia unde repellat beatae ipsum sed.</p>
          <form action="#"><input type="text" placeholder="Enter Your Tracking Number"/><button type="submit">Track</button></form>
        </div></div></div>
      </section>

      <section className="footer_section"><div className="container"><p>&copy; {new Date().getFullYear()} All Rights Reserved By <a href="https://html.design/">Free Html Templates</a></p></div></section>
    </div>
  );
}