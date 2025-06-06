import React from 'react';
import AchievementItem from './AchievementItem'; // Assuming AchievementItem is in the same directory

const Achievements: React.FC = () => {
  // Placeholder data - replace with actual data fetching later
  const achievements = [
    {
      icon: '🏆', // Placeholder icon
      title: 'Earn $1,000 of Payouts',
      status: 'In Progress',
      progressText: '36%',
      progressPercentage: 36,
    },
    {
      icon: '📚', // Placeholder icon
      title: 'Pass 10 Evaluations',
      status: 'In Progress',
      progressText: '3/10',
      progressPercentage: 30, // Assuming 3/10 is 30%
    },
    {
      icon: '🏅', // Placeholder icon
      title: 'Start a Competition',
      status: 'Active',
      progressText: '0/1',
      progressPercentage: 0, // Assuming 0/1 is 0%
    },
     {
      icon: '👑', // Placeholder icon
      title: 'Become a Prime Member',
      status: 'In-Active',
      progressText: '0%',
      progressPercentage: 0, // Assuming 0% is 0%
    },
    // Add more achievement data as needed
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-md mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Achievements</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Achievement Items Container */}
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <AchievementItem
            key={index}
            icon={achievement.icon}
            title={achievement.title}
            status={achievement.status}
            progressText={achievement.progressText}
            progressPercentage={achievement.progressPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements; 