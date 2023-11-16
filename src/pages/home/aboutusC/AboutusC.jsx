import React, { useEffect } from "react";
import './style.css';

function AboutusC() {

    useEffect(() => {
        function hundleScroll() {
            const element = document.querySelector('.whous-div');
            if (element) {
                const positionElement = element.getBoundingClientRect();
                if (positionElement.top < window.innerHeight) {
                    element.style.animation = 'animation-whous-div .5s forwards'
                } else {
                    element.style.animation = 'animation-whous-div-reverse .5s forwards'
                }
            }
        }
        window.addEventListener('scroll', hundleScroll);
    });

    return (
        <>
            <section id="aboutusC" className="home-howus-section">
                <div className="whous-div">
                    <i className="whous-description">About us</i>
                </div>
            </section>
        </>
    )
}

export default AboutusC;