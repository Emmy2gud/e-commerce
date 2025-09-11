import React from "react";

import { Outlet, Link } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/AppSidebar";
import {
  TrendingUp,
  TrendingDown,
  Store,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardHeader from "../../components/DashboardHeader";
import RevenueChart from "../../components/RevenueChart";
import RecentActivities from "../../components/RecentActivities";
import TopProducts from "../../components/topProducts";
import TotalSales from "../../components/TotalSales";
import { RadialChart } from "../../components/RadialChart";
import { LineChart } from "../../components/LineChart";
import { Header } from "../dashboard/Header";

class DashBoardLayout extends React.Component {
  render() {
    return (
      
      <SidebarProvider className="min-h-screen px-0">
        <AppSidebar />
        <SidebarInset className="">
          <div className="">
                 <Header />
            <main className="flex-1  bg-gray-100">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  }
}

export default DashBoardLayout;
