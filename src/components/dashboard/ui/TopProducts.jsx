import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Star } from "lucide-react"

export const TopProducts = ({ products }) => (
  <Card className="border-0 shadow-lg  bg-gray-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">Top Selling Products</CardTitle>
        <Button variant="ghost" size="sm" className='px-2 py-1 text-black hover:bg-violet-500 hover:text-white'>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.sales} items sold</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">4.8</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)
