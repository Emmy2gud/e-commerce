import React, { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { SettingRow } from "../settings/SettingRow";
import ToggleSwitch from "../ui/ToggleSwitch";

export const SellerAccountSettings = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Card className="bg-white border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-slate-700" />
          </div>
          Account Security
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage your account credentials and security settings
        </p>
      </CardHeader>
      <CardContent className="space-y-0 divide-y">
        
        <SettingRow
          label="Change Email"
          hint="Email address for your seller account"
        >
          <div className="flex items-center gap-3">
            <Input 
              defaultValue="seller@example.com" 
              className="flex-1 border-1 border-gray-300" 
              type="email"
            />
            <Button variant="outline" className="border-1 border-violet-600">
              Change
            </Button>
          </div>
        </SettingRow>

        <SettingRow
          label="Current Password"
          hint="Enter your current password to make changes"
        >
          <div className="flex items-center gap-3">
            <Input 
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Enter current password" 
              className="flex-1 border-1 border-gray-300"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="border-1 border-gray-300"
            >
              {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </SettingRow>

        <SettingRow
          label="New Password"
          hint="Use at least 8 characters with a mix of letters, numbers and symbols"
        >
          <div className="flex items-center gap-3">
            <Input 
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter new password" 
              className="flex-1 border-1 border-gray-300"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="border-1 border-gray-300"
            >
              {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </SettingRow>

        <SettingRow
          label="Confirm New Password"
          hint="Re-enter your new password to confirm"
        >
          <div className="flex items-center gap-3">
            <Input 
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password" 
              className="flex-1 border-1 border-gray-300"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="border-1 border-gray-300"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </SettingRow>

        <div className="p-4">
          <Button className="bg-violet-600 text-white">
            Update Password
          </Button>
        </div>



      </CardContent>

    </Card>
  );
};