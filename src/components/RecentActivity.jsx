import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, DollarSign, MessageSquare, Star } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "sale",
      title: "New order received",
      description: "Moonstone Silver Ring sold to Sarah Johnson",
      time: "2 minutes ago",
      amount: "$129.99",
      icon: DollarSign,
      iconColor: "text-green-600",
      iconBg: "bg-green-50"
    },
    {
      id: 2,
      type: "review",
      title: "New 5-star review",
      description: "Customer loved the Handwoven Silk Scarf",
      time: "1 hour ago",
      icon: Star,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-50"
    },
    {
      id: 3,
      type: "message",
      title: "Customer inquiry",
      description: "Question about custom jewelry options",
      time: "3 hours ago",
      icon: MessageSquare,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      id: 4,
      type: "stock",
      title: "Low stock alert",
      description: "Ceramic Coffee Mug Set (3 units remaining)",
      time: "5 hours ago",
      icon: Package,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50"
    },
    {
      id: 5,
      type: "sale",
      title: "Order shipped",
      description: "Leather Wallet shipped to David Chen",
      time: "1 day ago",
      amount: "$75.99",
      icon: Package,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50"
    }
  ];

  return (
    <Card className="bg-white shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-full ${activity.iconBg}`}>
                <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  {activity.amount && (
                    <Badge variant="secondary" className="ml-2">
                      {activity.amount}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
