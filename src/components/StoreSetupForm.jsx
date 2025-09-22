import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Store, 
  MapPin, 
  Link as LinkIcon, 
  FileText, 
  Contact, 
  Clock,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const StoreSetupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Store Info
    storeName: '',
    storeDescription: '',
    
    // Step 2: Location Details
    country: '',
    city: '',
    address: '',
    
    // Step 3: Social Media Links
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    
    // Step 4: Policies
    returnPolicy: '',
    shippingPolicy: '',
    privacyPolicy: '',
    
    // Step 5: Contact & Business Hours
    email: '',
    phone: '',
    businessDays: {
      monday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
      tuesday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
      wednesday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
      thursday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
      friday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
      saturday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
      sunday: { isOpen: false, openTime: '09:00', closeTime: '17:00' }
    }
  });

  const totalSteps = 5;

  const steps = [
    { 
      id: 1, 
      title: 'Store Info', 
      icon: Store,
      description: 'Basic store information'
    },
    { 
      id: 2, 
      title: 'Location', 
      icon: MapPin,
      description: 'Store location details'
    },
    { 
      id: 3, 
      title: 'Social Links', 
      icon: LinkIcon,
      description: 'Social media presence'
    },
    { 
      id: 4, 
      title: 'Policies', 
      icon: FileText,
      description: 'Store policies & terms'
    },
    { 
      id: 5, 
      title: 'Contact & Hours', 
      icon: Contact,
      description: 'Contact info & business hours'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBusinessHoursChange = (day, field, value) => {
    setFormData(prev => ({
      ...prev,
      businessDays: {
        ...prev.businessDays,
        [day]: {
          ...prev.businessDays[day],
          [field]: value
        }
      }
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

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 
    'France', 'Italy', 'Spain', 'Japan', 'India', 'Brazil', 'Mexico'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with Progress Indicator */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Setup Your Store</h1>
            <p className="text-purple-100">Let's get your store ready for customers</p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = step.id < currentStep;
              const isCurrent = step.id === currentStep;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium mb-2 transition-all duration-300
                      ${isCompleted ? 'bg-green-500 text-white' : 
                        isCurrent ? 'bg-white text-purple-600 shadow-lg' : 
                        'bg-purple-500 text-purple-200'}
                    `}>
                      {isCompleted ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <StepIcon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-center">
                      <div className={`text-xs font-medium ${isCurrent ? 'text-white' : 'text-purple-200'}`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      flex-1 h-0.5 mx-4 transition-all duration-300
                      ${isCompleted ? 'bg-green-400' : 'bg-purple-400'}
                    `} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          {/* Step 1: Basic Store Info */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Store className="w-6 h-6 text-purple-600" />
                  Store Information
                </CardTitle>
                <p className="text-gray-600">Tell us about your store and what makes it special</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="storeName" className="text-sm font-medium">Store Name *</Label>
                    <Input
                      id="storeName"
                      placeholder="Enter your store name"
                      value={formData.storeName}
                      onChange={(e) => handleInputChange('storeName', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storeDescription" className="text-sm font-medium">Store Description *</Label>
                    <Textarea
                      id="storeDescription"
                      placeholder="Describe your store, products, and what makes you unique..."
                      value={formData.storeDescription}
                      onChange={(e) => handleInputChange('storeDescription', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200 min-h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Location Details */}
          {currentStep === 2 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  Location Details
                </CardTitle>
                <p className="text-gray-600">Where is your store located?</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium">Country *</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-purple-500">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className='bg-white border-0'>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>{country}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">Full Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address (optional)"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Social Media Links */}
          {currentStep === 3 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <LinkIcon className="w-6 h-6 text-purple-600" />
                  Social Media Links
                </CardTitle>
                <p className="text-gray-600">Connect your social media accounts to build trust</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="facebook" className="text-sm font-medium">Facebook</Label>
                    <Input
                      id="facebook"
                      placeholder="https://facebook.com/yourstore"
                      value={formData.facebook}
                      onChange={(e) => handleInputChange('facebook', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="text-sm font-medium">Instagram</Label>
                    <Input
                      id="instagram"
                      placeholder="https://instagram.com/yourstore"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="text-sm font-medium">Twitter</Label>
                    <Input
                      id="twitter"
                      placeholder="https://twitter.com/yourstore"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange('twitter', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium">Website</Label>
                    <Input
                      id="website"
                      placeholder="https://yourstore.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Policies */}
          {currentStep === 4 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="w-6 h-6 text-purple-600" />
                  Store Policies
                </CardTitle>
                <p className="text-gray-600">Set clear policies to build customer trust</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="returnPolicy" className="text-sm font-medium">Return Policy</Label>
                  <Textarea
                    id="returnPolicy"
                    placeholder="Describe your return policy (e.g., 30-day returns, conditions, etc.)"
                    value={formData.returnPolicy}
                    onChange={(e) => handleInputChange('returnPolicy', e.target.value)}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingPolicy" className="text-sm font-medium">Shipping Policy</Label>
                  <Textarea
                    id="shippingPolicy"
                    placeholder="Describe your shipping policy (delivery times, costs, regions, etc.)"
                    value={formData.shippingPolicy}
                    onChange={(e) => handleInputChange('shippingPolicy', e.target.value)}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="privacyPolicy" className="text-sm font-medium">Privacy Policy</Label>
                  <Textarea
                    id="privacyPolicy"
                    placeholder="Describe how you handle customer data and privacy"
                    value={formData.privacyPolicy}
                    onChange={(e) => handleInputChange('privacyPolicy', e.target.value)}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Contact & Business Hours */}
          {currentStep === 5 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Contact className="w-6 h-6 text-purple-600" />
                  Contact & Business Hours
                </CardTitle>
                <p className="text-gray-600">How can customers reach you?</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Store Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="store@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-200"
                    />
                  </div>
                </div>

                {/* Business Hours */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <Label className="text-lg font-medium">Business Hours</Label>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(formData.businessDays).map(([day, hours]) => (
                      <div key={day} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-20">
                          <span className="text-sm font-medium capitalize">{day}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={hours.isOpen}
                            onChange={(e) => handleBusinessHoursChange(day, 'isOpen', e.target.checked)}
                            className="rounded border-gray-300"
                          />
                          <span className="text-sm">Open</span>
                        </div>
                        {hours.isOpen && (
                          <>
                            <Input
                              type="time"
                              value={hours.openTime}
                              onChange={(e) => handleBusinessHoursChange(day, 'openTime', e.target.value)}
                              className="w-32 border-gray-300"
                            />
                            <span className="text-sm text-gray-500">to</span>
                            <Input
                              type="time"
                              value={hours.closeTime}
                              onChange={(e) => handleBusinessHoursChange(day, 'closeTime', e.target.value)}
                              className="w-32 border-gray-300"
                            />
                          </>
                        )}
                        {!hours.isOpen && (
                          <span className="text-sm text-gray-500 italic">Closed</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </div>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                <Check className="w-4 h-4" />
                Complete Setup
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSetupForm;