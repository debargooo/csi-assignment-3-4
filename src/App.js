import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import Kanban from './Components/Kanban/Kanban';
import Employees from './pages/Employees/Employees';
import OrderPage from './pages/OrderPage/OrderPage';
import MyCalendar from './Components/MyCalendar/MyCalendar';
import Line from './pages/Line/Line';
import Area from './Components/Charts/AreaChart/AreaChart';
import Bar from './pages/Bar/Bar';
import Pie from './Components/Charts/PieChart/PieChart';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <Homepage />
      </AppLayout>
    ),
  },
  {
    path: '/Employees',
    element: (
      <AppLayout>
        <Employees />
      </AppLayout>
    ),
  },
  {
    path: '/Orders',
    element: (
      <AppLayout>
        <OrderPage />
      </AppLayout>
    ),
  },
  {
    path: '/Calender',
    element: (
      <AppLayout>
        <MyCalendar />
      </AppLayout>
    ),
  },
  {
    path: '/Kanban',
    element: (
      <AppLayout>
        <Kanban />
      </AppLayout>
    ),
  },
  {
    path: '/Line',
    element: (
      <AppLayout>
        <Line />
      </AppLayout>
    ),
  },
  {
    path: '/Area',
    element: (
      <AppLayout>
        <Area />
      </AppLayout>
    ),
  },
  {
    path: '/Bar',
    element: (
      <AppLayout>
        <Bar />
      </AppLayout>
    ),
  },
  {
    path: '/Pie',
    element: (
      <AppLayout>
        <Pie />
      </AppLayout>
    ),
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

function AppLayout({ children }) {
  return (
    <div className='app-container'>
      <div className='sidebar-component'>
        <Sidebar />
      </div>
      <div className='navbar-component'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default App;
