import Sidebar from '../components/Sidebar';
import MyChallenges from '../components/MyChallenges';
import TopPayouts from '../components/TopPayouts';
import ActivityFeed from '../components/ActivityFeed';
import Header from '../components/Header';
import Achievements from '../components/Achievements';
import WhatsNew from '../components/WhatsNew';
import BecomePrimeMember from '../components/BecomePrimeMember';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Challenges, Top Payouts, Activity Feed) */}
          <div className="lg:col-span-2">
            <MyChallenges />
            <TopPayouts />
            <ActivityFeed />
          </div>

          {/* Right Column (Achievements, What's New, Become a Prime Member) */}
          <div className="lg:col-span-1">
            {/* Achievements */}
            <Achievements />

            {/* What's New */}
            <WhatsNew />

            {/* Become a Prime Member */}
             <BecomePrimeMember />
          </div>
        </div>
      </div>
    </div>
  );
}
