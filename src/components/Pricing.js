import React from 'react'
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
  return (
    <IconContext.Provider value={{color: '#fff', size: 64}}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className='pricing__container-card'>
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>$8.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>1000 API Calls</li>
                    <li>Throttling/Rate limiting</li>
                    <li>40 GB / day capacity</li>
                    <Button buttonSize='btn-wide' buttonColor='primary'>Click Me</Button>
                  </ul>
                </div>
              </Link>
              <Link to="/sign-up" className='pricing__container-card'>
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>$28.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>10000 API Calls</li>
                    <li>Throttling/Rate limiting</li>
                    <li>400 GB / day capacity</li>
                    <Button buttonSize='btn-wide' buttonColor='blue'>Click Me</Button>
                  </ul>
                </div>
              </Link>
              <Link to="/sign-up" className='pricing__container-card'>
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>$58.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100000 API Calls</li>
                    <li>No Throttling/Rate limiting</li>
                    <li>4000 GB / day capacity</li>
                    <Button buttonSize='btn-wide' buttonColor='primary'>Click Me</Button>
                  </ul>
                </div>
              </Link>
            </div>
          </div>  
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Pricing
