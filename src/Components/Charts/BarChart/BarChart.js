import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    budget: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    bufget: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    month: 'Mar',
    budget: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    month: 'Apr',
    budget: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    month: 'May',
    budget: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    month: 'Jun',
    budget: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    month: 'July',
    budget: 3490,
    expense: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" stackId="a" fill="#8884d8" />
          <Bar dataKey="budget" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
