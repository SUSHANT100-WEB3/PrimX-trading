"use client";

import React from 'react';
import Image from 'next/image';

const TopPayouts: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Top Payouts</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Payouts List */}
      <div className="space-y-4">
        {/* Payout Item 1 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Trader"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-500">$50,000 Challenge</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-green-600">$2,500</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>

        {/* Payout Item 2 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Trader"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Jane Smith</h3>
              <p className="text-sm text-gray-500">$25,000 Challenge</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-green-600">$1,250</p>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
        </div>

        {/* Payout Item 3 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Trader"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Mike Johnson</h3>
              <p className="text-sm text-gray-500">$10,000 Challenge</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-green-600">$500</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPayouts; 