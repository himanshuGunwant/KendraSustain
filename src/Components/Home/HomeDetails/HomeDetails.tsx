import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './HomeDetails.style';

// TODO : write beter css

const HomeDetails = () => {
  const [scaled, setScaled] = useState(false);

  return (
    <Container className={scaled ? '' : undefined}>
      <div
        className={'nav-trigger'}
        onClick={() => setScaled(scaled ? false : true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          id="menuIcon"
        >
          <rect y="4" width="28" height="3"></rect>
          <rect y="12" width="20" height="3"></rect>
          <rect y="20" width="10" height="3"></rect>
        </svg>
      </div>
      <div className={'main-container'}>
        <img
          src={'/assets/images/backgroundimg7.jpg'}
          alt="Navbar background"
        />
        <div className={'container-text-wrapper'}>
          <div className={'text-wrapper'}>
            <h1 className={'heading'}>
              Enable Organizations to Embed Data sustainably across your
              business operations.
            </h1>
          </div>
          <div className={'button-wrapper'}>
            <button>
              <Link to={'/login'}>Get Started</Link>
            </button>
            <button>Request a demo</button>
          </div>
        </div>
      </div>
      <div className={'main-container-curve'}></div>
    </Container>
  );
};

export default HomeDetails;
