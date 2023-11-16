import React, { useEffect } from "react";
import './style.css';

function TermsAndConditionsC(props) {

    useEffect(() => {
        function handleScroll() {
            const element = document.querySelector('.appinfo-termsandconditions-div');
            if (element) {
                const elementPosition = element.getBoundingClientRect();
                if (elementPosition.top < window.innerHeight) {
                    element.style.animation = 'animation-appinfo-termsandconditions-div .5s forwards';
                }else{
                    element.style.animation = 'animation-appinfo-termsandconditions-div-reverse .5s forwards';
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <>
            <section id="appinfo-termsandconditions" className="appinfo-termsandconditions-section">
                <div className="appinfo-termsandconditions-div">
                    <h3>Terms And Conditions</h3>
                    <div className="appinfo-termsandconditions-p">
                        <p>{props.terms}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditionsC;