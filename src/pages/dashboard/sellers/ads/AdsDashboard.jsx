import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Megaphone, 
  Plus, 
  Activity, 
  History, 
  TrendingUp, 
  DollarSign, 
  Eye, 
  MousePointer,
  Target,
  Zap,
  BarChart3,
  Calendar,
  Users
} from 'lucide-react';
import CreateAd from './CreateAd';
import ActiveAds from './ActiveAds';
import AdHistory from './AdHistory';

const AdsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for overview
  const overviewStats = {
    activeAds: 3,
    totalSpend: 532.15,
    totalRevenue: 4740.00,
    totalImpressions: 15620,
    totalClicks: 1456,
    averageROI: 789.2,
    conversionRate: 5.8
  };

  const recentCampaigns = [
    {
      id: 10231,
      product: 'Wireless Bluetooth Headphones',
      status: 'running',
      spend: 45.00,
      revenue: 380.00,
      roi: 744.4
    },
    {
      id: 10232,
      product: 'Smart Fitness Tracker',
      status: 'paused',
      spend: 28.00,
      revenue: 180.00,
      roi: 542.9
    },
    {
      id: 10233,
      product: 'Premium Coffee Maker',
      status: 'running',
      spend: 34.00,
      revenue: 290.00,
      roi: 752.9
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'running':
        return <Badge className="bg-green-100 text-green-700">Running</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-100 text-yellow-700">Paused</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const OverviewContent = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Marketing & Advertising Hub</h2>
            <p className="text-violet-100">Boost your product visibility and drive sales with targeted campaigns</p>
          </div>
          <Button 
            className="bg-white text-violet-600 hover:bg-gray-100 self-start sm:self-center"
            onClick={() => setActiveTab('create')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Campaign
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{overviewStats.activeAds}</p>
                <p className="text-xs text-green-600 mt-1">↗ 2 new this week</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Ad Spend</p>
                <p className="text-2xl font-bold text-gray-900">${overviewStats.totalSpend.toFixed(2)}</p>
                <p className="text-xs text-blue-600 mt-1">↗ +15.3% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${overviewStats.totalRevenue.toFixed(2)}</p>
                <p className="text-xs text-green-600 mt-1">↗ +28.7% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average ROI</p>
                <p className="text-2xl font-bold text-green-600">{overviewStats.averageROI.toFixed(1)}%</p>
                <p className="text-xs text-green-600 mt-1">↗ Excellent performance</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Impressions</p>
                <p className="text-xl font-bold text-gray-900">{overviewStats.totalImpressions.toLocaleString()}</p>
              </div>
              <Eye className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clicks</p>
                <p className="text-xl font-bold text-gray-900">{overviewStats.totalClicks.toLocaleString()}</p>
              </div>
              <MousePointer className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-xl font-bold text-gray-900">{overviewStats.conversionRate}%</p>
              </div>
              <BarChart3 className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Campaigns */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Latest advertising activity overview</CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setActiveTab('active')}
          >
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{campaign.product}</p>
                  <p className="text-xs text-gray-500">Campaign ID: {campaign.id}</p>
                </div>
                <div className="flex items-center gap-4">
                  {getStatusBadge(campaign.status)}
                  <div className="text-right">
                    <p className="text-sm font-medium">${campaign.spend.toFixed(2)} spent</p>
                    <p className="text-xs text-green-600">{campaign.roi.toFixed(1)}% ROI</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab('create')}>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Plus className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="font-medium mb-1">Create Campaign</h3>
            <p className="text-sm text-gray-500">Launch a new advertising campaign</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab('active')}>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-medium mb-1">Manage Active Ads</h3>
            <p className="text-sm text-gray-500">Monitor running campaigns</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab('history')}>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <History className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium mb-1">View History</h3>
            <p className="text-sm text-gray-500">Analyze past performance</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-violet-600" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Marketing & Ads</h1>
            <p className="text-gray-600">Grow your business with targeted advertising</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-violet-100 text-violet-700">
          <Zap className="w-3 h-3 mr-1" />
          Seller Tools
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full sm:w-auto">
          <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
          <TabsTrigger value="create" className="text-xs sm:text-sm">Create Ad</TabsTrigger>
          <TabsTrigger value="active" className="text-xs sm:text-sm">Active Ads</TabsTrigger>
          <TabsTrigger value="history" className="text-xs sm:text-sm">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewContent />
        </TabsContent>

        <TabsContent value="create">
          <CreateAd />
        </TabsContent>

        <TabsContent value="active">
          <ActiveAds />
        </TabsContent>

        <TabsContent value="history">
          <AdHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdsDashboard;