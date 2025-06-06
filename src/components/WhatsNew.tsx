"use client";

import React from 'react';
import Image from 'next/image';

const WhatsNew: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 dark:bg-primary dark:shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-text-dark">What&apos;s New</h2>
        {/* Navigation arrows */}
        <div className="flex items-center space-x-2 text-gray-500 dark:text-text-secondary">
          <button 
            className="p-1 hover:text-gray-700 dark:hover:text-text-dark focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-primary-light rounded"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="p-1 hover:text-gray-700 dark:hover:text-text-dark focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-primary-light rounded"
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
        <div className="w-full h-40 md:h-48 rounded-lg mb-4 overflow-hidden shadow-sm dark:shadow">
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
          <h3 className="text-lg font-semibold text-gray-800 dark:text-text-dark mb-2">Hear from our community</h3>
          <p className="text-sm text-gray-700 dark:text-text-dark mb-3">
            Since 2021, PrimX has led the prop trading revolution for over 350,000 of our incredible members from over 50+ countries
          </p>
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center text-gray-800 dark:text-text-dark">
              <span className="text-xl font-bold mr-1">368+</span>
              <span className="text-sm text-gray-600 dark:text-text-secondary">Funded Traders</span>
            </div>
            {/* Add other social proofs/logos if needed - placeholder avatars */}
            <div className="flex -space-x-2 overflow-hidden">
              {/* Placeholder Avatars - replace with actual images/logic */}
              <div className="inline-block h-8 w-8 rounded-full bg-blue-200 dark:bg-primary-light border-2 border-white dark:border-primary flex items-center justify-center text-blue-800 dark:text-primary-dark text-xs font-bold">JD</div>
              <div className="inline-block h-8 w-8 rounded-full bg-green-200 dark:bg-accent-green border-2 border-white dark:border-primary flex items-center justify-center text-green-800 dark:text-primary-dark text-xs font-bold">AS</div>
              <div className="inline-block h-8 w-8 rounded-full bg-purple-200 dark:bg-primary-light border-2 border-white dark:border-primary flex items-center justify-center text-purple-800 dark:text-primary-dark text-xs font-bold">TL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew; 