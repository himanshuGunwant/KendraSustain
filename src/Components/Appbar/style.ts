import styled from '@emotion/styled';

export const BoxContainer = styled.div`
  height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
