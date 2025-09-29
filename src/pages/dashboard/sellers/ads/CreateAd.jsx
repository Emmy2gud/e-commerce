import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  Rocket, 
  Upload, 
  CalendarIcon, 
  DollarSign, 
  Target, 
  Image as ImageIcon,
  Zap,
  Facebook,
  Instagram,
  Eye,
  Edit3
} from 'lucide-react';

const CreateAd = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [platforms, setPlatforms] = useState({
    facebook: false,
    instagram: false
  });
  const [autoRun, setAutoRun] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adForm, setAdForm] = useState({
    title: '',
    description: '',
    dailyBudget: '',
    totalBudget: '',
    customImage: null
  });


  const products = [
    { id: 1, name: 'Wireless Bluetooth Headphones', image: '/api/placeholder/60/60', price: '$89.99' },
    { id: 2, name: 'Smart Fitness Tracker', image: '/api/placeholder/60/60', price: '$149.99' },
    { id: 3, name: 'Premium Coffee Maker', image: '/api/placeholder/60/60', price: '$199.99' },
    { id: 4, name: 'Ergonomic Office Chair', image: '/api/placeholder/60/60', price: '$299.99' }
  ];

  const handlePlatformChange = (platform, checked) => {
    setPlatforms(prev => ({
      ...prev,
      [platform]: checked
    }));
  };

  const handleProductSelect = (productId) => {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
      setSelectedProduct(productId);
      setAdForm(prev => ({
        ...prev,
        title: product.name,
        description: `Get amazing ${product.name} at an unbeatable price of ${product.price}. Limited time offer!`
      }));
    }
  };

  const calculateTotalBudget = () => {
    if (adForm.dailyBudget && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      return (parseFloat(adForm.dailyBudget) * days).toFixed(2);
    }
    return adForm.totalBudget;
  };

  const selectedPlatformsCount = Object.values(platforms).filter(Boolean).length;

  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Create New Ad Campaign</h1>
          <p className="text-gray-600 mt-1">Boost your product visibility and sales</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <Zap className="w-3 h-3 mr-1" />
            Marketing Tools
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Selection */}
          <Card className='bg-white border-0'>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-violet-600" />
                Select Product
              </CardTitle>
              <CardDescription>Choose which product to advertise</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select onValueChange={handleProductSelect}>
                  <SelectTrigger className="w-full border-gray-300">
                    <SelectValue placeholder="Choose a product to advertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map(product => (
                      <SelectItem key={product.id} value={product.id.toString()}>
                        <div className="flex items-center gap-3">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-8 h-8 rounded object-cover"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.price}</p>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Platform Selection */}
          <Card className='bg-white border-0'>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-violet-600" />
                Choose Platforms
              </CardTitle>
              <CardDescription>Select where you want to run your ads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-gray-500">Reach 2.9B+ users</p>
                    </div>
                  </div>
                  <Switch
                    checked={platforms.facebook}
                    onCheckedChange={(checked) => handlePlatformChange('facebook', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-gray-500">Visual storytelling</p>
                    </div>
                  </div>
                  <Switch
                    checked={platforms.instagram}
                    onCheckedChange={(checked) => handlePlatformChange('instagram', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ad Creative */}
          <Card className='bg-white border-0'>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-violet-600" />
                Ad Creative
              </CardTitle>
              <CardDescription>Customize your ad content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adTitle">Ad Title</Label>
                <Input
                  id="adTitle"
                  value={adForm.title}
                  onChange={(e) => setAdForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter compelling ad title"
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="adDescription">Description</Label>
                <Textarea
                  id="adDescription"
                  value={adForm.description}
                  onChange={(e) => setAdForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Write engaging ad description"
                  className="min-h-[80px] text-sm sm:text-base border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label>Custom Image/Video (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-violet-400 transition-colors">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">Upload custom creative</p>
                  <p className="text-xs text-gray-400">JPG, PNG, MP4 up to 10MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget & Duration */}
          <Card className='bg-white border-0'>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-violet-600" />
                Budget & Duration
              </CardTitle>
              <CardDescription>Set your advertising budget and timeline</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dailyBudget">Daily Budget ($)</Label>
                  <Input
                    id="dailyBudget"
                    type="number"
                    value={adForm.dailyBudget}
                    onChange={(e) => setAdForm(prev => ({ ...prev, dailyBudget: e.target.value }))}
                    placeholder="5.00"
                    min="1"
                    step="0.01"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="totalBudget">Total Budget ($)</Label>
                  <Input
                    id="totalBudget"
                    type="number"
                    value={calculateTotalBudget()}
                    onChange={(e) => setAdForm(prev => ({ ...prev, totalBudget: e.target.value }))}
                    placeholder="Auto-calculated"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full"
                    min={startDate}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview & Settings */}
        <div className="space-y-6">
          {/* Auto-run Settings */}
          <Card className='bg-white border-0'>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-violet-600" />
                Auto-Run Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Auto-Run Ads</p>
                    <p className="text-sm text-gray-500">Automatically publish to platforms</p>
                  </div>
                  <Switch
                    checked={autoRun}
                    onCheckedChange={setAutoRun}
                  />
                </div>
                
                <div className={`p-3 rounded-lg ${autoRun ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                  <p className="text-sm">
                    {autoRun 
                      ? '✅ Ads will be automatically pushed to selected platforms'
                      : '⚠️ Ad content will be generated for manual review and publishing'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Summary */}
          <Card className='bg-white border-0'>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-violet-600" />
                Campaign Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Selected Product:</span>
                  <span className="font-medium">
                    {selectedProduct ? products.find(p => p.id === parseInt(selectedProduct))?.name : 'None'}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Platforms:</span>
                  <span className="font-medium">{selectedPlatformsCount} selected</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Daily Budget:</span>
                  <span className="font-medium">${adForm.dailyBudget || '0.00'}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Budget:</span>
                  <span className="font-medium">${calculateTotalBudget() || '0.00'}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Auto-Run:</span>
                  <span className={`font-medium ${autoRun ? 'text-green-600' : 'text-orange-600'}`}>
                    {autoRun ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
              
              <Separator />
              
              <Button 
                className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                size="lg"
                disabled={!selectedProduct || selectedPlatformsCount === 0 || !adForm.dailyBudget}
              >
                <Rocket className="w-4 h-4 mr-2" />
                {autoRun ? 'Launch Ad Campaign' : 'Generate Ad Draft'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;