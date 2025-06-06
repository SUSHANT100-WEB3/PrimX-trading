"use client";

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MyChallenges from '../components/MyChallenges';
import TopPayouts from '../components/TopPayouts';
import ActivityFeed from '../components/ActivityFeed';
import Header from '../components/Header';
import Achievements from '../components/Achievements';
import WhatsNew from '../components/WhatsNew';
import BecomePrimeMember from '../components/BecomePrimeMember';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200 ease-in-out
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Left Column (Challenges, Top Payouts, Activity Feed) */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <MyChallenges />
              <TopPayouts />
              <ActivityFeed />
            </div>

            {/* Right Column (Achievements, What's New, Become a Prime Member) */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              <Achievements />
              <WhatsNew />
              <BecomePrimeMember />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
