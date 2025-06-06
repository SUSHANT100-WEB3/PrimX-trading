import React from 'react';

interface AchievementItemProps {
  icon: string; // Placeholder for icon/image source
  title: string;
  status: string;
  progressText: string;
  progressPercentage: number; // e.g., 36 for 36%
}

const AchievementItem: React.FC<AchievementItemProps> = ({ icon, title, status, progressText, progressPercentage }) => {
  const statusColor = status === 'In Progress' ? 'text-yellow-600' : status === 'Active' ? 'text-blue-600' : 'text-green-600'; // More detailed color logic

  return (
    <div className="flex items-center space-x-4 p-3 bg-white rounded-md shadow-sm border border-gray-200">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-xl flex-shrink-0 text-gray-600">
        {/* Placeholder for actual icon (image or SVG) */}
        {icon}
      </div>

      <div className="flex-1">
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
        <p className={`text-xs font-medium ${statusColor}`}>{status}</p>
        {/* Progress Bar and Text */}
        <div className="flex items-center mt-2">
          <div className="w-28 bg-gray-200 rounded-full h-2 mr-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-600 font-medium">{progressText}</span>
        </div>
      </div>
    </div>
  );
};

export default AchievementItem; 