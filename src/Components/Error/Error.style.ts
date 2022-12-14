import styled from '@emotion/styled';

export const Container = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
  a {
    margin: 0 20px;
  }

  .fof {
    display: table-cell;
    vertical-align: middle;
    h1 {
      font-size: 50px;
      display: inline-block;
      padding-right: 12px;
      animation: type 0.5s alternate infinite;
    }
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
