import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Megaphone, 
  CreditCard, 
  ArrowRight, 
  Check, 
  Star, 
  Package,
  Globe,
  BarChart3,
  ShoppingCart,
  HelpCircle,
  Crown,
  Sparkles,
  Rocket
} from 'lucide-react';

const BecomeSeller = () => {

  const benefits = [
    {
      icon: Store,
      title: "Easy Store Setup",
      description: "Launch your online store in just 5 minutes with our intuitive setup wizard.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Get detailed insights about your customers, sales trends, and performance metrics.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Megaphone,
      title: "Built-in Marketing",
      description: "Run targeted ads on Facebook, Instagram, and Google directly from your dashboard.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Accept payments worldwide with instant payouts to your bank account.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your free seller account in under 2 minutes",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      number: "02", 
      title: "Add Products",
      description: "Upload product images, set prices, and write descriptions",
      icon: Package,
      color: "bg-purple-500"
    },
    {
      number: "03",
      title: "Start Selling",
      description: "Share your store link and start receiving orders instantly",
      icon: ShoppingCart,
      color: "bg-green-500"
    },
    {
      number: "04",
      title: "Grow & Scale",
      description: "Use our marketing tools and analytics to expand your business",
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Free (Starter)",
      price: "$0/yearly",
      description: "Perfect for getting started",
      features: [
        "1 Store",
        "Up to 10 products",
        "Dashboard with analytics",
        "Order management",
        "Store management",
        "Standard support"
      ],
      popular: false,
      buttonText: "Get Started Free",
      buttonVariant: "outline"
    },
    {
      name: "Growth (Basic)",
      price: "$19/yearly",
      description: "Best for growing businesses",
      features: [
        "1 Store",
        "Up to 50 products",
        "Dashboard with analytics",
        "Order management",
        "Store management",
        "Marketplace priority listing",
       
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default"
    },
    {
      name: "Pro (Business)",
      price: "$59/yearly", 
      description: "For established businesses",
      features: [
        "1 Store (multi-store later)",
        "Unlimited products",
        "Dashboard with analytics",
        "Order management",
        "Store management + Theme",
        "Marketplace priority listing",
        "Ads Module (Facebook + Instagram)",
        "Dedicated support"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      business: "Handmade Jewelry Store",
      image: "https://images.unsplash.com/photo-1494790108755-2616b73ff26b?w=150&h=150&fit=crop&crop=center",
      rating: 5,
      text: "I grew my sales by 400% in just 3 months! The marketing tools are incredibly powerful and easy to use."
    },
    {
      name: "Marcus Rodriguez",
      business: "Tech Accessories Shop",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=center",
      rating: 5,
      text: "The analytics helped me understand my customers better. My conversion rate doubled after optimizing based on the insights."
    },
    {
      name: "Emily Johnson",
      business: "Fashion Boutique",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=center",
      rating: 5,
      text: "Setting up my store was so simple! I was selling within hours. The customer support team is amazing too."
    }
  ];

  const faqs = [

 {
  question: "How and when do I get paid?",
  answer: "We use a secure escrow system. This means when a buyer makes a purchase, the payment is held safely in our system account. Once the buyer receives and confirms the originality/quality of the product, the funds are released to the seller. This protects both buyers and sellers by ensuring trust and transparency in every transaction."
},
    {
      question: "Can I sell internationally?",
      answer: "Yes! Our platform supports international selling with automatic currency conversion, international shipping options, and compliance with various regional regulations. You can enable/disable specific countries in your seller settings."
    },
    {
      question: "What fees do you charge?",
      answer: "No, we don't charge any fees for selling on our platform.Our platform is based on one-time subscription plans."
    },
    {
      question: "Can I also buy products as a seller?",
      answer: "Absolutely! Your seller account includes full buyer privileges. You can purchase from other sellers while managing your own store. Many sellers use this for market research and sourcing inspiration."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Plus, you'll get access to our comprehensive knowledge base, seller webinars, and community forums where you can connect with other successful sellers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5 lg:mr-2" />
                  <span className="hidden sm:inline">JOIN 50,000+ SUCCESSFUL SELLERS</span>
                  <span className="sm:hidden">50K+ SELLERS</span>
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="block">
                    <span className="sm:hidden">Start</span>
                    <span className="hidden sm:block">Start Selling</span>
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    <span className="sm:hidden">Selling</span>
                    <span className="hidden sm:inline">Online Today</span>
                  </span>
                  <span className="block sm:hidden bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    Today
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-purple-100 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  <span className="hidden sm:inline">Reach millions of customers, manage your store effortlessly, and grow your business with our powerful selling platform.</span>
                  <span className="sm:hidden">Start your online business today with our powerful selling platform.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link to="/store-setup">
                    <Button 
                      className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg"
                    >
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="hidden sm:inline">Start Selling Now</span>
                      <span className="sm:hidden">Start Selling</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/store-demo">
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base lg:text-lg"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="hidden sm:inline">View Demo Store</span>
                      <span className="sm:hidden">Demo</span>
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">50K+</div>
                    <div className="text-xs sm:text-sm text-purple-200">
                      <span className="hidden sm:inline">Active Sellers</span>
                      <span className="sm:hidden">Sellers</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">$10M+</div>
                    <div className="text-xs sm:text-sm text-purple-200">
                      <span className="hidden sm:inline">Monthly Sales</span>
                      <span className="sm:hidden">Sales</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">4.9★</div>
                    <div className="text-xs sm:text-sm text-purple-200">
                      <span className="hidden sm:inline">Seller Rating</span>
                      <span className="sm:hidden">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Success Stories Cards */}
                {[
                  { name: "Tech Store", revenue: "+300%", period: "3 months", color: "from-blue-500 to-cyan-500" },
                  { name: "Fashion Shop", revenue: "$50K", period: "monthly", color: "from-pink-500 to-rose-500" }, 
                  { name: "Home Decor", revenue: "+250%", period: "6 months", color: "from-green-500 to-emerald-500" },
                  { name: "Art Studio", revenue: "$25K", period: "monthly", color: "from-purple-500 to-violet-500" }
                ].map((story, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r ${story.color} mx-auto mb-2 sm:mb-3 flex items-center justify-center`}>
                        <Store className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white mb-1">
                        <span className="hidden sm:inline">{story.name}</span>
                        <span className="sm:hidden">{story.name.split(' ')[0]}</span>
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-yellow-300">{story.revenue}</div>
                      <div className="text-xs text-purple-200">
                        <span className="hidden sm:inline">in {story.period}</span>
                        <span className="sm:hidden">{story.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell With Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="sm:hidden block">Why</span>
              <span className="sm:hidden block">Choose</span>
              <span className="sm:hidden block">Our Platform?</span>
              <span className="hidden sm:block">Why Choose Our Platform?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="hidden sm:inline">Join thousands of successful sellers who trust our platform to grow their business</span>
              <span className="sm:hidden">Join successful sellers growing their business with us</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${benefit.color} mx-auto mb-4 lg:mb-6 flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                      <span className="hidden sm:block">{benefit.title}</span>
                      <span className="sm:hidden">
                        {benefit.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"> 
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="sm:hidden block">How</span>
              <span className="sm:hidden block">It Works</span>
              <span className="hidden sm:block">How It Works</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="hidden sm:inline">Get started in 4 simple steps and begin selling immediately</span>
              <span className="sm:hidden">4 simple steps to start selling</span>
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 mx-24"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center relative">
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 ${step.color} rounded-2xl mx-auto mb-4 lg:mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10`}>
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white border-4 border-gray-100 rounded-full w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-xs font-bold text-gray-600 z-20">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                      <span className="hidden sm:block">{step.title}</span>
                      <span className="sm:hidden">
                        {step.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="sm:hidden block">Choose</span>
              <span className="sm:hidden block">Your Plan</span>
              <span className="hidden sm:block">Choose Your Plan</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="hidden sm:inline">Start with our free plan and scale your business as you grow. Upgrade anytime to unlock powerful features.</span>
              <span className="sm:hidden">Start free, scale as you grow</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative ${plan.popular ? 'border-purple-500 shadow-xl' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold">
                      <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden sm:inline">MOST POPULAR</span>
                      <span className="sm:hidden">POPULAR</span>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6 lg:pb-8">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-sm sm:text-base text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                  <ul className="space-y-2 lg:space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full py-2.5 sm:py-3 font-semibold text-sm sm:text-base lg:text-lg ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' : ''}`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="sm:hidden block">Success</span>
              <span className="sm:hidden block">Stories</span>
              <span className="hidden sm:block">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="hidden sm:inline">Hear from sellers who transformed their business with our platform</span>
              <span className="sm:hidden">Sellers who transformed their business</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.business}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="sm:hidden block">Frequently</span>
              <span className="sm:hidden block">Asked</span>
              <span className="sm:hidden block">Questions</span>
              <span className="hidden sm:block">Frequently Asked Questions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              <span className="hidden sm:inline">Got questions? We've got answers.</span>
              <span className="sm:hidden">Questions? We've got answers.</span>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 hover:no-underline hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="font-semibold text-left text-sm sm:text-base">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


    </div>
  );
};

export default BecomeSeller;