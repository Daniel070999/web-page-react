import React, { useEffect } from "react";
import './style.css';

function ContactC() {

    useEffect(() => {
        function handleScroll() {
            const element = document.querySelector('.contacts-div');
            if (element) {
                const elementPosition = element.getBoundingClientRect();
                if (elementPosition.top < window.innerHeight) {
                    element.style.animation = 'animation-contacts-div .5s forwards';
                } else {
                    element.style.animation = 'animation-contacts-div-reverse .5s forwards';
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section id="contactC" className="contact-main">
                <div className="contacts-div">
                    <i className="home-contact-description">Contact</i>
                </div>
            </section>
        </>
    )
}

export default ContactC;