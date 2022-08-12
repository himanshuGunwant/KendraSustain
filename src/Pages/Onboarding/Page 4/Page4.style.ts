import styled from '@emotion/styled';

export const Container = styled.section`
  --normal-font-color: #ffffff;

  color: var(--normal-font-color);
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  .head {
    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 2.2rem;
      line-height: 60px;
    }
    & > p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 42px;
      padding: 20px 0;
    }
    span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
    }
  }
  form {
    align-self: flex-end;
    padding: 3rem 0;
    width: clamp(100px, 100%, 455px);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .contact-number {
      gap: 1rem;
      display: grid;
      align-items: center;
      grid-template-columns: 150px 1fr;
    }
    .check-box {
      display: flex;
      align-items: center;
      input {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 30px;
      }

      & > span {
        margin-left: 10%;
      }
    }
  }
`;
