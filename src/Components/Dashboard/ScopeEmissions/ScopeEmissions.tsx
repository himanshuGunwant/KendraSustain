import { Round } from 'Helper';
import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

// TODO : Remove inline css

interface Proptypes {
  scopeOne: number[];
  scopeTwo: number[];
  scopeThree: number[];
}
const ScopeEmissions: React.FC<Proptypes> = ({
  scopeOne = [],
  scopeTwo = [],
  scopeThree = [],
}) => {
  const scope1 = Round(scopeOne.reduce((a, b) => a + b, 0));
  const scope2 = Round(scopeTwo.reduce((a, b) => a + b, 0));
  const scope3 = Round(scopeThree.reduce((a, b) => a + b, 0));
  const total = Round(scope1 + scope2 + scope3);
  const data = [
    {
      color: '#6956E5',
      tag: 'Scope 1',
      data: scope1,
    },
    {
      color: '#FB896B',
      tag: 'Scope 2',
      data: scope2,
    },
    {
      color: '#F8C07F',
      tag: 'Scope 3',
      data: scope3,
    },
  ];
  return (
    <div className={'container'}>
      <div className={'left'}>
        <p className={'heading'}>Scopes Emissions</p>
        <div className={'list'}>
          {data.map((x, i) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              key={i}
            >
              <div
                style={{
                  backgroundColor: x.color,
                  aspectRatio: '1 / 1',
                  width: 10,
                  marginRight: 8,
                  borderRadius: '50%',
                }}
              ></div>
              <p>{x.tag}</p>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: 10,
                  color: x.color,
                  letterSpacing: 2,
                }}
              >
                {x.data} kgCO2/KwH
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={'right'}>
        <ProgressBar
          progress={(scope3 / total) * 100}
          radius={120}
          pointerStrokeWidth={6}
          trackStrokeWidth={0}
          strokeWidth={5}
          pointerRadius={2}
          strokeColor={'#F8C07F'}
          pointerStrokeColor={'#F8C07F'}
          // rotate={360}
        >
          <ProgressBar
            progress={(scope2 / total) * 100}
            radius={90}
            pointerStrokeWidth={6}
            trackStrokeWidth={0}
            strokeWidth={5}
            pointerRadius={2}
            strokeColor={'#FB896B'}
            pointerStrokeColor={'#FB896B'}
            className={'progress'}
            // rotate={270}
          >
            <ProgressBar
              progress={(scope1 / total) * 100}
              radius={60}
              pointerStrokeWidth={6}
              trackStrokeWidth={0}
              strokeWidth={5}
              pointerRadius={2}
              strokeColor={'#6956E5'}
              pointerStrokeColor={'#6956E5'}
              className={'progress'}
              // rotate={-180}
            >
              <div className={'circle progress'}></div>
            </ProgressBar>
          </ProgressBar>
        </ProgressBar>
      </div>
    </div>
  );
};

export default ScopeEmissions;
