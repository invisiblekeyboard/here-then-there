import { LocationCard } from "@/components/LocationCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export const Discover = () => {
  const locations = [
    {
      name: "The Rooftop Lounge",
      address: "123 High Street, Downtown",
      activeUsers: 12,
      distance: "0.2 km",
      type: "Bar",
      isActive: true
    },
    {
      name: "Blue Moon Restaurant",
      address: "456 Ocean Ave, Marina",
      activeUsers: 8,
      distance: "0.5 km",
      type: "Restaurant"
    },
    {
      name: "Neon Nightclub",
      address: "789 Club District",
      activeUsers: 24,
      distance: "0.8 km",
      type: "Nightclub"
    },
    {
      name: "Coffee & Co",
      address: "321 Main Street",
      activeUsers: 5,
      distance: "1.2 km",
      type: "Cafe"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Discover</h1>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-gradient-primary">
              📍 Downtown
            </Badge>
            <Badge variant="secondary">
              47 people nearby
            </Badge>
          </div>
        </div>
      </div>

      {/* Locations List */}
      <div className="p-4 space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          IRL-Match venues near you
        </div>
        
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            {...location}
          />
        ))}
      </div>

      {/* Empty State Helper */}
      <div className="p-4 mt-8 text-center">
        <p className="text-muted-foreground text-sm">
          Can't find your favorite spot? Suggest a venue to become an IRL-Match location.
        </p>
        <Button variant="outline" className="mt-3">
          Suggest Venue
        </Button>
      </div>
    </div>
  );
};