import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  MapPin,
  Calendar,
  Star,
  Settings,
  Globe,
  Mail,
  Phone,
  Heart,
  Users,
  ShoppingBag,
} from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfileHeader = () => {
  return (
    <div className="relative">
      {/* Cover Photo */}
      <div className="h-80 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-20"></div>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop"
          alt="Cover"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          <Camera className="w-4 h-4 mr-2" />
          Change Cover
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative -mt-20 bg-white shadow-2xl border-0">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <Button
                    size="sm"
                    className="absolute bottom-2 right-2 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3">
                    <h1 className="text-3xl font-bold text-gray-900">
                      Alex Johnson
                    </h1>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 px-3 py-1"
                    >
                      ✓ Verified User
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4 max-w-md leading-relaxed">
                    Photography enthusiast and tech lover. Always exploring new
                    places and sharing experiences with the community. Coffee
                    addict ☕
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined March 2022
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      alexjohnson.com
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:max-w-md">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <Heart className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900">247</div>
                    <div className="text-xs text-gray-600">Favorites</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold text-gray-900">1.2k</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <ShoppingBag className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <div className="text-2xl font-bold text-gray-900">89</div>
                    <div className="text-xs text-gray-600">Orders</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-col items-center border border-gray-300  py-3 h-auto"
                  >
                    <Mail className="w-4 h-4 mb-1 " />
                    <span className="text-xs">Message</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-col items-center  border border-gray-300 py-3 h-auto"
                  >
                    <Users className="w-4 h-4 mb-1 " />
                    <span className="text-xs">Follow</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-col items-center  border border-gray-300 py-3 h-auto"
                  >
                    <Globe className="w-4 h-4 mb-1 " />
                    <span className="text-xs">Website</span>
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border border-gray-300"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>

                  <Dialog >
                    <form className="flex-1" >
                      <DialogTrigger asChild>
                        <Button className=" bg-black w-full text-white">
                          Edit Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white border-0">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input
                              id="name-1"
                              name="name"
                              defaultValue="Pedro Duarte"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input
                              id="username-1"
                              name="username"
                              defaultValue="@peduarte"
                            />
                          </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Bio Data</Label>
                            <textarea
                              className="h-24 p-2 border border-gray-300 rounded-md"
                              id="username-1"
                              name="username"
                              defaultValue="@peduarte"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline" className="border border-gray-300">Cancel</Button>
                          </DialogClose>
                          <Button type="submit" className="bg-black text-white">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileHeader;
