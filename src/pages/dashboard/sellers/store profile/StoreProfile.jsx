
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
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="storeName" className="text-sm sm:text-base">Store Name *</Label>
              <Input
                id="storeName"
                placeholder="Enter your store name"
                value={formData.storeName}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
                className="border-gray-300 text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm sm:text-base">Business Category *</Label>
              <Select onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="border-gray-300 text-sm sm:text-base">
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
              <Label htmlFor="description" className="text-sm sm:text-base">Store Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your store and what you sell..."
                value={formData.storeDescription}
                onChange={(e) => handleInputChange('storeDescription', e.target.value)}
                className="border-gray-300 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Store Logo</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-purple-400 transition-colors">
                <Upload className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-xs sm:text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address" className="text-sm sm:text-base">Street Address *</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="border-gray-300 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm sm:text-base">City *</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="border-gray-300 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm sm:text-base">State/Province *</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="border-gray-300 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-sm sm:text-base">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  className="border-gray-300 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm sm:text-base">Country *</Label>
                <Select onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger className="border-gray-300 text-sm sm:text-base">
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
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-blue-800">
                <strong>Secure:</strong> Your payment information is encrypted and secure. We use industry-standard security measures.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-sm sm:text-base">Bank Name *</Label>
              <Input
                id="bankName"
                placeholder="Enter your bank name"
                value={formData.bankName}
                onChange={(e) => handleInputChange('bankName', e.target.value)}
                className="border-gray-300 text-sm sm:text-base"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountNumber" className="text-sm sm:text-base">Account Number *</Label>
                <Input
                  id="accountNumber"
                  placeholder="Enter account number"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                  className="border-gray-300 text-sm sm:text-base"
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="routingNumber" className="text-sm sm:text-base">Routing Number *</Label>
                <Input
                  id="routingNumber"
                  placeholder="Enter routing number"
                  value={formData.routingNumber}
                  onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                  className="border-gray-300 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="businessHours" className="text-sm sm:text-base">Business Hours</Label>
              <Input
                id="businessHours"
                placeholder="e.g., Mon-Fri 9AM-6PM"
                value={formData.businessHours}
                onChange={(e) => handleInputChange('businessHours', e.target.value)}
                className="border-gray-300 text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="returnPolicy" className="text-sm sm:text-base">Return Policy</Label>
              <Textarea
                id="returnPolicy"
                placeholder="Describe your return policy..."
                value={formData.returnPolicy}
                onChange={(e) => handleInputChange('returnPolicy', e.target.value)}
                className="border-gray-300 min-h-[60px] sm:min-h-[80px] text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shippingPolicy" className="text-sm sm:text-base">Shipping Policy</Label>
              <Textarea
                id="shippingPolicy"
                placeholder="Describe your shipping policy..."
                value={formData.shippingPolicy}
                onChange={(e) => handleInputChange('shippingPolicy', e.target.value)}
                className="border-gray-300 min-h-[60px] sm:min-h-[80px] text-sm sm:text-base"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 mx-auto space-y-4 sm:space-y-6 lg:space-y-8 bg-gray-50 min-h-screen">
  
      <div className="text-center space-y-2 px-2">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Set Up Your Store</h1>
        <p className="text-sm sm:text-base text-gray-600">Complete your store profile to start selling</p>
      </div>

 
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      </div>

      {/* Steps Navigation */}
      <div className="overflow-x-auto">
        <div className="flex justify-between min-w-full sm:min-w-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex flex-col items-center space-y-1 sm:space-y-2 flex-1 min-w-0 px-0.5 sm:px-1">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isCompleted 
                    ? 'bg-green-500 border-green-500 text-white'
                    : isActive 
                      ? 'bg-purple-500 border-purple-500 text-white'
                      : 'bg-gray-100 border-gray-300 text-gray-400'
                }`}>
                  {isCompleted ? <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" /> : <Icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />}
                </div>
                <div className="text-center w-full">
                  <p className={`text-xs sm:text-sm font-medium leading-tight px-1 ${
                    isActive ? 'text-purple-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    <span className="block sm:hidden">
                      {step.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </span>
                    <span className="hidden sm:block truncate">{step.title}</span>
                  </p>
                  <p className="text-xs text-gray-400 hidden lg:block">{step.description}</p>
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
      </div>

      <Separator />


      <Card className='bg-white border-0 shadow-lg mx-2 sm:mx-0'>
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            {React.createElement(steps[currentStep - 1].icon, { className: "h-4 w-4 sm:h-5 sm:w-5 text-violet-600" })}
            <span>{steps[currentStep - 1].title}</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {steps[currentStep - 1].description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          {renderStepContent()}
        </CardContent>
      </Card>


      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 px-2 sm:px-0">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex border-violet-400 text-violet-600 items-center justify-center space-x-2 w-full sm:w-auto"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        
        {currentStep === totalSteps ? (
          <Button 
            onClick={handleSubmit}
            className="bg-green-600 text-white hover:bg-green-700 flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Complete Setup</span>
          </Button>
        ) : (
          <Button
            onClick={nextStep}
            className="bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center space-x-2 w-full sm:w-auto"
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