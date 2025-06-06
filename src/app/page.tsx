"use client";

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MyChallenges from '../components/MyChallenges';
import TopPayouts from '../components/TopPayouts';
import ActivityFeed from '../components/ActivityFeed';
import Header from '../components/Header';
import Achievements from '../components/Achievements';
import WhatsNew from '../components/WhatsNew';
import BecomePrimeMember from '../components/BecomePrimeMember';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const aiInsightsChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'AI Confidence',
        data: [70, 75, 80, 85, 88, 82, 90],
        fill: false,
        borderColor: '#3498db',
        tension: 0.1,
      },
    ],
  };

  const aiInsightsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'AI Confidence Over Time',
        color: '#555'
      },
      tooltip: {
        bodyColor: '#171717',
        titleColor: '#171717',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: { color: '#555' },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: { color: '#555' },
      },
    },
  };

  const accountStatusChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Equity',
        data: [100000, 101500, 100500, 102000, 103500],
        fill: false,
        borderColor: '#2ecc71',
        tension: 0.1,
      },
    ],
  };

  const accountStatusChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Account Equity Curve',
        color: '#555'
      },
      tooltip: {
        bodyColor: '#171717',
        titleColor: '#171717',
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false,
        },
        ticks: { color: '#555' },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: { color: '#555' },
      },
    },
  };

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200 ease-in-out
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        {/* Header */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Dashboard Content */}
        <div className="p-2 sm:p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6 text-text-light dark:text-text-dark">
          {/* AI Insights / Summary (Prominent) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-8 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-blue-200 dark:border-primary-light flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-blue-800 dark:text-secondary-light mb-3 sm:mb-4">AI Insights & Summary</h2>
            {/* Placeholder for AI insights content - more detailed */}
            <div className="text-gray-700 dark:text-text-dark flex-grow grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* AI Analysis Summary */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base"><span className="font-semibold">Recent Analysis:</span> AI detected a potential breakout in BTC/USD based on recent price action and volume.</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Recommendation:</span> Consider setting a long position above $45,000 with a target of $48,000.</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Confidence Score:</span> 85%</p>
              </div>
              {/* Placeholder for AI Chart or Key Signals */}
              <div className="bg-gray-100 dark:bg-primary-dark rounded-md flex items-center justify-center text-gray-500 dark:text-text-secondary italic p-2 sm:p-4">
                <div className="w-full h-[200px] sm:h-[250px]">
                  <Line data={aiInsightsChartData} options={aiInsightsChartOptions} />
                </div>
              </div>
            </div>
            {/* Optional: Add a small AI indicator or icon */}
            <div className="mt-3 sm:mt-4 text-right text-xs sm:text-sm text-gray-500 dark:text-text-secondary">
              <span className="inline-block bg-blue-100 dark:bg-primary-light text-blue-800 dark:text-primary-dark text-xs px-2.5 py-0.5 rounded-full">AI Powered</span>
            </div>
          </div>

          {/* Key Performance Metrics (Summary Widgets) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4">
            <div className="bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-primary-light">
              <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-text-dark mb-2">Total P&L</h3>
              <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-accent-green">+$XX,XXX</p>
            </div>
            <div className="bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-primary-light">
              <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-text-dark mb-2">Win Rate</h3>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">XX%</p>
            </div>
            <div className="bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-primary-light">
              <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-text-dark mb-2">Trades This Month</h3>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-text-dark">YYY</p>
            </div>
          </div>

          {/* Recent Trades / Journal Entries */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-7 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark mb-3 sm:mb-4">Recent Trades</h2>
            {/* Placeholder for recent trades list or table */}
            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-primary-light">
                <thead className="bg-gray-100 dark:bg-primary-dark">
                  <tr>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Symbol</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Outcome</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">P&L</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-primary divide-y divide-gray-200 dark:divide-primary-light">
                  {/* Example Trade Row (Placeholder) */}
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">BTC/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Long</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">Win</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">+$XXX</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">ETH/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Short</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">Loss</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">-$XX</td>
                  </tr>
                  {/* More rows added for detail */}
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">ADA/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Long</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">Win</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">+$YY</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">XRP/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Short</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">Loss</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">-$ZZ</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">LTC/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Long</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">Win</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">+$AA</td>
                  </tr>
                  {/* More rows... */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Account Status (Prop Firm Info) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
             <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark mb-3 sm:mb-4">Account Status</h2>
            {/* Placeholder for prop firm account details */}
            <div className="text-gray-700 dark:text-text-dark space-y-3">
              <p><span className="font-semibold">Current Balance:</span> <span className="text-green-600 dark:text-accent-green font-bold">$XXX,XXX</span></p>
              <p><span className="font-semibold">Starting Balance:</span> <span className="font-bold text-gray-800 dark:text-text-dark">$YYY,YYY</span></p>
              <p><span className="font-semibold">Max Drawdown:</span> <span className="text-red-600 dark:text-accent-red font-bold">$X,XXX (-X.XX%)</span></p>
              <p><span className="font-semibold">Daily Loss Limit:</span> <span className="text-red-600 dark:text-accent-red font-bold">$Z,ZZZ (-Z.ZZ%)</span></p>
              <p><span className="font-semibold">Funding Goal Progress:</span> <span className="font-bold text-gray-800 dark:text-text-dark">ZZZ%</span></p>
               {/* Placeholder for a progress bar */}
              <div className="w-full bg-gray-200 dark:bg-primary-dark rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: 'ZZZ%' }}></div>
              </div>
            </div>
             {/* Placeholder for Account Equity Chart */}
            <div className="mt-3 sm:mt-4 h-20 bg-gray-100 dark:bg-primary-dark rounded-md flex items-center justify-center text-gray-500 dark:text-text-secondary italic p-2 sm:p-4">
                <div className="w-full h-full">
                     <Line data={accountStatusChartData} options={accountStatusChartOptions} />
                </div>
            </div>
          </div>

          {/* Existing Components - can be rearranged or styled */}
          {/* Example: Integrating existing components */}          
          <div className="col-span-1 sm:col-span-2 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
             <MyChallenges />
          </div>
           <div className="col-span-1 sm:col-span-2 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
              <TopPayouts />
           </div>
            <div className="col-span-1 sm:col-span-2 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
              <ActivityFeed />
            </div>
             <div className="col-span-1 sm:col-span-2 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
              <Achievements />
            </div>
             <div className="col-span-1 sm:col-span-2 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
              <WhatsNew />
            </div>
             <div className="col-span-1 sm:col-span-2 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
              <BecomePrimeMember />
            </div>


        </div>
      </div>
    </div>
  );
}
