import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, Users, ShoppingBag, Star } from "lucide-react";

const UserStats = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "89",
      change: "+12",
      changeText: "this month",
      icon: ShoppingBag,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Wishlist Items",
      value: "247",
      change: "+18",
      changeText: "this week",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Following",
      value: "1,234",
      change: "+45",
      changeText: "new followers",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Reviews Given",
      value: "156",
      change: "+8",
      changeText: "this month",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`}></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-xs font-semibold px-2 py-1 rounded-full bg-white ${stat.color} border`}>
                +{stat.change}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.changeText}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserStats;
