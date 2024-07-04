import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    month: 'Jan',
    profit: 4000,
    loss: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    profit: -3000,
    loss: 1398,
    amt: 2210,
  },
  {
    month: 'Mar',
    profit: 2000,
    loss: -2000,
    amt: 2290,
  },
  {
    month: 'Apr',
    profit: 2780,
    loss: 3908,
    amt: 2000,
  },
  {
    month: 'May',
    profit: -1890,
    loss: 4800,
    amt: 2181,
  },
  {
    month: 'June',
    profit: 2390,
    loss: -3800,
    amt: 2500,
  },
  {
    month: 'July',
    profit: 3490,
    loss: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-positive-negative-hnhn3v';

  render() {
    return (
      <ResponsiveContainer width="90%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="loss" fill="#8884d8" />
          <Bar dataKey="profit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
