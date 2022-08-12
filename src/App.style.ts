import styled from '@emotion/styled';

export const MainScreen = styled.div<{ close?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > main {
    flex: 1;
    display: flex;
    overflow-y: hidden;
    & > div {
      padding: 0 1rem;
      padding-top: 1.5rem;
      flex: 1;
      overflow-y: scroll;
      height: 100%;
    }
  }
`;
