import * as React from "react"
import { ChevronDown, DollarSign, GalleryVerticalEnd, MessageSquareWarning, ShoppingCart } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {  Home, ShoppingBag, Users, Settings, Package, BarChart3, Heart, Search } from 'lucide-react';
import { Link } from "react-router-dom"





const adminNav = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <Home />,
    items: [],
  },
  {
    title: "Products",
    url: "#",
    icon: <Package />,
    items: [
      { title: "View All Products", url: "/admin/products" },
      { title: "Categories", url: "/admin/categories" },
    ],
  },
  {
    title: "Stores",
    url: "#",
    icon: <ShoppingBag />,
    items: [
      { title: "All Stores", url: "/admin/stores" },
      { title: "Store Requests", url: "/admin/stores/requests" },
    ],
  },
  {
    title: "Finance",
    url: "#",
    icon: <DollarSign />,
    items: [
      { title: "Transactions", url: "/admin/transactions" },
      { title: "Payouts", url: "/admin/payouts" },
      { title: "Earnings (Platform)", url: "/admin/earnings" },
    ],
  },
  {
    title: "Users",
    url: "#",
    icon: <Users />,
    items: [
      { title: "All Users", url: "/admin/users" },
   
    ],
  },
  
  {
    title: "Settings",
    url: "#",
    icon: <Settings />,
    items: [
      { title: "Platform Settings", url: "/admin/settings/platform" },

    ],
  },
  {
    title: "Complaints",
    url: "/admin/complaints",
    icon: <MessageSquareWarning />,
    items: [],
  },
];


const sellerNav = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <Home />,
    items: [],
  },
  {
    title: "Products",
    url: "#",
    icon: <Package />,
    items: [
      { title: "Add Product", url: "products/add" },
      { title: "View Products", url: "products/view" },
      { title: "Product Reviews", url: "products/reviews" },
      { title: "Inventory", url: "products/inventory" },
    
    ],
  },
  {
    title: "Orders",
    url: "#",
    icon: <ShoppingBag />,
    items: [
      { title: "All Orders", url: "/orders" },
    ],
  },
  {
    title: "Store Profile",
    url: "/store",
    icon: <ShoppingCart/>,
    items: [
      { title: "Create Store", url: "/store/create" },


    ],
  },
  {
    title: "Sales",
    url: "#",
    icon: <DollarSign />,
    items: [
      { title: "Transaction History", url: "/sales/transactions" },
      { title: "Payouts", url: "/sales/payouts" },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: <Settings />,
    items: [
      { title: "Account Settings", url: "/settings/account" },
      { title: "Notifications", url: "/settings/notifications" },


    ],
  }
];

export function AppSidebar() {

const [role, setRole] = React.useState("seller"); 

const data = {
  navMain: role === "admin" ? adminNav : sellerNav,
};

  const [openDropdown, setOpenDropdown] = React.useState(null);

  function dropdownToggle(e, title) {      
    e.preventDefault();
    setOpenDropdown((prev) => (prev === title ? null : title));

  }

  return (
         <Sidebar className=" bg-white shadow-lg w-67 h-screen  border-r border-gray-100 flex flex-col ">
        <SidebarHeader className>
          <SidebarMenu >
            <SidebarMenuItem className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
              <SidebarMenuButton size="lg" asChild>
                <a href="#" className="block">
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-medium">
                      <Link to="/" className="flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                          <span className="text-white font-bold text-2xl">S</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            ShopHub
                          </span>
                         
                        </div>
                      </Link>
                    </span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        
        <SidebarContent className="flex-1 p-4 overflow-y-auto">
          <SidebarGroup>
            <SidebarMenu >
              {data.navMain.map((item) => (
                
                <SidebarMenuItem key={item.title} className="">
                  {item.items && item.items.length > 0 ? (
                    <SidebarMenuButton asChild className="mb-2 bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 ">
                      <div
                        onClick={(e) => dropdownToggle(e, item.title)}
                                    className={`
                      flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out py-5 border-0
                      ${openDropdown === item.title ? 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50' : 'hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100'}
                      ${openDropdown === item.title? 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200' : ''}
                      ${!openDropdown === item.title ? 'hover:transform hover:-translate-y-0.5' : ''}
                    `}
                      >
                        
                        
                        <Link to={item.url} className={`flex flex-col-1 font-semibold  hover:text-white transition-colors text-right duration-300 ${openDropdown === item.title ? 'text-purple-700' : 'text-black'}`}>
                         <di className="pr-3">{item.icon}</di> {item.title}     
                        </Link>
                        
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.title  ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}
                        />
                       
                      </div>
                    
                    </SidebarMenuButton>
                  ) : (
                    <div>


<SidebarMenuButton
  asChild
  className={`${
    item.title === 'Dashboard'
      ? 'bg-gradient-to-r from-purple-600 to-blue-600 p-4 py-5 mb-2 shadow-lg hover:shadow-xl hover:text-white transform transition-all duration-300'
      : `
        flex items-center p-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out py-5 border-0
        ${openDropdown === item.title ? 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50' : 'hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100'}
        ${openDropdown === item.title ? 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200' : ''}
        ${!openDropdown === item.title ? 'hover:transform hover:-translate-y-0.5' : ''}
      `
  }`}
>
  <Link
    to={item.url}
    className={`flex items-center gap-1 font-semibold ${
      item.title === 'Dashboard'
        ? 'text-white hover:text-white'
        : 'text-black hover:text-white transition-colors duration-300'
    }`}
  >
    <span className="flex items-center">{item.icon}</span>
    <span>{item.title}</span>
  </Link>
</SidebarMenuButton>


                    </div>
             
                  )}
                  {openDropdown === item.title && (
                    <SidebarMenuSub className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${openDropdown  ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                    `} >
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title} className="border-b border-gray-200 last:border-0 ">
                          <SidebarMenuSubButton asChild isActive={subItem.isActive} className="p-5">
                            <Link className="font-medium " to={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>


          </SidebarGroup>
          
        </SidebarContent>
                       <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white shadow-sm">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        <SidebarRail />
      </Sidebar>
  )
}
