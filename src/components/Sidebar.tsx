"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="h-full w-64 bg-white shadow-lg flex flex-col">
      {/* Logo and Close Button */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="relative w-32 h-8">
          <Image
            src="/primx-logo.png"
            alt="PrimX Logo"
            fill
            className="object-contain"
          />
        </div>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-200 flex items-center">
        {/* User image */}
        <div className="w-12 h-12 mr-4 flex-shrink-0">
          <Image
            src="/placeholder-avatar.png" // Replace with actual image source
            alt="User Avatar"
            width={48} // Corresponds to w-12
            height={48} // Corresponds to h-12
            className="rounded-full"
          />
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-gray-800 text-sm">J.Caseys</p>
          <p className="text-xs text-gray-600">Prime Lear</p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Platinum</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 space-y-1">
          {/* Dashboard */}
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>

          {/* Challenges */}
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Challenges
          </a>

          {/* Leaderboard */}
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Leaderboard
          </a>

          {/* Settings */}
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </a>
        </div>
      </nav>

      {/* Tools & Education Section */}
      <div className="pt-4 text-gray-500 text-sm font-semibold">TOOLS & EDUCATION</div>
      <ul className="space-y-2">
        <li>
          <Link href="/tools" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
            {/* Placeholder icon */}
            <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">��</span>
            Tools
            {/* Arrow icon placeholder */}
            <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
          </Link>
        </li>
        <li>
          <Link href="/education" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
            {/* Placeholder icon */}
            <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">📚</span>
            Education
            {/* Arrow icon placeholder */}
            <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
          </Link>
        </li>
        <li>
          <Link href="/mastery" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
            {/* Placeholder icon */}
            <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">🎓</span>
            Mastery
            {/* Arrow icon placeholder */}
            <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
          </Link>
        </li>
      </ul>

      {/* My Account Section */}
      <div className="pt-4 text-gray-500 text-sm font-semibold">MY ACCOUNT</div>
      <ul className="space-y-2">
        <li>
          <Link href="/affiliate" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
            {/* Placeholder icon */}
            <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">📊</span>
            Affiliate
          </Link>
        </li>
        <li>
          <Link href="/account" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
            {/* Placeholder icon */}
            <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">💳</span>
            Account
            {/* Arrow icon placeholder */}
            <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
          </Link>
        </li>
        <li>
          <Link href="/support" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
            {/* Placeholder icon */}
            <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">❓</span>
            Support
            {/* Arrow icon placeholder */}
            <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 