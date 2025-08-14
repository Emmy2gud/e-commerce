import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, TrendingUp, Store } from "lucide-react";
import { PaginationDemo } from "./PaginationDemo";
import SelectDemo from "./SelectDemo";

const topVendors = [
  {
    id: 1,
    name: "TechStore Inc.",
    avatar: "/placeholder.svg",
    revenue: "$45,230",
    orders: 234,
    rating: 4.9,
    growth: "+15.2%",
    status: "premium",
  },
  {
    id: 2,
    name: "FashionHub",
    avatar: "/placeholder.svg",
    revenue: "$38,920",
    orders: 189,
    rating: 4.8,
    growth: "+12.8%",
    status: "premium",
  },
  {
    id: 3,
    name: "Home & Garden Co.",
    avatar: "/placeholder.svg",
    revenue: "$32,150",
    orders: 156,
    rating: 4.7,
    growth: "+8.9%",
    status: "standard",
  },
  {
    id: 4,
    name: "Sports Gear Pro",
    avatar: "/placeholder.svg",
    revenue: "$28,840",
    orders: 143,
    rating: 4.6,
    growth: "+6.3%",
    status: "standard",
  },
  {
    id: 5,
    name: "Beauty Essentials",
    avatar: "/placeholder.svg",
    revenue: "$24,680",
    orders: 128,
    rating: 4.8,
    growth: "+11.4%",
    status: "premium",
  },
];

export default function TopProducts() {
  return (
    <Card className="border-0 bg-card/50 backdrop-blur-sm bg-white">
      <CardHeader className="flex justify-between ">
        <CardTitle className="flex items-center gap-2 text-violet-500">
          <Store className="h-5 w-5 text-violet-500" />
          Top Performing Vendors
        </CardTitle>

        <div>
          <SelectDemo/>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {topVendors.map((vendor, index) => (
          <div key={vendor.id} className="flex items-center gap-4 p-3 rounded-lg bg-purple-50 shadow shadow-gray-300 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-sm font-bold text-gray-500 w-6">
                #{index + 1}
              </div>
              <Avatar className="h-10 w-10 ">
                <AvatarImage src={vendor.avatar} alt={vendor.name} />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600  text-white text-xs font-medium">
                  {vendor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold   truncate">
                    {vendor.name}
                  </h4>
                  <Badge 
                    variant={vendor.status === "premium" ? "default" : "secondary"}
                    className={`text-xs font-medium  ${vendor.status === "premium" ? "bg-yellow-500 text-white" : "bg-violet-200 text-violet-700"}`}
                  >
                    {vendor.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-gray-500">{vendor.revenue}</span>
                  <span className="font-medium text-gray-500">{vendor.orders} orders</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-500">{vendor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="h-3 w-3" />
                    <span className="font-medium ">{vendor.growth}</span>
                  </div>
                  {/* pagination */}
             
                </div>
              </div>
            </div>
          </div>
        ))}

             <div>
                    <PaginationDemo/>
                  </div>
      </CardContent>
    </Card>
  );
}