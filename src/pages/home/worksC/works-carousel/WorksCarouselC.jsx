import React, { useState } from "react";
import './style.css';
import { Button, Row, Col, Image } from "react-bootstrap";
import img from '../../../../images/img.jpeg';
import WorksModalC from "../works-modal/WorksModalC";

function WorksCarouselC(props) {
    const [modalShow, setModalShow] = useState(false);
    const [infoImg, setInfoImb] = useState("");

    function viewModal(verify, getImg) {
        setInfoImb(getImg);
        setModalShow(verify);
    }

    return (
        <>
            <section className="main-slide">
                <Row>
                    <div className="position-card">
                        <div>
                            <Image className="works-card-img" thumbnail src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18bb0ca53f5%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18bb0ca53f5%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                        </div>
                        <div className="works-description">
                            <h3>{props.text}</h3>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            <br />
                            <div className="works-buttons">
                                <Button style={{ marginInline: "5px" }} variant="primary">View project</Button>
                                <Button style={{ marginInline: "5px" }} variant="primary" href={`/appinfo/${props.text}`}>More Info</Button>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className="works-row-img">
                    <Col>
                        <Image src={img} thumbnail className="works-body-img" onClick={() => viewModal(true, { img })} />
                    </Col>
                    <Col>
                        <Image src={img} thumbnail className="works-body-img" onClick={() => viewModal(true, { img })} />
                    </Col>
                    <Col>
                        <Image src={img} thumbnail className="works-body-img" onClick={() => viewModal(true, { img })} />
                    </Col>
                </Row>
            </section>
            <WorksModalC
                show={modalShow}
                viewImg={infoImg}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
export default WorksCarouselC;