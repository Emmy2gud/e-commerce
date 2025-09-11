
import { useState } from "react"
import {
  Star,
  Heart,
  MessageCircle,
  Filter,
  Grid,
  List,
  MapPin,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Send,
  ThumbsUp,
  MoreHorizontal,
  Verified,
  Award,
  Users,
  Calendar,
  Store,
  Phone,
  Mail,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import ProductCard from "../components/ProductCard"


const vendorData = {
  name: "Artisan Crafts Co.",
 logo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=center",
   banner:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center",
  description:
    "Handcrafted items made with love and attention to detail. We specialize in unique home decor, jewelry, and accessories.",
  rating: 4.8,
  reviewCount: 1247,
  followers: 3420,
  location: "Portland, Oregon",
  website: "artisancrafts.com",
  joinedDate: "2019",
  socialMedia: {
    instagram: "@artisancraftsco",
    twitter: "@artisancrafts",
    facebook: "ArtisanCraftsCo",
  },
}

const products = [
  {
    id: 1,
    name: "Handwoven Ceramic Vase",
    price: 89.99,
    originalPrice: 120.0,
    image: "/ceramic-vase.png",
    rating: 4.9,
    reviews: 45,
    category: "Home Decor",
    featured: true,
  },
  {
    id: 2,
    name: "Sterling Silver Pendant",
    price: 156.0,
    image: "/silver-pendant.jpg",
    rating: 4.7,
    reviews: 23,
    category: "Jewelry",
  },
  {
    id: 3,
    name: "Wooden Coffee Table",
    price: 299.99,
    image: "/wooden-coffee-table.png",
    rating: 4.8,
    reviews: 67,
    category: "Furniture",
    featured: true,
  },
  {
    id: 4,
    name: "Macrame Wall Hanging",
    price: 45.5,
    image: "/macrame-wall-hanging.png",
    rating: 4.6,
    reviews: 34,
    category: "Home Decor",
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: 128.0,
    image: "/leather-crossbody-bag.png",
    rating: 4.9,
    reviews: 89,
    category: "Accessories",
    featured: true,
  },
  {
    id: 6,
    name: "Hand-painted Ceramic Mug",
    price: 24.99,
    image: "/ceramic-mug.png",
    rating: 4.5,
    reviews: 156,
    category: "Home Decor",
  },
]

const categories = ["All", "Home Decor", "Jewelry", "Furniture", "Accessories"]
const sortOptions = [
  "Featured",
  "Best Selling",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Customer Rating",
]

const mockReviews = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/woman-profile.png",
      verified: true,
    },
    rating: 5,
    date: "2 days ago",
    content:
      "Absolutely stunning craftsmanship! The ceramic vase exceeded my expectations. The attention to detail is incredible and it looks perfect in my living room. Fast shipping too!",
    helpful: 12,
    images: ["/ceramic-vase-review.jpg"],
    productName: "Handwoven Ceramic Vase",
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "/man-profile.png",
      verified: false,
    },
    rating: 5,
    date: "1 week ago",
    content:
      "This is my third purchase from Artisan Crafts Co. and they never disappoint. The quality is consistently excellent and the customer service is top-notch.",
    helpful: 8,
    images: [],
    productName: "Sterling Silver Pendant",
  },
  {
    id: 3,
    user: {
      name: "Emma Rodriguez",
      avatar: "/woman-profile-two.png",
      verified: true,
    },
    rating: 4,
    date: "2 weeks ago",
    content:
      "Beautiful piece! The macrame work is intricate and well-made. Only minor issue was the shipping took a bit longer than expected, but worth the wait.",
    helpful: 5,
    images: ["/macrame-wall-hanging.png"],
    productName: "Macrame Wall Hanging",
  },
]

export default function VendorStorefront() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Featured")
  const [viewMode, setViewMode] = useState("grid")
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState("products")
  const [reviewText, setReviewText] = useState("")
  const [reviewRating, setReviewRating] = useState(0)

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const featuredProducts = products.filter((product) => product.featured)

  const handleSubmitReview = () => {
    if (reviewText.trim() && reviewRating > 0) {
      // In a real app, this would submit to an API
      console.log("Submitting review:", { text: reviewText, rating: reviewRating })
      setReviewText("")
      setReviewRating(0)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
           <div className="relative">
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${vendorData.banner})` }}
          >
            <div className="absolute inset-0  bg-opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 relative -mt-20">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={vendorData.logo}
                    alt={vendorData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {vendorData.name}
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
                              i < Math.floor(vendorData.rating)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {vendorData.rating} ({vendorData.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Store className="w-4 h-4 mr-1" />
                      Since {vendorData.joinedDate}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{vendorData.description}</p>


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {vendorData.location}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {vendorData.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {vendorData.email}
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

      {/* <div className="relative h-80 overflow-hidden">
        <img src={vendorData.banner || "/placeholder.svg"} alt="Vendor banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-lg font-medium mb-2 max-w-2xl text-balance">{vendorData.description}</p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{vendorData.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>{vendorData.website}</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Vendor Info & Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Vendor Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-card dark:to-card/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-emerald-500" />
                      About Our Shop
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{vendorData.description}</p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">{vendorData.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">{vendorData.website}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Shop member since {vendorData.joinedDate}</div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Connect With Us</h4>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-pink-50 border border-gray-300 hover:border-pink-200 hover:text-pink-600 bg-transparent"
                      >
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-blue-50 border border-gray-300 hover:border-blue-200 hover:text-blue-600 bg-transparent"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-blue-50 border border-gray-300 hover:border-blue-200 hover:text-blue-600 bg-transparent"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
              <TabsList className="grid w-full grid-cols-5 bg-gray-100/50 p-1 rounded-xl mb-3">
                <TabsTrigger
                  value="products"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  Products
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="policies"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                >
                  Policies
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black  data-[state=active]:shadow-sm"
                >
                  Contact
                </TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-6">
                {/* Featured Products Carousel */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Featured Products</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredProducts.map((product) => (
                     <ProductCard key={product.id} product={product} viewMode="grid" />
                    ))}
                  </div>
                </div>

                {/* Filters and Sort */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-gray-100/50 p-4 rounded-lg ">
                  <div className="flex flex-wrap items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Category:</span>
                    {categories.map((category) => (
                      <Button
                        key={category}
                    className={`text-sm ${  category === selectedCategory ? 'bg-purple-600 text-white hover:bg-violet-700' : 'bg-white text-gray-800 hover:bg-violet-400 hover:text-white border border-gray-300'}`}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="flex border rounded-md">
                      <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("list")}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div
                  className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
                >
                  {filteredProducts.map((product) => (
                   <ProductCard key={product.id} product={product} viewMode="grid" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about" className="space-y-6">
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-card dark:to-card/50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Our Story</h2>
                    <div className="prose prose-sm max-w-none text-gray-500">
                      <p className="leading-relaxed">
                        Founded in 2019, Artisan Crafts Co. began as a passion project in a small Portland workshop.
                        What started as weekend hobby creating unique home decor pieces has grown into a thriving
                        business dedicated to bringing handcrafted beauty into everyday life.
                      </p>
                      <p className="leading-relaxed mt-4">
                        Every piece in our collection is carefully handmade using traditional techniques passed down
                        through generations, combined with contemporary design sensibilities. We believe in sustainable
                        practices, using locally sourced materials whenever possible and ensuring each item is built to
                        last.
                      </p>
                      <p className="leading-relaxed mt-4">
                        Our mission is simple: to create beautiful, functional pieces that bring joy to your home while
                        supporting traditional craftsmanship and sustainable practices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
      
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-card dark:to-card/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Customer Reviews</h2>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-2xl font-bold text-foreground">{vendorData.rating}</span>
                          </div>
                          <div className="text-muted-foreground">
                            Based on {vendorData.reviewCount.toLocaleString()} reviews
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-0 hover:from-emerald-600 hover:to-blue-600"
                        onClick={() => document.getElementById("review-form")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Write a Review
                      </Button>
                    </div>

                    {/* Rating Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <span className="text-sm font-medium w-8">{rating}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                              style={{
                                width: `${rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 3 : rating === 2 ? 1 : 1}%`,
                              }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-8">
                            {rating === 5 ? "75%" : rating === 4 ? "20%" : "3%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Write Review Form */}
                <Card
                  id="review-form"
                  className="shadow-lg border-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/10 dark:to-blue-950/10"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Share Your Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Your Rating</label>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} onClick={() => setReviewRating(star)} className="focus:outline-none">
                              <Star
                                className={`h-6 w-6 transition-colors ${
                                  star <= reviewRating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300 hover:text-yellow-400"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Your Review</label>
                        <Textarea
                          placeholder="Tell others about your experience with this store..."
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          className="min-h-[100px] resize-none"
                        />
                      </div>
                      <Button
                        onClick={handleSubmitReview}
                        disabled={!reviewText.trim() || reviewRating === 0}
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews List */}
                <div className="space-y-4">
                  {mockReviews.map((review) => (
                    <Card key={review.id} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10 ring-2 ring-emerald-100">
                            <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white">
                              {review.user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold text-foreground">{review.user.name}</span>
                                {review.user.verified && (
                                  <Badge
                                    variant="secondary"
                                    className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                  >
                                    <Verified className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center space-x-3">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                              <Badge variant="outline" className="text-xs">
                                {review.productName}
                              </Badge>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">{review.content}</p>

                            {review.images.length > 0 && (
                              <div className="flex space-x-2">
                                {review.images.map((image, index) => (
                                  <img
                                    key={index}
                                    src={image || "/placeholder.svg"}
                                    alt="Review"
                                    className="w-16 h-16 object-cover rounded-lg border"
                                  />
                                ))}
                              </div>
                            )}

                            <div className="flex items-center space-x-4 pt-2">
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Helpful ({review.helpful})
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More Reviews */}
                <div className="text-center">
                  <Button variant="outline" className="hover:bg-emerald-50 hover:border-emerald-200 bg-transparent">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="policies" className="space-y-6">
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-card dark:to-card/50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Shop Policies</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Shipping & Processing</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Orders are processed within 1-3 business days. Shipping times vary by location but typically
                          take 5-7 business days for domestic orders.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Returns & Exchanges</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          We accept returns within 30 days of delivery. Items must be in original condition. Custom
                          orders are non-returnable.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Care Instructions</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Each item comes with specific care instructions. Generally, we recommend gentle cleaning and
                          avoiding harsh chemicals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-card dark:to-card/50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-foreground mb-2">Contact Information</h3>
                          <div className="space-y-2 text-sm text-gray-500">
                            <p>Email: hello@artisancrafts.com</p>
                            <p>Phone: (503) 555-0123</p>
                            <p>Location: Portland, Oregon</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-2">Business Hours</h3>
                          <div className="space-y-1 text-sm text-gray-500">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                            <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Send a Message</h3>
                        <div className="space-y-3">
                          <Input placeholder="Your name" className='border-0 bg-gray-100' />
                          <Input placeholder="Your email" className='border-0 bg-gray-100'/>
                          <Textarea className="resize-none h-24 border-0 bg-gray-100" placeholder="Your message..." />
                          <Button className="w-full bg-gradient-to-br from-purple-600 to-blue-600 hover:to-blue-600 text-white border-0">
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
