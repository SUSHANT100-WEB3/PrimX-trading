import React from 'react';
import ActivityItem from './ActivityItem'; // Assuming ActivityItem is in the same directory

const ActivityFeed: React.FC = () => {
  // Placeholder data - replace with actual data fetching later
  const activities: Array<{ // Explicitly type the array elements
    type: 'competition' | 'payout';
    title: string;
    description: string;
    status?: string | null; // Allow null
    amount: string;
    referenceId?: string | null; // Allow null
    competitionStarted?: string | null; // Allow null
    reportConfirmed?: string | null; // Allow null
    challengePassed?: string | null; // Allow null
    createdDate: string;
  }> = [
    {
      type: 'competition',
      title: 'Trading Competition - End of Year Challenge',
      description: 'Your payout request for account #10572 has been approved.',
      status: 'In Progress',
      amount: '$1,520.00',
      referenceId: '#Px-454735',
      competitionStarted: '10 Mar',
      reportConfirmed: '20 Mar',
      challengePassed: null, // Not applicable for this type
      createdDate: '14 March 2005', // Based on the image OCR
    },
    {
      type: 'payout',
      title: 'Congratulations - Payout Successful',
      description: 'Your payout request for account #8293 has been completed.',
      status: 'Complete',
      amount: '$510.00',
      referenceId: null, // Not applicable for this type
      competitionStarted: null, // Not applicable
      reportConfirmed: null, // Not applicable
      challengePassed: '30 Mar',
      createdDate: '14 March 2005', // Based on the image OCR
    },
    // Add more activity data as needed
  ];

  return (
    <div className="p-6 bg-white rounded-md shadow-md mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Activity Feed</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">See all</a>
      </div>

      {/* Activity Items Container */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            type={activity.type}
            title={activity.title}
            description={activity.description}
            status={activity.status}
            amount={activity.amount}
            referenceId={activity.referenceId}
            competitionStarted={activity.competitionStarted}
            reportConfirmed={activity.reportConfirmed}
            challengePassed={activity.challengePassed}
            createdDate={activity.createdDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 