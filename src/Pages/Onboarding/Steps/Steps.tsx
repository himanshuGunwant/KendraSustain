import React from 'react';
import { Container, ListItem } from './Steps.style';

const arr = [
  'About You',
  'About The Organization',
  'Plans',
  'Billing',
  "Let's Go",
];

interface Proptypes {
  current?: number;
  onClick?: (current: number) => void;
}

const Steps: React.FC<Proptypes> = ({ current, onClick }) => {
  const handleClick = (clickedItem: number) => {
    onClick?.(clickedItem);
  };

  return (
    <Container>
      <ul>
        {arr.map((item, index) => (
          <ListItem key={index} isCurrent={index + 1 === current}>
            <div className="circle" onClick={() => handleClick(index + 1)}>
              <p>{index + 1}</p>
            </div>
            <p>{item}</p>
          </ListItem>
        ))}
      </ul>
      <p>
        Need help? <span>Talk to us</span>
      </p>
    </Container>
  );
};

export default Steps;
