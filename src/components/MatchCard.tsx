import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X, MapPin } from "lucide-react";

interface MatchCardProps {
  name: string;
  age: number;
  bio: string;
  image: string;
  location: string;
  onLike: () => void;
  onPass: () => void;
}

export const MatchCard = ({ name, age, bio, image, location, onLike, onPass }: MatchCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-card shadow-card max-w-sm mx-auto">
      <div className="aspect-[3/4] relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-1">{name}, {age}</h2>
          <div className="flex items-center text-accent mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{location}</span>
          </div>
          <p className="text-sm opacity-90 line-clamp-2">{bio}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-center space-x-6">
          <Button
            variant="outline"
            size="lg"
            className="w-16 h-16 rounded-full border-destructive/20 hover:border-destructive hover:bg-destructive/10"
            onClick={onPass}
          >
            <X className="w-6 h-6 text-destructive" />
          </Button>
          
          <Button
            size="lg"
            className="w-16 h-16 rounded-full bg-gradient-primary hover:shadow-glow border-0"
            onClick={onLike}
          >
            <Heart className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
};