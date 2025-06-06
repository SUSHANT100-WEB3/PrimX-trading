"use client";

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MyChallenges from '../components/MyChallenges';
import TopPayouts from '../components/TopPayouts';
import ActivityFeed from '../components/ActivityFeed';
import Header from '../components/Header';
import Achievements from '../components/Achievements';
import BecomePrimeMember from '../components/BecomePrimeMember';
import AIFeatures from '../components/AIFeatures';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  annotationPlugin
);

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const aiInsightsChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'AI Signal Strength (%)',
        data: [70, 75, 80, 85, 88, 82, 90],
        backgroundColor: 'rgba(52, 152, 219, 0.8)',
        borderColor: '#3498db',
        borderWidth: 1,
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
        text: 'AI Signal Strength by Day',
        color: '#4b5563',
        font: { size: 14, weight: 'bold' as 'bold' },
      },
      tooltip: {
        bodyColor: '#171717',
        titleColor: '#171717',
        backgroundColor: '#fff',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        titleFont: { size: 14, weight: 'bold' as 'bold' },
        bodyFont: { size: 12, weight: 'normal' as 'normal' },
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.raw !== null) {
              label += context.raw + '%';
            } else {
                label += 'N/A';
            }
            return label;
          },
           title: function(tooltipItems: any) {
            return 'Day: ' + tooltipItems[0].label;
          }
        }
      },
      annotation: {
        annotations: {
          aiSignal1: {
            type: 'line' as const,
            mode: 'vertical' as const,
            scaleID: 'x' as const,
            value: 'Day 3',
            borderColor: '#2ecc71',
            borderWidth: 2,
            label: {
              content: 'AI Long Signal',
              enabled: true,
              position: 'end' as const,
              backgroundColor: 'rgba(46, 204, 113, 0.8)',
              color: '#fff',
              font: { size: 10, weight: 'bold' as const },
              cornerRadius: 4,
              yAdjust: -10,
            }
          },
          aiSignal2: {
            type: 'line' as const,
            mode: 'vertical' as const,
            scaleID: 'x' as const,
            value: 'Day 5',
            borderColor: '#e74c3c',
            borderWidth: 2,
            label: {
              content: 'AI Short Signal',
              enabled: true,
              position: 'end' as const,
              backgroundColor: 'rgba(231, 76, 60, 0.8)',
              color: '#fff',
              font: { size: 10, weight: 'bold' as const },
              cornerRadius: 4,
              yAdjust: -10,
            }
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: true,
          color: 'rgba(148, 163, 184, 0.2)',
          drawBorder: false,
        },
        ticks: { color: '#6b7280', callback: function(value: any) { return value + '%'; }, font: { size: 10 } },
        title: { display: true, text: 'Signal Strength (%) ', color: '#4b5563', font: { size: 12 } }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: { color: '#6b7280', font: { size: 10 } },
      },
    },
  };

  const accountStatusChartData = {
    labels: ['Start', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Equity Curve',
        data: [100000, 101500, 100500, 102000, 103500, 102800, 104500],
        fill: true,
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderColor: '#2ecc71',
        tension: 0.3,
        pointBackgroundColor: '#2ecc71',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#2ecc71',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
       {
        label: 'Max Drawdown',
        data: [92000, 92000, 92000, 92000, 92000, 92000, 92000],
        borderColor: '#e74c3c',
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
        borderWidth: 1.5,
      },
       {
        label: 'Profit Target',
        data: [110000, 110000, 110000, 110000, 110000, 110000, 110000],
        borderColor: '#3498db',
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
        borderWidth: 1.5,
      }
    ],
  };

  const accountStatusChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#4b5563',
          font: { size: 12 },
        }
      },
      title: {
        display: true,
        text: 'Prop Account Equity Curve',
        color: '#4b5563',
        font: { size: 14, weight: 'bold' as 'bold' },
      },
      tooltip: {
        bodyColor: '#171717',
        titleColor: '#171717',
        backgroundColor: '#fff',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        titleFont: { size: 14, weight: 'bold' as 'bold' },
        bodyFont: { size: 12, weight: 'normal' as 'normal' },
         callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.raw !== null) {
              label += '$' + context.raw.toLocaleString();
            } else {
                label += 'N/A';
            }
            return label;
          },
          title: function(tooltipItems: any) {
            return 'Day: ' + tooltipItems[0].label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: true,
          color: 'rgba(148, 163, 184, 0.2)',
          drawBorder: false,
        },
        ticks: { color: '#6b7280', callback: function(value: any) { return '$' + value.toLocaleString(); }, font: { size: 10 } },
         title: { display: true, text: 'Equity (USD)', color: '#4b5563', font: { size: 12 } }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: { color: '#6b7280', font: { size: 10 } },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background-dark flex flex-col">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Sidebar />
        </div>
        {/* Sidebar for mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setIsSidebarOpen(false)} />
            <div className="relative w-64 bg-white dark:bg-primary shadow-lg z-50">
              <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>
          </div>
        )}
        {/* Main content */}
        <main className="flex-1 w-full max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Example: AI Trading Insights section */}
          <div className="md:col-span-8 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-blue-200 dark:border-primary-light flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-blue-800 dark:text-secondary-light mb-3 sm:mb-4">AI Trading Insights</h2>
            <div className="text-gray-700 dark:text-text-dark flex-grow grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 text-sm sm:text-base">
                <p><span className="font-semibold text-gray-800 dark:text-text-dark">Recent AI Analysis:</span> AI detected a potential <span className="text-green-600 dark:text-accent-green font-medium">long setup</span> in <span className="font-medium">BTC/USDT</span> based on recent price action and on-chain volume analysis.</p>
                <p><span className="font-semibold text-gray-800 dark:text-text-dark">Recommended Action:</span> Consider setting a <span className="font-medium">buy limit order</span> near $45,000 with a profit target at $48,000 and a stop loss at $44,000.</p>
                <p><span className="font-semibold text-gray-800 dark:text-text-dark">AI Confidence Score:</span> <span className="font-medium">85%</span> (High)</p>
                <p><span className="font-semibold text-gray-800 dark:text-text-dark">Key Factor:</span> Increased whale accumulation detected.</p>
              </div>
              <div className="bg-gray-100 dark:bg-primary-dark rounded-md flex items-center justify-center text-gray-500 dark:text-text-secondary italic p-2 sm:p-4">
                <div className="w-full h-[200px] sm:h-[250px]">
                  <Bar data={aiInsightsChartData} options={aiInsightsChartOptions} />
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 text-right text-xs sm:text-sm text-gray-500 dark:text-text-secondary flex items-center justify-end">
              <span className="inline-block bg-blue-100 dark:bg-primary-light text-blue-800 dark:text-primary-dark text-xs px-2.5 py-0.5 rounded-full flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M12 2a4 4 0 0 0-4 4v1"></path>
                    <path d="M16 6V7"></path>
                    <line x1="12" y1="11" x2="12" y2="18"></line>
                    <line x1="7" y1="16" x2="7" y2="18"></line>
                    <line x1="17" y1="16" x2="17" y2="18"></line>
                  </svg>
                AI Powered Analysis
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div className="bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-primary-light">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-text-dark mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600 dark:text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Total Realized P&L <span className="text-xs text-blue-500 dark:text-blue-400 ml-1">(AI)</span>
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-accent-green">+$XX,XXX <span className="text-sm text-gray-500 dark:text-text-secondary">USD</span></p>
            </div>
            <div className="bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-primary-light">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-text-dark mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.968-.05L14 6m1.395 9.21a3.42 3.42 0 00.091-1.995 3.42 3.42 0 01-.859-2.345m-4.002-8.032a3.42 3.42 0 011.946-.806 3.42 3.42 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a3.42 3.42 0 01-1.065 2.572c.426.426.674 1.01.674 1.652v.75m-14.73-.454a3.42 3.42 0 01.091-1.995 3.42 3.42 0 00-.859-2.345m-4.002-8.032a3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37a3.42 3.42 0 001.065 2.572m-1.773 3.794v.75m0 0H9m8 0h2M7 12h2m0 0c1.571 0 3-.109 3-.368.023-.365.023-.805 0-1.173C12 9.109 10.571 9 9 9m6 0c1.571 0 3-.109 3-.368.023-.365.023-.805 0-1.173C15 9.109 13.429 9 12 9m-3 0a2 2 0 00-2 2v5a2 2 0 002 2h6a2 2 0 002-2v-5a2 2 0 00-2-2H9z" />
                </svg>
                Overall Win Rate <span className="text-xs text-blue-500 dark:text-blue-400 ml-1">(AI)</span>
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">XX<span className="text-sm">%</span></p>
            </div>
            <div className="bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-primary-light">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-text-dark mb-2 flex items-center">
                 <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-0.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Active Challenges <span className="text-xs text-blue-500 dark:text-blue-400 ml-1">(AI)</span>
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-text-dark">YYY</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-7 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark mb-3 sm:mb-4">Recent Trade Journal Entries</h2>
            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-primary-light">
                <thead className="bg-gray-100 dark:bg-primary-dark">
                  <tr>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Symbol</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">Outcome</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">P&L</th>
                    <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-600 dark:text-text-secondary uppercase tracking-wider">AI Score</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-primary divide-y divide-gray-200 dark:divide-primary-light">
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">BTC/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Long</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">Win</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">+$XXX</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-blue-600 dark:text-secondary-light">88%</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">ETH/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Short</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">Loss</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">-$XX</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-orange-600 dark:text-orange-400">65%</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">ADA/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Long</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">Win</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">+$XX</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-blue-600 dark:text-secondary-light">78%</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">XRP/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Short</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">Loss</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-red-600 dark:text-accent-red font-semibold">-$X</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-orange-600 dark:text-orange-400">55%</td>
                  </tr>
                   <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-text-dark">YYYY-MM-DD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">LTC/USD</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-text-secondary">Long</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">Win</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-green-600 dark:text-accent-green font-semibold">+$XX</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-blue-600 dark:text-secondary-light">92%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-5 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark mb-3 sm:mb-4">Prop Account Status</h2>
            <div className="text-gray-700 dark:text-text-dark space-y-2 sm:space-y-3 text-sm sm:text-base flex-grow">
              <p className="flex items-center"><span className="font-semibold text-gray-800 dark:text-text-dark flex-grow">Account Size:</span> <span className="font-medium">$100,000</span></p>
              <p className="flex items-center"><span className="font-semibold text-gray-800 dark:text-text-dark flex-grow">Current Equity:</span> <span className="font-medium text-green-600 dark:text-accent-green">$XXX,XXX</span></p>
              <p className="flex items-center"><span className="font-semibold text-gray-800 dark:text-text-dark flex-grow">Profit Target:</span> <span className="font-medium text-blue-600 dark:text-blue-400">$110,000 (10%)</span></p>
              <p className="flex items-center"><span className="font-semibold text-gray-800 dark:text-text-dark flex-grow">Max Daily Drawdown:</span> <span className="font-medium text-red-600 dark:text-accent-red">$5,000 (5%)</span></p>
              <p className="flex items-center"><span className="font-semibold text-gray-800 dark:text-text-dark flex-grow">Max Total Drawdown:</span> <span className="font-medium text-red-600 dark:text-accent-red">$8,000 (8%)</span></p>
            </div>

             <div className="mt-3 sm:mt-4 h-40 sm:h-48 bg-gray-100 dark:bg-primary-dark rounded-md flex items-center justify-center text-gray-500 dark:text-text-secondary italic p-2 sm:p-4">
                  <div className="w-full h-full">
                       <Line data={accountStatusChartData} options={accountStatusChartOptions} />
                  </div>
              </div>
             <div className="mt-3 text-right text-xs sm:text-sm text-gray-500 dark:text-text-secondary">
              <span className="inline-block bg-blue-100 dark:bg-primary-light text-blue-800 dark:text-primary-dark text-xs px-2.5 py-0.5 rounded-full">AI Monitored</span>
            </div>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
               <MyChallenges />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
                <TopPayouts />
             </div>
             <div className="col-span-1 md:col-span-1 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
                <ActivityFeed />
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
                <Achievements />
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
                 <AIFeatures />
               </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-6 bg-white dark:bg-primary p-3 sm:p-4 md:p-6 rounded-lg shadow-md dark:shadow-lg">
                <BecomePrimeMember />
              </div>
        </main>
      </div>
    </div>
  );
}
