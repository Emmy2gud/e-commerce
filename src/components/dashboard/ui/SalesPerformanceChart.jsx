import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const dashboardColors = {
  primary: "#7c3aed",
  secondary: "#a855f7", 
  accent: "#c084fc", 
};
export const SalesPerformanceChart = ({ data }) => (
  <Card className="lg:col-span-2 border-0 shadow-lg  bg-gray-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Sales Performance</CardTitle>
          <CardDescription>Your sales over time</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center border-1 border-gray-300 px-2 py-1 text-black">
            Desktop
          </Button>
          <Button variant="outline" size="sm" className="flex items-center border-1 border-gray-300 px-2 py-1 text-black">
            Mobile
          </Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="black" />
          <YAxis stroke="black" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={`${dashboardColors.primary} `}
          
            strokeWidth={3}
            dot={{ fill:`${dashboardColors.primary} `, strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)
