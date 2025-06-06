"use client";

import React from 'react';
import Image from 'next/image';

const Achievements: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/* Achievement 1 */}
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
          <div className="relative w-12 h-12 mb-2">
            <Image
              src="/achievement-1.png"
              alt="First Win"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-center text-gray-800">First Win</p>
          <p className="text-xs text-gray-500">Completed</p>
        </div>

        {/* Achievement 2 */}
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
          <div className="relative w-12 h-12 mb-2">
            <Image
              src="/achievement-2.png"
              alt="Perfect Week"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-center text-gray-800">Perfect Week</p>
          <p className="text-xs text-gray-500">In Progress</p>
        </div>

        {/* Achievement 3 */}
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
          <div className="relative w-12 h-12 mb-2">
            <Image
              src="/achievement-3.png"
              alt="Risk Master"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-center text-gray-800">Risk Master</p>
          <p className="text-xs text-gray-500">Locked</p>
        </div>

        {/* Achievement 4 */}
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
          <div className="relative w-12 h-12 mb-2">
            <Image
              src="/achievement-4.png"
              alt="Profit Hunter"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-center text-gray-800">Profit Hunter</p>
          <p className="text-xs text-gray-500">Locked</p>
        </div>

        {/* Achievement 5 */}
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
          <div className="relative w-12 h-12 mb-2">
            <Image
              src="/achievement-5.png"
              alt="Consistency King"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-center text-gray-800">Consistency King</p>
          <p className="text-xs text-gray-500">Locked</p>
        </div>

        {/* Achievement 6 */}
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
          <div className="relative w-12 h-12 mb-2">
            <Image
              src="/achievement-6.png"
              alt="Trading Legend"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-center text-gray-800">Trading Legend</p>
          <p className="text-xs text-gray-500">Locked</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements; 