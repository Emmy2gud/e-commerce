

import { DollarSign, Store, ShoppingCart, Users } from "lucide-react"
import { StatCard } from "./ui/StatCard"
import { RevenueChart } from "./ui/RevenueChart"
import { CategoryDistribution } from "./ui/CategoryDistribution"
import { RecentActivities } from "./ui/RecentActivities"
import { TopProducts } from "./ui/TopProducts"
import { RecentSellers } from "./ui/RecentSellers"

export const AdminDashboard = ({ salesData, pieData, recentActivities, topProducts }) => (
  <div className="space-y-6">

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$284,590"
        change="+12.5%"
        changeType="increase"
        icon={DollarSign}
        description="Revenue across all vendors"
      />
      <StatCard
        title="Active Vendors"
        value="12,156"
        change="+8.2%"
        changeType="increase"
        icon={Store}
        description="Verified active sellers"
      />
      <StatCard
        title="Total Orders"
        value="12,847"
        change="+21.1%"
        changeType="increase"
        icon={ShoppingCart}
        description="Orders this month"
      />
      <StatCard
        title="Customers"
        value="8,549"
        change="-2.4%"
        changeType="decrease"
        icon={Users}
        description="Registered users"
      />
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      <RevenueChart data={salesData} />
      <CategoryDistribution data={pieData} />
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <RecentActivities activities={recentActivities} />
      <TopProducts products={topProducts} />
    </div>

    <div className="grid gap-6 lg:grid-cols-1">
<RecentSellers/>
    </div>
  </div>
)
