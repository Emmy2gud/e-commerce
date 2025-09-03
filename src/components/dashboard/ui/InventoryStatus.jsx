import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
export const InventoryStatus = ({ inventory }) => (
  <Card className="border-0 shadow-lg bg-gray-50">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Inventory Status</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {inventory.map((item, index) => {
          const percentage = (item.stock / item.total) * 100;

          const color =
            percentage > 60
              ? "bg-green-500"
              : percentage > 30
              ? "bg-yellow-500"
              : "bg-red-500";

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  {item.stock}/{item.total}
                </span>
              </div>

              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={cn("h-full transition-all", color)}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex justify-between items-center">
                <Badge
                  className={cn(
                    "text-xs",
                    item.status === "good"
                      ? "bg-green-100 text-green-800"
                      : item.status === "low"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  )}
                >
                  {item.status === "good"
                    ? "In Stock"
                    : item.status === "low"
                    ? "Low Stock"
                    : "Out of Stock"}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </CardContent>
  </Card>
);
