import styled from '@emotion/styled';

export const AreaToolTip = styled.div`
  background-color: #e5ebfd;
  /* width: 10px; */
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.005em;
  }
  p {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 20.6743px;
    /* line-height: 26px; */

    span {
      font-size: 10.24px;
      line-height: 12.88px;
    }
  }
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .multiple-data {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    .multiple-data-item {
      display: flex;
      gap: 0.4rem;
      p {
        font-size: 13px;
        line-height: 13px;
      }
    }
  }
`;
