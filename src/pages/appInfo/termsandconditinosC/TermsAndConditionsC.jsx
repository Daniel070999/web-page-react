import React from "react";
import './style.css';

function TermsAndConditionsC(props) {

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