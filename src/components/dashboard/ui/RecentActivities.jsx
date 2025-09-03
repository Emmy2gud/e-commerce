import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"


export const RecentActivities = ({ activities }) => (
  <Card className="border-0 shadow-lg  bg-gray-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
        <Button variant="ghost" size="sm" className='px-2 py-1 text-black hover:bg-violet-500 hover:text-white'>
          <Eye className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
            <Badge className={` text-sm rounded-lg text-center items-center px-2 py-0.5 ${activity.status ==='new'?` bg-violet-600 text-white`:`bg-green-400 text-white`}`} >
              {activity.status}
            </Badge>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)