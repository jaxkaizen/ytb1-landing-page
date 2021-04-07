import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './SportsData'
import Pricing from '../../Pricing';

function Sports() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Sports;