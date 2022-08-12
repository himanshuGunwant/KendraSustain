import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 10px;
  flex-wrap: wrap;
`;
export const Option = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  p {
    width: 100%;
    background-color: #ffffff;
    position: static;
    top: 0;
    z-index: 3;
    font-style: normal;
    font-weight: 500;
    font-size: 15;
  }
`;
export const Child = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
`;

interface Proptype {
  selected?: boolean;
}
export const Square = styled.div<Proptype>`
  height: 20px;
  width: 20px;
  border: 4px;
  cursor: pointer;
  margin-right: 5px;
  ${({ selected }) => css`
    background-color: ${selected ? '#2F3DA9' : '#dadada'};
  `}
  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 14;
    color: #828282;
  }
`;
