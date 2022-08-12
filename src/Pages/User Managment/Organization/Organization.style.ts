import styled from '@emotion/styled';

export const Container = styled.div`
  gap: 10px;
  justify-content: space-evenly;
  flex: 1;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  flex-wrap: wrap;

  .card {
    min-width: 200px;
    background-color: white;
    padding: 20px 15px;
    border-radius: 10px;

    font-size: 14px;
    /* flex-grow: 1; */
    flex: 1;
    font-family: 'Montserrat', sans-serif;
    p {
      font-size: 25px;
      letter-spacing: 3px;
    }
  }

  .table {
    box-shadow: none;
  }
`;
