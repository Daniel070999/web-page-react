import React from 'react';
import NavbarC from './navbarC/NavbarC';
import BodyMainC from './bodymainC/BodymainC';
import FeaturesC from './featuresC/FeacturesC';
import FooterC from '../footerC/FooterC';
import ContactC from './contactC/ContactC';
import WorksC from './worksC/WorksC';

function MainC() {
  
  return (
    <>
      <NavbarC />
      <BodyMainC />
      <FeaturesC />
      <WorksC />
      <ContactC />
      <FooterC />
    </>
  );
}

export default MainC;
