import React from 'react';
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

const Example = () => {
  return (
    <div style={{ width: '100%', height: 500 }}> 
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey="expense" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
