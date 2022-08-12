import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .feature-container {
    color: #3f3f5a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    blockquote {
      font-weight: 100;
      font-size: 1.3rem;
      max-width: 600px;
      line-height: 1.4;
      position: relative;
      margin: 0;
      padding: 0.5rem;

      &::after,
      &::before {
        position: absolute;
        color: #bebcb4;
        font-size: 8rem;
        width: 4rem;
        height: 4rem;
      }

      &::before {
        content: '“';
        left: -5rem;
        top: -2rem;
      }

      &::after {
        content: '”';
        right: -5rem;
        bottom: 1rem;
      }
    }
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    width: 25%;
    margin: 0 25px;
    img {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }
    .heading {
      font-size: 1rem;
      font-weight: 800;
    }
    .subHeading {
      margin-top: 10px;
      font-size: 0.8rem;
      color: gray;
    }
  }

  @media (max-width: 755px) {
    .feature-container {
      width: 60%;
    }

    .card-wrapper {
      width: auto;
      margin: 20px 25px;
    }
  }

  @media (max-width: 575px) {
    margin-top: 20px;

    .feature-container {
      blockquote {
        font-size: 1.1rem;
        text-align: center;
        &::before,
        &::after {
          font-size: 6rem;
          width: 2rem;
          height: 2rem;
        }
        &::before {
          left: -2rem;
        }
        &::after {
          right: -2rem;
        }
      }
    }
  }
`;
