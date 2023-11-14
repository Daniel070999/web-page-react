import React from "react";
import './style.css';
import { Image } from "react-bootstrap";

function MainC(props) {

    return (
        <>
            <section id="appinfo-main" className="appinfo-main-section">
                <div className="appinfo-main-div">
                    <Image src={props.data.imagen} thumbnail className="appinfo-main-img" />
                    <p>{props.data.descripcion}</p>
                </div>
            </section>
        </>
    )
}

export default MainC;