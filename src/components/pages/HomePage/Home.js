import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './HomeData'
import Pricing from '../../Pricing';
import video from '../../../Videos/0001-0183.mp4';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';

function VideoSection({
  lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
  return (
    <>
      <div className='home__hero-section darkBg'>
        <div className="container">
          <div className="row home__hero-row"
          style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <div className="col">
              <div className="home_hero-img-wrapper">

                <video style={{maxWidth: '555px'}} controls  preload autoPlay muted loop playsinline poster="">
                  <source src={video} type="video/mp4" />
                </video>
              
              </div>
            </div>
            <div className="col">
              <div className="home_hero-text-wrapper">
                <div className="top-line">
                  Image Metrics AR
                </div>
                <h1 className='heading'>Introducing our Real-Time 3D Body Tracking</h1>
                <p className='home__hero-subtitle'>Realtime 2D and 3D body tracking for mobile devices for both iOS and Android.</p>
                <p>
                  <ul>
                    <li>Empowers users to create the most unique short video content</li>
                    <li>Create compelling AR gaming experiences</li>
                  </ul>
                </p>
                <p></p>
                <p>
                <Link to="/sign-up"><Button buttonSize="btn--wide" buttonColor="blue">Learn More</Button></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function Home() {
  return (
    <>
      <VideoSection />
      <HeroSection {...homeObjOne} />
      {/* <Pricing /> */}
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Home;