import React, { useState, useContext } from 'react';
import './OrderPage.css'; 
import orderImage1 from '../../data/product3.jpg';
import orderImage2 from '../../data/product4.jpg';
import orderImage3 from '../../data/product5.jpg';
import orderImage4 from '../../data/product6.jpg';
import orderImage5 from '../../data/product7.jpg';
import { ThemeContext } from '../../contexts/ThemeContext';



const OrderComponent = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: orderImage1,
      itemName: 'Product A',
      customerName: 'John Doe',
      totalAmount: '$100',
      status: 'Pending'
    },
    {
      id: 2,
      image: orderImage2,
      itemName: 'Product B',
      customerName: 'Jane Smith',
      totalAmount: '$150',
      status: 'Completed'
    },
    {
      id: 3,
      image: orderImage3,
      itemName: 'Product C',
      customerName: 'Alice Johnson',
      totalAmount: '$80',
      status: 'Active'
    },
    {
      id: 4,
      image: orderImage4,
      itemName: 'Product D',
      customerName: 'Michael Brown',
      totalAmount: '$120',
      status: 'Rejected'
    },
    {
        id: 5,
        image: orderImage5,
        itemName: 'Product E',
        customerName: 'Emily Davis',
        totalAmount: '$90',
        status: 'Pending'
      },
      
  ]);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="order-section" style={{ background: theme.background, color: theme.color }}>
      <h2>Order List</h2>
      <div className="order-grid">
        <div className="order-grid-header">
          <div></div> 
          <div>Image</div>
          <div>Item Name</div>
          <div>Customer Name</div>
          <div>Total Amount</div>
          <div>Status</div>
        </div>
        {orders.map(order => (
          <div key={order.id} className={`order-grid-row ${order.status.toLowerCase()}`}>
            <input type="checkbox" />
            <div><img src={order.image} alt={order.itemName} className="order-image" /></div>
            <div>{order.itemName}</div>
            <div>{order.customerName}</div>
            <div>{order.totalAmount}</div>
            <div>{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderComponent;
