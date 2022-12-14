import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex-wrap: wrap;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e6e8ec;
  border-radius: 10px;
  padding: 20px;
  .heading {
    font-size: 18;
    font-weight: '700';
  }
  .left {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .list {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    p {
      font-family: 'Manrope';
    }
  }
  .right {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .progress {
      position: absolute !important;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .circle {
      width: 50%;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      background-color: #fbc68b;
    }
  }
`;
