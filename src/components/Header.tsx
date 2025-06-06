"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Optional: Add a function to handle search submission
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement actual search logic here
  };

  const handleThemeToggle = () => {
    console.log('Toggling theme');
    // Implement theme toggling logic here
  };

  const handleNotificationsClick = () => {
    console.log('Opening notifications');
    // Implement notifications logic here
  };

  const handleSettingsClick = () => {
    console.log('Opening settings');
    // Implement settings logic here
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white rounded-md shadow-sm mb-6">
      {/* Welcome Message */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Welcome Back, Joshua</h1>
        <p className="text-sm text-gray-500">Thursday, March 14, 2025</p>
      </div>

      {/* Search, Icons, and Button */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Search Icon */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </form>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-gray-600">
          <button className="hover:text-gray-800" aria-label="Toggle Theme" onClick={handleThemeToggle}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <button className="hover:text-gray-800" aria-label="Notifications" onClick={handleNotificationsClick}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.405L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="hover:text-gray-800" aria-label="Settings" onClick={handleSettingsClick}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Start a Challenge Button */}
        <button className="px-5 py-2 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          + START A CHALLENGE
        </button>
      </div>
    </div>
  );
};

export default Header; 