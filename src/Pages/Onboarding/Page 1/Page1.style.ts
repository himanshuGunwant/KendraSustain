import styled from '@emotion/styled';

export const Container = styled.section`
  --normal-font-color: #ffffff;

  color: var(--normal-font-color);
  display: flex;
  flex-direction: column;
  padding-left: 3.5rem;
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
  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 36px;
  }
  form {
    width: clamp(100px, 100%, 455px);
    display: flex;
    padding: 1.4rem 0;
    flex-direction: column;
    gap: 1rem;
    align-self: flex-end;
    .contact-number {
      gap: 1rem;
      display: grid;
      align-items: center;
      grid-template-columns: 150px 1fr;
    }
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #9098bb;
  }
  img {
    width: 20px;
  }
`;
