import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  &.scaled {
    transform: scale(0.9) translateX(-90%);
    border-radius: 3px;
    box-shadow: 0 3px 10px 0 #232b38;
  }
  .nav-trigger {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    transform: rotateY(180deg);
    display: none;
    svg {
      width: 40px;
      fill: #fff;
    }
  }
  .main-container {
    position: relative;
    /* height: 500px; */
    width: 100%;
    img {
      width: 100%;
      filter: brightness(40%);
    }
  }
  .container-text-wrapper {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    .text-wrapper {
      margin-top: 80px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .heading {
      font-family: 'Roboto', sans-serif;
      font-size: 2.5rem;
      font-weight: bold;
      width: 80%;
    }
    .button-wrapper {
      margin-top: 80px;
      button {
        background: #2091f9;
        color: #fff;
        border-radius: 35px;
        border: none;
        padding: 8px 30px;
        font-weight: 700;
        transition: all 0.3s ease-in-out;
        margin-right: 10px;
        min-width: 160px;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          background: #116dc4;
        }
      }
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  .main-container-curve {
    position: relative;
    height: 100px;
    background: #fff;
    margin-top: -50px;
    &::before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      left: 0;
      top: -100px;
      border-bottom: 100px solid #fff;
      border-right: 50vw solid transparent;
    }
    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      right: 0;
      top: -100px;
      border-bottom: 100px solid #fff;
      border-left: 50vw solid transparent;
    }
  }
  @media screen and (max-width: 876px) {
    .container-text-wrapper {
      .text-wrapper {
        margin-top: 100px;
      }
      .button-wrapper {
        margin-top: 30px;
      }
      .heading {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .nav-trigger {
      display: block;
    }
    .main-container {
      img {
        margin-top: 0;
        z-index: -1;
      }
    }
    .container-text-wrapper {
      width: 100%;
      .heading {
        font-weight: 500;
      }
      .text-wrapper {
        margin-top: -60px;
      }
    }
    .main-container-curve {
      margin-top: -80px;
      height: 40px;
      &::before {
        top: -40px;
        border-bottom: 40px solid #fff;
      }
      &:after {
        top: -40px;
        border-bottom: 40px solid #fff;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .container-text-wrapper {
      .heading {
        font-size: 1.2rem;
      }
      .text-wrapper {
        margin-top: 10px;
      }
      button {
        white-space: nowrap;
        padding: 8px 20px;
        font-weight: 500;
        min-width: 140px;
      }
    }
    .main-container-curve {
      margin-top: -10px;
    }
  }
`;
