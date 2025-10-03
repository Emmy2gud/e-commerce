import { DollarSign, Package, Store, Star } from "lucide-react";
import { StatCard } from "./ui/StatCard";
import { SalesPerformanceChart } from "./ui/SalesPerformanceChart";
import { QuickActions } from "./ui/QuickActions ";
import { RecentOrders } from "./ui/RecentOrders";
import { InventoryStatus } from "./ui/InventoryStatus";
import { RecentSales } from "./ui/RecentSales";
import CustomerInteractionHub from "./ui/CustomerInteractionHub";
import RevenueAnalyticsWidget from "./ui/RevenueAnalyticsWidget";


export const SellerDashboard = ({ salesData }) => {
  const recentOrders = [
    {
      id: "#12847",
      customer: "John Smith",
      amount: "$234.50",
      status: "Processing",
      time: "2 min ago",
    },
    {
      id: "#12846",
      customer: "Sarah Johnson",
      amount: "$89.99",
      status: "Shipped",
      time: "1 hour ago",
    },
    {
      id: "#12845",
      customer: "Mike Wilson",
      amount: "$156.75",
      status: "Delivered",
      time: "3 hours ago",
    },
    {
      id: "#12844",
      customer: "Emma Davis",
      amount: "$299.00",
      status: "Processing",
      time: "5 hours ago",
    },
  ];

  const inventoryData = [
    { name: "Wireless Headphones", stock: 45, total: 100, status: "good" },
    { name: "Smart Watch", stock: 8, total: 50, status: "low" },
    { name: "Phone Case", stock: 0, total: 25, status: "out" },
    { name: "Laptop Stand", stock: 23, total: 30, status: "good" },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="My Revenue"
          value="$45,230"
          change="+15.3%"
          changeType="increase"
          icon={DollarSign}
          description="This month's earnings"
        />
        <StatCard
          title="Products Sold"
          value="1,247"
          change="+8.7%"
          changeType="increase"
          icon={Package}
          description="Items sold this month"
        />
        <StatCard
          title="Active Listings"
          value="89"
          change="+3"
          changeType="increase"
          icon={Store}
          description="Currently listed products"
        />
        <StatCard
          title="Customer Rating"
          value="4.8"
          change="+0.2"
          changeType="increase"
          icon={Star}
          description="Average rating"
        />
      </div>

      {/* Enhanced Analytics and Customer Management */}
      <div className="grid gap-4 md:gap-6 grid-cols-1">
        <RevenueAnalyticsWidget/>
        <CustomerInteractionHub />
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-3">
        <SalesPerformanceChart data={salesData} />
        <QuickActions /> 
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
        <RecentOrders orders={recentOrders} />
        <InventoryStatus inventory={inventoryData} />
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1">
        <RecentSales />
      </div>
    </div>
  );
};
