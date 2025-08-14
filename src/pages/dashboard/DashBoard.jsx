import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/AppSidebar";
import { TrendingUp, TrendingDown, Store, Users, ShoppingCart, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardHeader from "../../components/DashboardHeader";
import RevenueChart from "../../components/RevenueChart";
import RecentActivities from "../../components/RecentActivities";
import TopProducts from "../../components/topProducts";
import TotalSales from "../../components/TotalSales";
import { RadialChart } from "../../components/RadialChart";
import { LineChart } from "../../components/LineChart";



export default function DashBoard() {
  const stats = [
  {
    title: "Total Revenue",
    value: "$284,590",
    change: "+12.5%",
    changeType: "increase" ,
    icon: DollarSign,
    gradient: "bg-green-400",
  },
  {
    title: "Active Vendors",
    value: "$12,156",
    change: "+8.2%",
    changeType: "increase" ,
    icon: Store,
    gradient: "bg-violet-600",
  },
  {
    title: "Total Orders",
    value: "$12,847",
    change: "+23.1%",
    changeType: "increase" ,
    icon: ShoppingCart,
    gradient: "bg-yellow-400",
  },
  {
    title: "Customers",
    value: "$8,549",
    change: "-2.4%",
    changeType: "decrease" ,
    icon: Users,
    gradient: "bg-purple-600",
  },
];

  return (
    <SidebarProvider className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-300 ">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger className="text-gray-500 " />
            <Separator orientation="vertical" className="mr-2 h-4" />
       
            <div className="w-full">
              
              <DashboardHeader />
            </div>

          </div>
        </header>
   
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-screen bg-gray-50">
          <div className=" min-h-[100vh] flex-1 rounded-xl md:min-h-min">

              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mb-8 mt-3 p-2">
          <RadialChart className=" rounded-xl w-50 "/>
        <LineChart className=" rounded-xl  "/>
            </div> */}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
             <Card key={stat.title} className="relative overflow-hidden border-0   bg-white hover:shadow-card transition-all duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium  text-gray-500">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.gradient}`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="flex items-center text-xs">
              {stat.changeType === "increase" ? (
                <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500  mr-1" />
              )}
              <span
                className={
                  stat.changeType === "increase"
                    ? "text-green-600 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                {stat.change}
              </span>
              <span className="text-sm font-medium ml-1 text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>
            ))}
          </div>
          {/* Updated grid for RevenueChart, TopProducts, RecentActivities, TotalSales */}
          <div className="grid gap-4 md:grid-cols-3 grid-rows-[auto_auto]">
            <div className=" aspect-video rounded-xl col-span-2 row-span-1 flex flex-col gap-4">
              <RevenueChart />
  
            </div>
            <div className=" aspect-video rounded-xl row-span-6 w-93">
              <RecentActivities />
            </div>

               <div className=" rounded-xl  col-span-6">
                <TopProducts />
              </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
