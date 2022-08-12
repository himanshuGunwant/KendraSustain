import styled from '@emotion/styled';

export const Container = styled.nav`
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: #fff;
  padding: 0rem 3.4rem;
  /* position: absolute; */
  top: 0;
  height: min-content;
  .brand {
    img {
      width: 14rem;
    }
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2rem;
    li {
      a {
        &.nav-text {
          padding: 0.8rem 1.2rem;
          border-radius: 0.2rem;
          transition: background-color 0.3s ease-in-out;
          font-size: 0.8rem;
          border: 1px solid transparent;
          text-decoration: none;
          color: #fff;
          &:hover {
            background-color: #2091f9;
          }
        }
        &.nav-icon {
          i {
            width: 2rem;
            height: 2rem;
            font-size: 1.8rem;
            text-align: center;
            color: #fff;
            transition: 0.3s ease-in-out;
            transition-property: font-size, color;
          }
          &:hover {
            i {
              font-size: 1.3rem;
              color: #2091f9;
            }
          }
        }
        &.nav-item {
          display: flex;
          align-items: center;
          padding: 0.4rem 0.8rem;
          background-color: #2091f9;
          border-radius: 1rem;
          color: #fff;
          text-decoration: none;
          gap: 0.5rem;
          transition: 0.3s ease-in-out;
          transition-property: background-color;
          &:hover {
            background-color: #348bdc;
          }
        }
      }
    }
  }
`;
