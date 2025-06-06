"use client";

import React, { useState } from 'react';
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
  ChartData,
  ChartOptions,
} from 'chart.js';

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
  // Placeholder data for the chart - based on the image
  const chartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Balance', // Approximating the label from the image
        data: [10000, 10500, 11000, 10800, 11500, 12000, 11800, 12500, 13000, 14000, 15000, 16500], // Placeholder data matching the trend
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },{
        label: 'Equity', // Approximating the label
        data: [10200, 10700, 11200, 11000, 11700, 12200, 12000, 12700, 13200, 14200, 15200, 16700],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.4,
         pointRadius: 0,
      }
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
         labels: {
          usePointStyle: true,
         },
      },
      title: {
        display: false,
        text: 'Growth Chart',
      },
      tooltip: {
         mode: 'index' as const,
         intersect: false,
      }
    },
     scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: '$'
        },
        ticks: {
           callback: function(tickValue: string | number) {
             return '$' + tickValue.toLocaleString();
           }
        }
      },
      x: {
         grid: {
           display: false,
         }
      }
    }
  };

  const challengeTabs = [
    { id: 'funded', label: 'Funded #232' },
    { id: 'evaluation234', label: 'Evaluation #234' },
    { id: 'evaluation235', label: 'Evaluation #235' },
    { id: 'competition26', label: 'Competition #26' },
  ];

  const [activeTab, setActiveTab] = useState(challengeTabs[0].id);

  return (
    <div className="p-6 bg-white rounded-md shadow-md mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">My Challenges</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Challenge Tabs */}
      <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
        {challengeTabs.map((tab) => (
          <span
            key={tab.id}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full cursor-pointer ${activeTab === tab.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Growth Chart */}
      <div className="w-full h-64 mb-6">
         <Line data={chartData} options={chartOptions} />
      </div>

      {/* Challenge Details (Current Profit, Daily Drawdown, etc.) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm">
        <div>
          <p className="font-semibold">Challenge Level:</p>
          <p className="text-green-600 font-medium">Funded</p>
        </div>
        <div>
          <p className="font-semibold">Current Profit:</p>
          <p className="font-medium">$11,687.53</p>
        </div>
        <div>
          <p className="font-semibold">Daily Drawdown:</p>
          <p className="font-medium">$0.00 <span className="text-gray-500 line-through">($1,000.00)</span></p>
        </div>
        <div>
          <p className="font-semibold">Maximum Drawdown:</p>
          <p className="font-medium">$0.00 <span className="text-gray-500 line-through">($10,000.00)</span></p>
        </div>
      </div>

    </div>
  );
};

export default MyChallenges;