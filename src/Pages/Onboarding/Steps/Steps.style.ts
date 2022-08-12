import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const Container = styled.section`
  --normal-font-color: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-image: url('/assets/onboarding/Group.svg');
  background-repeat: no-repeat;
  background-position: bottom right 1rem;
  flex: 1;
  align-self: center;
  ul {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    width: clamp(100px, 100%, 600px);
    /* padding-top: 3.5rem; */
    padding-left: 2rem;
    gap: 35px;
  }
  & > p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    align-self: center;
    color: var(--normal-font-color);
    padding-right: 10rem;
    span {
      font-weight: 700;
      font-size: 21px;
      line-height: 32px;
      color: #4554d0;
    }
  }
`;

export const ListItem = styled.li<{ isCurrent?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 50px;
  .circle {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #5e47ad;
    border: 3px solid #3e2e78;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
      props.isCurrent &&
      css`
        border-color: #fff;
      `}
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--normal-font-color);
  }
`;
