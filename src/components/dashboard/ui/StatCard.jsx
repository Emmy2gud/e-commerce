import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// eslint-disable-next-line no-unused-vars
export const StatCard = ({ title, value, change, changeType, icon: Icon, description }) => (
  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 shadow-md">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
    </CardHeader>
    <CardContent>
      <div className="text-lg sm:text-2xl font-bold">{value}</div>
      <div className="flex items-center space-x-1 sm:space-x-2 text-xs text-muted-foreground">
        {changeType === "increase" ? (
          <ArrowUpRight className="h-3 w-3 text-green-600" />
        ) : (
          <ArrowDownRight className="h-3 w-3 text-red-600" />
        )}
        <span className={changeType === "increase" ? "text-green-600" : "text-red-600"}>{change}</span>
        <span className="hidden sm:inline">from last month</span>
      </div>
      {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
    </CardContent>
  </Card>
)