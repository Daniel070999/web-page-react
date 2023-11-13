import React from "react";
import './style.css';
import img from '../../images/img.jpeg';
import { Col, Image, Row } from "react-bootstrap";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

function FooterC() {
    function handleFacebookClick() {
        window.location.href = "https://www.facebook.com/...";
    }

    function handleInstagramClick() {
        window.location.href = "https://www.instagram.com/...";
    }

    function handleLinkedinClick() {
        window.location.href = "https://www.linkedin.com/...";
    }

    return (
        <>
            <section className="body-footer">
                <Row className="main-row-footer">
                    <Col><hr /></Col>
                    <Col className="justify-footer">
                        <FaFacebookSquare className="icon-footer" size={25} onClick={handleFacebookClick} />
                        <FaInstagramSquare className="icon-footer" size={25} onClick={handleInstagramClick} />
                        <FaLinkedin className="icon-footer" size={25} onClick={handleLinkedinClick} />
                    </Col>
                    <Col><hr /></Col>
                </Row>
                <Row className="main-row-footer">
                    <Col>
                        <Row className="row-footer-left">
                            <div className="container-img-title">
                                <Image src={img} roundedCircle className="footer-img" />
                                <Row>
                                    <span className="footer-title">TITULO PRINCIPAL</span>
                                    <span className="footer-sub-title"><i>Sub título</i></span>
                                </Row>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <span className="row-footer-rigth-title">Otra columna</span>
                            <span className="row-footer-rigth-description">Otra columna Otra columna Otra columna</span>
                        </Row>
                    </Col>
                </Row>
                <Row className="main-row-footer">
                    <Col><hr /></Col>
                    <Col xs="2" className="footer-main-copy">
                        <span className="footer-copyrigth">Copyrigth</span>
                    </Col>
                    <Col><hr /></Col>
                </Row>
            </section >
        </>
    )
}
export default FooterC;