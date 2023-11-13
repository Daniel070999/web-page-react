import React, { useEffect } from "react";
import './style.css';

function ContactC() {

    useEffect(() => {
        function handleScroll() {
            const element = document.querySelector('.contacts-div');
            if (element) {
                const elementPosition = element.getBoundingClientRect();
                if (elementPosition.top < window.innerHeight) {
                    element.style.animationPlayState = 'running';
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section id="contactC" className="contact-main">
                <div className="contacts-div">
                    <i className="home-contact-description">Otra información relevante.</i>
                </div>
            </section>
        </>
    )
}
export default ContactC;