import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const RecentOrders = ({ orders }) => (
  <Card className="border-0 shadow-lg  bg-gray-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
        <Button  size="sm" className='px-2 py-1 text-xs text-black hover:bg-violet-500 hover:text-white'>
          View All
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div>
              <p className="text-sm font-medium">{order.id}</p>
              <p className="text-xs text-gray-400">{order.customer}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{order.amount}</p>
              <Badge  className={`text-xs items-center text-center mt-1 ${order.status === "Delivered" ? "text-violet-100 bg-violet-800" : "bg-violet-100 text-violet-800"}`}>
                {order.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)