"use client";

import React from 'react';
import Image from 'next/image';

const WhatsNew: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">What&apos;s New</h2>
        {/* Navigation arrows */}
        <div className="flex items-center space-x-2 text-gray-500">
          <button 
            className="p-1 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="p-1 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full mb-4">
        {/* Image/Banner */}
        <div className="w-full h-40 md:h-48 rounded-md mb-4 overflow-hidden">
          <Image
            src="/placeholder-whatsnew-banner.png"
            alt="What's New Banner"
            width={400}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Hear from our community</h3>
          <p className="text-sm text-gray-600 mb-3">
            Since 2021, PrimX has led the prop trading revolution for over 350,000 of our incredible members from over 50+ countries
          </p>
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center text-gray-700">
              <span className="text-xl font-bold mr-1">368+</span>
              <span className="text-sm">Funded Traders</span>
            </div>
            {/* Add other social proofs/logos if needed - placeholder avatars */}
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-8 w-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="inline-block h-8 w-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="inline-block h-8 w-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew; 