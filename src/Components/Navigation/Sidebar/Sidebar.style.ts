import styled from '@emotion/styled';

export const Container = styled.nav`
  --background-color: #0e2c38;
  border-radius: 0 24px 0 0;
  padding-top: 5px;
  width: 270px;
  z-index: 10;
  transition: all 0.5s ease;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .top {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      padding: 1rem 3rem;
      height: 50px;
    }
    i {
      cursor: pointer;
      font-size: 20px;
    }
    .navLinks {
      .selected {
        background-color: #e6ecff;
        .linkName,
        i {
          color: var(--background-color);
        }
      }
      li {
        position: relative;
        list-style: none;
        transition: all 0.4s ease;
        margin: 5px 10px;
        border-radius: 8px;
        font-size: 0.7rem;
        &:hover {
          background-color: #e6ecff;
          a {
            color: var(--background-color);
          }
          i {
            color: var(--background-color);
          }
          .linkName {
            color: var(--background-color);
          }
        }
        .iconLink {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        i {
          min-width: 48px;
          text-align: center;
          line-height: 40px;
          font-size: 1rem;
          cursor: pointer;
          color: #ffffff;
          transition: all 0.3s ease;
        }
        a {
          position: relative;
          display: flex;
          align-items: center;
          text-decoration: none;
          .linkName {
            font-size: 0.8rem;
            font-weight: 500;
            color: #ffffff;
            transition: all 0.4s ease;
          }
        }
        .subMenu {
          display: none;
          background: transparent;
          margin-top: -10px;
          .linkName {
            display: none;
          }
          .listHead {
            display: none;
          }
          .listWrapper {
            padding: 6px 6px 14px 20px;
            background-color: #e6ecff;
            color: var(--background-color);
            border-radius: 8px;
          }
          a {
            position: relative;
            color: var(--white);
            font-size: 0.6rem;
            font-weight: 500;
            padding: 5px 10px;
            white-space: nowrap;
            opacity: 0.8;
            transition: all 0.3s ease;
            &:hover {
              opacity: 1;
            }
          }
        }
        &.showMenu {
          background-color: #e6ecff;
          a {
            color: var(--background-color);
          }
          .linkName {
            color: var(--background-color);
          }
          i {
            color: var(--background-color);
          }

          i.arrow {
            transform: rotate(-180deg);
          }
          .subMenu {
            display: block;
          }
        }
        &:hover {
          .subMenu {
            &.blank {
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
  .buttom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    sup {
      color: #fff;
    }
    .logo {
      bottom: 20px;
      display: none;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .fullLogo {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 75%;
    }
    .user {
      padding: 1rem 0;
      color: #fff;
      display: flex;
      gap: 1rem;
      width: 100%;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
    }
  }
  &.close {
    width: 70px;
    .brand {
      justify-content: center;
      padding: 1rem 0;
    }

    .navLinks {
      overflow: visible;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        .iconLink {
          display: block;
        }
        i {
          &.arrow {
            display: none;
          }
        }

        a {
          .linkName {
            opacity: 0;
            pointer-events: none;
          }
        }
        .subMenu {
          position: absolute;
          left: 100%;
          top: -10px;
          margin-top: 0;
          padding-left: 12px;
          opacity: 0;
          display: block;
          pointer-events: none;
          transition: 0s;
          .linkName {
            font-size: 0.9rem;
            opacity: 1;
            display: block;
          }
          .listWrapper {
            padding: 1px;
            background-color: red;
            background-color: var(--background-color);
            color: #ffffff;
          }
          li {
            background-color: transparent;
            &.listHead {
              display: block;
              a {
                font-size: 0.7rem;
                text-align: center;
                font-weight: 600;
              }
              &:hover {
                background: none;
              }
            }
          }
          .blank {
            > .listWrapper {
              padding: 0;
              margin-top: 5px;
              > li {
                margin: 0;
              }
            }
          }
        }
        &:hover .subMenu {
          overflow: hidden;
          top: 0;
          opacity: 1;
          pointer-events: auto;
          transition: all 0.4s ease;
        }
      }
    }
    .buttom {
      .user {
        display: none;
      }
      .fullLogo {
        display: none;
      }
      .logo {
        display: block;
      }
    }
  }

  @media (max-width: 420px) {
    .close .navLinks li .subMenu {
      display: none;
    }
  }
`;
