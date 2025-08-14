import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", revenue: 45000, orders: 234 },
  { month: "Feb", revenue: 52000, orders: 267 },
  { month: "Mar", revenue: 48000, orders: 245 },
  { month: "Apr", revenue: 61000, orders: 312 },
  { month: "May", revenue: 58000, orders: 298 },
  { month: "Jun", revenue: 67000, orders: 345 },
  { month: "Jul", revenue: 71000, orders: 367 },
  { month: "Aug", revenue: 69000, orders: 356 },
  { month: "Sep", revenue: 76000, orders: 389 },
  { month: "Oct", revenue: 82000, orders: 421 },
  { month: "Nov", revenue: 78000, orders: 402 },
  { month: "Dec", revenue: 85000, orders: 435 },
];

export default function RevenueChart() {
  return (
    <Card className="border-0 bg-card/50 backdrop-blur-sm col-span-2 bg-white pb-72">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-5 w-5 text-violet-600" />
          Revenue Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(251, 63%, 54%)" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(251, 63%, 54%))"
              fontSize={12}
              fontWeight={500}
             
            />
            <YAxis 
              stroke="hsl(v251, 63%, 54%)"
              fontSize={12}
               
              fontWeight={500}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(251, 63%, 54%)",
           fontSize:"15px",
           fontWeight:"500"
              }}
              fo
              formatter={(value, name) => [`$${value.toLocaleString()}`, name === "revenue" ? "Revenue" : "Orders"]}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(217 91% 60%)" 
              strokeWidth={3}
              fill="url(#revenueGradient)" 
           
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}