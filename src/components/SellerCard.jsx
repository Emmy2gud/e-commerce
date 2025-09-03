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
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-white hover-lift group cursor-pointer border-0 overflow-hidden">
      <div className="relative">
        <img
          src={seller.image}
          alt={seller.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 backdrop-blur-sm h-8 w-8 p-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? "text-red-500 fill-current" : "text-gray-500"}`} />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge 
            variant={seller.isOpen ? "default" : "secondary"}
            className={seller.isOpen ? "bg-accent text-white" : ""}
          >
            <Clock className="mr-1 h-3 w-3" />
            {seller.isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {seller.name}
            </h3>
        
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {renderStars(seller.rating)}
            </div>
            <span className="text-sm font-medium">{seller.rating}</span>
            <span className="text-sm text-muted-foreground">({seller.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Category & Distance */}
        <div className="flex items-center justify-between text-sm">
          <Badge variant="outline" className="text-xs border-0 bg-amber-500 text-white">
            {seller.category}
          </Badge>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-1 h-3 w-3" />
            {seller.distance}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {seller.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {seller.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
              {tag}
            </Badge>
          ))}
          {seller.tags.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{seller.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="bg-gradient-to-br from-purple-600 to-blue-600 text-white flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call
          </Button>
          {seller.website && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-1 border-gray-400"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="mr-2 h-4 w-4" />
              Visit
            </Button>
          )}
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 pt-2 border-t border-gray-400/50">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <span className="text-sm text-muted-foreground leading-relaxed">
            {seller.address}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SellerCard;