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
    <div className="space-y-4 sm:space-y-6">
      {/* Main Search */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
            <Input
              placeholder="Enter your location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 sm:pl-12 h-12 sm:h-14 text-sm sm:text-base border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white shadow-sm"
            />
          </div>
          
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-12 sm:h-14 w-full sm:w-[180px] lg:w-[220px] border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-purple-400 bg-white shadow-sm">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl">
              {categories.map((cat) => (
                <SelectItem 
                  key={cat} 
                  value={cat.toLowerCase()}
                  className="hover:bg-purple-50 focus:bg-purple-50 text-gray-700"
                >
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            onClick={handleSearch}
            size="lg"
            className="h-12 sm:h-14 px-6 sm:px-8 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl sm:rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Find Sellers</span>
            <span className="sm:hidden">Search</span>
          </Button>
        </div>

        {/* Quick Filters Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="cursor-pointer bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 px-3 py-1.5 rounded-full hover:shadow-md transition-all duration-300">
              <MapPin className="mr-1 h-3 w-3" />
              Near me
            </Badge>
            <Badge className="cursor-pointer border-2 border-purple-200 text-purple-600 bg-white hover:bg-purple-50 px-3 py-1.5 rounded-full transition-all duration-300">
              Top rated
            </Badge>
            <Badge className="cursor-pointer border-2 border-purple-200 text-purple-600 bg-white hover:bg-purple-50 px-3 py-1.5 rounded-full transition-all duration-300">
              Open now
            </Badge>
          </div>
          
          <Button
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 rounded-full px-4 py-2 w-full sm:w-auto transition-all duration-300"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 space-y-4 animate-fade-in shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Distance</label>
                <Select value={distance} onValueChange={setDistance}>
                  <SelectTrigger className="border-2 border-gray-200 rounded-lg h-10 sm:h-12 bg-white hover:border-purple-300 transition-colors">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-xl">
                    <SelectItem value="1" className='hover:bg-purple-50 text-gray-700'>Within 1 km</SelectItem>
                    <SelectItem value="5" className='hover:bg-purple-50 text-gray-700'>Within 5 km</SelectItem>
                    <SelectItem value="10" className='hover:bg-purple-50 text-gray-700'>Within 10 km</SelectItem>
                    <SelectItem value="25" className='hover:bg-purple-50 text-gray-700'>Within 25 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Rating</label>
                <Select>
                  <SelectTrigger className="border-2 border-gray-200 rounded-lg h-10 sm:h-12 bg-white hover:border-purple-300 transition-colors">
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-xl">
                    <SelectItem value="4" className='hover:bg-purple-50 text-gray-700'>4+ stars</SelectItem>
                    <SelectItem value="3" className='hover:bg-purple-50 text-gray-700'>3+ stars</SelectItem>
                    <SelectItem value="2" className='hover:bg-purple-50 text-gray-700'>2+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Price Range</label>
                <Select>
                  <SelectTrigger className="border-2 border-gray-200 rounded-lg h-10 sm:h-12 bg-white hover:border-purple-300 transition-colors">
                    <SelectValue placeholder="Any price" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-xl">
                    <SelectItem value="$" className='hover:bg-purple-50 text-gray-700'>$ - Budget</SelectItem>
                    <SelectItem value="$$" className='hover:bg-purple-50 text-gray-700'>$$ - Moderate</SelectItem>
                    <SelectItem value="$$$" className='hover:bg-purple-50 text-gray-700'>$$$ - Expensive</SelectItem>
                    <SelectItem value="$$$$" className='hover:bg-purple-50 text-gray-700'>$$$$ - Luxury</SelectItem>
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