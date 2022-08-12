import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 50px;
  .heading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 50%;
    .p1 {
      font-size: 1.8rem;
      font-weight: 500;
    }
    img {
      margin-top: 50px;
    }
    .p2 {
      margin-top: 45px;
      font-size: 1.1rem;
      text-align: center;
      color: gray;
    }
  }
  .container {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      .card {
        display: flex;
        justify-content: center;
        align-items: center;
        .card-img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          outline: none;
          img {
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .card-text {
          margin-left: 10px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            color: gray;
            font-size: 0.7rem;
            font-weight: 600;
            margin: auto 0;
          }
        }
      }
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
        &:hover {
          background: #116dc4;
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    padding: 80px 0;
    .heading-container {
      width: 70%;
    }
  }
`;
