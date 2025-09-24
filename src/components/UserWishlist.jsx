import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye, X } from "lucide-react";

const UserWishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      price: "$299.99",
      originalPrice: "$399.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      discount: "25% OFF",
      inStock: true
    },
    {
      id: 2,
      name: "Premium Leather Backpack",
      price: "$189.50",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      inStock: true
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: "$249.99",
      originalPrice: "$329.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      discount: "24% OFF",
      inStock: false
    },
    {
      id: 4,
      name: "Ceramic Coffee Mug Set",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
      inStock: true
    }
  ];

  return (
    <Card className="bg-white shadow-lg border border-gray-200">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
          <CardTitle className="text-base sm:text-lg">Wishlist</CardTitle>
          <Badge variant="secondary" className="text-xs px-2 py-1">{wishlistItems.length} items</Badge>
        </div>
        <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-900 border border-gray-300 text-xs sm:text-sm px-3 py-1 w-full sm:w-auto">
          View All
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors min-h-[140px] sm:min-h-[160px]">
              <div className="flex space-x-3 sm:space-x-4 h-full">
                <div className="relative flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                  />
                  {item.discount && (
                    <Badge className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs px-1 py-0.5">
                      {item.discount}
                    </Badge>
                  )}
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2 leading-tight mb-1">{item.name}</h3>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                        <span className="text-base sm:text-lg font-semibold text-gray-900">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                      <Badge 
                        variant={item.inStock ? "secondary" : "destructive"} 
                        className="text-xs px-2 py-0.5 w-fit"
                      >
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    >
                      <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                  <div className="flex space-x-2 mt-auto pt-2">
                    <Button size="sm" className="flex-1 h-7 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white text-xs" disabled={!item.inStock}>
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 sm:h-8 px-2 border border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                      <Eye className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserWishlist;
