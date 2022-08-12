import styled from '@emotion/styled';
import { Select } from '@mui/material';

export const Container = styled(Select)`
  border-radius: 6px;
  overflow: hidden;

  & > div {
    padding: 0.7rem;
    background: #f0efff;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #9098bb;
  }
`;
