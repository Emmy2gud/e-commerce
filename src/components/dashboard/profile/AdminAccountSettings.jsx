import React from 'react';
import { Search, Bell, Image, Landmark, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SettingRow } from '../settings/SettingRow';

export const AdminAccountSettings = () => (
  <Card className='bg-white border-0'>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <span className="text-slate-700">👤</span>
        </div>
        Admin account settings
      </CardTitle>
      <p className="text-sm text-muted-foreground">Manage your admin credentials</p>
    </CardHeader>
    <CardContent className="space-y-0 divide-y">
      <SettingRow label="Change email" hint="Used for admin sign-in and security">
        <div className="flex items-center gap-3">
          <Input defaultValue="admin@markethub.app" className="flex-1 border-1 border-gray-300" />
          <Button variant="outline" className='border-1 border-violet-600'>Change</Button>
        </div>
      </SettingRow>

      <SettingRow label="Change password" hint="Use at least 12 characters">
        <div className="flex items-center gap-3">
          <Input type="password" defaultValue="••••••••••••" className="flex-1 border-1 border-gray-300" />
          <Button className='bg-violet-600 text-white'>Update password</Button>
        </div>
      </SettingRow>
    </CardContent>
    <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
      Security tip: Enable 2FA when available.
    </CardFooter>
  </Card>
);
