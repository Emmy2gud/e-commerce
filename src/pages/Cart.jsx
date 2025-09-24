import React from "react";
import { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center",
      description: "High-quality wireless headphones with noise cancellation",
      category: "Electronics",
      quantity: 1,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,

      badge: "Best Seller",
    },
    {
      id: "2",
      name: "Minimalist Backpack",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop&crop=center",
      description: "Sleek and functional backpack for everyday use",
      category: "Accessories",
      quantity: 2,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,

      badge: "Best Seller",
    },

    {
      id: "3",
      name: "MAirPods Pro",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop&crop=center",
      description: "Sleek and functional backpack for everyday use",
      category: "Accessories",
      quantity: 2,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,

      badge: "Sale",
    },
    {
      id: "4",
      name: "Gaming Headset",
      price: 179.99,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center",
      description: "Sleek and functional backpack for everyday use",
      category: "Accessories",
      quantity: 2,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,

      badge: "Sale",
    },
  ]);

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shippingCost = cartTotal > 100 ? 0 : 9.99;
  const taxRate = 0.08;
  const taxAmount = cartTotal * taxRate;
  const finalTotal = cartTotal + shippingCost + taxAmount;
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Shopping Cart</h2>
            <Badge
              variant="outline"
              className="text-lg px-3 py-1 border text-black border-gray-300 cursor-default hover:bg-gradient-to-br from-purple-600 to-blue-600 hover:text-white"
            >
              {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
            </Badge>
          </div>

          {cart.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-600 mb-4">
                  Add some products to get started
                </p>
                <Link to="/">
                  <Button>Continue Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Products Section */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold">Items in your cart</h3>
                {cart.map((item) => (
                  <Card
                    key={item.id}
                    className="p-3 sm:p-4 border-0 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-2 sm:space-y-1">
                        <h4 className="font-semibold text-base sm:text-lg text-gray-900 line-clamp-2">{item.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                          {item.description}
                        </p>
                        <Badge
                          variant="secondary"
                          className="mt-2 border border-gray-200 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white opacity-70 text-xs px-2 py-1 w-fit"
                        >
                          {item.category}
                        </Badge>
                        
                        {/* Mobile quantity and price section */}
                        <div className="flex items-center justify-between sm:hidden pt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="h-8 w-8 text-white hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border-0 bg-gradient-to-br from-purple-600 to-blue-600"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-2 py-1 border rounded min-w-[40px] text-center text-gray-700 text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="h-8 w-8 text-white hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border-0 bg-gradient-to-br from-purple-600 to-blue-600"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-base font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-xs text-gray-500">
                              ${item.price.toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        {/* Desktop quantity controls */}
                        <div className="hidden sm:flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-white hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border-0 bg-gradient-to-br from-purple-600 to-blue-600"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 py-2 border rounded min-w-[50px] text-center text-gray-700 font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-white hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border-0 bg-gradient-to-br from-purple-600 to-blue-600"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Desktop price and remove */}
                      <div className="hidden sm:block text-right flex-shrink-0">
                        <p className="text-lg font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm font-medium text-gray-500 pt-1">
                          ${item.price.toFixed(2)} × {item.quantity} items
                        </p>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary Section */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-gray-50 sticky top-4 border-0 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItemCount} items)</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span
                        className={shippingCost === 0 ? "text-green-600" : ""}
                      >
                        {shippingCost === 0
                          ? "FREE"
                          : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>

                    {shippingCost > 0 && (
                      <p className="text-sm text-gray-600">
                        Add ${(100 - cartTotal).toFixed(2)} more for free
                        shipping
                      </p>
                    )}

                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-primary">
                          ${finalTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link to="/checkout" className="block">
                      <Button className="w-full bg-black text-white" size="lg">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Proceed to Checkout
                      </Button>
                    </Link>

                    <Link to="/" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                        size="lg"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Secure checkout with 256-bit SSL encryption
                    </p>
                  </div>
                </Card>
              </div>

              {/* related products */}
              <div className="lg:col-span-3">
                <Card className="p-6 bg-gray-50 border-0 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Related Products</h3>
                        <div className="flex gap-2">
                          <CarouselPrevious className="static translate-y-0" />
                          <CarouselNext className="static translate-y-0" />
                        </div>
                      </div>
                      <CarouselContent className="-ml-2 sm:-ml-4">
                        {cart.map((product) => (
                          <CarouselItem
                            key={product.id}
                            className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                          >
                            <Card className="group bg-white cursor-pointer hover:shadow-lg transition-shadow border-none shadow-sm shadow-gray-400 h-full">
                              <CardContent className="p-3 sm:p-4">
                                <div className="relative mb-3">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                  />
                                  {product.badge && (
                                    <Badge
                                      className={`absolute top-2 left-2 text-xs px-2 py-1 ${
                                        product.badge === "Sale"
                                          ? "bg-red-500 text-white"
                                          : product.badge === "New"
                                          ? "bg-green-500 text-white"
                                          : "bg-blue-500 text-white"
                                      }`}
                                    >
                                      {product.badge}
                                    </Badge>
                                  )}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                                  {product.name}
                                </h3>
                                <div className="flex items-center mb-3">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-3 w-3 sm:h-4 sm:w-4 ${
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
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-base sm:text-lg font-bold text-gray-900">
                                        ${product.price}
                                      </span>
                                      {product.originalPrice && (
                                        <span className="text-sm text-gray-500 line-through">
                                          ${product.originalPrice}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <Button
                                    size="sm"
                                    className="w-full bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400 py-2 text-sm"
                                  >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
