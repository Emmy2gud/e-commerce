import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { PieChart, Pie, Cell } from "recharts";


const chartData = [
  { category: "Electronics", value: 35, fill: "var(--color-electronics)" },
  { category: "Fashion", value: 28, fill: "var(--color-fashion)" },
  { category: "Home", value: 22, fill: "var(--color-home)" },
  { category: "Sports", value: 15, fill: "var(--color-sports)" },
];

const chartConfig = {
  value: {
    label: "Sales",
  },
  electronics: {
    label: "Electronics",
    color: "hsl(270, 70%, 50%)", // Primary violet
  },
  fashion: {
    label: "Fashion", 
    color: "hsl(280, 70%, 60%)", // Lighter violet
  },
  home: {
    label: "Home & Garden",
    color: "hsl(260, 60%, 50%)", // Deeper purple
  },
  sports: {
    label: "Sports",
    color: "hsl(250, 80%, 65%)", // Bright purple-blue
  },
};

export function RadialChart() {
  return (
    <Card className="border-0 shadow shadow-gray-300  backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-foreground text-sm font-medium text-gray-400 ">
          <TrendingUp className="h-4 w-4 text-gray-400" />
          Sales by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-[120px] h-[120px]"
          >
   <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {/* {totalVisitors.toLocaleString()} */}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
          </ChartContainer>
          <div className="space-y-1">
            {chartData.map((item, index) => (
              <div key={item.category} className="flex items-center gap-2 text-xs">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ }}
                />
                
                <span className=" font-semibold p-0.5">{item.category}</span>
                <span className="text-gray-400 font-medium">{item.value}%</span>
              
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}