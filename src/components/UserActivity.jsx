import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, MessageSquare, Star, User } from "lucide-react";

const UserActivity = () => {
  const activities = [
    {
      id: 1,
      type: "purchase",
      title: "Purchased item",
      description: "Wireless Bluetooth Headphones - Premium Quality",
      time: "2 hours ago",
      amount: "$129.99",
      icon: ShoppingBag,
      iconColor: "text-green-600",
      iconBg: "bg-green-50"
    },
    {
      id: 2,
      type: "review",
      title: "Left a review",
      description: "5-star review for Smartphone Case - Clear Design",
      time: "5 hours ago",
      icon: Star,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-50"
    },
    {
      id: 3,
      type: "favorite",
      title: "Added to wishlist",
      description: "Vintage Leather Backpack - Brown",
      time: "1 day ago",
      icon: Heart,
      iconColor: "text-red-600",
      iconBg: "bg-red-50"
    },
    {
      id: 4,
      type: "follow",
      title: "Started following",
      description: "TechGear Store - Electronics & Gadgets",
      time: "2 days ago",
      icon: User,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      id: 5,
      type: "message",
      title: "Sent message",
      description: "Inquiry about Custom Art Print sizing options",
      time: "3 days ago",
      icon: MessageSquare,
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

export default UserActivity;
