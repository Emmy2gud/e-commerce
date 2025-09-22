import React from "react";
import { Search, Bell, Image, Landmark, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingRow } from "../settings/SettingRow";
import NumberInput from "../ui/NumberInput";
import ToggleSwitch from "../ui/ToggleSwitch";

export const NotificationSettings = () => (
  <Card className="bg-white border-0">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <Bell className="w-5 h-5 text-slate-700" />
        </div>
        Notification settings
      </CardTitle>
      <p className="text-sm text-muted-foreground">
        Optional for MVP — email only will be sent
      </p>
    </CardHeader>
    <CardContent>
      <div className="rounded-lg bg-slate-50 p-3 text-sm text-muted-foreground mb-4">
        For MVP, only email notifications are sent. Template customization is
        optional and can be added later.
      </div>
      <SettingRow
        label="Notify Admin on New Order"
        hint="Receive email/in-app notifications for new orders."
        className=""
      >
        <div className=" float-end items-center justify-between">
          <ToggleSwitch name="escrow_enabled" />
        </div>
      </SettingRow>
      <SettingRow
        label="Support Email"
        hint="The email address for customer support inquiries."
      >
        <div className="float-end items-center gap-3  w-50">
          <Input defaultValue="pk_live_3a9f...7bd2" className="flex-1 border-1 border-gray-300" />
        </div>
      </SettingRow>
      <SettingRow
        label="Enable Internal Messaging"
        hint="Allow users to send messages to each other within the platform."
        className=""
      >
        <div className=" float-end items-center justify-between">
          <ToggleSwitch name="escrow_enabled" />
        </div>
      </SettingRow>
    </CardContent>
    <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
      MVP mode: Email-only; SMS/push can be enabled later.
    </CardFooter>
  </Card>
);
