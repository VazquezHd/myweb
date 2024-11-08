import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/imagen-landing.png";
import contactoArchivo from "../assets/img/CV2024-01.pdf";  // Reemplaza "tu_archivo_contacto.txt" con el nombre de tu archivo

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Desarrollador web", "Diseñador web y UX/UI", " Diseñador gráfico"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  // Función para descargar el archivo
  const descargarArchivo = (archivo) => {
    const link = document.createElement('a');
    link.href = archivo;
    link.download = 'JorgeIvanVazquez.pdf';  // Puedes cambiar el nombre del archivo de descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} mid={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenidos a mi Portafolio</span>
                  <h1>{`Hola, soy Iván Vázquez: `}<span className="wrap"> {text}</span></h1>
                  <p>"¡Hola! Soy un apasionado diseñador con habilidades sólidas en desarrollo y diseño web, diseño de interfaz (UX/UI) y diseño gráfico. Mi enfoque va más allá: me considero una mente inquieta y comprometida con la mejora constante. Estoy aquí para crear experiencias visuales únicas y efectivas, siempre listo para aprender y evolucionar en el emocionante mundo del diseño."</p>
                  <button onClick={() => descargarArchivo(contactoArchivo)}>Descarga mi CV <ArrowRightCircle size={25} /></button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} mid={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
