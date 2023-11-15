import React from "react";
import './style.css';
import img from '../../../images/img.jpeg';
import { Image } from "react-bootstrap";

function BodyMainC() {

    return (
        <>
            <section id="bodymain" className="body-main">
                <div className="body-container">
                    <div className="body-div-left">
                        <Image src={img} thumbnail className="body-img" />
                    </div>
                    <div className="body-div-rigth">
                        <i className="body-main-description">Otra información relevante.</i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BodyMainC;
