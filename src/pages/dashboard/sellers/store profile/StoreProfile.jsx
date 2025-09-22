
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Store, MapPin, CreditCard, Settings, Upload, ArrowLeft, ArrowRight } from 'lucide-react';

const StoreProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    storeName: '',
    storeDescription: '',
    category: '',
    // Location
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Payment
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    // Settings
    businessHours: '',
    returnPolicy: '',
    shippingPolicy: ''
  });

  const totalSteps = 4;

  const steps = [
    { id: 1, title: 'Basic Information', icon: Store, description: 'Store name and description' },
    { id: 2, title: 'Location Details', icon: MapPin, description: 'Address and contact info' },
    { id: 3, title: 'Payment Setup', icon: CreditCard, description: 'Banking and payment details' },
    { id: 4, title: 'Store Settings', icon: Settings, description: 'Policies and preferences' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Store Setup Data:', formData);
    alert('Store setup completed successfully!');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name *</Label>
              <Input
                id="storeName"
                placeholder="Enter your store name"
                value={formData.storeName}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Business Category *</Label>
              <Select onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Fitness</SelectItem>
                  <SelectItem value="books">Books & Media</SelectItem>
                  <SelectItem value="health">Health & Beauty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Store Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your store and what you sell..."
                value={formData.storeDescription}
                onChange={(e) => handleInputChange('storeDescription', e.target.value)}
                className="border-gray-300 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label>Store Logo</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State/Province *</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Secure:</strong> Your payment information is encrypted and secure. We use industry-standard security measures.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName">Bank Name *</Label>
              <Input
                id="bankName"
                placeholder="Enter your bank name"
                value={formData.bankName}
                onChange={(e) => handleInputChange('bankName', e.target.value)}
                className="border-gray-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  placeholder="Enter account number"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                  className="border-gray-300"
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="routingNumber">Routing Number *</Label>
                <Input
                  id="routingNumber"
                  placeholder="Enter routing number"
                  value={formData.routingNumber}
                  onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                  className="border-gray-300"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="businessHours">Business Hours</Label>
              <Input
                id="businessHours"
                placeholder="e.g., Mon-Fri 9AM-6PM"
                value={formData.businessHours}
                onChange={(e) => handleInputChange('businessHours', e.target.value)}
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="returnPolicy">Return Policy</Label>
              <Textarea
                id="returnPolicy"
                placeholder="Describe your return policy..."
                value={formData.returnPolicy}
                onChange={(e) => handleInputChange('returnPolicy', e.target.value)}
                className="border-gray-300 min-h-[80px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shippingPolicy">Shipping Policy</Label>
              <Textarea
                id="shippingPolicy"
                placeholder="Describe your shipping policy..."
                value={formData.shippingPolicy}
                onChange={(e) => handleInputChange('shippingPolicy', e.target.value)}
                className="border-gray-300 min-h-[80px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-10 mx-auto space-y-8 bg-gray-50 ">
  
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Set Up Your Store</h1>
        <p className="text-gray-600">Complete your store profile to start selling</p>
      </div>

 
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      </div>

      {/* Steps Navigation */}
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div key={step.id} className="flex flex-col items-center space-y-2 flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                isCompleted 
                  ? 'bg-green-500 border-green-500 text-white'
                  : isActive 
                    ? 'bg-purple-500 border-purple-500 text-white'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
              }`}>
                {isCompleted ? <CheckCircle className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
              </div>
              <div className="text-center">
                <p className={`text-sm font-medium ${
                  isActive ? 'text-purple-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-400 hidden sm:block">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={`hidden md:block h-1 w-full mt-6 rounded ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          );
        })}
      </div>

      <Separator />


      <Card className='bg-white border-0 shadow-lg'>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5 text-violet-600" })}
            <span>{steps[currentStep - 1].title}</span>
          </CardTitle>
          <CardDescription>
            {steps[currentStep - 1].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>


      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex border-violet-400 text-violet-600 items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        
        {currentStep === totalSteps ? (
          <Button 
            onClick={handleSubmit}
            className="bg-green-600 text-white hover:bg-green-700 flex items-center space-x-2"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Complete Setup</span>
          </Button>
        ) : (
          <Button
            onClick={nextStep}
            className="bg-purple-600 text-white hover:bg-purple-700 flex items-center space-x-2"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StoreProfile;