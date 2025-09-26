import * as React from "react";
import {
  ChevronDown,
  DollarSign,
  GalleryVerticalEnd,
  MessageSquareWarning,
  ShoppingCart,
} from "lucide-react";

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
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";

export function AppSidebar({ adminNav, sellerNav }) {
  const [role] = React.useState("seller");

  const data = {
    navMain: role === "seller" ? adminNav : sellerNav,
  };

  const [openDropdown, setOpenDropdown] = React.useState(null);

  function dropdownToggle(e, title) {
    e.preventDefault();
    setOpenDropdown((prev) => (prev === title ? null : title));
  }

  return (
    <Sidebar collapsible="icon" className="bg-white shadow-lg border-r border-gray-100 flex flex-col group-data-[collapsible=icon]:min-w-[60px]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-3 sm:p-4 lg:p-6 group-data-[collapsible=icon]:p-2 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="block">
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">
                    <Link to="/" className="flex items-center space-x-2 group-data-[collapsible=icon]:justify-center">
                      <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                        <span className="text-white font-bold text-sm lg:text-lg">S</span>
                      </div>
                      <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="font-bold text-lg lg:text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
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

      <SidebarContent className="flex-1 p-2 lg:p-4 overflow-y-auto no-scrollbar ">
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} className="">
                {item.items && item.items.length > 0 ? (
                  <SidebarMenuButton
                    asChild
                    className="mb-2 bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 "
                  >
                    <div
                      onClick={(e) => dropdownToggle(e, item.title)}
                      className={`
                      flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out py-5 border-0
                      ${
                        openDropdown === item.title
                          ? "hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                          : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100"
                      }
                      ${
                        openDropdown === item.title
                          ? "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200"
                          : ""
                      }
                      ${
                        !openDropdown === item.title
                          ? "hover:transform hover:-translate-y-0.5"
                          : ""
                      }
                    `}
                    >
                      <Link
                        to={item.url}
                        className={`flex items-center gap-2 font-semibold text-sm hover:text-white transition-colors duration-300 group-data-[collapsible=icon]:justify-center ${
                          openDropdown === item.title
                            ? "text-purple-700"
                            : "text-black"
                        }`}
                      >
                        <span className="flex items-center">{item.icon}</span>
                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                      </Link>

                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 group-data-[collapsible=icon]:hidden ${
                          openDropdown === item.title
                            ? "rotate-180 text-purple-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </SidebarMenuButton>
                ) : (
                  <div>
                    <SidebarMenuButton
                      asChild
                      className={`${
                        item.title === "Dashboard"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 p-4 py-5 mb-2 shadow-lg hover:shadow-xl hover:text-white transform transition-all duration-300"
                          : `
        flex items-center p-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out py-5 border-0
        ${
          openDropdown === item.title
            ? "hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
            : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100"
        }
        ${
          openDropdown === item.title
            ? "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200"
            : ""
        }
        ${
          !openDropdown === item.title
            ? "hover:transform hover:-translate-y-0.5"
            : ""
        }
      `
                      }`}
                    >
                      <Link
                        to={item.url}
                        className={`flex items-center gap-2 font-semibold text-sm group-data-[collapsible=icon]:justify-center ${
                          item.title === "Dashboard"
                            ? "text-white hover:text-white"
                            : "text-black hover:text-white transition-colors duration-300"
                        }`}
                      >
                        <span className="flex items-center">{item.icon}</span>
                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </div>
                )}
                {openDropdown === item.title && (
                  <SidebarMenuSub
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out group-data-[collapsible=icon]:hidden
                      ${
                        openDropdown
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem
                        key={subItem.title}
                        className="border-b border-gray-200 last:border-0 "
                      >
                        <SidebarMenuSubButton
                          asChild
                          isActive={subItem.isActive}
                          className="p-3 lg:p-5"
                        >
                          <Link className="font-medium text-sm group-data-[collapsible=icon]:justify-center" to={subItem.url}>
                            <span className="group-data-[collapsible=icon]:hidden">{subItem.title}</span>
                            <span className="group-data-[collapsible=icon]:block hidden text-xs">{subItem.title.substring(0, 2)}</span>
                          </Link>
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
      <div className="p-2 lg:p-4 group-data-[collapsible=icon]:p-2 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center space-x-2 lg:space-x-3 group-data-[collapsible=icon]:space-x-0 p-2 lg:p-3 group-data-[collapsible=icon]:p-2 rounded-2xl bg-white shadow-sm group-data-[collapsible=icon]:justify-center">
          <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="text-white font-semibold text-xs lg:text-sm">JD</span>
          </div>
          <div className="flex-1 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
