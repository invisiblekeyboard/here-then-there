import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  activeUsers: number;
  distance: string;
  type: string;
  isActive?: boolean;
}

export const LocationCard = ({ name, address, activeUsers, distance, type, isActive = false }: LocationCardProps) => {
  return (
    <Card className={`p-4 transition-all duration-300 hover:shadow-glow cursor-pointer ${
      isActive ? 'bg-gradient-primary border-primary shadow-glow' : 'bg-card hover:bg-card/80'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {address}
          </div>
        </div>
        <Badge variant={isActive ? "default" : "secondary"} className="ml-2">
          {type}
        </Badge>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-primary">
          <Users className="w-4 h-4 mr-1" />
          <span className="font-medium">{activeUsers} active</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Clock className="w-4 h-4 mr-1" />
          {distance}
        </div>
      </div>
      
      {isActive && (
        <div className="mt-3 pt-3 border-t border-primary/20">
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow mr-2"></div>
            <span className="text-accent text-sm font-medium">You're here!</span>
          </div>
        </div>
      )}
    </Card>
  );
};