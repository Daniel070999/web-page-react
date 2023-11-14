import React from "react";
import './style.css';
import { Card } from "react-bootstrap";

function FeaturesC(props) {

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