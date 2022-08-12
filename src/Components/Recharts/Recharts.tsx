import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import { Round } from 'Helper';

function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
}
const Recharts = () => {
  const data: {
    date: string;
    data: number;
    data2: number;
  }[] = [];
  for (let i = 6; i > 0; i--)
    data.push({
      date: subDays(new Date(), i).toISOString().substring(0, 10),
      data: Round(10000000 * (1 + Math.random())),
      data2: Round(10000000 * (1 + Math.random())),
    });

  return (
    <ResponsiveContainer width={'100%'} height={100}>
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id={'areaChart'}
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            rotate={'90deg'}
          >
            <stop offset={'-0.01%'} stopColor={'rgba(251, 188, 5)'} />
            <stop offset={'12.5%'} stopColor={'rgba(251, 188, 5)'} />
            <stop offset={'46.78%'} stopColor={' rgba(0, 186, 255)'} />
            <stop offset={'63.11%'} stopColor={'rgba(53, 220, 148)'} />
            <stop offset={'104.46%'} stopColor={'rgba(53, 220, 148)'} />
          </linearGradient>
        </defs>

        <Area
          dataKey={'data'}
          stroke={'url(#areaChart)'}
          fill={'url(#areaChart)'}
          type={'monotone'}
          strokeWidth={3}
          fillOpacity={0.3}
        />
        <Area
          dataKey={'data2'}
          stroke={'url(#areaChart)'}
          fill={'url(#areaChart)'}
          type={'monotone'}
          strokeWidth={3}
          fillOpacity={0.3}
        />

        <XAxis
          dataKey={'date'}
          tickLine={false}
          tickFormatter={(str) => format(new Date(str), 'd MMM')}
          // markerEnd={'ko'}
          padding={{ left: 30 }}
        />

        <YAxis
          dataKey={'data'}
          axisLine={false}
          tickLine={false}
          tickCount={10}
          tickFormatter={(number) => '$' + nFormatter(number, 3)}
        />

        <Tooltip />

        <CartesianGrid opacity={0.4} vertical={false} strokeWidth={1.4} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
