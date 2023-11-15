import React from 'react';
import NavbarC from './navbarC/NavbarC';
import BodyMainC from './bodymainC/BodymainC';
import FeaturesC from './featuresC/FeacturesC';
import FooterC from '../footerC/FooterC';
import ContactC from './contactC/ContactC';
import WorksC from './worksC/WorksC';
import WhousC from './whous/WhousC';

function MainC() {

  return (
    <>
      <NavbarC />
      <BodyMainC />
      <WhousC />
      <FeaturesC />
      <WorksC />
      <ContactC />
      <FooterC />
    </>
  );
}

export default MainC;
