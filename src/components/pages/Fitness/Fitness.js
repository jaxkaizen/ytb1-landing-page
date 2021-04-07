import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './FitnessData'
import Pricing from '../../Pricing';

function Fitness() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Fitness;