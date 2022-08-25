import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: red;
  padding: 0.6rem;
  border-radius: 6px;
  background: #f0efff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  i {
    color: #283ac8;
    padding-right: 0.5rem;
    font-size: 1.1rem;
  }
  input {
    color: #283ac8;
    width: 100%;
    flex: 1;
    border: none;
    background: transparent;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    &:focus {
      outline: none;
    }
  }
`;
