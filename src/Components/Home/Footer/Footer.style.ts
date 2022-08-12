import styled from '@emotion/styled';

export const Container = styled.footer`
  .links {
    display: flex;
    color: #fff;
    width: 50%;
    .box {
      flex: 1;
      /* margin-right: 1rem; */
      text-align: left;
      p {
        font-weight: 800;
        margin-bottom: 0.7rem;
      }
      ul {
        list-style: none;
        li {
          margin-bottom: 0.5rem;
          a {
            transition: all 0.3s ease;
            color: #fff;
            text-decoration: none;
            font-size: 0.7rem;
            &:hover {
              color: #2091f9;
            }
          }
        }
      }
    }
  }
  .contact-container {
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: left;
    p {
      font-size: 0.6rem;
      margin-bottom: 10px;
      i {
        font-size: 1rem;
        margin-right: 10px;
      }
    }
    .social-media-icons {
      list-style: none;
      margin-top: 10px;
      display: flex;
      li {
        margin-right: 20px;
        transition: all 0.3s ease-in-out;
        i {
          font-size: 1.4em;
          color: #fff;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          i {
            color: #2091f9;
          }
        }
      }
    }
  }
  .copyright {
    a {
      color: #2091f9;
      font-weight: bold;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    .links {
      flex-direction: column;
      align-items: center;
      width: 100%;
      .box {
        text-align: center;
        margin-top: 30px;

        p {
          font-size: 1.4rem;
        }
        ul {
          li {
            a {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
    .contact-container {
      margin-top: 30px;
      p {
        font-size: 0.8rem;
        i {
          font-size: 1.5rem;
          margin-right: 15px;
        }
      }
      .social-media-icons {
        margin-top: 15px;
        justify-content: center;
      }
    }
  }
`;
