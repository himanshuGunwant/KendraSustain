import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;

  background: #ffffff;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 156.19%;
      margin-left: 5px;
      color: #959595;
    }
  }
  button {
    border: 2px solid #dadde6;
    border-radius: 20px;
    height: 37px;
    width: 171px;
    background: transparent;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.19%;
    color: #0046fe;
  }
`;
