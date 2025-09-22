import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, className = "" }) => {
  return (
    <Card className={`group bg-white cursor-pointer hover:shadow-lg transition-shadow border-none shadow-sm shadow-gray-400 min-h-[400px] w-full ${className}`}>
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
          />
          {product.badge && (
            <Badge
              className={`absolute text-white top-2 left-2 ${
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
        <h3 className="font-semibold text-gray-900 mb-2 text-base line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">
            ({product.reviews})
          </span>
        </div>
        {product.seller && (
          <p className="text-xs text-gray-500 mb-2">by {product.seller}</p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Link to={`product/${product.id}`}>
          <Button
            size="sm"
            className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 px-4 py-1 text-xs"
          >
            Add to Cart
          </Button>
          </Link>

        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;