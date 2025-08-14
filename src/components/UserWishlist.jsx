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
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <CardTitle>Wishlist</CardTitle>
          <Badge variant="secondary">{wishlistItems.length} items</Badge>
        </div>
        <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-900 borde border-gray-300">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex space-x-4">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  {item.discount && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0">
                      {item.discount}
                    </Badge>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm truncate">{item.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-lg font-semibold text-gray-900">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                      <Badge 
                        variant={item.inStock ? "secondary" : "destructive"} 
                        className="mt-2 text-xs"
                      >
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex space-x-2 mt-3 ">
                    <Button size="sm" className="flex-1 h-8 bg-black  rounded-lg p-1 text-white" disabled={!item.inStock}>
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 px-2 border border-gray-300 text-gray-600 hover:text-gray-900">
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
