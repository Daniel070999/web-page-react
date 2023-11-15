import React, { useState } from "react";
import './style.css';
import { Button, Row, Image } from "react-bootstrap";
import WorksModalC from "../works-modal/WorksModalC";

function WorksCarouselC(props) {

    const [modalShow, setModalShow] = useState(false);
    const [infoData, setInfoImb] = useState({});

    function viewModal(verify, getData) {
        setInfoImb(getData.data);
        setModalShow(verify);
    }

    return (
        <>
            <section className="main-slide">
                <Row>
                    <div className="position-card">
                        <div>
                            <Image className="works-card-img" thumbnail src={props.project.imagen} />
                        </div>
                        <div className="works-description">
                            <h3>{props.project.titulo}</h3>
                            {props.project.descripcion}
                            <br />
                            <div className="works-buttons">
                                <Button style={{ marginInline: "5px" }} variant="primary">View project</Button>
                                <Button style={{ marginInline: "5px" }} variant="primary" href={`/appinfo/${props.project.id_work}`}>More Info</Button>
                            </div>
                        </div>
                    </div>
                </Row>
                <div className="works-row-img">
                    {props.project.infoApp.map((data, index) => (
                        <Image key={index} src={data.imagen} thumbnail className="works-body-img" onClick={() => viewModal(true, { data })} />
                    ))}
                </div>
            </section>
            <WorksModalC
                show={modalShow}
                viewData={infoData}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default WorksCarouselC;