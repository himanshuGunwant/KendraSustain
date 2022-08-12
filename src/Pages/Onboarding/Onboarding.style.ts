import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div<{ page: number }>`
  ${(props) => css`
    background-image: url(/assets/onboarding/${props.page}.svg),
      url(/assets/onboarding/page-shape-${props.page}.svg);
  `}

  width: 100%;
  /* gap: 1rem; */
  min-height: 100vh;
  background-color: #0B232D;
  background-position: left 2rem bottom, right top;
  background-repeat: no-repeat, no-repeat;
  background-size: 35% 60%, 50% 100%;
  display: flex;
  flex-direction: column;
  & > main {
    flex: 1;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;
