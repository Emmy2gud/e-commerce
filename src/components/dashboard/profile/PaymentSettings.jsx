import React, { useEffect } from 'react';
import { Search, Bell, Image, Landmark, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

import { SettingRow } from '../settings/SettingRow';
import ToggleSwitch from '../ui/ToggleSwitch';
import NumberInput from '../ui/NumberInput';

export const PaymentSettings = () => (
  <Card className='bg-white border-0'>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <span className="text-slate-700">💳</span>
        </div>
        Payment & Escrow settings
      </CardTitle>
      <p className="text-sm text-muted-foreground">Configure gateways and escrow destination</p>
    </CardHeader>
    <CardContent className="space-y-0 divide-y">
      <SettingRow label="Paystack public key" hint="Used on client for tokenization">
        <div className="flex items-center gap-3">
          <Input defaultValue="pk_live_3a9f...7bd2" className="flex-1 border-1 border-gray-300" />
          <Button variant="outline">Copy</Button>
        </div>
      </SettingRow>

      <SettingRow label="Paystack secret key" hint="Server-side only — keep secure">
        <div className="flex items-center gap-3">
          <Input type="password" defaultValue="sk_live_••••••••••••••••" className="flex-1 border-1 border-gray-300" />
          <Button variant="outline">Reveal</Button>
        </div>
      </SettingRow>

      <SettingRow label="Escrow bank account" hint="Destination for held funds" className=''>
        <div className=" float-end items-center justify-between">
       <ToggleSwitch name="escrow_enabled"/>
        </div>
      </SettingRow>
          <SettingRow label="Auto Release After Days" hint="Number of days after which funds are automatically released if the buyer takes no action.">
        <div className="float-end items-center gap-3  w-50">
               <NumberInput className='' name="auto_release_after_days" min={1} max={30} />
        </div>
      </SettingRow>
          <SettingRow label="Platform Commission (%)" hint="Percentage of each transaction taken as platform commission.">
        <div className="float-end items-center gap-3  w-50">
               <NumberInput className='' name="auto_release_after_days" min={1} max={30} />
        </div>
      </SettingRow>

    </CardContent>
    <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
      Ensure keys are live and verified before enabling payouts.
    </CardFooter>
  </Card>
);