import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  ShoppingCart,
  Star,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function SellerPage() {
  const vendor = {
    name: "TechHub Electronics",
    logo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=center",
    banner:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 1250,
    description:
      "Your trusted electronics partner for over 10 years. We specialize in the latest gadgets, computers, and electronic accessories.",
    location: "Lagos, Nigeria",
    phone: "+234 123 456 7890",
    email: "contact@techhub.com",
    joinedDate: "2019",
    totalProducts: 245,
    categories: ["Smartphones", "Laptops", "Accessories", "Gaming", "Audio"],
  };

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "₦1,200,000",
      originalPrice: "₦1,350,000",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      inStock: true,
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: "₦2,850,000",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      inStock: true,
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: "₦385,000",
      originalPrice: "₦420,000",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      reviews: 67,
      inStock: false,
    },
    {
      id: 4,
      name: "Gaming Headset",
      price: "₦125,000",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
      reviews: 43,
      inStock: true,
    },
    {
      id: 5,
      name: "iPhone 15 Pro Max",
      price: "₦1,200,000",
      originalPrice: "₦1,350,000",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      inStock: true,
    },
    {
      id: 6,
      name: "MacBook Pro M3",
      price: "₦2,850,000",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      inStock: true,
    },
    {
      id: 7,
      name: "AirPods Pro",
      price: "₦385,000",
      originalPrice: "₦420,000",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      reviews: 67,
      inStock: false,
    },
    {
      id: 8,
      name: "Gaming Headset",
      price: "₦125,000",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
      reviews: 43,
      inStock: true,
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div className="relative">
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${vendor.banner})` }}
          >
            <div className="absolute inset-0  bg-opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 relative -mt-20">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {vendor.name}
                    </h1>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Verified
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(vendor.rating)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {vendor.rating} ({vendor.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Store className="w-4 h-4 mr-1" />
                      Since {vendor.joinedDate}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{vendor.description}</p>


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {vendor.location}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {vendor.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {vendor.email}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button className="flex bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-purple-700 text-white justify-center items-center px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <Heart className="w-4 h-4 mr-2 text-white" />
                    Follow Store
                  </button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-0 py-9">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {vendor.totalProducts}
                </div>
                <div className="text-sm text-gray-600">Total Products</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 py-9">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {vendor.rating}
                </div>
                <div className="text-sm text-gray-600">Store Rating</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 py-9">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {vendor.reviewCount}
                </div>
                <div className="text-sm text-gray-600">Reviews</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 py-9">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-600">Years Active</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              {vendor.categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-purple-300 border-1 border-gray-300 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-shadow border-0 py-9"
                >
                  <CardContent className="p-2 py-0 rounded-full">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-sm">
                          <span className="text-white font-semibold">
                            Out of Stock
                          </span>
                        </div>
                      )}
                      {product.originalPrice && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          Sale
                        </Badge>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? "fill-current"
                                  : ""
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold text-gray-900">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white "
                        disabled={!product.inStock}
                        variant={product.inStock ? "default" : "secondary"}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

                        {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
