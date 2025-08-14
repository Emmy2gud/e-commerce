import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Package, ShoppingCart, Store, UserPlus } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "order",
    title: "New order received",
    description: "Order #12847 from TechStore Inc.",
    time: "2 minutes ago",
    icon: ShoppingCart,
    iconBg: "bg-green-500",
    badge: { text: "New", colour: "bg-blue-400"  },
  },
  {
    id: 2,
    type: "vendor",
    title: "Vendor application approved",
    description: "FashionHub has been approved as a vendor",
    time: "15 minutes ago",
    icon: Store,
    iconBg: "bg-gradient-to-br from-purple-600 to-blue-600 ",
    badge: { text: "Approved", colour: "bg-green-400"  },
  },
  {
    id: 3,
    type: "product",
    title: "Product inventory low",
    description: "Wireless Headphones stock below 10 units",
    time: "1 hour ago",
    icon: Package,
    iconBg: "bg-yellow-400",
    badge: { text: "Alert", colour: "bg-red-500"  },
  },
  {
    id: 4,
    type: "customer",
    title: "New customer registered",
    description: "john.doe@email.com joined the platform",
    time: "2 hours ago",
    icon: UserPlus,
    iconBg: "bg-violet-600",
    badge: { text: "Customer", colour: "bg-blue-500"  },
  },
  {
    id: 5,
    type: "order",
    title: "Order completed",
    description: "Order #12846 marked as delivered",
    time: "3 hours ago",
    icon: ShoppingCart,
    iconBg: "bg-green-500",
    badge: { text: "Completed", colour: "bg-green-500"  },
  },
];

export default function RecentActivities() {
  return (
    <Card className="border-0 bg-card/50 backdrop-blur-sm bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Clock className="h-5 w-5 text-primary" />
          Recent Activities
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg bg-purple-50 shadow shadow-gray-300 hover:bg-secondary/50 transition-colors">
            <div className={`p-2 rounded-lg ${activity.iconBg} flex-shrink-0`}>
              <activity.icon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold  truncate">
                  {activity.title}
                </h4>
                <Badge variant={activity.badge.variant} className={`text-xs ${activity.badge.colour} text-white`}>
                  {activity.badge.text}
                </Badge>
              </div>
              <p className="text-sm font-medium mb-1 text-gray-500">
                {activity.description}
              </p>
              <p className="text-xs  font-medium text-gray-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}