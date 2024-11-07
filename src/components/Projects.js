import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/web1.png";
import projImg2 from "../assets/img/pokeapi.png";
import projImg3 from "../assets/img/web3.png";
import projImg4 from "../assets/img/web2.png";
import projDis1 from "../assets/img/dis1.png";
import projDis2 from "../assets/img/dis2.jpg";
import projDis3 from "../assets/img/dis3.jpg";
import projDis4 from "../assets/img/dis4.jpg";
import projDis5 from "../assets/img/dis5.jpg";
import projDis6 from "../assets/img/dis6.jpg";
import projMaq1 from "../assets/img/laundy.jpg";
import projMaq2 from "../assets/img/perfil.png";
import projMaq3 from "../assets/img/alumno.png";
import projMaq4 from "../assets/img/chuchi.png";
import projMaq5 from "../assets/img/macetas.png";
import projMaq6 from "../assets/img/salud.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setShowModal(true);
  };


  const webDevelopmentProjects = [
    {
      title: "Digy Networks",
      description: "HTML, CSS, Bootstrap, Javascript, React",
      imgUrl: projImg1,
    },
    {
      title: "Pikeapi",
      description: "React, Axios",
      imgUrl: projImg2,
    },
    {
      title: "Hulux",
      description: "HTML, CSS, Bootstrap, Javascript, React",
      imgUrl: projImg3,
    },
    
    
  ];

  const graphicDesignProjects = [
    {
      title: "Veranda",
      description: "Fotografía, Lightroom , Photoshop",
      imgUrl: projDis4,
    },
    {
      title: "Invitación",
      description: "Photoshop",
      imgUrl: projDis5,
    },
    {
      title: "Invitación",
      description: "Illustrator",
      imgUrl: projDis6,
    },
    {
      title: "El Ajolote",
      description: "Premiere Pro, After Effects",
      imgUrl: projDis1,
    },
    {
      title: "Hulux",
      description: "Illustrator, Photoshop ",
      imgUrl: projDis2,
    },
    {
      title: "Zadyra",
      description: "Fotografía, Lightroom , Photoshop",
      imgUrl: projDis3,
    },

  ];

  const layoutProjects = [
    {
      title: "Chuchito",
      description: "Figma",
      imgUrl: projMaq4,
    },
    {
      title: "Blooms",
      description: "Figma",
      imgUrl: projMaq5,
    },
    {
      title: "M8 club Salud",
      description: "Figma",
      imgUrl: projMaq6,
    },
    {
      title: "UAEH",
      description: "Figma",
      imgUrl: projMaq3,
    },

    {
      title: "GO MORE",
      description: "Figma",
      imgUrl: projMaq1,
    },
    {
      title: "Pre Academy",
      description: "Figma",
      imgUrl: projMaq2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Te presento algunos de mis proyectos realizados.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Desarrollo Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Maquetación UX/UI</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Diseño gráfico</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>Estos son algunos proyectos que he realizado en el área del desarrollo web.</p>
                        <Row>
                          {webDevelopmentProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleImageClick(project.imgUrl)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <p>Estos son algunos proyectos que he realizado en el área de la maquetación UX/UI</p>
                        <Row>
                          {layoutProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleImageClick(project.imgUrl)}
                            />
                          ))}
                        </Row>
                        
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <p>Estos son algunos proyectos que he realizado en el área del diseño gráfico.</p>
                        <Row>
                          {graphicDesignProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleImageClick(project.imgUrl)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal para mostrar la imagen agrandada */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Agrandada"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <img className="background-image-right" src={require("../assets/img/color-sharp2.png")} alt="Color Sharp 2" />
    </section>
  );
};
