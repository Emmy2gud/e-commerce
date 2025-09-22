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
