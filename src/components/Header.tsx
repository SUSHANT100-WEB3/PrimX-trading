"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';

type HeaderProps = {
  onMenuClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
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

  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    } else {
      console.log('Opening menu');
      // Implement menu logic here
    }
  };

  return (
    <header className="bg-white dark:bg-primary-dark shadow-sm dark:shadow-lg">
      <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* PrimX Logo */}
        <div className="flex items-center">
          <Image
            src="/PRIMXLOGO.SVG"
            alt="PrimX Logo"
            width={80}
            height={32}
            className="w-20 sm:w-24 md:w-28"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleMenuClick}
          className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-gray-100 dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-primary-light"
          aria-label="Open menu"
          title="Open menu"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Search Bar - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-primary-light bg-white dark:bg-primary text-gray-800 dark:text-secondary placeholder-gray-500 dark:placeholder-secondary-dark focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-secondary-light focus:border-transparent text-sm sm:text-base"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-secondary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
          
          {/* "User available" logo */}
          <div className="hidden sm:block">
            <Image
              src="/PRIMXLOGO.SVG"
              alt="PrimX Logo"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </div>

          {/* Notifications */}
          <button 
            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-primary-light"
            title="Notifications" 
            aria-label="Notifications"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Profile Picture (replaced with logo) */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <Image
              src="/PRIMXLOGO.SVG"
              alt="PrimX Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 