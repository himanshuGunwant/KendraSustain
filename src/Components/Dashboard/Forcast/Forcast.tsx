import React from 'react';
import { Container } from './Forcast.style';

const data = [
  {
    day: 'July 15',
    low: 20,
    hight: 29 + 1,
  },
  {
    day: 'July 16',
    low: 16,
    hight: 29 - 2,
  },
  {
    day: 'July 17',
    low: 21,
    hight: 29 + 3,
  },
  {
    day: 'July 18',
    low: 18,
    hight: 29 - 1,
  },
  {
    day: 'July 19',
    low: 22,
    hight: 29,
  },
];

const Forcast: React.FC = () => {
  return (
    <Container>
      <div className={'heading'}>
        <h3>One Week Forcast</h3>
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div className={'data'}>
        {data.map((x, i) => (
          <div key={i}>
            <p>{x.day} 2022 </p>
            <div>
              <p>
                {x.low}
                {/*&deg;*/}
              </p>
              <div className={'progress'}></div>
              <p>
                {x.hight}
                {/* &deg; */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Forcast;
