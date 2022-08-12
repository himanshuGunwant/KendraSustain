import React from 'react';
import { Container } from './Plan.style';

interface Proptypes {
  isSelected?: boolean;
  isPopular?: boolean;
  onClick?: () => void;
  title?: string;
  price?: number;
  tagline?: string;
  features?: {
    name: string;
    included: boolean;
  }[];
}

const Plan: React.FC<Proptypes> = ({
  isSelected,
  onClick,
  isPopular,
  title,
  price,
  tagline,
  features,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Container isSelected={isSelected}>
      {isPopular && (
        <div className={'popular'}>
          <p>popular</p>
        </div>
      )}
      <main onClick={handleClick}>
        <h5>{title}</h5>
        <p className={'about'}>{tagline}</p>
        <div className={'price'}>
          <h1>£{price}</h1>
          <span>/ month</span>
        </div>
        <p className={'sub-title'}> This plan includes : </p>
        <div className={'features'}>
          {features?.map((item, index) => (
            <div key={index}>
              {item.included ? (
                <i className={'bx bx-check'}></i>
              ) : (
                <i className={'bx bx-x'}></i>
              )}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <a href="/">Learn more</a>
      </footer>
    </Container>
  );
};

export default Plan;
