import React from 'react';
import { Button } from '@mui/material';
import { Container } from './NextButton.style';

interface Proptypes {
  onBack?: () => void;
  onLogin?: () => void;
  onNext?: () => void;
  isCompleted?: boolean;
  isFirst?: boolean;
}
const NextButton: React.FC<Proptypes> = ({
  onBack,
  onLogin,
  onNext,
  isCompleted,
  isFirst,
}) => {
  return (
    <Container>
      {!isFirst && (
        <Button className={'button'} onClick={onBack}>
          Back
        </Button>
      )}
      {isCompleted ? (
        <Button className={'button'} onClick={onLogin}>
          LOG IN
        </Button>
      ) : (
        <Button className={'button'} onClick={onNext}>
          Next
        </Button>
      )}
    </Container>
  );
};

export default NextButton;
