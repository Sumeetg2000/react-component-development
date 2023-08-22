import "./CustomerGrowth.scss";
import growthChart from "../../assets/images/customerGrowth.png";

import React from "react";

const CustomerGrowth = () => {
  return (
    <div className="customerGrowth">
      <h5>Customer Growth</h5>
      <img src={growthChart} className="growthChart" alt="bar chart for three months" />
    </div>
  );
};

export default CustomerGrowth;
