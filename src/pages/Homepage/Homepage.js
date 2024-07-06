import React, { useContext } from "react";
import "./Homepage.css";
import customer from "../../data/customer.png";
import product from "../../data/product.png";
import sales from "../../data/sales.png";
import refund from "../../data/refund.png";
import earning from "../../data/earning.png";
import Example from "../../Components/Charts/LineChart/LineChart";
import BarChart from "../../Components/Charts/BarChart/BarChart";
import { ThemeContext } from '../../contexts/ThemeContext';



function Homepage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-container" style={{ background: theme.background, color: theme.color }}>
      
      <div className="earnings-container">
        <div className="details-container">
        <div className="details">
         <img src={earning} alt="earning" />
          <h3>Earnings</h3>
          <div>
          <p>$63,448.78</p>
          <button>Download</button>
          </div>
        </div>
        <div className="details">
          <img src={customer} alt="Customer" />
          <div>
            <p>39,354</p>
            <span className="red">-4%</span>
          </div>
          <p>Customers</p>
        </div>
        <div className="details">
          <img src={product} alt="product" />
          <div>
            <p>4,396</p>
            <span className="green">+23%</span>
          </div>
          <p>Products</p>
        </div>
        <div className="details">
          <img src={sales} alt="sales" />
          <div>
            <p>423,39</p>
            <span className="green">+38%</span>
          </div>
          <p>Sales</p>
        </div>
        <div className="details">
          <img src={refund} alt="refund" />
          <div>
            <p>39,354</p>
            <span className="red">-12%</span>
          </div>
          <p>Refunds</p>
        </div>
      </div>
      </div>
      <div className="chart-container">
        <Example />
        <BarChart/>
      </div>
    </div>
  );
}

export default Homepage;
