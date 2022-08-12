import styled from '@emotion/styled';

export const Container = styled.div`
  --normal-font-color: #ffffff;
  display: flex;
  gap: 1rem;
  align-self: flex-end;

  .button {
    width: 180px;
    height: 40px;
    background: #4554d0;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: var(--normal-font-color);
    &:hover {
      background: #323ea6;
    }
  }
`;
