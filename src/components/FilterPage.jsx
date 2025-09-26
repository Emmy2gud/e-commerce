import { Search, Grid, List, Star, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function FilterPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    }
  ]

  const renderFilterContent = () => (
    <div>
      {/* Categories */}
      <div className="space-y-4 mb-2">
        <h3 className="font-medium text-gray-400 border-b pb-2">Categories</h3>
        <div className="space-y-3">
          {["Audio & Headphones", "Wearables", "Accessories", "Computing", "Mobile"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} className=" text-purple-400"/>
              <Label htmlFor={category} className="text-sm font-normal">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4 mb-2">
        <h3 className="font-medium text-gray-400 border-b pb-2">Price Range</h3>
        <div className="space-y-4">
          <Slider 
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-full " 
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$500</span>
          </div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Min" className="h-8 border-purple-600" />
            <span>-</span>
            <Input placeholder="Max" className="h-8 border-purple-600" />
          </div>
        </div>
      </div>


      {/* Rating */}
      <div className="space-y-4 mb-2">
        <h3 className="font-medium text-gray-400 border-b pb-2">Customer Rating</h3>
        <div className="space-y-3">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} className=" text-purple-400" />
              <Label htmlFor={`rating-${rating}`} className="flex items-center space-x-1 text-sm font-normal">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span>& Up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="space-y-4 mb-2">
        <h3 className="font-medium text-gray-400 border-b pb-2">Availability</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" className=" text-purple-400"/>
            <Label htmlFor="in-stock" className="text-sm font-normal">
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="on-sale" className=" text-purple-400"/>
            <Label htmlFor="on-sale" className="text-sm font-normal">
              On Sale
            </Label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4 ">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen} className=''>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-gray-400 border-violet-600 hover:bg-violet-600 hover:text-white">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-80 p-0 bg-white">
                <div className="p-6 space-y-6 overflow-y-auto h-full">
                  <SheetHeader>
                    <SheetTitle className="flex items-center justify-between">
                      Filters
                      <Button variant="ghost" size="sm" className="text-white bg-purple-600 hover:bg-purple-400">
                        Clear All
                      </Button>
                    </SheetTitle>
                  </SheetHeader>
                  {renderFilterContent()}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0 bg-white rounded-md">
            <div className="rounded-lg shadow-sm shadow-gray-400 p-6 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="text-white bg-purple-600 hover:bg-purple-400">
                  Clear All
                </Button>
              </div>
              {renderFilterContent()}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-4">
              <div>
                <p className="text-gray-600 text-sm md:text-base">
                  Showing <span className="font-medium">1-6</span> of <span className="font-medium">24</span> results
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2 text-gray-500 w-full sm:w-auto">
                  <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-full sm:w-40 border border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white flex items-center space-x-2 text-gray-500 border border-gray-300">
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Customer Rating</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center rounded-md border border-gray-300">
                  <Button variant="ghost" size="sm" className="px-3 text-gray-600">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="px-3 text-gray-600">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              <Badge variant="secondary" className="px-3 py-1 bg-violet-300 font-semibold text-violet-600">
                Audio & Headphones ×
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-violet-300 font-semibold text-violet-600">
                $50 - $100 ×
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-violet-300 font-semibold text-violet-600">
                4+ Stars ×
              </Badge>
            </div>

            {/* Product Grid */}
        <div className="container mx-auto px-2 sm:px-4 py-8 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-none shadow-sm shadow-gray-200 hover:shadow-gray-300">
            <CardContent className="p-2 sm:p-3 md:p-4">
              <div className="relative mb-2 sm:mb-3 md:mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-28 sm:h-36 md:h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge
                    className={`absolute top-1 left-1 text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 ${
                      product.badge === "Sale"
                        ? "bg-red-500 text-white"
                        : product.badge === "New"
                          ? "bg-green-500 text-white"
                          : product.badge === "Popular"
                            ? "bg-blue-500 text-white"
                            : "bg-purple-500 text-white"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
                {product.name}
              </h3>
              
              <div className="flex items-center mb-1 sm:mb-2 md:mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 ${
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
              
              <div className="space-y-1 sm:space-y-2 md:space-y-3">
                <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                  <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
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
                  className="w-full bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-500 transition-colors text-xs sm:text-sm py-1 sm:py-1.5 md:py-2 px-2"
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8 md:mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm" className="border-violet-600 text-gray-400">
                  2
                </Button>
                <Button variant="outline" size="sm" className="border-violet-600 text-gray-400">
                  3
                </Button>
                <Button variant="outline" size="sm" className="border-violet-600 text-gray-400">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}