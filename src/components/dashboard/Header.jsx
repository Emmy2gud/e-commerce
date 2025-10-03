import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedNotificationsPanel from "./ui/EnhancedNotificationsPanel";

export const Header = () => (
  <div className="flex-1">
    <div className="flex h-14 lg:h-16 items-center px-4 lg:px-6">
      <div className="flex items-center space-x-2 lg:space-x-4 lg:hidden">
        <span className="font-normal">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>
          </Link>
        </span>
      </div>

      <div className="ml-auto flex items-center space-x-2 lg:space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-48 lg:w-64 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <EnhancedNotificationsPanel />
        <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
          <AvatarImage src="/diverse-user-avatars.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
);
