import React from 'react';
import Image from 'next/image';

const BecomePrimeMember: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Become A Prime Member</h2>

      {/* Image/Banner */}
      <div className="w-full h-32 rounded-md mb-4 overflow-hidden">
        <Image
          src="/placeholder-prime-banner.png" // Replace with actual image source
          alt="Become a Prime Member Banner"
          width={300} // Approximate width based on layout
          height={128} // Corresponds to h-32
          className="w-full h-full object-cover"
        />
      </div>

      {/* Unlock Exclusive Features Text */}
      <p className="font-semibold text-gray-800 mb-3">Unlock exclusive features:</p>

      {/* Features List */}
      <ul className="list-disc list-inside text-sm text-gray-700 mb-5 space-y-1">
        <li><span className="font-semibold">Free PRIMX</span> Merch every month</li>
        <li>Institutional market analysis reports</li>
        <li>Members only courses & webinars</li>
        <li>Priority support and payouts</li>
      </ul>

      {/* Upgrade Now Button */}
      <button className="w-full py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-md shadow-md hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
        Upgrade Now
      </button>
    </div>
  );
};

export default BecomePrimeMember; 