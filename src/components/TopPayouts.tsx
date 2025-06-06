"use client";

import React from 'react';
import Image from 'next/image';

const TopPayouts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6 dark:bg-primary dark:shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-text-dark">Top Payouts</h2>
        <a href="#" className="text-sm sm:text-base text-blue-600 dark:text-secondary-light hover:underline">See all</a>
      </div>

      {/* Payouts List */}
      <div className="space-y-3 sm:space-y-4">
        {/* Payout Item 1 */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Trader"
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-800 dark:text-text-dark text-sm sm:text-base truncate">John Doe</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary truncate">$50,000 Challenge</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-green-600 dark:text-accent-green text-sm sm:text-base">$2,500</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-text-secondary">2 hours ago</p>
          </div>
        </div>

        {/* Payout Item 2 */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Trader"
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-800 dark:text-text-dark text-sm sm:text-base truncate">Jane Smith</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary truncate">$25,000 Challenge</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-green-600 dark:text-accent-green text-sm sm:text-base">$1,250</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-text-secondary">5 hours ago</p>
          </div>
        </div>

        {/* Payout Item 3 */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Trader"
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-800 dark:text-text-dark text-sm sm:text-base truncate">Mike Johnson</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary truncate">$10,000 Challenge</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-green-600 dark:text-accent-green text-sm sm:text-base">$500</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-text-secondary">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPayouts; 