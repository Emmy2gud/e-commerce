import React from 'react'
import { GalleryVerticalEnd, Sparkles } from "lucide-react"
import SignUpForm from '../components/auth/SignUpForm'

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:p-4 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[600px]">
       
          <div className="flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-16 order-2 lg:order-1">
            <div className="mb-4 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ShopHub
                </span>
              </div>
            </div>
            
            <div className="max-w-sm mx-auto w-full">
              <SignUpForm />
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 flex items-center justify-center overflow-hidden order-1 lg:order-2 min-h-[200px] sm:min-h-[300px] lg:min-h-auto">
            {/* Mobile-optimized floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-16 w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-white/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-16 -left-12 w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10 text-center text-white p-4 sm:p-8 lg:p-12">
              <div className="mb-4 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
                  Start Shopping
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Today!
                  </span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-purple-100 leading-relaxed max-w-xs sm:max-w-md mx-auto px-2">
                  Join thousands of users who trust ShopHub for their daily shopping needs
                </p>
              </div>

              {/* Responsive stats grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8 lg:mt-12 max-w-xs sm:max-w-sm mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">500K+</div>
                  <div className="text-xs sm:text-sm text-purple-200">Active Users</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-xs sm:text-sm text-purple-200">Uptime</div>
                </div>
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div 
              className="absolute inset-0 opacity-5 sm:opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
