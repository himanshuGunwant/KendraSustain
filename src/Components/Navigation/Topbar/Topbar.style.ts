import styled from '@emotion/styled';

export const Container = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 5;
  margin-left: 0;
  transition: all 0.5s ease;
  background-color: #001555;

  a {
    text-decoration: none;
  }
  .topbarWrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .topLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    min-width: 244px;
    i {
      font-size: 1.5rem;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .topRight {
    display: flex;
    align-items: center;
    i {
      color: #ffffff;
      cursor: pointer;
      font-size: 1.3rem;
      margin-right: 18px;
    }
    .topbarIconContainer {
      font-size: 1.3rem;
      margin-right: 18px;

      a {
        i {
          margin-right: 5px;
          color: #ffffff;
        }
      }
    }
  }

  .topbarIconContainer2 {
    position: relative;
    cursor: pointer;
    color: var(--sidebar-primary);
    display: flex;
    align-items: center;
  }

  .topbarIconContainer2 {
    .flowBtn2 {
      position: relative;
      color: var(--sidebar-primary);
      font-weight: 400;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      text-align: center;
      &::after {
        position: absolute;
        content: '';
        width: 50%;
        height: 3px;
        top: 100%;
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: left;
        background: var(--sidebar-primary);
      }
      &:hover::after {
        transform: scaleX(1);
      }
    }
  }

  .topIconText2 {
    padding-right: 30px;
    color: var(--sidebar-primary);
    color: #ffffff;
    font-weight: 500;
  }

  .topIconText {
    margin-left: 5px;
    color: #fff;
    font-weight: 600;
  }

  .topIconBadge {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
`;
