import React from 'react';

interface ActivityItemProps {
  type: 'competition' | 'payout';
  title: string;
  description: string;
  status?: string | null; // Allow null for status
  amount: string;
  referenceId?: string | null; // Allow null for referenceId
  competitionStarted?: string | null; // Allow null for competitionStarted
  reportConfirmed?: string | null; // Allow null for reportConfirmed
  challengePassed?: string | null; // Allow null for competition
  createdDate: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  type, 
  title, 
  description, 
  status, 
  amount, 
  referenceId, // eslint-disable-line @typescript-eslint/no-unused-vars
  competitionStarted, 
  reportConfirmed, 
  challengePassed, 
  createdDate 
}) => {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-b-0">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-semibold text-gray-800 text-sm">{title}</p>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
        <div className="flex-shrink-0 text-right">
           {type === 'competition' && status && (
             <span className={`px-3 py-1 text-xs font-medium rounded-full ${status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
               {status}
             </span>
           )}
           {type === 'payout' && status && (
             <span className={`px-3 py-1 text-xs font-medium rounded-full ${status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
              {status}
            </span>
           )}
          <p className="text-sm font-semibold text-green-600 mt-1">{amount}</p>
        </div>
      </div>

      {type === 'competition' && (
        <div className="relative flex items-center text-xs text-gray-500 mt-4">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 h-0.5 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>

          {/* Timeline Points and Labels */}
          <div className="relative z-10 flex justify-between w-full">
            {/* Competition Started */}
            <div className="flex flex-col items-center" style={{ width: '30%' }}>{/* Adjust width for spacing */}
              <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
              <p className="text-center">Competition Started:</p>
              <p className="font-semibold text-gray-800 text-center">{competitionStarted}</p>
            </div>

            {/* Report Confirmed */}
            <div className="flex flex-col items-center" style={{ width: '30%' }}>{/* Adjust width for spacing */}
              <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
              <p className="text-center">Report Confirmed:</p>
              <p className="font-semibold text-gray-800 text-center">{reportConfirmed}</p>
            </div>

            {/* Challenge Passed */}
             {challengePassed && (
              <div className="flex flex-col items-center" style={{ width: '30%' }}>{/* Adjust width for spacing */}
                 <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
                 <p className="text-center">Challenge Passed:</p>
                 <p className="font-semibold text-gray-800 text-center">{challengePassed}</p>
              </div>
             )}
          </div>
        </div>
      )}

       {type === 'payout' && challengePassed && (
         <p className="text-xs text-gray-500 mt-2">Challenge Passed: <span className="font-semibold">{challengePassed}</span></p>
       )}

      <p className="text-xs text-gray-500 mt-1">Created Date: {createdDate}</p>
    </div>
  );
};

export default ActivityItem; 