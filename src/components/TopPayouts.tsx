"use client";

import React from 'react';
import PayoutCard from './PayoutCard'; // Assuming PayoutCard is in the same directory

const TopPayouts: React.FC = () => {
  // Placeholder data - replace with actual data fetching later
  const payouts = [
    {
      name: 'J.Caseys',
      rank: 1,
      accountProfit: '$26,149',
      gain: '26.15%',
      size: '$100,000',
      country: 'AU',
    },
    {
      name: 'Anu808',
      rank: 2,
      accountProfit: '$12,021',
      gain: '20.10%',
      size: '$50,000',
      country: 'IN',
    },
    {
      name: 'J.Caseys',
      rank: 1,
      accountProfit: '$1,782',
      gain: '17.82%',
      size: '$10,000',
      country: 'NZ',
    },
    // Add more payout data as needed
  ];

  return (
    <div className="p-6 bg-white rounded-md shadow-md mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Top Payouts</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Payout Cards Container */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {payouts.map((payout, index) => (
          <PayoutCard
            key={index}
            name={payout.name}
            rank={payout.rank}
            accountProfit={payout.accountProfit}
            gain={payout.gain}
            size={payout.size}
            country={payout.country}
          />
        ))}
      </div>
    </div>
  );
};

export default TopPayouts; 