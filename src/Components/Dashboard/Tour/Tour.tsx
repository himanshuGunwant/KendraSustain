import React from 'react';
import Tick from './Tick.svg';
import { Container } from './Tour.style';

const Tour = () => {
  return (
    <Container>
      <div className={'top'}>
        <img src={Tick} alt="" />
        <p>Your account successfully created</p>
      </div>
      <button>Take me Tour</button>
    </Container>
  );
};

export default Tour;
