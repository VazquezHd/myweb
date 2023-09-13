import { Container,Row, Col} from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm";
import logo from "../assets/img/logo.svg";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
               <Row className="align-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={}/></a>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </footer>
    )
}