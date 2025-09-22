import React from 'react'
import ProfileHeader from '../components/ProfileHeader '
import UserStats from '../components/UserStats'
import UserWishlist from '../components/UserWishlist'
import UserActivity from '../components/UserActivity'
import UserPreferences from '../components/UserPreferences'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  ShoppingBag, 
  Settings, 
  BarChart3, 
  User, 
  Package,
  Clock,
  Star,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  Globe,
  Eye,
  Lock
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
   
      <ProfileHeader />
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        
  
        {/* Modern Tabbed Interface with responsive design */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <Tabs defaultValue="overview" className="w-full">
            <div className="border-b border-gray-200 bg-white/50 sticky top-0 z-20">
              <div className="overflow-x-auto">
                <TabsList className="w-full bg-transparent h-auto p-0 justify-start min-w-fit">
                  <TabsTrigger 
                    value="overview" 
                    className="flex items-center space-x-2 px-3 sm:px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:rounded-tl-2xl data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 hover:bg-gray-50 whitespace-nowrap min-w-fit"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Overview</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="wishlist" 
                    className="flex items-center space-x-2 px-3 sm:px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 hover:bg-gray-50 whitespace-nowrap min-w-fit"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="hidden sm:inline">Wishlist</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="orders" 
                    className="flex items-center space-x-2 px-3 sm:px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 hover:bg-gray-50 whitespace-nowrap min-w-fit"
                  >
                    <Package className="w-4 h-4" />
                    <span className="hidden sm:inline">Orders</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="activity" 
                    className="flex items-center space-x-2 px-3 sm:px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 hover:bg-gray-50 whitespace-nowrap min-w-fit"
                  >
                    <Clock className="w-4 h-4" />
                    <span className="hidden sm:inline">Activity</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="settings" 
                    className="flex items-center space-x-2 px-3 sm:px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:rounded-tr-2xl data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 hover:bg-gray-50 whitespace-nowrap min-w-fit"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="hidden sm:inline">Settings</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Tab Contents */}
            <div className="p-6">
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Quick Stats Cards */}
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Shopping Summary</h3>
                        <ShoppingBag className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Orders</span>
                          <span className="font-semibold text-gray-900">89</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Spent</span>
                          <span className="font-semibold text-green-600">$2,847.50</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Saved Amount</span>
                          <span className="font-semibold text-orange-600">$423.20</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Member Since</span>
                          <span className="font-semibold text-gray-900">March 2022</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Loyalty Status */}
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Loyalty Status</h3>
                        <Star className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-center">
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm mb-3">
                          Gold Member
                        </Badge>
                        <p className="text-sm text-gray-600 mb-4">1,247 points to Platinum</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>2,753 pts</span>
                          <span>4,000 pts</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

              
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Review Impact</h3>
                        <Star className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Reviews Written</span>
                          <span className="font-semibold text-gray-900">156</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Average Rating</span>
                          <div className="flex items-center space-x-1">
                            <span className="font-semibold text-gray-900">4.8</span>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-current' : ''}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Helpful Votes</span>
                          <span className="font-semibold text-green-600">1,234</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

               
                  <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Access</h3>
                        <CreditCard className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start border-1 border-violet-300">
                          <MapPin className="w-4 h-4 mr-2" />
                          Manage Addresses
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-1 border-violet-300">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Payment Methods
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-1 border-violet-300">
                          <Package className="w-4 h-4 mr-2" />
                          Track Orders
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-0">
                <UserWishlist />
              </TabsContent>

              <TabsContent value="orders" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Order History</h3>
                      <p className="text-gray-600 mb-6">Your recent orders and purchase history will appear here.</p>
                      <Button>View All Orders</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-0">
                <UserActivity />
              </TabsContent>

              <TabsContent value="settings" className="mt-0">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    {/* Notification Settings Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-gray-300 hover:border-blue-200">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-blue-50 rounded-full">
                                <Bell className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">Notifications</h3>
                                <p className="text-sm text-gray-600">Manage your alerts</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]  bg-white border-0">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <Bell className="w-5 h-5" />
                            <span>Notification Settings</span>
                          </DialogTitle>
                          <DialogDescription>
                            Configure how you receive notifications and updates.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Order Updates</Label>
                              <p className="text-xs text-gray-500">Get notified about order status</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Promotional Emails</Label>
                              <p className="text-xs text-gray-500">Receive deals and offers</p>
                            </div>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Security Alerts</Label>
                              <p className="text-xs text-gray-500">Account security notifications</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">SMS Notifications</Label>
                              <p className="text-xs text-gray-500">Text message alerts</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">Save Preferences</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {/* Privacy Settings Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-gray-300 hover:border-green-200">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-green-50 rounded-full">
                                <Shield className="w-6 h-6 text-green-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">Privacy</h3>
                                <p className="text-sm text-gray-600">Control your data</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]  bg-white border-0">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <Shield className="w-5 h-5" />
                            <span>Privacy Settings</span>
                          </DialogTitle>
                          <DialogDescription>
                            Manage your privacy preferences and data visibility.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Profile Visibility</Label>
                              <p className="text-xs text-gray-500">Who can see your profile</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Activity Tracking</Label>
                              <p className="text-xs text-gray-500">Allow activity analytics</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Data Sharing</Label>
                              <p className="text-xs text-gray-500">Share data with partners</p>
                            </div>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-sm font-medium">Location Services</Label>
                              <p className="text-xs text-gray-500">Use location for better experience</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">Update Privacy Settings</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-gray-300 hover:border-purple-200">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-purple-50 rounded-full">
                                <User className="w-6 h-6 text-purple-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">Account</h3>
                                <p className="text-sm text-gray-600">Personal information</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white border-0">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <User className="w-5 h-5" />
                            <span>Account Settings</span>
                          </DialogTitle>
                          <DialogDescription>
                            Update your personal account information.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="alex.johnson@email.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="language">Language</Label>
                            <Input id="language" defaultValue="English (US)" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timezone">Timezone</Label>
                            <Input id="timezone" defaultValue="Pacific Time (PT)" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">Save Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {/* Security Settings Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-gray-300 hover:border-red-200">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-red-50 rounded-full">
                                <Lock className="w-6 h-6 text-red-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">Security</h3>
                                <p className="text-sm text-gray-600">Password & 2FA</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white border-0">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <Lock className="w-5 h-5" />
                            <span>Security Settings</span>
                          </DialogTitle>
                          <DialogDescription>
                            Manage your account security and authentication methods.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" placeholder="Enter current password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" placeholder="Enter new password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-400">
                            <div>
                              <Label className="text-sm font-medium">Two-Factor Authentication</Label>
                              <p className="text-xs text-gray-500">Add extra security to your account</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">Update Security</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {/* Payment Settings Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-gray-300 hover:border-orange-200">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-orange-50 rounded-full">
                                <CreditCard className="w-6 h-6 text-orange-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">Payment</h3>
                                <p className="text-sm text-gray-600">Cards & billing</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white border-0">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <CreditCard className="w-5 h-5" />
                            <span>Payment Settings</span>
                          </DialogTitle>
                          <DialogDescription>
                            Manage your payment methods and billing preferences.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="border border-gray-300 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">**** **** **** 4567</span>
                              <Badge>Primary</Badge>
                            </div>
                            <p className="text-sm text-gray-600">Expires 12/26</p>
                          </div>
                          <div className="border border-gray-300 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">**** **** **** 8901</span>
                              <Button variant="outline" size="sm" className='border-violet-300 hover:bg-violet-600 hover:text-white'>Remove</Button>
                            </div>
                            <p className="text-sm text-gray-600">Expires 08/27</p>
                          </div>
                          <Button variant="outline" className="w-full border-violet-300 hover:bg-violet-600 hover:text-white">
                            + Add New Payment Method
                          </Button>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-400">
                            <div>
                              <Label className="text-sm font-medium">Auto-pay</Label>
                              <p className="text-xs text-gray-500">Automatically pay recurring charges</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">Update Payment Settings</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {/* Address Settings Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-gray-300 hover:border-indigo-200">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-indigo-50 rounded-full">
                                <MapPin className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">Addresses</h3>
                                <p className="text-sm text-gray-600">Shipping locations</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white border-0">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5" />
                            <span>Address Settings</span>
                          </DialogTitle>
                          <DialogDescription>
                            Manage your shipping and billing addresses.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="border border-gray-300 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Home Address</span>
                              <Badge>Default</Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              123 Main Street<br />
                              San Francisco, CA 94102<br />
                              United States
                            </p>
                          </div>
                          <div className="border border-gray-300 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Work Address</span>
                              <Button variant="outline" size="sm" className='border-violet-300 hover:bg-violet-600 hover:text-white'>Edit</Button>
                            </div>
                            <p className="text-sm text-gray-600">
                              456 Business Ave<br />
                              San Francisco, CA 94105<br />
                              United States
                            </p>
                          </div>
                          <Button variant="outline" className="w-full border-violet-300 hover:bg-violet-600 hover:text-white">
                            + Add New Address
                          </Button>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">Save Address Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
              
                  <Card className='border-1 border-gray-300'>
                    <CardContent className="p-6 ">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        Display Preferences
                      </h3>
                      <UserPreferences />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default Profile