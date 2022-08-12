import React from 'react';
import { Container } from './InputText.style';

interface Proptype
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const InputText: React.FC<Proptype> = ({
  startIcon,
  endIcon,
  ...InputProps
}) => {
  return (
    <Container>
      {startIcon}
      <input {...InputProps} />
      {endIcon}
    </Container>
  );
};

export default InputText;
