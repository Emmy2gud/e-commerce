import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Target,
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Download
} from 'lucide-react';

const RevenueAnalyticsWidget = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Mock data for different time periods
  const revenueData = {
    month: {
      current: 45230,
      previous: 39180,
      change: 15.4,
      trend: 'up',
      goal: 50000,
      transactions: 1247,
      avgOrderValue: 36.29,
      topProducts: [
        { name: 'Wireless Headphones', revenue: 12450, percentage: 27.5 },
        { name: 'Smart Watch Pro', revenue: 8920, percentage: 19.7 },
        { name: 'Phone Cases', revenue: 6780, percentage: 15.0 },
        { name: 'Laptop Stand', revenue: 4560, percentage: 10.1 }
      ],
      dailyBreakdown: [
        { day: 'Mon', revenue: 1850 },
        { day: 'Tue', revenue: 2100 },
        { day: 'Wed', revenue: 1920 },
        { day: 'Thu', revenue: 2450 },
        { day: 'Fri', revenue: 2890 },
        { day: 'Sat', revenue: 3200 },
        { day: 'Sun', revenue: 1680 }
      ]
    },
    week: {
      current: 12450,
      previous: 10890,
      change: 14.3,
      trend: 'up',
      goal: 13000,
      transactions: 342,
      avgOrderValue: 36.40,
      topProducts: [
        { name: 'Wireless Headphones', revenue: 3420, percentage: 27.5 },
        { name: 'Smart Watch Pro', revenue: 2450, percentage: 19.7 },
        { name: 'Phone Cases', revenue: 1890, percentage: 15.2 },
        { name: 'Laptop Stand', revenue: 1250, percentage: 10.0 }
      ]
    },
    year: {
      current: 542800,
      previous: 456200,
      change: 19.0,
      trend: 'up',
      goal: 600000,
      transactions: 14950,
      avgOrderValue: 36.29,
      topProducts: [
        { name: 'Wireless Headphones', revenue: 149400, percentage: 27.5 },
        { name: 'Smart Watch Pro', revenue: 107000, percentage: 19.7 },
        { name: 'Phone Cases', revenue: 81420, percentage: 15.0 },
        { name: 'Laptop Stand', revenue: 54680, percentage: 10.1 }
      ]
    }
  };

  const currentData = revenueData[selectedPeriod];
  const goalProgress = (currentData.current / currentData.goal) * 100;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <Card className="w-full  border-0 bg-gray-50">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <CardTitle className="text-lg font-semibold flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
            <span className="truncate">Revenue Analytics</span>
          </CardTitle>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="flex-1 sm:w-auto">
              <TabsList className="grid w-full grid-cols-3 h-auto min-h-[2rem] sm:h-8 bg-gray-100 overflow-x-auto">
                <TabsTrigger value="week" className="text-xs sm:text-sm px-2 sm:px-3 py-1 whitespace-nowrap">Week</TabsTrigger>
                <TabsTrigger value="month" className="text-xs sm:text-sm px-2 sm:px-3 py-1 whitespace-nowrap">Month</TabsTrigger>
                <TabsTrigger value="year" className="text-xs sm:text-sm px-2 sm:px-3 py-1 whitespace-nowrap">Year</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" className="p-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white shrink-0">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Main Revenue Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Current Revenue */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 rounded-lg border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-600 truncate">Current Revenue</span>
              <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 truncate">
              {formatCurrency(currentData.current)}
            </div>
            <div className="flex items-center overflow-hidden">
              {currentData.trend === 'up' ? (
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 shrink-0" />
              ) : (
                <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mr-1 shrink-0" />
              )}
              <span className={`text-xs sm:text-sm font-medium ${currentData.trend === 'up' ? 'text-green-600' : 'text-red-600'} mr-1`}>
                {currentData.change}%
              </span>
              <span className="text-xs text-gray-500 truncate">vs last {selectedPeriod}</span>
            </div>
          </div>

          {/* Goal Progress */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-600 truncate">Goal Progress</span>
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
              {goalProgress.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(goalProgress, 100)}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 truncate">
              Goal: {formatCurrency(currentData.goal)}
            </div>
          </div>

          {/* Average Order Value */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-3 sm:p-4 rounded-lg border border-purple-100 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-600 truncate">Avg Order Value</span>
              <PieChart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 truncate">
              {formatCurrency(currentData.avgOrderValue)}
            </div>
            <div className="text-xs text-gray-600">
              {formatNumber(currentData.transactions)} transactions
            </div>
          </div>
        </div>

        {/* Simple Revenue Summary */}
        {selectedPeriod === 'month' && (
          <div className="bg-white p-4 rounded-lg border-0">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">This Week Summary</h4>
              <Badge variant="outline" className="text-green-600 bg-green-50">
                {currentData.change}% up
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Weekly Revenue</p>
                <p className="text-xl font-semibold text-gray-900">{formatCurrency(12450)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-xl font-semibold text-gray-900">342</p>
              </div>
            </div>
          </div>
        )}

        {/* Top Performing Products */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
            <h4 className="font-medium text-gray-900">Top Performing Products</h4>
            <Badge variant="outline" className="text-xs border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white shrink-0">
              This {selectedPeriod}
            </Badge>
          </div>
          <div className="space-y-3 overflow-x-auto">
            {currentData.topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-w-0">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-900 text-xs sm:text-sm truncate">{product.name}</div>
                    <div className="text-xs text-gray-600 truncate">{product.percentage}% of total revenue</div>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">{formatCurrency(product.revenue)}</div>
                  <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full transition-all duration-500" 
                      style={{ width: `${product.percentage * 3}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Insights */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100">
          <h4 className="font-medium text-gray-900 mb-3 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
            Key Highlights
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Revenue Growth</span>
              <span className="font-medium text-green-600">+{currentData.change}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Goal Progress</span>
              <span className="font-medium text-blue-600">{goalProgress.toFixed(0)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Best Seller</span>
              <span className="font-medium text-gray-900">{currentData.topProducts[0]?.name}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueAnalyticsWidget;