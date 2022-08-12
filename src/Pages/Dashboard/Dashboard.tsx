import { AreaGraph, BarGraph } from 'Components/Recharts';
import { Context } from 'Context';
import React, { useContext, useEffect } from 'react';
import { AreaToolTip } from './CustomToolTip';
import { Card, Container } from './Dashboard.style';

const data = [
  {
    x: 'Quarter 1',
    y: 10,
  },
  {
    x: 'Quarter 2',
    y: 7,
  },
  {
    x: 'Quarter 3',
    y: 9,
  },
  {
    x: 'Quarter 4',
    y: 8,
  },
];

const barData = [
  {
    y1: 10,
    y2: 15,
    y3: 8,
    y4: 20,
    y5: 18,
    x: 'Quarter 1',
  },
  {
    y1: 10,
    y2: 15,
    y3: 8,
    y4: 20,
    y5: 18,
    x: 'Quarter 2',
  },
  {
    y1: 10,
    y2: 15,
    y3: 8,
    y4: 20,
    y5: 18,
    x: 'Quarter 3',
  },
  {
    y1: 10,
    y2: 15,
    y3: 8,
    y4: 20,
    y5: 18,
    x: 'Quarter 4',
  },
];

const barData2 = [
  {
    'Scope 1': 10,
    'Scope 2': 15,
    'Scope 3': 8,
    x: 'Quarter 1',
  },
  {
    'Scope 1': 10,
    'Scope 2': 15,
    'Scope 3': 8,
    x: 'Quarter 2',
  },
  {
    'Scope 1': 10,
    'Scope 2': 15,
    'Scope 3': 8,
    x: 'Quarter 3',
  },
];

const barColor = [
  '#475959',
  '#B8E6E6',
  '#0E2C38',
  '#0066CC',
  '#5E727A',
  '#99BFBF',
];

const style = {
  charts: {
    height: 200,
  },
};

const QD: { [key: string]: string } = {
  'Quarter 1': 'Jan-Mar',
  'Quarter 2': 'Apr-Jun',
  'Quarter 3': 'Jul-Sep',
  'Quarter 4': 'Oct-Dec',
};

const barToolTip: React.ComponentProps<typeof BarGraph>['tooltipOptions'] = {
  content: ({ label, payload }) => (
    <AreaToolTip>
      <h3>
        {label} : {QD[label] ?? label}
      </h3>
      <div className={'multiple-data'}>
        {payload?.map((item, index) => (
          <div className={'multiple-data-item'} key={index}>
            <div
              className={'circle'}
              style={{
                backgroundColor: item.color,
              }}
            ></div>
            <p>
              {item.name} : {item.value}
              <span>
                kgCO<sub>2</sub>/KwH
              </span>
            </p>
          </div>
        ))}
      </div>
    </AreaToolTip>
  ),
};

const Dashboard = () => {
  const { setHead } = useContext(Context);
  useEffect(() => {
    setHead?.(
      <h1
        style={{
          fontFamily: 'Heebo',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 25,
          color: '#212121',
        }}
      >
        Welcome , User
      </h1>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {/*
         linear-gradient(180deg, rgba(255, 153, 51, 0.6) 42.01%, rgba(255, 153, 51, 0) 100.26%);
        */}

      <div className={'left'}>
        <div className={'head'}>
          <p>
            You are currently viewing Stearn’s Dashboar. With the location: all
            locations and Scopes visible: all scopes.
          </p>
        </div>
        <div className={'data'}>
          <h1>Your Carbon Footprint</h1>
          <div>
            <h2>Total Emission</h2>
            <AreaGraph
              data={data}
              dataKeys={['y']}
              xKey={'x'}
              height={style.charts.height}
              tooltipOptions={{
                content: ({ label, payload }) => {
                  return (
                    <AreaToolTip>
                      <h3>
                        {label} : {QD[label]}
                      </h3>
                      <p>
                        {payload?.[0]?.value}
                        <span>
                          kgCO<sub>2</sub>/KwH
                        </span>
                      </p>
                    </AreaToolTip>
                  );
                },
              }}
            />
          </div>
          <div>
            <h2>Usages overtime</h2>
            <AreaGraph
              data={data}
              dataKeys={['y']}
              xKey={'x'}
              height={style.charts.height}
              tooltipOptions={{
                content: ({ label, payload }) => {
                  return (
                    <AreaToolTip>
                      <h3>
                        {label} : {QD[label]}
                      </h3>
                      <p>
                        {payload?.[0]?.value}
                        <span>
                          kgCO<sub>2</sub>/KwH
                        </span>
                        /Usage
                      </p>
                    </AreaToolTip>
                  );
                },
              }}
            />
          </div>
          <div>
            <h2>Carbon Emission by subsiday</h2>
            <BarGraph
              data={barData}
              dataKeys={['y1', 'y2', 'y3', 'y4', 'y5']}
              xKey={'x'}
              graphOptions={barColor.map((color) => ({
                fill: color,
              }))}
              height={style.charts.height}
              tooltipOptions={barToolTip}
            />
          </div>
          <div>
            <h2>Carbon Emission by scope</h2>
            <BarGraph
              data={barData2}
              dataKeys={['Scope 1', 'Scope 2', 'Scope 3']}
              xKey={'x'}
              graphOptions={barColor.map((color) => ({
                fill: color,
              }))}
              height={style.charts.height}
              tooltipOptions={barToolTip}
            />
          </div>
          <div>
            <h2>Scope Emission by location</h2>
            <BarGraph
              data={barData}
              dataKeys={['y1', 'y2', 'y3', 'y4', 'y5']}
              xKey={'x'}
              graphOptions={barColor.map((color) => ({
                fill: color,
              }))}
              tooltipOptions={barToolTip}
              height={style.charts.height}
            />
          </div>

          <div>
            <h2>Carbon Emission trends</h2>

            <AreaGraph
              data={data}
              dataKeys={['y']}
              xKey={'x'}
              graphOptions={[
                {
                  type: 'monotone',
                  fill: 'url(#areaChart)',
                  stroke: 'rgba(255, 153, 51, 1)',
                },
              ]}
              height={style.charts.height}
              tooltipOptions={{
                content: ({ label, payload }) => {
                  return (
                    <AreaToolTip
                      style={{
                        backgroundColor: '#F7E3C5',
                      }}
                    >
                      <h3>Next month's prediction</h3>
                      <p>
                        {payload?.[0]?.value}
                        <span>
                          kgCO<sub>2</sub>/KwH
                        </span>
                      </p>
                    </AreaToolTip>
                  );
                },
              }}
            >
              <defs>
                <linearGradient id={'areaChart'} x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={'42.01%'} stopColor={'rgba(255, 153, 51, 1)'} />
                  <stop
                    offset={'100.26%'}
                    stopColor={'rgba(255, 153, 51, 0)'}
                  />
                </linearGradient>
              </defs>
            </AreaGraph>
          </div>
        </div>
      </div>
      <div className={'right'}>
        <div className={'head'}>
          <h1>Summary</h1>
        </div>
        <Card>
          <div>
            <h1>Total Carbon Emission</h1>
            <h2>
              51,165
              <span>
                kgCO<sub>2</sub>/KwH
              </span>
            </h2>
          </div>
        </Card>
        <Card>
          <div>
            <h1>Carbon Intensity</h1>
            <h2>
              1,235
              <span>
                kgCO<sub>2</sub>/KwH
              </span>
              /Usage
            </h2>
          </div>
        </Card>
        <Card>
          <div>
            <h1>Scopes with the higest emission</h1>
            <p>31.8 % Processing and sold products | S3</p>
            <p>18.8 % Off-road vehicles | S1 </p>
            <p>12.3 % Franchises | S3 </p>
          </div>
        </Card>
        <Card>
          <div>
            <p>Highest Carbon Emission Location</p>
            <div className={'location'}>
              <i className="bx bx-map"></i>
              <p>Beeton, Nottingham</p>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <p>Highest Carbon Emission Location</p>
            <div className={'location'}>
              <i className="bx bx-map"></i>
              <p>Beeton, Nottingham</p>
              <span> 7.4 </span>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Dashboard;
