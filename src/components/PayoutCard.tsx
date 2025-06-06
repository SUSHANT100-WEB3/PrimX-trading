import React from 'react';

interface PayoutCardProps {
  name: string;
  rank: number;
  accountProfit: string;
  gain: string;
  size: string;
  country: string;
  // Add prop for user image source later
}

const PayoutCard: React.FC<PayoutCardProps> = ({ name, rank, accountProfit, gain, size, country }) => {
  return (
    <div className="w-64 p-4 bg-gray-50 rounded-md shadow-sm flex flex-col items-center text-center">
      {/* User Image Placeholder */}
      <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
      <p className="font-semibold text-gray-800">{name} #{rank}</p>
      <p className="text-sm text-gray-600 mb-3">Account Profit:</p>
      <p className="text-lg font-bold text-green-600 mb-3">{accountProfit}</p>
      <div className="text-sm text-gray-700">
        <p>Gain: <span className="font-semibold">{gain}</span></p>
        <p>Size: <span className="font-semibold">{size}</span></p>
        <p>Country: <span className="font-semibold">{country}</span></p>
      </div>
    </div>
  );
};

export default PayoutCard; 