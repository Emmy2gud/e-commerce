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
    <div className="min-h-screen bg-gray-100">
    
      <section className="relative overflow-hidden">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white  opacity-90" />
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
         
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-8 w-8 text-white animate-float" />
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  Find Local
                  <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                    Charm
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Discover amazing sellers and services in your neighborhood. 
                Connect with local businesses that make your community special.
              </p>
            </div>

          
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 animate-fade-in">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">50K+ Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">200+ Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="font-semibold">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <LocationSearch onSearch={handleSearch} />
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-foreground">
              {isSearching ? "Searching..." : "Local Sellers Near You"}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5" />
              <span>{sellers.length} results found</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Discover trusted local businesses in your area
          </p>
        </div>

        {isSearching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
                <div className="bg-muted h-48 rounded-lg mb-4" />
                <div className="space-y-3">
                  <div className="bg-muted h-4 rounded w-3/4" />
                  <div className="bg-muted h-3 rounded w-1/2" />
                  <div className="bg-muted h-3 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sellers.map((seller, index) => (
              <div 
                key={seller.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SellerCard seller={seller} />
              </div>
            ))}
          </div>
        )}

        {!isSearching && sellers.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No sellers found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or location
            </p>
            <Button variant="gradient" size="lg">
              Search Again
            </Button>
          </div>
        )}
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Categories</h2>
          <p className="text-muted-foreground">Discover businesses across various categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {[
            { name: "Restaurants", icon: "🍽️", count: "1,200+" },
            { name: "Technology", icon: "💻", count: "450+" },
            { name: "Health", icon: "🏥", count: "680+" },
            { name: "Retail", icon: "🛍️", count: "890+" },
            { name: "Beauty", icon: "💄", count: "320+" },
            { name: "Services", icon: "🔧", count: "750+" }
          ].map((category) => (
            <div key={category.name} className="glass-card p-6 rounded-2xl text-center hover-scale cursor-pointer bg-white">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default NearbyUser;