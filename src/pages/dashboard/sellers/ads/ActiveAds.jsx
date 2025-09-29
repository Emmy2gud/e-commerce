import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Activity, 
  Play, 
  Pause, 
  Square, 
  MoreHorizontal, 
  Search,
  TrendingUp,
  Eye,
  MousePointer,
  DollarSign,
  Facebook,
  Instagram,
  Calendar,
  Filter
} from 'lucide-react';

const ActiveAds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock active ads data
  const [activeAds, setActiveAds] = useState([
    {
      id: 10231,
      product: 'Wireless Bluetooth Headphones',
      productImage: '/api/placeholder/40/40',
      platforms: ['facebook', 'instagram'],
      status: 'running',
      dailySpend: 5.00,
      totalSpend: 45.00,
      clicks: 234,
      impressions: 2850,
      ctr: 8.2,
      startDate: '2024-01-15',
      endDate: '2024-01-25',
      isActive: true
    },
    {
      id: 10232,
      product: 'Smart Fitness Tracker',
      productImage: '/api/placeholder/40/40',
      platforms: ['facebook'],
      status: 'paused',
      dailySpend: 0.00,
      totalSpend: 28.00,
      clicks: 156,
      impressions: 1920,
      ctr: 8.1,
      startDate: '2024-01-18',
      endDate: '2024-01-28',
      isActive: false
    },
    {
      id: 10233,
      product: 'Premium Coffee Maker',
      productImage: '/api/placeholder/40/40',
      platforms: ['instagram'],
      status: 'running',
      dailySpend: 8.50,
      totalSpend: 34.00,
      clicks: 89,
      impressions: 1450,
      ctr: 6.1,
      startDate: '2024-01-20',
      endDate: '2024-01-30',
      isActive: true
    }
  ]);

  const handleToggleAd = (adId) => {
    setActiveAds(prev => prev.map(ad => 
      ad.id === adId 
        ? { 
            ...ad, 
            isActive: !ad.isActive, 
            status: ad.isActive ? 'paused' : 'running',
            dailySpend: ad.isActive ? 0 : ad.dailySpend 
          }
        : ad
    ));
  };

  const handleStopAd = (adId) => {
    setActiveAds(prev => prev.map(ad => 
      ad.id === adId 
        ? { ...ad, status: 'stopped', isActive: false, dailySpend: 0 }
        : ad
    ));
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-4 h-4 text-blue-600" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'running':
        return <Badge className="bg-green-100 text-green-700">Running</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-100 text-yellow-700">Paused</Badge>;
      case 'stopped':
        return <Badge className="bg-red-100 text-red-700">Stopped</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredAds = activeAds.filter(ad => {
    const matchesSearch = ad.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || ad.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalActiveAds = activeAds.filter(ad => ad.status === 'running').length;
  const totalDailySpend = activeAds.reduce((sum, ad) => sum + ad.dailySpend, 0);
  const totalImpressions = activeAds.reduce((sum, ad) => sum + ad.impressions, 0);
  const totalClicks = activeAds.reduce((sum, ad) => sum + ad.clicks, 0);

  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Active Ad Campaigns</h1>
          <p className="text-gray-600 mt-1">Monitor and manage your running advertisements</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700 text-white">
          <Activity className="w-4 h-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{totalActiveAds}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Daily Spend</p>
                <p className="text-2xl font-bold text-gray-900">${totalDailySpend.toFixed(2)}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Impressions</p>
                <p className="text-2xl font-bold text-gray-900">{totalImpressions.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clicks</p>
                <p className="text-2xl font-bold text-gray-900">{totalClicks.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <MousePointer className="w-5 h-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className='bg-white border-0'>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Campaign Management</CardTitle>
              <CardDescription>Control your active advertising campaigns</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="all">All Status</option>
                <option value="running">Running</option>
                <option value="paused">Paused</option>
                <option value="stopped">Stopped</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-1 border-gray-300">
                  <TableHead>Product</TableHead>
                  <TableHead>Platforms</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Daily Spend</TableHead>
                  <TableHead>Total Spend</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAds.map((ad) => (
                  <TableRow key={ad.id} className="border-b-1 border-gray-300">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img 
                          src={ad.productImage} 
                          alt={ad.product}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium text-sm">{ad.product}</p>
                          <p className="text-xs text-gray-500">ID: {ad.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {ad.platforms.map((platform, idx) => (
                          <div key={idx} className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                            {getPlatformIcon(platform)}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(ad.status)}</TableCell>
                    <TableCell className="font-medium">${ad.dailySpend.toFixed(2)}</TableCell>
                    <TableCell className="font-medium">${ad.totalSpend.toFixed(2)}</TableCell>
                    <TableCell>{ad.clicks.toLocaleString()}</TableCell>
                    <TableCell>{ad.impressions.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className="font-medium text-green-600">{ad.ctr}%</span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{ad.startDate}</p>
                        <p className="text-gray-500">to {ad.endDate}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={ad.isActive}
                          onCheckedChange={() => handleToggleAd(ad.id)}
                          size="sm"
                        />
                        {/* <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <TrendingUp className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              Edit Schedule
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleStopAd(ad.id)}
                            >
                              <Square className="mr-2 h-4 w-4" />
                              Stop Campaign
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu> */}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredAds.length === 0 && (
            <div className="text-center py-8">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No campaigns found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveAds;