import React from "react";
import { CarouselDemo } from "../components/CarouselDemo";
import FilterPage from "../components/FilterPage";
import ProductCard from "../components/ProductCard";
import ProductSection from "../components/ProductSection";
import {
  AppWindowIcon,
  CodeIcon,
  DollarSign,
  Package,
  Quote,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Gift,
  ArrowRight,
  Percent,
  Tag,
} from "lucide-react";
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
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f27f1259-0fc2-48e0-9a16-62b5860bb59e.__CR0,0,400,450_PT0_SX200_V1___.jpg", // Soundcore Life Q30
      productUrl: "https://www.soundcore.com/headphones/life-q30",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.3,
      reviews: 89,
      image:
        "https://uk.amazfit.com/cdn/shop/products/8_5a2a2c34-dd49-4d4d-964f-2b861a1dbd9d_1024x1024.png?v=1666236736", // Amazfit Bip 3 Pro
      productUrl: "https://uk.amazfit.com/products/amazfit-bip-3-pro",
      badge: "New",
    },
    {
      id: 3,
      name: "Portable Phone Charger",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 256,
      image:
        "https://cdn.shopify.com/s/files/1/0695/6531/7291/files/A1229011_3840x.jpg?v=1746693255", // Anker 313 Power Bank (PowerCore 10K)
      productUrl: "https://www.anker.com/nz/products/a1229",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 24.99,
      rating: 4.2,
      reviews: 67,
      image:
        "https://resource.logitech.com/w_544%2Ch_466%2Car_7%3A6%2Cc_pad%2Cq_auto%2Cf_auto%2Cdpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/pebble-mouse-2-m350s/gallery/pebble-mouse-2-m350s-top-tonal-white-gallery.png", // Logitech Pebble Mouse 2 M350s
      productUrl:
        "https://www.logitech.com/en-us/products/mice/pebble-mouse-2-m350s.html",
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: 49.99,
      rating: 4.6,
      reviews: 143,
      image:
        "https://www.anker.com/_next/static/media/au-da34-10-usba.c9b5be75.png", // Anker 341 USB-C Hub (10-in-1)
      productUrl: "https://www.anker.com/au/products/a8346",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.4,
      reviews: 201,
      image:
        "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9d65e712/JBL_Flip6_Product%20Image_Hero_Black.png", // JBL Flip 6
      productUrl: "https://www.jbl.com/FLIP-6-.html",
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
      description: "Your trusted electronics partner",
    },
    {
      id: 2,
      name: "Fashion Forward",
      logo: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop&crop=center",
      rating: 4.9,
      reviewCount: 890,
      category: "Fashion",
      description: "Trendy clothes for everyone",
    },
    {
      id: 3,
      name: "Home & Garden Co",
      logo: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=150&h=150&fit=crop&crop=center",
      rating: 4.7,
      reviewCount: 650,
      category: "Home & Garden",
      description: "Transform your living space",
    },
    {
      id: 4,
      name: "Sports Central",
      logo: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=150&h=150&fit=crop&crop=center",
      rating: 4.6,
      reviewCount: 420,
      category: "Sports",
      description: "Gear up for your next adventure",
    },
    {
      id: 5,
      name: "BookWorm Paradise",
      logo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=center",
      rating: 4.8,
      reviewCount: 320,
      category: "Books",
      description: "Knowledge at your fingertips",
    },
  ];

  const producttabs = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 245,
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
      seller: "TechStore Pro",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.8,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop&crop=center",
      seller: "FitGear Plus",
      badge: "New Arrival",
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: 149.99,
      rating: 4.6,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&crop=center",
      seller: "HomeBrews",
      badge: "Trending",
    },
    {
      id: 4,
      name: "Portable Power Bank",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviews: 158,
      image:
        "https://images.unsplash.com/photo-1606979421229-6da4662b36fc?w=400&h=400&fit=crop&crop=center",
      seller: "PowerTech",
      badge: "Sale",
    },
    {
      id: 5,
      name: "Wireless Gaming Mouse",
      price: 89.99,
      rating: 4.7,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1563297007-0686b83bf36e?w=400&h=400&fit=crop&crop=center",
      seller: "GameZone",
      badge: "Gaming",
    },
    {
      id: 6,
      name: "Smart LED Desk Lamp",
      price: 59.99,
      rating: 4.4,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop&crop=center",
      seller: "SmartHome Co",
      badge: "Eco-Friendly",
    },
    {
      id: 7,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.3,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&crop=center",
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
      image:
        "https://images.unsplash.com/photo-1588208292563-1acd97029049?w=400&h=400&fit=crop&crop=center",
      seller: "SmartHome Co",
      badge: "Sale",
    },
  ];

  return (
    <div className="w-full">
      <header className="w-full py-4 md:py-8 px-4 sm:px-6 lg:px-8">
        <CarouselDemo />
      </header>
      <main>
        <section className="px-4 sm:px-6  ">
          <FilterPage />
        </section>

        {/* Discount Sales Banner Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-20 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6 sm:space-y-8">
                {/* Flash Sale Badge */}
                <div className="flex justify-center lg:justify-start">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 text-sm sm:text-base rounded-full shadow-lg animate-pulse">
                    <Zap className="w-4 h-4 mr-2" />
                    FLASH SALE
                  </Badge>
                </div>
                
                {/* Main Heading */}
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    <span className="block">Save Up to</span>
                    <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      70% OFF
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-purple-100 max-w-md mx-auto lg:mx-0 leading-relaxed">
                    Limited time offer on electronics, fashion, and home essentials. Don't miss out!
                  </p>
                </div>
                
                {/* Timer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-300" />
                    <span className="text-white font-semibold text-sm sm:text-base">Sale Ends In:</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {['12', '05', '32', '45'].map((time, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{time}</div>
                        <div className="text-xs text-purple-200">
                          {['Days', 'Hours', 'Mins', 'Secs'][index]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link to="/productlists">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <Gift className="w-5 h-5 mr-2" />
                      Shop Sale Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300">
                    <Percent className="w-5 h-5 mr-2" />
                    View All Deals
                  </Button>
                </div>
              </div>
              
              {/* Right Content - Product Showcase */}
              <div className="relative mt-8 lg:mt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {/* Featured Deal Products */}
                  {[
                    {
                      name: "Wireless Headphones",
                      originalPrice: "$199",
                      salePrice: "$59",
                      discount: "70%",
                      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop"
                    },
                    {
                      name: "Smart Watch",
                      originalPrice: "$299",
                      salePrice: "$119",
                      discount: "60%",
                      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop"
                    },
                    {
                      name: "Gaming Mouse",
                      originalPrice: "$89",
                      salePrice: "$35",
                      discount: "61%",
                      image: "https://images.unsplash.com/photo-1563297007-0686b83bf36e?w=400&h=400&fit=crop"
                    },
                    {
                      name: "Power Bank",
                      originalPrice: "$59",
                      salePrice: "$19",
                      discount: "68%",
                      image: "https://images.unsplash.com/photo-1606979421229-6da4662b36fc?w=400&h=400&fit=crop"
                    }
                  ].map((product, index) => (
                    <div key={index} className="group relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      {/* Discount Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full shadow-lg z-10">
                        -{product.discount} OFF
                      </div>
                      
                      {/* Product Image */}
                      <div className="aspect-square bg-white/20 rounded-lg sm:rounded-xl mb-2 sm:mb-3 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="text-center space-y-1 sm:space-y-2">
                        <h4 className="text-white font-semibold text-xs sm:text-sm lg:text-base line-clamp-2">
                          {product.name}
                        </h4>
                        <div className="space-y-1">
                          <div className="text-xs sm:text-sm text-purple-200 line-through">
                            {product.originalPrice}
                          </div>
                          <div className="text-sm sm:text-lg lg:text-xl font-bold text-yellow-300">
                            {product.salePrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-black p-2 sm:p-3 rounded-full shadow-xl animate-bounce hidden sm:block">
                  <Tag className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white p-2 sm:p-3 rounded-full shadow-xl animate-pulse hidden sm:block">
                  <Gift className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
            
            {/* Bottom Stats */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
                {[
                  { icon: Users, label: "Happy Customers", value: "50K+" },
                  { icon: Package, label: "Products on Sale", value: "10K+" },
                  { icon: TrendingUp, label: "Average Savings", value: "65%" },
                  { icon: Clock, label: "Sale Duration", value: "48H" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto" />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

    
        <ProductSection
          title="View All"
          products={products}
          backgroundColor="bg-gray-200"
          linkTo="productlists"
          showTabs={true}
        />


        <ProductSection
          title="Electronics"
          products={products}
          backgroundColor="bg-white"
          linkTo="/electronics"
          showTabs={true}
        />

      
        <ProductSection
          title="Home & Living"
          products={products}
          backgroundColor="bg-gray-200"
          linkTo="/home-living"
          showTabs={true}
        />


        <ProductSection
          title="Fashion"
          products={products}
          backgroundColor="bg-white"
          linkTo="/fashion"
          showTabs={true}
        />

        {/* Featured Products Grid Section */}
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Discover amazing products from trusted sellers worldwide.
                Quality guaranteed, fast delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {producttabs.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link to="productlists">
                <Button
                  variant="outline"
                  className="bg-purple-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 border-0 text-white"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Top Rated Products Section */}
        <ProductSection
          title="Top Rated Products"
          products={products}
          backgroundColor="bg-white"
          linkTo="/top-rated"
          showTabs={true}
        />

        {/* Featured Vendors Section - Enhanced with responsive design */}
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Featured Vendors
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our top-rated sellers offering quality products and
                exceptional service
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
                    <CarouselItem
                      key={vendor.id}
                      className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white rounded-lg shadow-sm">
                        <CardContent className="p-4 md:p-6">
                          <div className="text-center space-y-3 md:space-y-4">
                            <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-100">
                              <img
                                src={vendor.logo}
                                alt={`${vendor.name} logo`}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div>
                              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                                {vendor.name}
                              </h3>
                              <p className="text-xs md:text-sm text-gray-600 mb-2">
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
                                    className={`w-3 h-3 md:w-4 md:h-4 ${
                                      i < Math.floor(vendor.rating)
                                        ? "fill-current"
                                        : ""
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs md:text-sm text-gray-600 ml-2">
                                {vendor.rating} ({vendor.reviewCount} reviews)
                              </span>
                            </div>
                            <Link
                              to={`/vendor`}
                              className="text-purple-600 hover:underline"
                            >
                              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold flex items-center justify-center space-x-2 mt-4 text-xs md:text-sm">
                                <Store className="w-3 h-3 md:w-4 md:h-4 mr-2" />
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

        {/* Brand Showcase Section - Enhanced responsiveness */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Official Stores
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium products from the world's leading technology
              brands
            </p>
          </div>

          <BrandShowcase />
        </div>
      </main>
    </div>
  );
};

export default Home;
