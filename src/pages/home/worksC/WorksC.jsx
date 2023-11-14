import React from "react";
import './style.css';
import { Carousel } from "react-bootstrap";
import WorksCarouselC from "./works-carousel/WorksCarouselC";
import data from '../../../data/dataWorks';

function WorksC() {

    return (
        <section id="worksC" className="works-main">
            <Carousel>
                {data.mainProjects.map((project, index) => (
                    <Carousel.Item key={index} className="works-items">
                        <WorksCarouselC project={project} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default WorksC;
