import React from 'react'
import { useState } from "react";
import { CreditCard, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function CheckOut() {
    const [checkoutStep, setCheckoutStep] = useState(1);

  // Sample cart data - in a real app, this would come from context/state management
  const cart= [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      quantity: 1
    },
    {
      id: '2',
      name: 'Minimalist Backpack',
      price: 79.99,
      quantity: 2
    }
  ];

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);



  return (
    <div> 
        <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Checkout</h2>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= checkoutStep ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && <div className={`w-8 h-0.5 ${step < checkoutStep ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs value={checkoutStep.toString()} className="w-full " >
                <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                  <TabsTrigger value="1" onClick={() => setCheckoutStep(1)}>
                    <User className="h-4 w-4 mr-2" />
                    Billing
                  </TabsTrigger>
                  <TabsTrigger value="2" onClick={() => setCheckoutStep(2)}>
                    <MapPin className="h-4 w-4 mr-2" />
                    Shipping
                  </TabsTrigger>
                  <TabsTrigger value="3" onClick={() => setCheckoutStep(3)}>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="1" className="space-y-4 mt-6  ">
                  <Card className="border-gray-200 shadow-lg bg-gray-50 h-98">
                    <CardHeader>
                      <CardTitle>Billing Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" className="border border-gray-400"/>
                        </div>
                        <div className="space-y-4">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" className="border border-gray-400"/>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="border border-gray-400"/>
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" className="border border-gray-400"/>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="2" className="space-y-4 mt-6">
                  <Card className="border-gray-200 shadow-lg bg-gray-50 h-98">
                    <CardHeader>
                      <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123 Main St" className="border border-gray-400"/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="New York" className="border border-gray-400" />
                        </div>
                        <div className="space-y-4">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" placeholder="NY" className="border border-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" placeholder="10001" className="border border-gray-400" />
                        </div>
                        <div className="space-y-4">
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" placeholder="United States" className="border border-gray-400"/>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="3" className="space-y-4 mt-6 ">
                  <Card className="border-gray-200 shadow-lg bg-gray-50 h-98">
                    <CardHeader>
                      <CardTitle>Payment Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="border border-gray-400"/>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-4">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="border border-gray-400"/>
                        </div>
                        <div className="space-y-4">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                        <div className="space-y-4">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input id="zipCode" placeholder="10001" className="border border-gray-400"/>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-between mt-6">
                {checkoutStep > 1 && (
                  <Button variant="outline" onClick={() => setCheckoutStep(checkoutStep - 1)} className="border-purple-300 text-gray-700 hover:bg-purple-400 hover:text-white">
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  {checkoutStep < 3 ? (
                    <Button onClick={() => setCheckoutStep(checkoutStep + 1)} className="bg-purple-600 hover:bg-purple-700 text-white">
                      Next
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700 text-white" >
                      Complete Order
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <Card className="sticky top-4 border-gray-200" >
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="font-semibold text-sm ">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <Separator className="bg-gray-300"/>
                  <div className="flex justify-between items-center">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shipping:</span>
                    <span>$9.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tax:</span>
                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gray-300" />
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span>${(cartTotal + 9.99 + cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main></div>
  )
}
