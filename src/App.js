import React from 'react';
import './styles.css';
import { Tab, Nav } from "react-bootstrap";

// Imagenes
import foto from "./assets/img/foto.jpg";
import python from "./assets/img/python.png";
import js from "./assets/img/js.png";
import mongo from "./assets/img/mongo.png";
import mysql from "./assets/img/mysql.png";
import php from "./assets/img/php.png";
import react1 from "./assets/img/react1.png";

export default function App() {

  return (
    <div 
      className="text-white"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)" /* Transparencia para ver el fondo */
      }}
    >

      {/* Sección 1 */}
      <section className="vh-100 d-flex flex-column justify-content-center align-items-center neon-text">
        <h1 className="display-1 fw-bold text-center">Karla Guzmán Gómez</h1>
        <h2 className="mt-3">Tecnológico de Milpa Alta II</h2>
        <h3 className="mt-3">Ingeniería en Sistemas Computacionales</h3>
      </section>

      {/* Sección 2 - ACERCA DE MI */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="neon-text">Acerca de mí</h2>
            <p className="mt-3 fs-5">
              Soy estudiante de Ingeniería en Sistemas Computacionales, responsable, organizada y 
              con gran disposición para aprender. Me caracterizo por mi actitud positiva, 
              compromiso y capacidad para adaptarme a nuevos entornos.
              Busco desarrollar mis habilidades, 
              aportar al equipo y  crecer profesionalmente.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={foto}
              alt="Mi foto"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxWidth: '300px' }}
            />
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="container text-center py-5">
        <h2 className="neon-text mb-4">Tecnologías de conocimiento</h2>

        <Tab.Container id="projects-tabs" defaultActiveKey="primera">
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            <Nav.Item>
              <Nav.Link eventKey="primera" className="neon-border neon-text">Backend</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="segunda" className="neon-border neon-text">Frontend</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="tercera" className="neon-border neon-text">Bases de Datos</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>

            {/* Backend */}
            <Tab.Pane eventKey="primera">
              <div className="row g-4 justify-content-center">
                {[
                  { name: 'Python', percent: '70%', img: python },
                  { name: 'PHP', percent: '70%', img: php },
                  { name: 'JavaScript', percent: '70%', img: js }
                ].map((tech, i) => (
                  <div className="col-12 col-md-4" key={i}>
                    <div className="p-3 border rounded-3 bg-black shadow neon-border">
                      <img src={tech.img} alt={tech.name} className="img-fluid mb-2" style={{ height: '80px' }} />
                      <h4>{tech.name}</h4>
                      <p>{tech.percent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>

            {/* Frontend */}
            <Tab.Pane eventKey="segunda">
              <div className="row g-4 justify-content-center">
                {[
                  { name: 'React', percent: '70%', img: react1 }
                ].map((tech, i) => (
                  <div className="col-12 col-md-4" key={i}>
                    <div className="p-3 border rounded-3 bg-black shadow neon-border">
                      <img src={tech.img} alt={tech.name} className="img-fluid mb-2" style={{ height: '80px' }} />
                      <h4>{tech.name}</h4>
                      <p>{tech.percent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>

            {/* Bases de Datos */}
            <Tab.Pane eventKey="tercera">
              <div className="row g-4 justify-content-center">
                {[
                  { name: 'MySQL', percent: '70%', img: mysql },
                  { name: 'MongoDB', percent: '70%', img: mongo }
                ].map((tech, i) => (
                  <div className="col-12 col-md-4" key={i}>
                    <div className="p-3 border rounded-3 bg-black shadow neon-border">
                      <img src={tech.img} alt={tech.name} className="img-fluid mb-2" style={{ height: '80px' }} />
                      <h4>{tech.name}</h4>
                      <p>{tech.percent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>
      </section>

      {/* Redes sociales */}
      <section className="container text-center py-5">
        <h2 className="neon-text">Mis Redes Sociales</h2>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://www.facebook.com/kguzmangomez1/" className="fs-1 text-white">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="https://www.instagram.com/ka_ell5/" className="fs-1 text-white">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="mailto:karli.guzi@gmail.com" className="fs-1 text-white">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </section>

    </div>
  );
}
