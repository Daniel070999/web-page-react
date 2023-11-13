import React, { useEffect } from "react";
import './style.css';
import { Col, Image, Row } from "react-bootstrap";
import img from "../../../images/img.jpeg"

function FeaturesC() {
    useEffect(() => {
        function handleScroll() {
            const element1 = document.querySelector('.feature-body-img-one');
            const element2 = document.querySelector('.feature-body-img-two');
            const element3 = document.querySelector('.feature-body-img-three');
            if (element1 || element2 || element3) {
                const elementPosition1 = element1.getBoundingClientRect();
                const elementPosition2 = element2.getBoundingClientRect();
                const elementPosition3 = element3.getBoundingClientRect();
                if (elementPosition1.top < window.innerHeight) {
                    element1.style.animationPlayState = 'running';
                }
                if (elementPosition2.top < window.innerHeight) {
                    element2.style.animationPlayState = 'running';
                }
                if (elementPosition3.top < window.innerHeight) {
                    element3.style.animationPlayState = 'running';
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <section id="featuresC" className="features-main">
                <Row className="feature-row">
                    <Col className="feature-row">
                        description
                    </Col>
                    <Col className="feature-row">
                        <Image src={img} thumbnail className="feature-body-img-one" />
                    </Col>
                </Row>
                <Row className="feature-row">
                    <Col className="feature-row">
                        <Image src={img} thumbnail className="feature-body-img-two" />
                    </Col>
                    <Col className="feature-row">
                        description
                    </Col>
                </Row>
                <Row className="feature-row">
                    <Col className="feature-row">
                        description
                    </Col>
                    <Col className="feature-row">
                        <Image src={img} thumbnail className="feature-body-img-three" />
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default FeaturesC;