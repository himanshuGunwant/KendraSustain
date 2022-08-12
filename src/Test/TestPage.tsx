import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    x: 'Q1',
    y: 10,
  },
  {
    x: 'Q2',
    y: 7,
  },
  {
    x: 'Q3',
    y: 9,
  },
  {
    x: 'Q4',
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
    x: 'Q1',
  },
  {
    y1: 10,
    y2: 15,
    y3: 8,
    y4: 20,
    y5: 18,
    x: 'Q2',
  },
];

const color = 'rgba(0, 102, 204, 0.53);';
const TestPage = () => {
  return (
    <>
      <ResponsiveContainer width={366} height={190}>
        <AreaChart data={data}>
          <Area dataKey={'y'} fill={'#0066CC'} stroke={color} />
          <YAxis dataKey={'y'} />
          <XAxis dataKey={'x'} />
          <CartesianGrid strokeOpacity={0.4} />
        </AreaChart>
      </ResponsiveContainer>

      <ResponsiveContainer width={366} height={190}>
        <BarChart data={barData}>
          <Bar dataKey={'y1'} fill={'#475959'} stroke={color} />
          <Bar dataKey={'y2'} fill={'#B8E6E6'} stroke={color} />
          <Bar dataKey={'y3'} fill={'#0E2C38'} stroke={color} />
          <Bar dataKey={'y4'} fill={'#0066CC'} stroke={color} />
          <Bar dataKey={'y5'} fill={'#5E727A'} stroke={color} />
          <Bar dataKey={'y5'} fill={'#99BFBF'} stroke={color} />
          <XAxis dataKey={'x'} />
          <YAxis />
          <CartesianGrid strokeOpacity={1} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default TestPage;
