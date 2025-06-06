"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="h-full w-64 bg-white dark:bg-primary shadow-lg flex flex-col">
      {/* Logo and Close Button */}
      <div className="p-3 sm:p-4 flex items-center justify-between border-b border-gray-200 dark:border-primary-light">
        <div className="relative w-24 sm:w-32 h-6 sm:h-8">
          <Image
            src="/PRIMXLOGO.jpg"
            alt="PrimX Logo"
            fill
            className="object-contain"
          />
        </div>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-gray-100 dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-primary-light"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* User Profile */}
      <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-primary-light flex items-center">
        {/* User image */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
          <Image
            src="/PRIMXLOGO.jpg"
            alt="User Avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="flex-grow min-w-0">
          <p className="font-semibold text-gray-800 dark:text-text-dark text-sm truncate">J.Caseys</p>
          <p className="text-xs text-gray-600 dark:text-text-secondary truncate">Prime Lear</p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-accent-green bg-green-100 dark:bg-primary-light rounded-full">Platinum</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2 sm:py-4">
        <div className="px-2 sm:px-4 space-y-1">
          {/* Dashboard */}
          <a href="#" className="flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 dark:text-text-dark bg-gray-100 dark:bg-primary-dark rounded-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>

          {/* Challenges */}
          <a href="#" className="flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-primary-dark rounded-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Challenges
          </a>

          {/* Leaderboard */}
          <a href="#" className="flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-primary-dark rounded-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Leaderboard
          </a>

          {/* Settings */}
          <a href="#" className="flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-primary-dark rounded-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </a>
        </div>
      </nav>

      {/* Tools & Education Section */}
      <div className="pt-2 sm:pt-4 px-3 sm:px-4 text-gray-500 dark:text-text-secondary text-xs sm:text-sm font-semibold">TOOLS & EDUCATION</div>
      <ul className="space-y-1 px-2 sm:px-4">
        <li>
          <Link href="/tools" className="flex items-center text-sm sm:text-base text-gray-700 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-primary-dark p-2 sm:p-3 rounded-md group">
            <span className="mr-2 sm:mr-3 text-lg text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">🛠️</span>
            Tools
            <span className="ml-auto text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">{'>'}</span>
          </Link>
        </li>
        <li>
          <Link href="/education" className="flex items-center text-sm sm:text-base text-gray-700 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-primary-dark p-2 sm:p-3 rounded-md group">
            <span className="mr-2 sm:mr-3 text-lg text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">📚</span>
            Education
            <span className="ml-auto text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">{'>'}</span>
          </Link>
        </li>
        <li>
          <Link href="/mastery" className="flex items-center text-sm sm:text-base text-gray-700 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-primary-dark p-2 sm:p-3 rounded-md group">
            <span className="mr-2 sm:mr-3 text-lg text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">🎓</span>
            Mastery
            <span className="ml-auto text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">{'>'}</span>
          </Link>
        </li>
      </ul>

      {/* My Account Section */}
      <div className="pt-2 sm:pt-4 px-3 sm:px-4 text-gray-500 dark:text-text-secondary text-xs sm:text-sm font-semibold">MY ACCOUNT</div>
      <ul className="space-y-1 px-2 sm:px-4 pb-2 sm:pb-4">
        <li>
          <Link href="/affiliate" className="flex items-center text-sm sm:text-base text-gray-700 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-primary-dark p-2 sm:p-3 rounded-md group">
            <span className="mr-2 sm:mr-3 text-lg text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">📊</span>
            Affiliate
          </Link>
        </li>
        <li>
          <Link href="/account" className="flex items-center text-sm sm:text-base text-gray-700 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-primary-dark p-2 sm:p-3 rounded-md group">
            <span className="mr-2 sm:mr-3 text-lg text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">💳</span>
            Account
            <span className="ml-auto text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">{'>'}</span>
          </Link>
        </li>
        <li>
          <Link href="/support" className="flex items-center text-sm sm:text-base text-gray-700 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-primary-dark p-2 sm:p-3 rounded-md group">
            <span className="mr-2 sm:mr-3 text-lg text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">❓</span>
            Support
            <span className="ml-auto text-gray-500 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-dark">{'>'}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 