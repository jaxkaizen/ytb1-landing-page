import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
  lightBg, topLine, lightText, lightTextDesc, headline, description, list, buttonLabel, img, alt, imgStart
}) {
  return (
    <>
      <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
        <div className="container">
          <div className="row home__hero-row"
          style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row' : 'row-reverse'}}>
            <div className="col">
              <div className="home_hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img"/>
              </div>
            </div>
            <div className="col">
              <div className="home_hero-text-wrapper">
                <div className="top-line">
                  {topLine}
                </div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                {list ? <p><ul className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{list.map((listItem) => (
        <li>{listItem}</li>
    ))}</ul></p> : null}
                <Link to="/sign-up"><Button buttonSize="btn--wide" buttonColor="blue">{buttonLabel}</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
