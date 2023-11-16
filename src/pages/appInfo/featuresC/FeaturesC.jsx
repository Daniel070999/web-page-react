import React, { useEffect } from "react";
import './style.css';
import { Card } from "react-bootstrap";

function FeaturesC(props) {

    useEffect(() => {
        function handleScroll() {
            const elements = document.querySelectorAll('.appinfo-features-div');
            elements.forEach((element) => {
                const elementPosition = element.getBoundingClientRect();
                if (elementPosition.top < window.innerHeight) {
                    element.style.animation = 'animation-appinfo-features-div .5s forwards';
                } else {
                    element.style.animation = 'animation-appinfo-features-div-reverse .5s forwards';
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section id="appinfo-features" className="appinfo-features-section">
                {props.dataFeatures.map((info, index) => (
                    <div key={index} className="appinfo-features-div">
                        <Card>
                            <Card.Img variant="top" src={info.image} />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text>
                                    {info.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </section>
        </>
    )
}

export default FeaturesC;