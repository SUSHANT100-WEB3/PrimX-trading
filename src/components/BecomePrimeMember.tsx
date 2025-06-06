"use client";

import React from 'react';
import Image from 'next/image';

const BecomePrimeMember: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 md:p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Become A Prime Member</h2>

      {/* Image/Banner */}
      <div className="w-full h-32 md:h-40 rounded-md mb-4 overflow-hidden">
        <Image
          src="/placeholder-prime-banner.png"
          alt="Become a Prime Member Banner"
          width={300}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Unlock Exclusive Features Text */}
      <p className="font-semibold text-gray-800 mb-3">Unlock exclusive features:</p>

      {/* Features List */}
      <ul className="list-disc list-inside text-sm text-gray-700 mb-5 space-y-2">
        <li className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Free PRIMX Merch every month</span>
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Institutional market analysis reports</span>
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Members only courses & webinars</span>
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Priority support and payouts</span>
        </li>
      </ul>

      {/* Upgrade Now Button */}
      <button className="w-full py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-md shadow-md hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200">
        Upgrade Now
      </button>
    </div>
  );
};

export default BecomePrimeMember; 