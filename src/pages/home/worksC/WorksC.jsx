import React from "react";
import './style.css';
import { Carousel } from "react-bootstrap";
import WorksCarouselC from "./works-carousel/WorksCarouselC";

function WorksC() {
    return (
        <>
            <section id="worksC" className="works-main">
                <Carousel>
                    <Carousel.Item className="works-items">
                        <WorksCarouselC text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item className="works-items">
                        <WorksCarouselC text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className="works-items">
                        <WorksCarouselC text="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item className="works-items">
                        <WorksCarouselC text="Four slide" />
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}
export default WorksC;