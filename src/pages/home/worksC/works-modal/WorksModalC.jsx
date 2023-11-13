import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import './style.css';

function WorksModalC(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} size="sm"
                aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.viewData.encabezado}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Image className="modal-card-img" src={props.viewData.imagen} />
                    <p>
                        {props.viewData.descripcion}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button>View Project</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default WorksModalC;