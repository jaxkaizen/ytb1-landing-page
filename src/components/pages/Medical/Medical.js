import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './MedicalData'
import Pricing from '../../Pricing';

function Medical() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Medical;