import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Package, ShoppingCart, TrendingUp, Settings } from "lucide-react"

export const QuickActions = () => (
  <Card className="border-0 shadow-lg  bg-gray-50">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <Button className="w-full justify-start bg-transparent border-1 border-gray-300 text-black hover:bg-violet-500 hover:text-white"  >
        <Plus className="h-4 w-4 mr-2" />
        Add New Product
      </Button>
      <Button className="w-full justify-start bg-transparent border-1 border-gray-300 text-black hover:bg-violet-500 hover:text-white" >
        <Package className="h-4 w-4 mr-2" />
        Manage Inventory
      </Button>
      <Button className="w-full justify-start bg-transparent border-1 border-gray-300 text-black hover:bg-violet-500 hover:text-white" >
        <ShoppingCart className="h-4 w-4 mr-2" />
        View Orders
      </Button>
      <Button className="w-full justify-start bg-transparent border-1 border-gray-300 text-black hover:bg-violet-500 hover:text-white" >
        <TrendingUp className="h-4 w-4 mr-2" />
        Analytics
      </Button>
      <Button className="w-full justify-start bg-transparent border-1 border-gray-300 text-black hover:bg-violet-500 hover:text-white" >
        <Settings className="h-4 w-4 mr-2" />
        Store Settings
      </Button>
    </CardContent>
  </Card>
)
