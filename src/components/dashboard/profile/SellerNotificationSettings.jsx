import React from "react";
import { Bell } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { SettingRow } from "../settings/SettingRow";
import ToggleSwitch from "../ui/ToggleSwitch";

export const SellerNotificationSettings = () => (
  <Card className="bg-white border-0">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <Bell className="w-5 h-5 text-slate-700" />
        </div>
        Notification Preferences
      </CardTitle>
      <p className="text-sm text-muted-foreground">
        Choose how you want to be notified about important events
      </p>
    </CardHeader>
    <CardContent className="space-y-0 divide-y">
      
      <SettingRow
        label="New Order Notifications"
        hint="Get notified when customers place new orders"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Email notifications</span>
            <ToggleSwitch name="notify_new_order_email" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">In-app notifications</span>
            <ToggleSwitch name="notify_new_order_app" />
          </div>
        </div>
      </SettingRow>

      <SettingRow
        label="Payout Notifications"
        hint="Get notified when payouts are processed"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Email notifications</span>
            <ToggleSwitch name="notify_payout_email" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">In-app notifications</span>
            <ToggleSwitch name="notify_payout_app" />
          </div>
        </div>
      </SettingRow>

      <SettingRow
        label="Order Status Updates"
        hint="Get notified when order status changes (shipped, delivered, etc.)"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Email notifications</span>
            <ToggleSwitch name="notify_order_status_email" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">In-app notifications</span>
            <ToggleSwitch name="notify_order_status_app" />
          </div>
        </div>
      </SettingRow>

      <SettingRow
        label="Low Stock Alerts"
        hint="Get notified when product inventory is running low"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Email notifications</span>
            <ToggleSwitch name="notify_low_stock_email" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">In-app notifications</span>
            <ToggleSwitch name="notify_low_stock_app" />
          </div>
        </div>
      </SettingRow>

    </CardContent>
    <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
      Stay informed about your business activities. You can adjust these settings anytime.
    </CardFooter>
  </Card>
);