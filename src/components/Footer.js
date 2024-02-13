import { Container,Row, Col} from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm";
import logo from '../assets/img/logovaz.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2  from '../assets/img/nav-icon2.svg';
import navIcon3  from '../assets/img/nav-icon3.svg';
import cv from "../assets/img/CV2024-01.pdf";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
            <Row className="align-center">
                <MailchimpForm/>
                <Col sm={6}>
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <Col>
                    <a href={cv} className="link" target="_blank" rel="noopener noreferrer"> Descarga mi CV(Hoja de vida)</a>
                    </Col>
                    <br></br>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ivan-v%C3%A1zquez-1347b9241/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/ivan.vazquez.100" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/vazquez.hd/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>©2023 Copyright Vazquez.Hd</p>
                </Col>
            </Row> 
            </Container>
        </footer>
    )
}