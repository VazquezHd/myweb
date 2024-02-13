import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import { send } from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    try {
      await send(
        'service_c71it9g', // Reemplaza con tu ID de servicio
        'template_2erai7k', // Reemplaza con tu ID de plantilla
        formDetails,
        '065UCnl9L0pP1ILVI' // Reemplaza con tu ID de usuario
      );

      setButtonText("Enviar");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'El mensaje se envió satisfactoriamente.' });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setButtonText("Enviar");
      setStatus({ success: false, message: 'Algo salió mal, intenta más tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col size={12} md={6}>
            <h2>Contáctame</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                {/* Campos de entrada del formulario */}
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Dirección de Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="No. Telefónico" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <div className="button-container">
                    <button type="submit"><span>{buttonText}</span></button>
                    {/* Mensaje de Satisfacción */}
                    {status.message && (
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    )}
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
