import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/img/logovaz.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '@fortawesome/fontawesome-free/css/all.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;

      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleContactButtonClick = () => {
    setShowContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  // Función para copiar al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Texto copiado: ${text}`);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Proyectos" },
  ];

  return (
    <>
      <Navbar expand="lg" className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  href={link.href}
                  className={activeLink === link.label.toLowerCase() ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(link.label.toLowerCase())}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ivan-v%C3%A1zquez-1347b9241/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/VazquezHd" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/vazquez.hd/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
              </div>
              <button className="vvd" onClick={handleContactButtonClick}><span>Contáctame</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal de Contacto */}
      <Modal show={showContactModal} onHide={handleCloseContactModal} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title className="custom-modal-title">Contáctame</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <p className="contact-info">
            Correo: vazquez.dg22@gmail.com  
            <Button
              variant="secondary"
              className="copy-button"
              onClick={() => copyToClipboard('vazquez.dg22@gmail.com   ')}
            >
              <FontAwesomeIcon icon={faClipboard} />
            </Button>
          </p>
          <p className="contact-info">
            Teléfono: +52 7727497831
               
            <Button
              variant="secondary"
              className="copy-button"
              onClick={() => copyToClipboard('+52-772-749-7831   ')}
            >
              <FontAwesomeIcon icon={faClipboard} />
            </Button>
          </p>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="dark" onClick={handleCloseContactModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
