import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

const ProductSection = ({ 
  title, 
  products, 
  backgroundColor = "bg-gray-200", 
  linkTo = "/productlists",
  showTabs = true,
  className = "" 
}) => {
  const renderProductCarousel = (productList) => (
    <div className="relative overflow-hidden">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="-ml-2 md:-ml-4 pb-4">
          {productList.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
            >
              <ProductCard product={product} className="mt-4 md:mt-8" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      
      {/* Fuzzy fade effect for mobile - adjusted gradients based on background */}
      <div className={`absolute top-0 left-0 w-8 h-full bg-gradient-to-r pointer-events-none md:hidden z-10 ${
        backgroundColor.includes('gray-200') 
          ? 'from-gray-200 to-transparent' 
          : 'from-white to-transparent'
      }`}></div>
      <div className={`absolute top-0 right-0 w-8 h-full bg-gradient-to-l pointer-events-none md:hidden z-10 ${
        backgroundColor.includes('gray-200') 
          ? 'from-gray-200 to-transparent' 
          : 'from-white to-transparent'
      }`}></div>
    </div>
  );

  return (
    <section className={`${backgroundColor} ${className}`}>
      <div className="min-h-fit pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="bg-purple-500 w-fit px-4 sm:px-6 md:px-8 py-1 rounded-lg mb-6 md:mb-15">
            <Link to={linkTo} className="text-sm sm:text-base md:text-lg text-white hover:underline">
              {title}
            </Link>
          </div>

          <div className="flex w-full max-w-full flex-col gap-4 md:gap-6">
            {showTabs ? (
              <Tabs defaultValue="featured">
                <TabsList className="bg-white mx-auto p-1 md:p-2 shadow-md rounded-2xl md:rounded-4xl flex justify-between items-center h-10 md:h-12 w-full max-w-md">
                  <TabsTrigger
                    value="featured"
                    className="font-medium text-xs md:text-sm text-gray-600 rounded-xl md:rounded-4xl flex-1"
                  >
                    Featured
                  </TabsTrigger>
                  <TabsTrigger
                    value="sellers"
                    className="font-medium text-xs md:text-sm text-gray-600 rounded-xl md:rounded-4xl flex-1"
                  >
                    Best Sellers
                  </TabsTrigger>
                  <TabsTrigger
                    value="arrivals"
                    className="font-medium text-xs md:text-sm text-gray-600 rounded-xl md:rounded-4xl flex-1"
                  >
                    New Arrivals
                  </TabsTrigger>
                  <TabsTrigger
                    value="sales"
                    className="font-medium text-xs md:text-sm text-gray-600 rounded-xl md:rounded-4xl flex-1"
                  >
                    On Sale
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="featured">
                  {renderProductCarousel(products)}
                </TabsContent>

                <TabsContent value="sellers">
                  {renderProductCarousel(products.filter(p => p.badge === "Best Seller"))}
                </TabsContent>

                <TabsContent value="arrivals">
                  {renderProductCarousel(products.filter(p => p.badge === "New" || p.badge === "New Arrival"))}
                </TabsContent>

                <TabsContent value="sales">
                  {renderProductCarousel(products.filter(p => p.badge === "Sale"))}
                </TabsContent>
              </Tabs>
            ) : (
              renderProductCarousel(products)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;