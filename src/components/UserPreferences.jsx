import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Bell, Shield, Globe } from "lucide-react";

const UserPreferences = () => {
  const preferences = [
    { category: "Electronics", color: "bg-blue-100 text-blue-800" },
    { category: "Fashion", color: "bg-pink-100 text-pink-800" },
    { category: "Books", color: "bg-green-100 text-green-800" },
    { category: "Home & Garden", color: "bg-yellow-100 text-yellow-800" },
    { category: "Sports", color: "bg-purple-100 text-purple-800" },
    { category: "Art & Crafts", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <Card className="bg-white shadow-lg border-1 border-gray-300">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Preferences & Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Favorite Categories</h3>
          <div className="flex flex-wrap gap-2">
            {preferences.map((pref, index) => (
              <Badge key={index} className={pref.color}>
                {pref.category}
              </Badge>
            ))}
          </div>
        </div>

        
        <div className="space-y-3 pt-4 border-t border-gray-300">
          <h3 className="font-medium text-gray-900 mb-3">Quick Settings</h3>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-sm">Language & Region</p>
                <p className="text-xs text-gray-500">English (US) • Pacific Time</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="border border-gray-300">Change</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserPreferences;
