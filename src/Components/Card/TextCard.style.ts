import styled from '@emotion/styled';

export const Container = styled.div`
  gap: 10px;
  display: grid;
  padding-bottom: 10px;
  .card {
    min-width: 200px;
    padding: 20px 15px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    p {
      font-size: 14px;
      font-weight: normal;
    }
  }
`;
