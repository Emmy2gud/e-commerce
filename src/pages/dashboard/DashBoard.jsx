import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, ShoppingCart, Users, UserCheck } from "lucide-react"


import { AdminDashboard } from "../../components/dashboard/AdminDashboard"
import { SellerDashboard } from "../../components/dashboard/SellerDashboard "
import { Header } from "../../components/dashboard/Header"


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("admin")
  const [timeRange, setTimeRange] = useState("7d")

  const salesData = [
    { name: "Jan", value: 4000, mobile: 2400 },
    { name: "Feb", value: 3000, mobile: 1398 },
    { name: "Mar", value: 5000, mobile: 3800 },
    { name: "Apr", value: 2780, mobile: 3908 },
    { name: "May", value: 1890, mobile: 4800 },
    { name: "Jun", value: 2390, mobile: 3800 },
  ]

const pieData = [
  { name: "Electronics", value: 35, color: "hsl(265, 80%, 50%)" }, 
  { name: "Fashion", value: 25, color: "hsl(275, 70%, 55%)" },  
  { name: "Home", value: 20, color: "hsl(285, 65%, 60%)" },       
  { name: "Books", value: 20, color: "hsl(295, 60%, 65%)" },      
];

  const recentActivities = [
    {
      id: 1,
      type: "order",
      title: "New order received",
      description: "Order #12847 from TechStore Inc.",
      time: "2 minutes ago",
      status: "new",
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "vendor",
      title: "Vendor application approved",
      description: "FashionHub has been approved as a vendor",
      time: "15 minutes ago",
      status: "approved",
      icon: UserCheck,
      color: "text-blue-600",
    },
    // ... other activities
  ]

  const topProducts = [
    { name: "Wireless Headphones", sales: 316, image: "/wireless-headphones.png" },
    { name: "Smart Watch", sales: 274, image: "/smartwatch-lifestyle.png" },
    { name: "Laptop Stand", sales: 195, image: "/laptop-stand.png" },
    { name: "Phone Case", sales: 142, image: "/colorful-phone-case-display.png" },
  ]

  return (
    <div className="min-h-screen bg-white " >
      <Header />

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 ">
            <div className="flex items-center justify-between ">
              <TabsList className="grid w-fit grid-cols-2 bg-gray-100 ">
                <TabsTrigger value="admin" className="px-6 text-black font-medium ">
                  Admin Dashboard
                </TabsTrigger>
                <TabsTrigger value="seller" className="px-6 text-black font-medium ">
                  Seller Dashboard
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm " className="flex items-center border-1 border-gray-300 px-2 py-1 text-black">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm " className="flex items-center border-1 border-gray-300 px-2 py-1 text-black">
                  Last 7 days
                </Button>
              </div>
            </div>

            <TabsContent value="admin" className="space-y-6">
              <AdminDashboard
                salesData={salesData}
                pieData={pieData}
                recentActivities={recentActivities}
                topProducts={topProducts}
              />
            </TabsContent>

            <TabsContent value="seller" className="space-y-6">
              <SellerDashboard salesData={salesData} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default Dashboard