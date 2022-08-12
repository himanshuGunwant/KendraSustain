import styled from '@emotion/styled';

export const Container = styled.section`
  --normal-font-color: #ffffff;

  color: var(--normal-font-color);
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
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
    padding-bottom: 20px;
  }
  form {
    gap: 1rem;
    display: grid;
    width: clamp(100px, 100%, 455px);
    align-self: flex-end;
    padding-bottom: 1rem;
    .zip-code {
      display: grid;
      grid-template-columns: 50% 1fr;
      gap: 1rem;
      align-items: center;
    }
  }
`;
