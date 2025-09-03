import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  return (
    <div>
        
     <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email" className="font-semibold text-xs">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required className="border-1 border-gray-400 shadow-lg shadow-gray-200  " />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="font-semibold text-xs">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline text-gray-500 hover:text-gray-700"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required className="border-1 border-gray-400 shadow-lg shadow-gray-200  "/>
        </div>
        <Button type="submit" className="w-full bg-gradient-to-br from-purple-600 to-blue-600 text-white hover:bg-purple-800">
          Login
        </Button>
        <div className="after:border-border  relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t text-gray-300">
          <span className="bg-white text-gray-400 relative z-10 px-2">
            Or continue with
          </span>
        </div>
 
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
    </div>
  )
}
