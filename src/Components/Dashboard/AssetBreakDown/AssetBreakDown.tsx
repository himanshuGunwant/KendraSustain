import React from 'react';
import { Container } from './AssetbreackDown.style';
interface Proptypes {
  data: {
    name: string;
    value: number;
  }[];
}
const AssetBreackDown: React.FC<Proptypes> = ({ data }) => {
  return (
    <Container>
      <div className={'heading'}>
        <h3>Asset Breakdown</h3>
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>

      <div className={'data'}>
        {data.map((x, i) => (
          <div key={i}>
            {i === 0 ? null : <hr />}

            <div>
              <p className={'name'}>{x.name}</p>
              <p className={'date'}>Date here</p>
            </div>
            <p className={'value'}>{x.value} kgCo2 / KwH</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AssetBreackDown;
