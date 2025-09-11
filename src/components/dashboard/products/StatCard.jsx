import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export const StatCard = ({ title, value, change, changeType, icon: Icon, description }) => (
  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md p-3">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
      <CardTitle className="text-sm flex flex-1 font-medium text-muted-foreground"><Icon className='w-5 h-5 text-violet-600 mr-1.5'/> {title}</CardTitle>
     <span className={changeType === "increase" ? "text-green-600" : "text-red-600 "}>{change}</span>
    </CardHeader>
    <CardContent className="p-0 pt-2">
      <div className="text-lg font-semibold ">{value}</div>

    </CardContent>
  </Card>
)