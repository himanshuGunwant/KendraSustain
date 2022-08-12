import styled from '@emotion/styled';
export const Main = styled.div``;
export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  /* height: 100vh; */
  background-color: #001555;
  color: white;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-image: url('/assets/svg/signin/login-shape.svg');
  background-size: contain, 100%;
  background-position-x: left;
  background-repeat: no-repeat;
  background-position-y: center;
`;
export const Left = styled.div`
  height: calc(100vh - 50px);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;

  & > img {
    width: 100%;
    max-width: 550px;

    padding: 20px;
  }
`;

export const Logo = styled.div`
  padding: 20px;
  h1 {
    font-size: 2.4rem;
  }
  img {
    width: 100%;
    margin: 10px 0;
    max-width: 320px;
  }
  p {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
