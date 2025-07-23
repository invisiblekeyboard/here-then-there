import { MapPin, Users, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'discover', icon: MapPin, label: 'Discover' },
    { id: 'match', icon: Users, label: 'Match' },
    { id: 'chat', icon: MessageCircle, label: 'Chat' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center p-3 transition-all duration-200",
              activeTab === id 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className={cn(
              "w-6 h-6 mb-1",
              activeTab === id && "drop-shadow-[0_0_8px_hsl(var(--primary))]"
            )} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};