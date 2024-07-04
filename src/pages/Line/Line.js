import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    budget: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    budget: 3000,
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
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="90%" height="85%">
        <LineChart
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
          <Line type="monotone" dataKey="expense" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="budget" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
