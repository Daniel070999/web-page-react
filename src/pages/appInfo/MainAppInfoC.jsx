import React from "react";
import NavbarC from './navbarC/NavbarC';
import { useParams } from "react-router-dom";
import FooterC from '../footerC/FooterC';
import DescriptionC from "./descriptionC/DescriptionC";
import MainC from "./mainC/MainC";
import FeaturesC from "./featuresC/FeaturesC";
import TermsAndConditionsC from "./termsandconditinosC/TermsAndConditionsC";

function MainAppInfoC() {
    let { app } = useParams();
    return (
        <>
            <NavbarC
                name={app}
            />
            <MainC />
            <DescriptionC />
            <FeaturesC />
            <TermsAndConditionsC />
            <FooterC />
        </>
    )
}
export default MainAppInfoC;