import styled from '@emotion/styled';

export const Container = styled.section`
  color: #3f3f5a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  blockquote {
    /* font-family: 'Special Elite', cursive; */
    font-weight: 100;
    font-size: 1.5rem;
    max-width: 600px;
    line-height: 1.4;
    position: relative;
    margin: 0;
    padding: 0.5rem;
    &:before,
    &:after {
      position: absolute;
      color: #bebcb4;
      font-size: 8rem;
      width: 4rem;
      height: 4rem;
    }
    blockquote {
      &:before {
        content: '“';
        left: -5rem;
        top: -2rem;
      }
      &:after {
        content: '”';
        right: -5rem;
        bottom: 1rem;
      }
      cite {
        /* font-family: 'Special Elite', cursive; */
        font-weight: bold;
        line-height: 3;
        text-align: left;
      }
    }
  }
  @media (max-width: 755px) {
    width: 60%;
    blockquote {
      font-size: 1.1rem;
      text-align: center;
      &:before,
      &:after {
        font-size: 6rem;
        width: 2rem;
        height: 2rem;
      }
      &::before {
        left: -2rem;
      }
      &::after {
        right: -2rem;
      }
    }
  }
`;
