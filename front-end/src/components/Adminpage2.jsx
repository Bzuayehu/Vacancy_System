// import React from 'react';
import { Route,Routes } from 'react-router-dom'; 
import { Bar } from 'react-chartjs-2';

// Import Sidebar, User, Jobs, and Dashboard components
import Sidebar from './SideBar';
import User from './User';
import Jobs from './Jobs2';
// import Dashboard from './Dashboard';

const AdminPage2 = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: '# of Users',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
      <div className="flex">
        <div className="w-full p-4">
              <h1 className="text-4xl font-bold">Admin Dashboard</h1>
              <div className="bg-white p-4 mt-4 shadow-md rounded">
                <Bar data={chartData} options={chartOptions} />
              </div>
        </div>
      </div>
  );
};

export default AdminPage2;