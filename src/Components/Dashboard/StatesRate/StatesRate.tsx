import React from 'react';
import Stats from './Stats.svg';
import { Round } from 'Helper';
import { Container } from './StatsRate.style';

interface Proptypes {
  data?: number;
}

const StatesRate: React.FC<Proptypes> = ({ data }) => {
  return (
    <Container>
      <div className={'left'}>
        <h2>Stats Rate</h2>
        <p className={'persantage'}>+10%</p>
        <p className={'today'}>Today Carbon Emissions</p>
        <h3>{Round(data ?? 0)} kgCO2/KwH</h3>
      </div>
      <div className={'right'}>
        <img src={Stats} alt="" />
      </div>
    </Container>
  );
};

export default StatesRate;
