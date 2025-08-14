import React from "react";
import { CarouselDemo } from "../components/CarouselDemo";
import FilterPage from "../components/FilterPage";
import { AppWindowIcon, CodeIcon, DollarSign, Package, Quote, ShoppingCart, Store, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Grid, List, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BrandShowcase from "../components/BrandShowcase";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=200&width=200",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.3,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      badge: "New",
    },
    {
      id: 3,
      name: "Portable Phone Charger",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 256,
      image: "/placeholder.svg?height=200&width=200",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 24.99,
      rating: 4.2,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: 49.99,
      rating: 4.6,
      reviews: 143,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.4,
      reviews: 201,
      image: "/placeholder.svg?height=200&width=200",
      badge: "Popular",
    },
  ];
    const vendors = [
    {
      id: 1,
      name: "TechHub Electronics",
      logo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=center",
      rating: 4.8,
      reviewCount: 1250,
      category: "Electronics",
      description: "Your trusted electronics partner"
    },
    {
      id: 2,
      name: "Fashion Forward",
      logo: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop&crop=center",
      rating: 4.9,
      reviewCount: 890,
      category: "Fashion",
      description: "Trendy clothes for everyone"
    },
    {
      id: 3,
      name: "Home & Garden Co",
      logo: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=150&h=150&fit=crop&crop=center",
      rating: 4.7,
      reviewCount: 650,
      category: "Home & Garden",
      description: "Transform your living space"
    },
    {
      id: 4,
      name: "Sports Central",
      logo: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=150&h=150&fit=crop&crop=center",
      rating: 4.6,
      reviewCount: 420,
      category: "Sports",
      description: "Gear up for your next adventure"
    },
    {
      id: 5,
      name: "BookWorm Paradise",
      logo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=center",
      rating: 4.8,
      reviewCount: 320,
      category: "Books",
      description: "Knowledge at your fingertips"
    }
  ]

    const producttabs = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 245,
      image: "Product Image",
      seller: "TechStore Pro",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.8,
      reviews: 189,
      image: "Product Image",
      seller: "FitGear Plus",
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: 149.99,
      rating: 4.6,
      reviews: 312,
      image: "Product Image",
      seller: "HomeBrews",
      badge: "Trending"
    },
    {
      id: 4,
      name: "Portable Power Bank",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviews: 158,
      image: "Product Image",
      seller: "PowerTech",
      badge: "Sale"
    },
    {
      id: 5,
      name: "Wireless Gaming Mouse",
      price: 89.99,
      rating: 4.7,
      reviews: 203,
      image: "Product Image",
      seller: "GameZone",
      badge: "Gaming"
    },
    {
      id: 6,
      name: "Smart LED Desk Lamp",
      price: 59.99,
      rating: 4.4,
      reviews: 127,
      image: "Product Image",
      seller: "SmartHome Co",
      badge: "Eco-Friendly"
    },
        {
      id: 7,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.3,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      seller: "SmartHome Co",
    
      badge: "New",
    },
    {
      id: 8,
      name: "Portable Phone Charger",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 256,
      image: "/placeholder.svg?height=200&width=200",
      badge: "Sale",
    },
  ];



  return (
    <div className="w-full">
      <header className="w-full py-8 ">
        <CarouselDemo />
      </header>
      <main>
        <section>
          <FilterPage />
        </section>

        <section>
          <div className="min-h-screen bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-purple-500 w-fit px-8 py-1 rounded-lg mb-15 ">
                <a href="" className="text-lg text-white">
                  View All
                </a>
              </div>

              <div className="flex w-full  max-w-full flex-col gap-6 ">
                <Tabs defaultValue="featured">
                  <TabsList className="bg-white m-auto p-2 shadow-md rounded-4xl   flex justify-between items-center h-12 ">
                    <TabsTrigger
                      value="featured"
                      className="font-medium text-md text-gray-400  rounded-4xl text-xs"
                    >
                      Featured
                    </TabsTrigger>
                    <TabsTrigger
                      value="sellers"
                      className="font-medium text-md text-gray-400   rounded-4xl text-sm"
                    >
                      Best Sellers
                    </TabsTrigger>
                    <TabsTrigger
                      value="arrivals"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      New Arrivals
                    </TabsTrigger>
                    <TabsTrigger
                      value="sales"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      On Sale
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="featured" className="">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {products.map((product) => (
                          <CarouselItem
                            key={product.id}
                            className="pl-4 basis-1/1 sm:basis-1/3 lg:basis-1/4  mb-15"
                          >
                            <Card className="group bg-white cursor-pointer hover:shadow-lg mt-8  transition-shadow border-none shadow-sm shadow-gray-400 h-full min-h-[400px] w-full ">
                              <CardContent className="p-4">
                                <div className="relative mb-4">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                                  />
                                  {product.badge && (
                                    <Badge
                                      className={`absolute top-2 left-2 ${
                                        product.badge === "Sale"
                                          ? "bg-red-500"
                                          : product.badge === "New"
                                          ? "bg-green-500"
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
                                  <Button
                                    size="sm"
                                    className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 px-4 py-1 text-xs"
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="sellers">
                    {/* ... password content remains the same ... */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-purple-500 w-fit px-8 py-1 rounded-lg mb-15 ">
                <a href="" className="text-lg text-white">
                  Electronics
                </a>
              </div>

              <div className="flex w-full  max-w-full flex-col gap-6 ">
                <Tabs defaultValue="featured">
                  <TabsList className="bg-white m-auto p-2 shadow-md rounded-4xl   flex justify-between items-center h-12 ">
                    <TabsTrigger
                      value="featured"
                      className="font-medium text-md text-gray-400  rounded-4xl text-xs"
                    >
                      Featured
                    </TabsTrigger>
                    <TabsTrigger
                      value="sellers"
                      className="font-medium text-md text-gray-400   rounded-4xl text-sm"
                    >
                      Best Sellers
                    </TabsTrigger>
                    <TabsTrigger
                      value="arrivals"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      New Arrivals
                    </TabsTrigger>
                    <TabsTrigger
                      value="sales"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      On Sale
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="featured" className="">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {products.map((product) => (
                          <CarouselItem
                            key={product.id}
                            className="pl-4 basis-1/1 sm:basis-1/3 lg:basis-1/4  mb-15"
                          >
                            <Card className="group bg-white cursor-pointer hover:shadow-lg mt-8  transition-shadow border-none shadow-sm shadow-gray-400 h-full min-h-[400px] w-full ">
                              <CardContent className="p-4">
                                <div className="relative mb-4">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                                  />
                                  {product.badge && (
                                    <Badge
                                      className={`absolute top-2 left-2 ${
                                        product.badge === "Sale"
                                          ? "bg-red-500"
                                          : product.badge === "New"
                                          ? "bg-green-500"
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
                                  <Button
                                    size="sm"
                                    className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 px-4 py-1 text-xs"
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="sellers">
                    {/* ... password content remains the same ... */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
     
        <section>
          <div className="min-h-screen bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-purple-500 w-fit px-8 py-1 rounded-lg mb-15 ">
                <a href="" className="text-lg text-white">
                  Home & Living
                </a>
              </div>

              <div className="flex w-full  max-w-full flex-col gap-6 ">
                <Tabs defaultValue="featured">
                  <TabsList className="bg-white m-auto p-2 shadow-md rounded-4xl   flex justify-between items-center h-12 ">
                    <TabsTrigger
                      value="featured"
                      className="font-medium text-md text-black  rounded-4xl text-xs"
                    >
                      Featured
                    </TabsTrigger>
                    <TabsTrigger
                      value="sellers"
                      className="font-medium  text-md text-gray-400   rounded-4xl text-sm"
                    >
                      Best Sellers
                    </TabsTrigger>
                    <TabsTrigger
                      value="arrivals"
                      className="font-medium  text-md text-gray-400  rounded-4xl text-sm"
                    >
                      New Arrivals
                    </TabsTrigger>
                    <TabsTrigger
                      value="sales"
                      className="font-medium  text-md text-gray-400  rounded-4xl text-sm"
                    >
                      On Sale
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="featured" className="">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {products.map((product) => (
                          <CarouselItem
                            key={product.id}
                            className="pl-4 basis-1/1 sm:basis-1/3 lg:basis-1/4  mb-15"
                          >
                            <Card className="group bg-white cursor-pointer hover:shadow-lg mt-8  transition-shadow border-none shadow-sm shadow-gray-400 h-full min-h-[400px] w-full ">
                              <CardContent className="p-4">
                                <div className="relative mb-4">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                                  />
                                  {product.badge && (
                                    <Badge
                                      className={`absolute top-2 left-2 ${
                                        product.badge === "Sale"
                                          ? "bg-red-500"
                                          : product.badge === "New"
                                          ? "bg-green-500"
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
                                  <Button
                                    size="sm"
                                    className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 px-4 py-1 text-xs"
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="sellers">
                    {/* ... password content remains the same ... */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
               <section>
          <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-purple-500 w-fit px-8 py-1 rounded-lg mb-15 ">
                <a href="" className="text-lg text-white">
                  Fashion
                </a>
              </div>

              <div className="flex w-full  max-w-full flex-col gap-6 ">
                <Tabs defaultValue="featured">
                  <TabsList className="bg-white m-auto p-2 shadow-md rounded-4xl   flex justify-between items-center h-12 ">
                    <TabsTrigger
                      value="featured"
                      className="font-medium text-md text-gray-400  rounded-4xl text-xs"
                    >
                      Featured
                    </TabsTrigger>
                    <TabsTrigger
                      value="sellers"
                      className="font-medium text-md text-gray-400   rounded-4xl text-sm"
                    >
                      Best Sellers
                    </TabsTrigger>
                    <TabsTrigger
                      value="arrivals"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      New Arrivals
                    </TabsTrigger>
                    <TabsTrigger
                      value="sales"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      On Sale
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="featured" className="">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {products.map((product) => (
                          <CarouselItem
                            key={product.id}
                            className="pl-4 basis-1/1 sm:basis-1/3 lg:basis-1/4  mb-15"
                          >
                            <Card className="group bg-white cursor-pointer hover:shadow-lg mt-8  transition-shadow border-none shadow-sm shadow-gray-400 h-full min-h-[400px] w-full ">
                              <CardContent className="p-4">
                                <div className="relative mb-4">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                                  />
                                  {product.badge && (
                                    <Badge
                                      className={`absolute top-2 left-2 ${
                                        product.badge === "Sale"
                                          ? "bg-red-500"
                                          : product.badge === "New"
                                          ? "bg-green-500"
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
                                  <Button
                                    size="sm"
                                    className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 px-4 py-1 text-xs"
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="sellers">
                    {/* ... password content remains the same ... */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

           <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing products from trusted sellers worldwide. Quality guaranteed, fast delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {producttabs.map((product) => (
             <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow  border-none shadow-sm shadow-gray-400">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform"
                      />
                      {product.badge && (
                        <Badge
                          className={`absolute top-2 left-2 ${
                            product.badge === "Sale"
                              ? "bg-red-500"
                              : product.badge === "New"
                                ? "bg-green-500"
                                : "bg-blue-500"
                          }`}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                     
                     <Button size="sm" className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400">Add to Cart</Button>
                  
                      
                    </div>
                  </CardContent>
                </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={`/productlists`}>
                    <Button variant="outline" className="bg-purple-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 border-0 text-white">
            View All Products
          </Button>
          </Link>

        </div>
      </div>
    </section>
        <section>
          <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-purple-500 w-fit px-8 py-1 rounded-lg mb-15 ">
                <a href="" className="text-lg text-white">
               Top Rated Products
                </a>
              </div>

              <div className="flex w-full  max-w-full flex-col gap-6 ">
                <Tabs defaultValue="featured">
                  <TabsList className="bg-white m-auto p-2 shadow-md rounded-4xl   flex justify-between items-center h-12 ">
                    <TabsTrigger
                      value="featured"
                      className="font-medium text-md text-gray-400  rounded-4xl text-xs"
                    >
                      Featured
                    </TabsTrigger>
                    <TabsTrigger
                      value="sellers"
                      className="font-medium text-md text-gray-400   rounded-4xl text-sm"
                    >
                      Best Sellers
                    </TabsTrigger>
                    <TabsTrigger
                      value="arrivals"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      New Arrivals
                    </TabsTrigger>
                    <TabsTrigger
                      value="sales"
                      className="font-medium text-md text-gray-400  rounded-4xl text-sm"
                    >
                      On Sale
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="featured" className="">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {products.map((product) => (
                          <CarouselItem
                            key={product.id}
                            className="pl-4 basis-1/1 sm:basis-1/3 lg:basis-1/4  mb-15"
                          >
                            <Card className="group bg-white cursor-pointer hover:shadow-lg mt-8  transition-shadow border-none shadow-sm shadow-gray-400 h-full min-h-[400px] w-full ">
                              <CardContent className="p-4">
                                <div className="relative mb-4">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                                  />
                                  {product.badge && (
                                    <Badge
                                      className={`absolute top-2 left-2 ${
                                        product.badge === "Sale"
                                          ? "bg-red-500"
                                          : product.badge === "New"
                                          ? "bg-green-500"
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
                                  <Button
                                    size="sm"
                                    className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 px-4 py-1 text-xs"
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="sellers">
                    {/* ... password content remains the same ... */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

 
 <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-bold text-gray-900 mb-4">
            Featured Vendors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated sellers offering quality products and exceptional service
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {vendors.map((vendor) => (
                <CarouselItem key={vendor.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white rounded-lg shadow-sm">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                      
                        <div className="mx-auto w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                          <img
                            src={vendor.logo}
                            alt={`${vendor.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                       
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {vendor.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {vendor.description}
                          </p>
                          <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            {vendor.category}
                          </span>
                        </div>

                     
                        <div className="flex items-center justify-center space-x-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(vendor.rating) ? 'fill-current' : ''
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            {vendor.rating} ({vendor.reviewCount} reviews)
                          </span>
                        </div>
   <Link to={`/vendor`} className="text-purple-600 hover:underline">
                           <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold flex items-center justify-center space-x-2 mt-4">
                          <Store className="w-4 h-4 mr-2" />
                          Visit Store
                        </Button>
   </Link>
                        

                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>

    <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Official Stores</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium products from the world's leading technology brands
          </p>
        </div>
        
        <BrandShowcase/>
      </div>

      
      </main>
    </div>
  );
};

export default Home;
