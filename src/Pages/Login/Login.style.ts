import styled from '@emotion/styled';

export const Container = styled.form`
  width: 100%;
  max-width: 522.58px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins';

  .name {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    align-items: ce;
    label {
      background-color: #f0efff;
      margin-top: 20px;
      padding: 15px 0;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 45px;
      flex-grow: 1;
      i {
        cursor: pointer;
      }
      input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        margin-left: 10px;
        font-weight: bold;
        &::placeholder {
          font-weight: bold;
        }
      }
    }
  }
  & > label {
    background-color: #f0efff;
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 45px;

    i {
      cursor: pointer;
      color: #0e1e8d;
    }
    input {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      margin-left: 10px;
      font-weight: bold;
      &::placeholder {
        font-weight: bold;
      }
    }
  }
  div {
    &.role {
      margin-top: 20px;
      & > div {
        & > div {
          font-weight: bold;
          background-color: #f0efff;
          border: none;
          border-radius: 9px;
          font-family: 'Poppins';
          font-size: 13px;
          fieldset {
            border: none;
          }
        }
      }
    }
  }
  .forgot {
    width: 100%;
    text-align: right;
    a {
      color: #909090;
    }
  }
  button {
    width: 100%;
    border: none;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    height: 59px;
    margin-top: 20px;
    background: #0e1e8d;
    border-radius: 9px;
    box-shadow: 0px 4px 40px rgba(77, 71, 195, 0.3);
  }

  p {
    color: #909090;
    margin: 20px 0;
    text-align: center;
    a {
      color: #ffffff;
    }
  }
  .icons {
    text-align: center;
    img {
      width: 22px;
      margin: 0 10px;
    }
  }
`;
