import * as React from "react"
import { ChevronDown, GalleryVerticalEnd } from "lucide-react"

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

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
       icon: <Home />,
      items: [], 
    },
    {
      title: "Product ",
      url: "#",
      icon: <Package/>,
      items: [
        {
          title: "Add Product",
          url: "/products/add",
        
        },
        {
          title: "View Products",
          url: "/products",
        
       
        },
        {
          title: "Product Categories",
          url: "/products/categories",
         
        }
      ],
    },
    {
      title: "Orders ",
      url: "#",
        icon: <ShoppingBag/>,
      items: [
        {
          title: "All Orders",
          url: "/orders",
         
        },
        {
          title: "Pending Orders",
          url: "/orders?status=pending",
         
        },
        {
          title: "Completed Orders",
          url: "/orders?status=completed", 
        
        },
        {
          title: "Returns/Refunds", 
          url: "/orders/returns",
        
        }
      ],
    },
{
  title: "Store Profile",
  url: "/store",
icon: <ShoppingBag/>,
  items: [
    {
      title: "Store Settings", 
      url: "/store/settings",
  
   
    },
    {
      title: "Appearance",
      url: "/store/appearance",
       },
    {
      title: "Preview Store", 
      url: "/store/preview",
     
    }
  ]
},
    {
      title: "Analytics",
      url: "#",
     icon: <BarChart3/>,
      items: [
        {
          title: "Sales Overview",
          url: "/earnings",
         
        },
        {
          title: "Transaction History",
          url: "/earnings/transactions",
         
        },
        {
          title: "Payouts", // Vendors need to withdraw earnings
          url: "/earnings/payouts",
          icon: "payments"
        },
        {
          title: "Tax Reports", // Important for business
          url: "/earnings/taxes",
          
        }
      ],
    },

    {
      title: "Settings",
      url: "#",
       icon: <Settings/>,
      items: [
        {
          title: "Account Settings",
          url: "/settings/account",
         
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
       
        },
        {
          title: "Security",
          url: "/settings/security",
         
        },
        {
          title: "Shipping Methods", 
          url: "/settings/shipping",
       
        }
      ],
    }
  ],
}

export function AppSidebar() {

  // Track which dropdown is open by title (or index)
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
                        
                        
                        <a href={item.url} className={`flex flex-col-1 font-semibold  hover:text-white transition-colors text-right duration-300 ${openDropdown === item.title ? 'text-purple-700' : 'text-black'}`}>
                         <di className="pr-3"> {item.icon}</di> {item.title}     
                        </a>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.title  ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}
                        />
                       
                      </div>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton asChild className="bg-gradient-to-r from-purple-600 to-blue-600  p-4  py-5 mb-2 shadow-lg hover:shadow-xl hover:text-white transform  transition-all duration-300">
                      <Link to={item.url} className="font-semibold text-white hover:text-white transition-colors duration-300">
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
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
