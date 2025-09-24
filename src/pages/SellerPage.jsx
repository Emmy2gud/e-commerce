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
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                      {vendor.name}
                    </h1>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 w-fit"
                    >
                      Verified
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(vendor.rating)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {vendor.rating} ({vendor.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Store className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Since {vendor.joinedDate}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{vendor.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{vendor.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{vendor.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{vendor.email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-2 w-full sm:w-auto">
                  <button className="flex bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-purple-700 text-white justify-center items-center px-3 sm:px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow text-sm">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white" />
                    Follow Store
                  </button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 px-3 sm:px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-sm"
                  >
                    <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Share Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-0 py-6 sm:py-9">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  {vendor.totalProducts}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Total Products</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 py-6 sm:py-9">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {vendor.rating}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Store Rating</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 py-6 sm:py-9">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">
                  {vendor.reviewCount}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Reviews</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 py-6 sm:py-9">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Active</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {vendor.categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-2 sm:px-4 py-1 sm:py-2 cursor-pointer hover:bg-purple-300 border-1 border-gray-300 text-gray-700 hover:text-purple-600 transition-colors text-xs sm:text-sm"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-shadow border-0 group"
                >
                  <CardContent className="p-2 sm:p-3 lg:p-4">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-sm">
                          <span className="text-white font-semibold text-xs sm:text-sm">
                            Out of Stock
                          </span>
                        </div>
                      )}
                      {product.originalPrice && (
                        <Badge className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-red-500 text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">
                          Sale
                        </Badge>
                      )}
                    </div>

                    <div className="p-2 sm:p-3 lg:p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 text-xs sm:text-sm lg:text-base">
                        {product.name}
                      </h3>

                      <div className="flex items-center mb-1 sm:mb-2">
                        <div className="flex text-yellow-400 mr-1 sm:mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
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

                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                          <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs sm:text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm py-1 sm:py-2"
                        disabled={!product.inStock}
                        variant={product.inStock ? "default" : "secondary"}
                      >
                        <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
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

            {/* Customer Reviews Section */}
            <div className="mt-16">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Customer Reviews
                </h2>
                
                {/* Reviews Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-1">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">
                        {vendor.rating}
                      </div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(vendor.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">
                        Based on {vendor.reviewCount} reviews
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage = rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 3 : rating === 2 ? 1 : 1;
                        return (
                          <div key={rating} className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600 w-8">{rating}</span>
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {[
                    {
                      id: 1,
                      name: "Sarah Johnson",
                      rating: 5,
                      date: "2 weeks ago",
                      review: "Excellent service and fast delivery! The iPhone I ordered arrived in perfect condition and exactly as described. TechHub Electronics is definitely my go-to store for electronics.",
                      verified: true,
                      helpful: 12
                    },
                    {
                      id: 2,
                      name: "Michael Chen",
                      rating: 4,
                      date: "1 month ago",
                      review: "Great selection of products and competitive prices. Had a small issue with my order but customer service resolved it quickly. Will shop here again.",
                      verified: true,
                      helpful: 8
                    },
                    {
                      id: 3,
                      name: "Emma Wilson",
                      rating: 5,
                      date: "3 weeks ago",
                      review: "Amazing quality products! I've been shopping here for over a year and they never disappoint. The MacBook Pro I bought is working perfectly.",
                      verified: true,
                      helpful: 15
                    }
                  ].map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              {review.verified && (
                                <Badge className="bg-green-100 text-green-800 text-xs px-2 py-0.5">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                        {review.review}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600 text-xs sm:text-sm">
                          👍 Helpful ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600 text-xs sm:text-sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Reviews */}
                <div className="text-center mt-8">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Load More Reviews
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
