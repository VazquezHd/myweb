import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import cv from "../assets/img/CV2024-01.pdf";

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    }

    const clearFields = () => {
        setEmail('');
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText("vazquez.dg22@gmail.com");
        alert("Dirección de correo copiada al portapapeles");
    }

    const handleDownloadCV = () => {
        // Lógica para la descarga del CV
        const link = document.createElement("a");
        link.href = cv;
        link.download = "MiCV.pdf"; // Puedes cambiar el nombre del archivo según tus preferencias
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert("Descargando CV...");
      };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Email:  vazquez.dg22@gmail.com</h3>
                        {status === 'sending' && <Alert>Enviando...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    
                    <Col md={6} xl={5}>
                            <div className="new-email-bx">
                                <button type="button" onClick={handleCopyToClipboard}>Copiar Email</button>
                                <div className="button-separator"></div>
                                <button type="button" onClick={handleDownloadCV}>
                  Descargar CV
                </button>
                            </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}
