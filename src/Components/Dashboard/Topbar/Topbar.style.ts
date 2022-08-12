import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .left {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    i {
      font-size: 25px;
      margin-right: 20px;
    }
    .date {
      margin-right: 10px;
      img {
        width: 20px;
        margin-right: 10px;
      }
      p {
        margin-right: 5px;
      }
    }

    .photo {
      width: 40px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
    }
  }
  /* .right {
  display: block;
  strong {
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    font-size: 26px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    color: #828282;
    font-family: 'Poppins';
  }
} */
`;
