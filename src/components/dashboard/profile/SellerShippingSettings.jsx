import React from "react";
import { Truck } from "lucide-react";
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
import NumberInput from "../ui/NumberInput";

export const SellerShippingSettings = () => (
  <Card className="bg-white border-0">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <Truck className="w-5 h-5 text-slate-700" />
        </div>
        Shipping & Fulfillment
      </CardTitle>
      <p className="text-sm text-muted-foreground">
        Configure your shipping methods and policies
      </p>
    </CardHeader>
    <CardContent className="space-y-0 divide-y">
      
      <SettingRow
        label="Local Pickup"
        hint="Allow customers to pick up orders from your location"
      >
        <div className="float-end items-center justify-between">
          <ToggleSwitch name="local_pickup_enabled" />
        </div>
      </SettingRow>

      <SettingRow
        label="Seller Courier"
        hint="Use your own delivery service"
      >
        <div className="float-end items-center justify-between">
          <ToggleSwitch name="seller_courier_enabled" />
        </div>
      </SettingRow>



      <SettingRow
        label="Default Shipping Time"
        hint="Estimated delivery time in days"
      >
        <div className="float-end items-center gap-3 w-50">
          <NumberInput 
            name="default_shipping_time" 
            min={1} 
            max={30}
            placeholder="Days" 
          />
        </div>
      </SettingRow>

      <SettingRow
        label="Accept International Orders"
        hint="Enable shipping to international destinations"
      >
        <div className="float-end items-center justify-between">
          <ToggleSwitch name="accept_international_orders" />
        </div>
      </SettingRow>

    </CardContent>
    <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
      Configure shipping options to improve customer experience and expand your reach.
    </CardFooter>
  </Card>
);