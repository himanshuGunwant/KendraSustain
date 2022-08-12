import { MenuItem as MI } from '@mui/material';
import React from 'react';
import { Container, MenuDiv } from './InputSelect.style';

// interface Proptypes extends SelectProps<unknown> {
//   children?: React.ReactNode;
// }

export const InputSelect = Container;

export const MenuItem: React.FC<{
  children?: React.ReactNode;
  value?: string | number;
}> = ({ children, value }) => {
  return (
    <MI value={value}>
      <MenuDiv>{children}</MenuDiv>
    </MI>
  );
};
