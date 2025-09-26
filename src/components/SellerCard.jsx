import { useState } from "react";
import { Star, MapPin, Clock, Phone, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";



const SellerCard = ({ seller }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 sm:h-4 sm:w-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-white hover:shadow-xl group cursor-pointer border border-gray-100 overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={seller.image}
          alt={seller.name}
          className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2">
          <Button
            size="sm"
            className="bg-white/90 backdrop-blur-sm h-6 w-6 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-white shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
          >
            <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${
              isFavorited ? "text-red-500 fill-current" : "text-gray-600"
            }`} />
          </Button>
        </div>
        
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
          <Badge 
            className={`text-xs sm:text-sm px-2 py-1 rounded-full font-medium ${
              seller.isOpen 
                ? "bg-green-500 text-white shadow-lg" 
                : "bg-gray-500 text-white"
            }`}
          >
            <Clock className="mr-1 h-2 w-2 sm:h-3 sm:w-3" />
            {seller.isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
      </div>

      <CardContent className="p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3">
        {/* Header */}
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 group-hover:text-purple-600 transition-colors leading-tight line-clamp-2">
              {seller.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="flex items-center">
              {renderStars(seller.rating)}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-900">{seller.rating}</span>
            <span className="text-xs text-gray-500 truncate">({seller.reviewCount})</span>
          </div>
        </div>

        {/* Category & Distance */}
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <Badge className="text-xs px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 rounded-full font-medium">
            {seller.category}
          </Badge>
          <div className="flex items-center text-gray-500">
            <MapPin className="mr-1 h-3 w-3" />
            <span className="text-xs font-medium">{seller.distance}</span>
          </div>
        </div>

        {/* Description - Only show on larger screens */}
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 hidden sm:block leading-relaxed">
          {seller.description}
        </p>

        {/* Tags - Responsive */}
        <div className="flex flex-wrap gap-1">
          {seller.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full border-0">
              {tag}
            </Badge>
          ))}
          {seller.tags.length > 2 && (
            <Badge className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full border-0">
              +{seller.tags.length - 2}
            </Badge>
          )}
        </div>

        {/* Actions - Responsive */}
        <div className="flex gap-1 sm:gap-2 pt-1 sm:pt-2">
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white flex-1 text-xs sm:text-sm py-1 sm:py-2 rounded-lg hover:shadow-lg transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Call</span>
            <span className="sm:hidden">📞</span>
          </Button>
          {seller.website && (
            <Button 
              size="sm" 
              className="flex-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-xs sm:text-sm py-1 sm:py-2 rounded-lg transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Visit</span>
              <span className="sm:hidden">🌐</span>
            </Button>
          )}
        </div>

        {/* Address - Compact on mobile */}
        <div className="flex items-start gap-1 sm:gap-2 pt-1 sm:pt-2 border-t border-gray-100">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
            {seller.address}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SellerCard;