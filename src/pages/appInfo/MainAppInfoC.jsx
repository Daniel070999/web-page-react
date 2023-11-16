import React from "react";
import NavbarC from './navbarC/NavbarC';
import { useParams } from "react-router-dom";
import FooterC from '../footerC/FooterC';
import DescriptionC from "./descriptionC/DescriptionC";
import MainC from "./mainC/MainC";
import FeaturesC from "./featuresC/FeaturesC";
import TermsAndConditionsC from "./termsandconditinosC/TermsAndConditionsC";
import dataProject from '../../data/dataWorks';
import infoWorks from "../../data/infoWorks";

function MainAppInfoC() {

    let { app } = useParams();
    const projectWork = dataProject.getProjectById(app);
    const infoProject = infoWorks.getInfoProjectById(app);

    return (
        <>
            <NavbarC
                name={projectWork.titulo}
            />
            <MainC
                data={projectWork}
            />
            <DescriptionC
                dataDescription={infoProject.description}
            />
            <FeaturesC
                dataFeatures={infoProject.tools}
            />
            <TermsAndConditionsC
                terms={infoProject.termsandconditions}
            />
            <FooterC />
        </>
    )
}

export default MainAppInfoC;