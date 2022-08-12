import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  padding-top: 30px;
  position: relative;
  transition: all 0.5s ease;
  min-height: 100vh;
  /* padding-top: 80px; */
  text-decoration: none;

  a {
    text-decoration: none;
  }
  .Adminlectxt {
    font-family: Source Sans Pro;
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    text-decoration: unset;
  }
  .icon {
    color: #3d5061;
    font-size: 70px;
    margin-bottom: 20px;
  }

  .Adminslec {
    padding-left: 20px;
    background: #ffffff;
    /* margin: 15px 10px; */
    height: 215px;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
    hr {
      background-color: #3d5061;
    }
    &:hover {
      background-color: #3d5061;
      transition: 0.5s ease-out;
      .Adminlectxt {
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
        transition: 0.5s ease-out;
      }
      hr {
        color: #ffffff;
        background-color: #ffffff;
        height: 2px;
        transition: 0.5s ease-out;
      }
      .Adminlectxt1 {
        color: #ffffff;
        transition: 0.5s ease-out;
      }
      .icon {
        color: #ffffff;
        font-size: 80px;
        transition: 0.5s ease-out;
      }
    }
  }
`;
