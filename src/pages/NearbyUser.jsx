import { useState } from "react";
import { MapPin, Users, Star, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// import heroImage from "@/assets/hero-image.jpg";
import SellerCard from "../components/SellerCard";
import LocationSearch from "../components/LocationSearch";


const mockSellers = [
  {
    id: "1",
    name: "The Local Café & Bistro",
    category: "Restaurant",
    rating: 4.8,
    reviewCount: 324,
    distance: "0.3 km",
    address: "123 Main Street, Downtown Area",
    phone: "+1 (555) 123-4567",
    website: "thelocalcafe.com",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
    description: "Cozy neighborhood bistro serving fresh, locally-sourced dishes and artisanal coffee",
    priceRange: "$$",
    isOpen: true,
    tags: ["Coffee", "Breakfast", "Lunch", "Local", "Organic"]
  },
  {
    id: "2", 
    name: "Tech Solutions Hub",
    category: "Technology",
    rating: 4.9,
    reviewCount: 156,
    distance: "0.8 km",
    address: "456 Innovation Drive, Tech District",
    phone: "+1 (555) 987-6543",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    description: "Professional IT services, computer repair, and tech consultations for businesses",
    priceRange: "$$$",
    isOpen: true,
    tags: ["IT Support", "Repair", "Consultation", "Business"]
  },
  {
    id: "3",
    name: "Bloom & Blossom Florist",
    category: "Retail",
    rating: 4.7,
    reviewCount: 89,
    distance: "1.2 km", 
    address: "789 Garden Lane, Flower District",
    phone: "+1 (555) 456-7890",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400",
    description: "Beautiful fresh flowers, custom arrangements, and garden supplies",
    priceRange: "$$",
    isOpen: false,
    tags: ["Flowers", "Weddings", "Events", "Gifts"]
  },
  {
    id: "4",
    name: "Fitness First Gym",
    category: "Health",
    rating: 4.6,
    reviewCount: 412,
    distance: "2.1 km",
    address: "321 Wellness Boulevard, Health Campus", 
    phone: "+1 (555) 234-5678",
    website: "fitnessfirstgym.com",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    description: "Modern fitness center with personal training, group classes, and wellness programs",
    priceRange: "$$",
    isOpen: true,
    tags: ["Gym", "Personal Training", "Classes", "Wellness"]
  }
];

const NearbyUser= () => {
  const [sellers, setSellers] = useState(mockSellers);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (location, category) => {
    setIsSearching(true);
    // Simulate search with loading
    setTimeout(() => {
      // Filter based on category if selected
      const filtered = category 
        ? mockSellers.filter(seller => 
            seller.category.toLowerCase() === category.toLowerCase()
          )
        : mockSellers;
      setSellers(filtered);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
    
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 opacity-95" />
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
         
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-float" />
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Find Local
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Charm
                  </span>
                </h1>
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-float" style={{ animationDelay: '1s' }} />
              </div>
              <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                Discover amazing sellers and services in your neighborhood. 
                Connect with local businesses that make your community special.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-white/80 animate-fade-in px-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">50K+ Sellers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">200+ Cities</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
                <span className="font-semibold text-sm sm:text-base">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="backdrop-blur-sm bg-white/95 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8">
          <LocationSearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {isSearching ? "Searching..." : "Local Sellers Near You"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Discover trusted local businesses in your area
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 bg-gray-50 rounded-full px-3 sm:px-4 py-2 w-fit">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              <span className="font-medium text-sm sm:text-base">{sellers.length} results found</span>
            </div>
          </div>
        </div>

        {isSearching ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 lg:p-6 animate-pulse">
                <div className="bg-gray-200 h-32 sm:h-40 lg:h-48 rounded-lg mb-3 sm:mb-4" />
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-gray-200 h-3 sm:h-4 rounded w-3/4" />
                  <div className="bg-gray-200 h-2 sm:h-3 rounded w-1/2" />
                  <div className="bg-gray-200 h-2 sm:h-3 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
    <div>
           
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {sellers.map((seller, index) => (
              <div 
                key={seller.id} 
                className="animate-fade-in transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SellerCard seller={seller} />
              </div>
            ))}
           
          </div>
           
           <div className="flex align-middle  items-center justify-center mt-8 md:mt-12">
              <div className="flex m-auto  items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm" className="border-violet-600 text-gray-400">
                  2
                </Button>
                <Button variant="outline" size="sm" className="border-violet-600 text-gray-400">
                  3
                </Button>
                <Button variant="outline" size="sm" className="border-violet-600 text-gray-400">
                  Next
                </Button>
              </div>
            </div>
    </div>

          
        )}

        {!isSearching && sellers.length === 0 && (
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 max-w-md mx-auto">
              <MapPin className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">No sellers found</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Try adjusting your search criteria or location
              </p>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300" 
                size="lg"
              >
                Search Again
              </Button>
            </div>
          </div>
        )}
      </section>



    </div>
  );
};

export default NearbyUser;