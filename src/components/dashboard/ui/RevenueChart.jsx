import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Download } from "lucide-react"
const dashboardColors = {
  primary: "#7c3aed",
  secondary: "#a855f7", 
  accent: "#c084fc", 
};
export const RevenueChart = ({ data, title = "Revenue Overview", description = "Monthly revenue trends" }) =>
  
   (
  <Card className="lg:col-span-2  shadow-lg border-0 bg-gray-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center border-1 border-gray-300 px-2 py-1 text-black hover:bg-violet-500 hover:text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            
            }}
          />
          <Bar dataKey="value" fill={dashboardColors.primary}  radius={[4, 4, 0, 0]} />
          <Bar dataKey="mobile" ill={dashboardColors.secondary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)
