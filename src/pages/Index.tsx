import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Discover } from "@/pages/Discover";
import { Match } from "@/pages/Match";
import irlLogo from "@/assets/irl-logo.png";

const Index = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'discover':
        return <Discover />;
      case 'match':
        return <Match />;
      case 'chat':
        return <ChatPlaceholder />;
      case 'profile':
        return <ProfilePlaceholder />;
      default:
        return <Discover />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderActiveTab()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

// Placeholder components for other tabs
const ChatPlaceholder = () => (
  <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
    <div className="text-center p-8">
      <img src={irlLogo} alt="IRL Logo" className="w-20 h-20 mx-auto mb-6 animate-float" />
      <h2 className="text-2xl font-bold mb-4">Chat Coming Soon</h2>
      <p className="text-muted-foreground">Connect with your matches and start conversations!</p>
    </div>
  </div>
);

const ProfilePlaceholder = () => (
  <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
    <div className="text-center p-8">
      <img src={irlLogo} alt="IRL Logo" className="w-20 h-20 mx-auto mb-6 animate-float" />
      <h2 className="text-2xl font-bold mb-4">Profile Coming Soon</h2>
      <p className="text-muted-foreground">Customize your profile and preferences!</p>
    </div>
  </div>
);

export default Index;
