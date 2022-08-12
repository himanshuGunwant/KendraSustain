import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 30px;
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
    .p2 {
      margin-top: 7px;
      font-size: 0.8rem;
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
    .brand-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      img {
        object-fit: contain;
        margin: 0;
        padding: 10px;
        /* border: 1px solid gray; */
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
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #116dc4;
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    padding: 0;
    .heading-container {
      width: 70%;
      .p2 {
        font-size: 0.9rem;
      }
    }
    .container {
      width: 100%;
      padding: 10px;
      .brand-container {
        img {
          width: 70px;
        }
      }
    }
  }
`;
