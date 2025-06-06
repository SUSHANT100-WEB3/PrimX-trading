import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">PRIMX</h1>
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
      <nav className="flex-grow p-4 space-y-2">
        <ul>
          <li>
            <Link href="/dashboard" className="flex items-center text-gray-800 bg-gray-200 font-semibold p-3 rounded-md">
              {/* Placeholder icon */}
              <span className="mr-3 text-lg">🏠</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/challenges" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
               {/* Placeholder icon */}
              <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">★</span>
              Challenges
               {/* Arrow icon placeholder */}
              <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
            </Link>
          </li>
           <li>
            <Link href="/competitions" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
               {/* Placeholder icon */}
              <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">🏆</span>
              Competitions
               {/* Arrow icon placeholder */}
              <span className="ml-auto text-gray-500 group-hover:text-gray-700">{'>'}</span>
            </Link>
          </li>
           <li>
            <Link href="/leaderboard" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
               {/* Placeholder icon */}
              <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">🏅</span>
              Leaderboard
            </Link>
          </li>
        </ul>

        {/* Tools & Education Section */}
         <div className="pt-4 text-gray-500 text-sm font-semibold">TOOLS & EDUCATION</div>
         <ul className="space-y-2">
          <li>
            <Link href="/tools" className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md group">
               {/* Placeholder icon */}
              <span className="mr-3 text-lg text-gray-500 group-hover:text-gray-700">🔧</span>
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
      </nav>
    </div>
  );
};

export default Sidebar; 