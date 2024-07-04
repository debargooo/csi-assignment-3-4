import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    month: 'June',
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
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs';

  render() {
    return (
      <ResponsiveContainer width="90%" height="85%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="budget" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="expense" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
