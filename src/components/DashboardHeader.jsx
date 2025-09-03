import { Search, Bell, User, Menu, Settings, LogOut } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-300   backdrop-blur-lg ">
      <div className="flex h-16 items-center gap-4 px-6 bg-white w-full">

  
        <div className="relative flex-1 max-w-md ">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            
            className="pl-10 border-1 border-gray-300  focus:bg-white w-100 focus-visible:border-1 focus-visible:border-violet-600 shadow-sm focus-visible:ring-0"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full  border-1 border-gray-200 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-medium">3</span>
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu >
            <DropdownMenuTrigger asChild >
              <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-violet-600 border-0 ">
                <Avatar className="h-10 w-10 ">
                  <AvatarImage src="/placeholder.svg" alt="Admin" />
                  <AvatarFallback className="bg-violet-500 text-white font-medium  border-0">
                    AD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-0" align="end" forceMount>
          
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className=" h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className=" h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className=" h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}