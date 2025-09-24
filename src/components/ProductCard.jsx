import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, className = "" }) => {
  return (
    <Card className={`group bg-white cursor-pointer hover:shadow-lg transition-all duration-300 border-none shadow-sm shadow-gray-300 hover:shadow-gray-400 min-h-[320px] sm:min-h-[380px] md:min-h-[400px] w-full ${className}`}>
      <CardContent className="p-3 sm:p-4 h-full flex flex-col">
        <div className="relative mb-3 sm:mb-4 flex-shrink-0">
          <img
            src={product.image || "/api/placeholder/400/300"}
            alt={product.name}
            className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <Badge
              className={`absolute text-white top-2 left-2 text-xs px-2 py-1 font-medium ${
                product.badge === "Sale"
                  ? "bg-red-500"
                  : product.badge === "New" || product.badge === "New Arrival"
                  ? "bg-green-500"
                  : product.badge === "Best Seller"
                  ? "bg-blue-500"
                  : product.badge === "Popular"
                  ? "bg-orange-500"
                  : product.badge === "Trending"
                  ? "bg-pink-500"
                  : product.badge === "Gaming"
                  ? "bg-indigo-500"
                  : product.badge === "Eco-Friendly"
                  ? "bg-emerald-500"
                  : "bg-blue-500"
              }`}
            >
              {product.badge}
            </Badge>
          )}
        </div>
        
        <div className="flex flex-col flex-grow">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2 sm:mb-3 flex-shrink-0">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600 ml-1">
              ({product.reviews})
            </span>
          </div>
          
          {product.seller && (
            <p className="text-xs text-gray-500 mb-2 flex-shrink-0">
              by {product.seller}
            </p>
          )}
          
          <div className="mt-auto pt-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              
              <Button
                size="sm"
                className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-500 transition-colors px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm flex-shrink-0"
                onClick={() => {
                  // Handle add to cart
                  console.log('Add to cart:', product.id);
                }}
              >
                <span className="hidden sm:inline">Add to Cart</span>
                <span className="sm:hidden">Add</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;