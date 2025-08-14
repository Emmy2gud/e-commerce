import React from 'react'
import { GalleryVerticalEnd, Sparkles } from "lucide-react"
import LoginForm from '../components/auth/LoginForm'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center p-16">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
       
          <div className="flex flex-col justify-center p-8 md:p-16">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ShopHub
                </span>
              </div>
            </div>
            
            <div className="max-w-sm mx-auto w-full">
              <LoginForm />
            </div>
          </div>

                  <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 hidden lg:flex items-center justify-center overflow-hidden">
            {/* <FloatingElements/> */}
            
       
            <div className="relative z-10 text-center text-white p-12">
              <div className="mb-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl"></div>
                </div>
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  Start your
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    journey today
                  </span>
                </h2>
                <p className="text-lg text-purple-100 leading-relaxed max-w-md mx-auto">
                  Join thousands of users who trust ShopHub for their daily shopping needs
                </p>
              </div>

       
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">500K+</div>
                  <div className="text-sm text-purple-200">Active Users</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm text-purple-200">Uptime</div>
                </div>
              </div>
            </div>

      
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div 
              className="absolute inset-0 opacity-10"
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
