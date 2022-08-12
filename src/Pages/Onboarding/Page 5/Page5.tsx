import React from 'react';
import { Container } from './Page5.style';

interface Proptypes {
  onBack?: () => void;
  onLogin?: () => void;
}
const Page5: React.FC<Proptypes> = ({ onBack, onLogin }) => {
  return (
    <Container>
      <div>
        <h1>Congratulations</h1>
        <p>
          Let's start your journey to <b>NET ZERO</b>{' '}
        </p>
      </div>
    </Container>
  );
};

export default Page5;
