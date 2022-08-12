import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
  .left {
    flex: 2;
    .data {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      h1 {
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 37px;
        color: #212121;
        padding-top: 2rem;
        grid-column: span 2;
      }
      & > div {
        padding-bottom: 2rem;
        h2 {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 1.5rem;
          color: #212121;
          padding-bottom: 1rem;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
    padding: 0 2rem;
  }
`;

export const Card = styled.div`
  background: #0e2c38;
  box-shadow: 0.305315px 0.305315px 1.22126px #0e2c38;
  border-radius: 5.75108px;
  color: #ffffff;
  padding: 1rem;
  h2 {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 26.1994px;
    line-height: 33px;
    padding-bottom: 1rem;
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
  p {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: 13.0997px;
    line-height: 19px;
    padding: 0.1rem 0;
  }
  h1 {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: 13.0997px;
    line-height: 19px;
    padding-bottom: 0.5rem;
  }
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 0.7rem;
    i {
      font-size: 23px;
    }
    p {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      font-size: 18.3396px;
      line-height: 23px;
    }
  }
`;
