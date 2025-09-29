import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  History, 
  Download, 
  Search,
  TrendingUp,
  Eye,
  MousePointer,
  DollarSign,
  Facebook,
  Instagram,
  Calendar,
  FileText,
  MoreHorizontal,
  ArrowUpDown,
  Filter
} from 'lucide-react';

const AdHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('endDate');
  const [sortOrder, setSortOrder] = useState('desc');

  // Mock historical ads data
  const historicalAds = [
    {
      id: 10225,
      product: 'Wireless Gaming Mouse',
      productImage: '/api/placeholder/40/40',
      platforms: ['facebook', 'instagram'],
      status: 'completed',
      totalSpend: 125.50,
      totalClicks: 567,
      totalImpressions: 8420,
      ctr: 6.7,
      conversions: 23,
      revenue: 1150.00,
      roi: 816.9,
      startDate: '2024-01-01',
      endDate: '2024-01-10',
      duration: 10
    },
    {
      id: 10226,
      product: 'Smartphone Case Collection',
      productImage: '/api/placeholder/40/40',
      platforms: ['instagram'],
      status: 'completed',
      totalSpend: 89.25,
      totalClicks: 234,
      totalImpressions: 3850,
      ctr: 6.1,
      conversions: 18,
      revenue: 540.00,
      roi: 505.0,
      startDate: '2024-01-05',
      endDate: '2024-01-12',
      duration: 8
    },
    {
      id: 10227,
      product: 'LED Desk Lamp',
      productImage: '/api/placeholder/40/40',
      platforms: ['facebook'],
      status: 'stopped',
      totalSpend: 67.80,
      totalClicks: 145,
      totalImpressions: 2100,
      ctr: 6.9,
      conversions: 8,
      revenue: 320.00,
      roi: 372.0,
      startDate: '2024-01-08',
      endDate: '2024-01-13',
      duration: 6
    },
    {
      id: 10228,
      product: 'Bluetooth Speaker Pro',
      productImage: '/api/placeholder/40/40',
      platforms: ['facebook', 'instagram'],
      status: 'completed',
      totalSpend: 210.00,
      totalClicks: 892,
      totalImpressions: 12500,
      ctr: 7.1,
      conversions: 45,
      revenue: 2250.00,
      roi: 971.4,
      startDate: '2023-12-20',
      endDate: '2024-01-05',
      duration: 16
    },
    {
      id: 10229,
      product: 'Kitchen Utensil Set',
      productImage: '/api/placeholder/40/40',
      platforms: ['instagram'],
      status: 'completed',
      totalSpend: 45.60,
      totalClicks: 123,
      totalImpressions: 1890,
      ctr: 6.5,
      conversions: 12,
      revenue: 480.00,
      roi: 952.6,
      startDate: '2023-12-25',
      endDate: '2024-01-02',
      duration: 9
    }
  ];

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
      case 'completed':
        return <Badge className="bg-green-100 text-green-700">Completed</Badge>;
      case 'stopped':
        return <Badge className="bg-red-100 text-red-700">Stopped Early</Badge>;
      case 'expired':
        return <Badge className="bg-gray-100 text-gray-700">Expired</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getROIColor = (roi) => {
    if (roi >= 500) return 'text-green-600';
    if (roi >= 200) return 'text-blue-600';
    if (roi >= 0) return 'text-orange-600';
    return 'text-red-600';
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const sortedAds = [...historicalAds].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const filteredAds = sortedAds.filter(ad => {
    const matchesSearch = ad.product.toLowerCase().includes(searchTerm.toLowerCase());
 
    return matchesSearch;
  });

  const totalSpend = historicalAds.reduce((sum, ad) => sum + ad.totalSpend, 0);
  const totalRevenue = historicalAds.reduce((sum, ad) => sum + ad.revenue, 0);
  const avgROI = totalRevenue > 0 ? ((totalRevenue - totalSpend) / totalSpend * 100) : 0;

  const handleExportData = (format) => {
    console.log(`Exporting data in ${format} format...`);
 
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ad Campaign History</h1>
          <p className="text-gray-600 mt-1">Review past campaign performance and insights</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-start bg-violet-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white border-0'>
              <DropdownMenuLabel>Export Format</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleExportData('csv')}>
                <FileText className="mr-2 h-4 w-4" />
                Download CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExportData('pdf')}>
                <FileText className="mr-2 h-4 w-4" />
                Download PDF Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{historicalAds.length}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <History className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Spend</p>
                <p className="text-2xl font-bold text-gray-900">${totalSpend.toFixed(2)}</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-white border-0'>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average ROI</p>
                <p className={`text-2xl font-bold ${getROIColor(avgROI)}`}>
                  {avgROI.toFixed(1)}%
                </p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


      <Card className='bg-white border-0'>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Campaign History</CardTitle>
              <CardDescription className='text-gray-400'>Complete record of your advertising campaigns</CardDescription>
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
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm  focus:border-transparent  appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="all ">All Time</option>
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="thisYear">This Year</option>
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
                  <TableHead className="cursor-pointer" onClick={() => handleSort('totalSpend')}>
                    <div className="flex items-center gap-1">
                      Total Spend
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort('totalClicks')}>
                    <div className="flex items-center gap-1">
                      Clicks
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort('totalImpressions')}>
                    <div className="flex items-center gap-1">
                      Impressions
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort('conversions')}>
                    <div className="flex items-center gap-1">
                      Conversions
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort('revenue')}>
                    <div className="flex items-center gap-1">
                      Revenue
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort('roi')}>
                    <div className="flex items-center gap-1">
                      ROI
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody >
                {filteredAds.map((ad) => (
                  <TableRow key={ad.id} className="border-b-1 border-gray-300">
                    <TableCell >
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
                    <TableCell className="font-medium">${ad.totalSpend.toFixed(2)}</TableCell>
                    <TableCell>{ad.totalClicks.toLocaleString()}</TableCell>
                    <TableCell>{ad.totalImpressions.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className="font-medium text-blue-600">{ad.ctr}%</span>
                    </TableCell>
                    <TableCell className="font-medium">{ad.conversions}</TableCell>
                    <TableCell className="font-medium text-green-600">${ad.revenue.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${getROIColor(ad.roi)}`}>
                        {ad.roi.toFixed(1)}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{ad.duration} days</p>
                        <p className="text-gray-500">{ad.startDate} to {ad.endDate}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Export Report
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Create Similar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredAds.length === 0 && (
            <div className="text-center py-8">
              <History className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No campaign history found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdHistory;