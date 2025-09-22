import React from "react";

import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
  Package,
  Settings,
  LogOut,
  Star,
  Truck,
  X,
  TabletSmartphone,
  Laptop ,
  Headphones,
  Footprints ,
   Shirt ,
   Gift ,
  Utensils,
   Armchair,
   ChevronDown,
   ChevronUp,



} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MobileCategoryItem = ({ category, onLinkClick }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="flex-1 justify-start text-left font-medium"
          asChild
        >
          <Link
            to={category.href}
            onClick={onLinkClick}
          >
            {category.title}
          </Link>
        </Button>
        {(category.subcategories || category.featured) && (
          <Button
            variant="ghost"
            size="sm"
            className="px-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      
      {isExpanded && (
        <div className="ml-4 space-y-2">
          {/* Featured Items */}
          {category.featured && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2">Featured</p>
              {category.featured.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-muted-foreground"
                  asChild
                >
                  <Link
                    to={item.href}
                    onClick={onLinkClick}
                    className="flex items-center space-x-2"
                  >
                    <div className="text-gray-400 scale-75">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          )}
          
          {/* Subcategories */}
          {category.subcategories && (
            <div className="space-y-1">
              {category.featured && (
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 mt-3">Categories</p>
              )}
              {category.subcategories.map((subcat) => (
                <Button
                  key={subcat.name}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-muted-foreground"
                  asChild
                >
                  <Link
                    to={subcat.href}
                    onClick={onLinkClick}
                  >
                    {subcat.name}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MegaMenuContent = ({ category }) => (
  <div className="grid gap-6 p-6 w-[800px]">
    <div className="grid grid-cols-4 gap-6">
      {/* Featured Products */}
      <div className="col-span-2">
        <h3 className="font-semibold text-lg mb-4">Featured</h3>
        <div className="grid gap-4">
          {category.featured?.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {/* <img
                src={item.image || "/placeholder.svg"}
               
                className="w-12 h-12 rounded-md object-cover"
              /> */}
              
              {/* <TabletSmartphone  className="w-12 h-12 rounded-md object-cover" /> */}
              <div className="text-gray-400">
            {item.icon}
              </div>
           
              <span className="font-semibold text-3xs">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

   
      <div className="col-span-2">
        <h3 className="font-semibold text-lg mb-4">Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          {category.subcategories?.map((subcat) => (
            <Link
              key={subcat.name}
              href={subcat.href}
              className="text-sm font-bold text-gray-500 hover:text-gray-600 transition-colors p-2 rounded hover:bg-accent"
            >
              {subcat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);
const categories = [
  {
    title: "Electronics",
    href: "/electronics",
    featured: [
      {
        name: "Smartphones",
        href: "/electronics/smartphones",
        icon: <TabletSmartphone className="w-12 h-12" />,
      },
      {
        name: "Laptops",
        href: "/electronics/laptops",
        icon: <Laptop className='w-12 h-12' />,
      },
      {
        name: "Headphones",
        href: "/electronics/headphones",
        icon: <Headphones className='w-12 h-12' />,
      },
    ],
    subcategories: [
      { name: "Mobile Phones", href: "/electronics/mobile" },
      { name: "Computers", href: "/electronics/computers" },
      { name: "Audio", href: "/electronics/audio" },
      { name: "Gaming", href: "/electronics/gaming" },
    ],
  },
  {
    title: "Fashion",
    href: "/fashion",
    featured: [
      {
        name: "Summer Collection",
        href: "/fashion/summer",
        icon: <Shirt className="w-12 h-12" />,
      },
      {
        name: "Sneakers",
        href: "/fashion/sneakers",
        icon: <Footprints className="w-12 h-12" />,
      },
      {
        name: "Accessories",
        href: "/fashion/accessories",
        icon: <Gift className="w-12 h-12" />,
      },
    ],
    subcategories: [
      { name: "Men's Clothing", href: "/fashion/mens" },
      { name: "Women's Clothing", href: "/fashion/womens" },
      { name: "Shoes", href: "/fashion/shoes" },
      { name: "Accessories", href: "/fashion/accessories" },
    ],
  },
  {
    title: "Home & Garden",
    href: "/home-garden",
    featured: [
      {
        name: "Furniture",
        href: "/home/furniture",
        icon: <Armchair className="w-12 h-12" />,
      },
      {
        name: "Decor",
        href: "/home/decor",
        icon:<Gift className="w-12 h-12"/>,
      },
      {
        name: "Kitchen",
        href: "/home/kitchen",
        icon:<Utensils className="w-12 h-12" />,
      },
    ],
    subcategories: [
      { name: "Furniture", href: "/home/furniture" },
      { name: "Kitchen & Dining", href: "/home/kitchen" },
      { name: "Garden", href: "/home/garden" },
      { name: "Home Decor", href: "/home/decor" },
    ],
  },
  {
    title: "Sports",
    href: "/sports",
    subcategories: [
      { name: "Fitness", href: "/sports/fitness" },
      { name: "Outdoor", href: "/sports/outdoor" },
      { name: "Team Sports", href: "/sports/team" },
    ],
  },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [cartCount] = React.useState(3);
  const [isLoggedIn] = React.useState(true);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  function toggleDropdown(categoryTitle) {
    setDropdownOpen((prev) => (prev === categoryTitle ? null : categoryTitle));
  }
  return (
    <div>
      <div className="w-full">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm">
          <div className="container mx-auto px-4 flex items-center justify-center space-x-4">
            <Truck className="h-4 w-4" />
            <span>Free shipping on orders over $50</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">30-day returns</span>
          </div>
        </div>

     
        <header className="sticky top-0 z-50 w-full border-b border-gray-300  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="px-2 mx-auto">
          
            <div className="flex h-16 items-center justify-between  w-full">
           
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ShopHub
                </span>
              </Link>

              {/* Desktop Search */}
              <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search for products, brands and more..."
                    className="pl-10 pr-4 text-sm font-medium h-12 w-full rounded-full border-2 border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-4 ">
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative bg-purple-100 w-9 rounded-4xl shadow shadow-gray-400 "
                >
                  <Heart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-purple-600 text-white">
                    2
                  </Badge>
                </Button>

              
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  asChild
                >
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-purple-600 text-white">
                        {cartCount}
                      </Badge>
                    )}
                  </Link>
                </Button>

              {isLoggedIn ? (
                  <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2"
                      >
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            JD
                          </span>
                        </div>
                        <span className="hidden lg:inline">John Doe</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 border-0 bg-white shadow-md rounded-lg">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/orders" className="flex items-center">
                          <Package className="mr-2 h-4 w-4" />
                          Orders
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/wishlist" className="flex items-center">
                          <Heart className="mr-2 h-4 w-4" />
                          Wishlist
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/settings" className="flex items-center">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" asChild>
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Mobile Actions */}
              <div className="flex md:hidden items-center space-x-2 ">
                {/* Mobile Search */}
                <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Search className="h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="top-0 translate-y-0 max-w-full h-auto p-0 bg-white">
                    <div className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          type="search"
                          placeholder="Search products..."
                          className="pl-10 pr-10 h-12 w-full"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                        />
                        {/* <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button> */}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Mobile Cart */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  asChild
                >
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-purple-600 text-white">
                        {cartCount}
                      </Badge>
                    )}
                  </Link>
                </Button>

                {/* Mobile Menu */}
                <Sheet
                  open={isMobileMenuOpen}
                  onOpenChange={setIsMobileMenuOpen}
                >
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-0 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-4 mt-6">
                      {/* User Section */}
                      {isLoggedIn ? (
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 p-4 bg-accent rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                              <span className="text-white font-medium">JD</span>
                            </div>
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-muted-foreground">
                                john@example.com
                              </p>
                            </div>
                          </div>
                          
                          {/* User Actions */}
                          <div className="space-y-2 px-2">
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link
                                to="/profile"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <User className="mr-2 h-4 w-4" />
                                Profile
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link
                                to="/orders"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <Package className="mr-2 h-4 w-4" />
                                My Orders
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link
                                to="/wishlist"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <Heart className="mr-2 h-4 w-4" />
                                Wishlist
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link
                                to="/cart"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Cart
                                {cartCount > 0 && (
                                  <Badge className="ml-auto h-5 w-5 flex items-center justify-center p-0 text-xs bg-purple-600 text-white">
                                    {cartCount}
                                  </Badge>
                                )}
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link
                                to="/settings"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => {
                                // Handle logout logic here
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <LogOut className="mr-2 h-4 w-4" />
                              Logout
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-2">
                          <Button asChild>
                            <Link
                              to="/login"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Login
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link
                              to="/signup"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Sign Up
                            </Link>
                          </Button>
                        </div>
                      )}

                      {/* Categories with Dropdowns */}
                      <div className="space-y-2 pt-4 border-t border-gray-300">
                        <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide px-2">Categories</h3>
                        {categories.map((category) => (
                          <MobileCategoryItem 
                            key={category.title} 
                            category={category} 
                            onLinkClick={() => setIsMobileMenuOpen(false)}
                          />
                        ))}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Desktop Category Navigation */}
            <div className="hidden md:flex border-t border-gray-300 w-full py-2 ">
              <NavigationMenu>
                <NavigationMenuList>
                  {categories.map((category) => (
                    <NavigationMenuItem key={category.title}>
                      {category.featured ? (
                        <>
                          {/* <NavigationMenuTrigger className="h-auto py-2 hover:bg-gray-200 hover:shadow shadow-gray-400 transition transform-3d">{category.title}</NavigationMenuTrigger> */}
                          <div className="ml-2">
                            <button
                              onClick={() => toggleDropdown(category.title)}
                              type="button"

                             className="inline-flex bg-white w-full justify-center gap-x-1 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                              
                              id="menu-button"
                              aria-expanded="true"
                              aria-haspopup="true"
                            >
                              {category.title }
                               {dropdownOpen === category.title ? ( 
                             <ChevronUp className="w-5 h-5 text-gray-400"/>
                              ):(
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                               
                              )}
                            </button>
                          </div>
                          {dropdownOpen === category.title && (
                            <div className="fixed z-10 mt-2 w-[800px] bg-white rounded-lg shadow-neutral-500 shadow-2xl">
                              <MegaMenuContent category={category} />
                            </div>
                          )}
                        </>
                      ) : (
                        <Link href={category.href} legacyBehavior passHref>
                          <NavigationMenuLink className="group  inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                            {category.title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
      
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
