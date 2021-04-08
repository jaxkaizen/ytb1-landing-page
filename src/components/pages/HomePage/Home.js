import React from 'react';
import HeroSection from '../../HeroSection';
import VideoSection from '../../VideoSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './HomeData'
import Pricing from '../../Pricing';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <VideoSection {...homeObjOne}  />
      <VideoSection {...homeObjTwo} />
      {/* <Pricing /> */}
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home;