"use client";

import React from 'react';
import Image from 'next/image';

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Activity Feed</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {/* Activity Item 1 */}
        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800">
              <span className="font-medium">Sarah Wilson</span> completed the $10,000 Challenge
            </p>
            <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800">
              <span className="font-medium">David Brown</span> started a new $25,000 Challenge
            </p>
            <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
          </div>
        </div>

        {/* Activity Item 3 */}
        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800">
              <span className="font-medium">Emma Davis</span> received a payout of $1,500
            </p>
            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
          </div>
        </div>

        {/* Activity Item 4 */}
        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/placeholder-profile.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800">
              <span className="font-medium">Michael Lee</span> upgraded to Premium Membership
            </p>
            <p className="text-xs text-gray-500 mt-1">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed; 