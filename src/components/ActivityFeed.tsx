"use client";

import React from 'react';
import Image from 'next/image';

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 dark:bg-primary dark:shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-text-dark">Activity Feed</h2>
        <a href="#" className="text-sm text-blue-600 dark:text-secondary-light hover:underline">See all</a>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {/* Activity Item 1 */}
        <div className="flex items-start space-x-3 p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800 dark:text-text-dark">
              <span className="font-semibold">Sarah Wilson</span> completed the $10,000 Challenge
            </p>
            <p className="text-xs text-gray-600 dark:text-text-secondary mt-1">3 hours ago</p>
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="flex items-start space-x-3 p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800 dark:text-text-dark">
              <span className="font-semibold">David Brown</span> started a new $25,000 Challenge
            </p>
            <p className="text-xs text-gray-600 dark:text-text-secondary mt-1">5 hours ago</p>
          </div>
        </div>

        {/* Activity Item 3 */}
        <div className="flex items-start space-x-3 p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800 dark:text-text-dark">
              <span className="font-semibold">Emma Davis</span> received a payout of $1,500
            </p>
            <p className="text-xs text-gray-600 dark:text-text-secondary mt-1">1 day ago</p>
          </div>
        </div>

        {/* Activity Item 4 */}
        <div className="flex items-start space-x-3 p-4 bg-white dark:bg-primary-dark rounded-lg shadow-sm border border-gray-200 dark:border-primary">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800 dark:text-text-dark">
              <span className="font-semibold">Michael Lee</span> upgraded to Premium Membership
            </p>
            <p className="text-xs text-gray-600 dark:text-text-secondary mt-1">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed; 