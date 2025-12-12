import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';
import { Tab, Nav, Row, Col } from "react-bootstrap";

import foto from "./assets/img/foto.jpg";
import python from "./assets/img/python.png";
import js from "./assets/img/js.png";
import mongo from "./assets/img/mongo.png";
import mysql from "./assets/img/mysql.png";
import php from "./assets/img/php.png";
import react1 from "./assets/img/react1.png";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className="app-container">
      <div className="app-overlay">
        
        <section className="vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
          <div data-aos="zoom-in">
            <h2 className="hero-subtitle">Hola, soy</h2>
            <h1 className="hero-title text-light text-4xl font-bold text-pink-500" data-aos="fade-up">Karla Guzmán Gómez</h1>
            <h3 className="fs-3 text-light mt-3 fw-light">
              Ingeniería en Sistemas Computacionales
            </h3>
            <div className="mt-4">
               <span className="badge bg-transparent border border-light rounded-pill px-3 py-2 fw-normal mx-1">
                  Tecnológico de Milpa Alta II
               </span>
            </div>
          </div>
          
          <div className="position-absolute bottom-0 mb-5 text-white opacity-50 animate__animated animate__bounce animate__infinite">
            <small>Desliza hacia abajo</small>
            <div className="fs-4"><i className="bi bi-chevron-down"></i></div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <div className="glass-card">
                <h2 className="section-title">Acerca de mí</h2>
                <p className="fs-5 text-light lh-lg" style={{ textAlign: 'justify' }}>
                  Soy estudiante de Ingeniería en Sistemas Computacionales, 
                  <span className="text-info fw-bold"> responsable</span>, 
                  <span className="text-info fw-bold"> organizada</span> y 
                  con gran disposición para aprender.
                  <br /><br />
                  Me caracterizo por mi actitud positiva, compromiso y capacidad para 
                  adaptarme a nuevos entornos tecnológicos. Busco desarrollar mis habilidades, 
                  aportar valor al equipo y crecer profesionalmente en el mundo del desarrollo de software.
                </p>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-left">
              <div className="profile-wrapper">
                <img
                  src={foto}
                  alt="Karla Guzmán"
                  className="img-fluid profile-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 text-center">
          <h2 className="section-title mb-5" data-aos="fade-up">Tecnologías</h2>

          <Tab.Container id="projects-tabs" defaultActiveKey="primera">
            <Nav variant="pills" className="justify-content-center mb-5 custom-nav" data-aos="fade-up" data-aos-delay="200">
              <Nav.Item>
                <Nav.Link eventKey="primera">Backend</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="segunda">Frontend</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tercera">Base de Datos</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="primera">
                <Row className="justify-content-center g-4">
                  {[
                    { name: 'Python', percent: '70%', img: python },
                    { name: 'PHP', percent: '70%', img: php },
                    { name: 'JavaScript', percent: '70%', img: js }
                  ].map((tech, i) => (
                    <Col xs={12} sm={6} md={4} key={i}>
                      <div className="glass-card d-flex flex-column align-items-center justify-content-center h-100" data-aos="flip-up" data-aos-delay={i * 100}>
                        <img src={tech.img} alt={tech.name} className="tech-img" />
                        <h4 className="fw-bold">{tech.name}</h4>
                        <div className="progress w-75 mt-2" style={{height: '6px'}}>
                          <div className="progress-bar bg-info" role="progressbar" style={{width: tech.percent}}></div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="segunda">
                <Row className="justify-content-center g-4">
                  {[
                    { name: 'React', percent: '70%', img: react1 }
                  ].map((tech, i) => (
                    <Col xs={12} sm={6} md={4} key={i}>
                      <div className="glass-card d-flex flex-column align-items-center justify-content-center h-100" data-aos="flip-up">
                        <img src={tech.img} alt={tech.name} className="tech-img" />
                        <h4 className="fw-bold">{tech.name}</h4>
                        <div className="progress w-75 mt-2" style={{height: '6px'}}>
                          <div className="progress-bar bg-info" role="progressbar" style={{width: tech.percent}}></div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="tercera">
                <Row className="justify-content-center g-4">
                  {[
                    { name: 'MySQL', percent: '70%', img: mysql },
                    { name: 'MongoDB', percent: '70%', img: mongo }
                  ].map((tech, i) => (
                    <Col xs={12} sm={6} md={4} key={i}>
                      <div className="glass-card d-flex flex-column align-items-center justify-content-center h-100" data-aos="flip-up" data-aos-delay={i * 100}>
                        <img src={tech.img} alt={tech.name} className="tech-img" />
                        <h4 className="fw-bold">{tech.name}</h4>
                        <div className="progress w-75 mt-2" style={{height: '6px'}}>
                          <div className="progress-bar bg-info" role="progressbar" style={{width: tech.percent}}></div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>

        <section className="container py-5 text-center">
          <h2 className="section-title mb-5" data-aos="fade-up">Mis Proyectos</h2>
          <Row className="justify-content-center g-4">
            
            <Col md={6} lg={5} data-aos="zoom-in-up">
              <div className="glass-card h-100 d-flex flex-column justify-content-between p-4">
                 <div className="mb-4 text-info">
                    <i className="bi bi-shield-lock-fill" style={{ fontSize: '4rem' }}></i>
                 </div>
                 <div>
                   <h3 className="fw-bold text-white mb-3">Sistema de Login</h3>
                   <p className="text-muted">
                      Aplicación web con autenticación segura y gestión de acceso de usuarios.
                   </p>
                 </div>
                 <a 
                    href="https://tester@noveno.codeseiryu.com.mx/Karla_Elisa/login" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline-info rounded-pill px-4 mt-3 w-100 fw-bold"
                 >
                    <i className="bi bi-play-circle me-2"></i> Ver Proyecto
                 </a>
              </div>
            </Col>

            <Col md={6} lg={5} data-aos="zoom-in-up" data-aos-delay="200">
              <div className="glass-card h-100 d-flex flex-column justify-content-between p-4">
                 <div className="mb-4 text-warning">
                    <i className="bi bi-fire" style={{ fontSize: '4rem' }}></i>
                 </div>
                 <div>
                   <h3 className="fw-bold text-white mb-3">Proyecto Dragon Ball</h3>
                   <p className="text-muted">
                      Experiencia interactiva basada en el universo de Dragon Ball.
                   </p>
                 </div>
                 <a 
                    href="https://tester@noveno.codeseiryu.com.mx/Karla_Elisa_dragonball/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline-warning rounded-pill px-4 mt-3 w-100 fw-bold"
                 >
                    <i className="bi bi-play-circle me-2"></i> Ver Proyecto
                 </a>
              </div>
            </Col>

          </Row>
        </section>

        <footer className="py-5 text-center mt-5" style={{ background: 'rgba(0,0,0,0.3)' }} data-aos="fade-in">
          <h2 className="section-title text-white mb-4">Contáctame</h2>
          
          <div className="d-flex justify-content-center gap-4">
            <a href="https://www.facebook.com/kguzmangomez1/" target="_blank" rel="noreferrer" className="social-btn">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="https://www.instagram.com/ka_ell5/" target="_blank" rel="noreferrer" className="social-btn">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="mailto:karli.guzi@gmail.com" className="social-btn">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
          
          <p className="text-muted mt-5 mb-0 small">
            © 2024 Karla Guzmán Gómez | Desarrollado con React
          </p>
        </footer>

      </div>
    </div>
  );
}