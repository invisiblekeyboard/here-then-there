import { useState } from "react";
import { MatchCard } from "@/components/MatchCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Match = () => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  const profiles = [
    {
      name: "Sarah",
      age: 26,
      bio: "Coffee enthusiast, yoga instructor, love exploring new places in the city",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
      location: "The Rooftop Lounge"
    },
    {
      name: "Emma",
      age: 24,
      bio: "Artist, foodie, always up for spontaneous adventures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
      location: "The Rooftop Lounge"
    },
    {
      name: "Mia",
      age: 28,
      bio: "Marketing professional, wine lover, seeking genuine connections",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=600&fit=crop&crop=face",
      location: "The Rooftop Lounge"
    }
  ];

  const handleLike = () => {
    toast({
      title: "It's a match! 💕",
      description: `You and ${profiles[currentIndex].name} liked each other!`,
    });
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset for demo
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Match</h1>
            <Button variant="outline" size="sm" className="border-accent text-accent">
              <Zap className="w-4 h-4 mr-2" />
              Boost
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-gradient-primary">
              <MapPin className="w-3 h-3 mr-1" />
              The Rooftop Lounge
            </Badge>
            <Badge variant="secondary">
              12 people here now
            </Badge>
          </div>
        </div>
      </div>

      {/* Match Cards */}
      <div className="p-4 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        {profiles.length > 0 ? (
          <div className="w-full max-w-sm">
            <MatchCard
              {...profiles[currentIndex]}
              onLike={handleLike}
              onPass={handlePass}
            />
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {profiles.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold mb-2">You're all caught up!</h3>
            <p className="text-muted-foreground mb-6">
              Check back later or visit another IRL-Match location
            </p>
            <Button variant="outline">
              Discover New Venues
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};