"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyChallenges: React.FC = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: '#2ecc71', // Using accent green hex
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyColor: '#171717', // Default body text color
        titleColor: '#171717', // Default title text color
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: { color: '#555' }, // Default text color for ticks
      },
      x: {
        grid: {
          display: false,
        },
        ticks: { color: '#555' }, // Default text color for ticks
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6 dark:bg-primary dark:shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark mb-2 md:mb-0">My Challenges</h2>
        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-light dark:bg-primary text-secondary text-sm sm:text-base font-semibold rounded-md shadow hover:bg-primary dark:hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-opacity-50">
          + START A CHALLENGE
        </button>
      </div>

      {/* Chart */}
      <div className="h-40 sm:h-48 md:h-64 mb-4 sm:mb-6 text-gray-800 dark:text-secondary"> {/* Added text color for chart labels/tooltips if default takes it */}
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Challenge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Challenge Card 1 */}
        <div className="bg-white dark:bg-primary p-3 sm:p-4 border border-gray-200 dark:border-primary-light rounded-lg shadow-sm dark:shadow">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-text-dark text-base sm:text-lg">$10,000 Challenge</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary">Phase 1</p>
            </div>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Active
            </span>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-text-dark">Progress</span>
              <span className="text-gray-900 dark:text-text-dark font-medium">65%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-primary-dark rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div> {/* Progress bar color */} 
            </div>
          </div>
        </div>

        {/* Challenge Card 2 */}
        <div className="bg-white dark:bg-primary p-3 sm:p-4 border border-gray-200 dark:border-primary-light rounded-lg shadow-sm dark:shadow">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-text-dark text-base sm:text-lg">$25,000 Challenge</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary">Phase 2</p>
            </div>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
              Pending
            </span>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-text-dark">Progress</span>
              <span className="text-gray-900 dark:text-text-dark font-medium">30%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-primary-dark rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '30%' }}></div> {/* Progress bar color */} 
            </div>
          </div>
        </div>

        {/* Challenge Card 3 */}
        <div className="bg-white dark:bg-primary p-3 sm:p-4 border border-gray-200 dark:border-primary-light rounded-lg shadow-sm dark:shadow">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-text-dark text-base sm:text-lg">$50,000 Challenge</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary">Phase 3</p>
            </div>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              Upcoming
            </span>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-text-dark">Progress</span>
              <span className="text-gray-900 dark:text-text-dark font-medium">0%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-primary-dark rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div> {/* Progress bar color */} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChallenges;