import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Store, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="border-b border-gray-300 bg-white/50 backdrop-blur-sm sticky top-0 z-1">
    <div className="flex h-16 items-center px-6">
      <div className="flex items-center space-x-4">
        <span className="font-normal">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>
          </Link>
        </span>
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 rounded-lg  bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button  size="sm" className="relative  text-black  hover:bg-violet-500 hover:text-white" >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-violet-600 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </Button>
        <Avatar>
          <AvatarImage src="/diverse-user-avatars.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </header>
);
