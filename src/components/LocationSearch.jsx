import { useState } from "react";
import { Search, MapPin, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const LocationSearch = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [distance, setDistance] = useState("5");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "Restaurants", "Retail", "Services", "Technology", "Fashion", 
    "Health", "Automotive", "Real Estate", "Education", "Entertainment"
  ];

  const handleSearch = () => {
    onSearch(location, category, { distance });
  };

  return (
    <div className="backdrop-blur-xs bg-white/80 border border-white/10 p-6 rounded-2xl space-y-6 animate-fade-in">
      {/* Main Search */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 bg">
          <div className="flex-1 relative  ">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Enter your location (city, area, zip code)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input pl-10 h-12 text-lg border-0 bg-white "
            />
          </div>
          
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="border-1 border-gray-400 h-12 w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-lg border border-white/20">
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            onClick={handleSearch}
            size="lg"
            className="btn-gradient-primary h-12 px-8 font-semibold"
          >
            <Search className="mr-2 h-5 w-5" />
            Find Sellers
          </Button>
        </div>

        {/* Quick Filters Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer bg-amber-500 text-white">
              <MapPin className="mr-1 h-3 w-3" />
              Near me
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
              Top rated
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
              Open now
            </Badge>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="text-muted-foreground hover:text-foreground"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-glass p-4 rounded-xl space-y-4 animate-slide-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Distance</label>
                <Select value={distance} onValueChange={setDistance}>
                  <SelectTrigger  className="border-1 border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0">
                    <SelectItem value="1">Within 1 km</SelectItem>
                    <SelectItem value="5">Within 5 km</SelectItem>
                    <SelectItem value="10">Within 10 km</SelectItem>
                    <SelectItem value="25">Within 25 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <Select>
                  <SelectTrigger  className="border-1 border-gray-400">
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0">
                    <SelectItem value="4">4+ stars</SelectItem>
                    <SelectItem value="3">3+ stars</SelectItem>
                    <SelectItem value="2">2+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <Select>
                  <SelectTrigger className="border-1 border-gray-400">
                    <SelectValue placeholder="Any price" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0">
                    <SelectItem value="$">$ - Budget</SelectItem>
                    <SelectItem value="$$">$$ - Moderate</SelectItem>
                    <SelectItem value="$$$">$$$ - Expensive</SelectItem>
                    <SelectItem value="$$$$">$$$$ - Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;