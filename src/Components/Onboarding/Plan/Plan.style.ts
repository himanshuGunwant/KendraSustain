import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Transition = `
  transition: all 400ms ease-out;
`;

export const Container = styled.div<{ isSelected?: boolean }>`
  --background-color: #f0efff;
  --primary-text-color: #757575;
  --secondary-text-color: #9098bb;
  --normal-text-color: #000000;
  --normal-icon-color: #000000;
  --primary-icon-color: #5905ad;
  --footer-text-color: #363636;
  --footer-background-color: #8d72a8;

  ${({ isSelected }) =>
    isSelected &&
    css`
      --background-color: #055CAD;
      --primary-text-color: #ffffff;
      --normal-text-color: #ffffff;
      --secondary-text-color: rgba(255, 255, 255, 0.8);
      --normal-icon-color: #ffffff;
      --primary-icon-color: #ffffff;
      --footer-text-color: #ffffff;
      --footer-background-color: #39145f;
    `}

  width: clamp(100px, 100%, 215px);
  border: none;
  height: 441px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
  color: #363636;
  position: relative;
  ${Transition}
  .popular {
    position: absolute;
    text-transform: uppercase;
    background: #d2cffc;
    padding: 0.3rem;
    border-radius: 4px;
    top: 8px;
    right: 8px;
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: #5905ad;
      text-transform: uppercase;
    }
  }
  main {
    cursor: pointer;
    padding-top: 1rem;
    padding-left: 1.1rem;
    width: 100%;
    & > h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: var(--normal-text-color);
      ${Transition}
    }
    & > p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: var(--secondary-text-color);
      ${Transition}

      &.sub-title {
        color: var(--primary-text-color);
        margin-bottom: 18px;
        ${Transition}
      }
    }

    .price {
      padding-bottom: 15px;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      ${Transition}
      h1 {
        line-height: 60px;
        font-weight: 400;
        font-size: 40px;
        color: var(--normal-text-color);
        ${Transition}
      }
      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: var(--normal-text-color);
        ${Transition}
      }
    }
    .features {
      display: flex;
      flex-direction: column;
      gap: 5px;
      & > div {
        display: flex;
        gap: 10px;
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: var(--primary-text-color);
        ${Transition}
      }
      i {
        font-size: 16px;
        color: var(--normal-icon-color);
        ${Transition}
        &.bx-check {
          color: var(--primary-icon-color);
        }
      }
    }
  }
  footer {
    width: calc(100% + 4px);
    background-color: var(--footer-background-color);
    height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    ${Transition}

    a {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      text-decoration: none;
      color: var(--footer-text-color);
      ${Transition}
    }
  }
`;
