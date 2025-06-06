"use client";

import React from 'react';

const AIFeatures: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6 dark:bg-primary dark:shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark mb-3 sm:mb-4">AI-Powered Features</h2>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-text-dark mb-4 sm:mb-5 space-y-1.5 sm:space-y-2">
        <li className="flex items-start">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>AI-Driven Trading Signals and Analysis</span>
        </li>
        <li className="flex items-start">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Automated Risk Management and Monitoring</span>
        </li>
        <li className="flex items-start">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Personalized Trade Journal Insights</span>
        </li>
         <li className="flex items-start">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Advanced Charting with AI Indicators</span>
        </li>
      </ul>
    </div>
  );
};

export default AIFeatures; 