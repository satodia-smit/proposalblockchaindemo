import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-form">
        <button className="dashboard-button">Admin</button>
        <button className="dashboard-button">User</button>
      </div>
    </div>
  );
};

export default Dashboard;
