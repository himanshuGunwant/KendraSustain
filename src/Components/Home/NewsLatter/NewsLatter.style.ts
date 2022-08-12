import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 50px;
  .img-wrapper {
    width: 40%;
    margin-right: 30px;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .text-container {
    padding: 50px 60px;
    .p2 {
      font-size: 0.9rem;
      font-weight: 600;
      font-family: 'Roboto', sans-serif;
      color: gray;
    }
    .p1 {
      font-size: 1.8rem;
      font-weight: 500;
      width: 60%;
      line-height: 2rem;
      margin-top: 10px;
    }
  }
  .input-container {
    margin-top: 40px;
    .p3 {
      font-size: 0.9rem;
      font-weight: 800;
      font-family: 'Roboto', sans-serif;
    }
    .p4 {
      font-size: 0.7rem;
      color: gray;
      font-family: 'Roboto', sans-serif;
    }
    input {
      &[type='email'] {
        background: #f5f5f5;
        border: 1px solid #e8e8e8;
        color: #18171d;
        border-radius: 35px;
        border: none;
        padding: 8px 25px;
        margin-top: 30px;
        margin-right: 10px;
        outline-color: #116dc4;
      }
      &[type='submit'] {
        background: #2091f9;
        color: #fff;
        border-radius: 35px;
        border: none;
        padding: 8px 30px;
        font-weight: 700;
        margin-top: 30px;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #116dc4;
        }
      }
    }
  }
  @media screen and (max-width: 740px) {
    flex-direction: column;
    .img-wrapper {
      width: 100%;
      padding: 20px;
    }
    .text-container {
      width: 100%;
    }
  }
`;
