import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  h3 {
    font-weight: bold;
    font-family: 'Manrope';
    font-size: 22px;
  }
  p {
    font-style: 14px;
    font-family: 'Manrope';
    span {
      font-size: 12px;
      color: #787486;
    }
  }
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #a151a8;
  }
  .progress {
    position: relative;
  }
`;
