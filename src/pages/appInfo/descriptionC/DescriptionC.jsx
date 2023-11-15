import React from "react";
import './style.css';

function DescriptionC(props) {

    return (
        <>
            <section id="appinfo-description" className="appinfo-description-section">
                <div className="appinfo-description-div">
                    {props.dataDescription}
                </div>
            </section>
        </>
    )
}

export default DescriptionC;