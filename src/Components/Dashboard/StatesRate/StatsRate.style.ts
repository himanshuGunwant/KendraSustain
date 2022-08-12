import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 16px;
  align-items: center;
  height: 100%;
  .left {
    h2 {
      font-weight: 600;
      font-family: 'Manrope';
      font-size: 18px;
      margin-bottom: 10px;
    }
    p.persantage {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #35dc94;
    }
    p.today {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 14px;
      /* identical to box height */

      text-transform: capitalize;

      /* Blue Dark */

      color: #21234a;
    }
    h3 {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;

      /* Blue Dark */

      color: #21234a;
    }
  }
  .right {
    img {
      height: 74px;
    }
  }
`;
