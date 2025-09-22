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
import { CurrencySelector } from "../settings/CurrencySelector";
import RadioGroupInput from "../ui/RadioGroupInput";
import SelectInput from "../ui/SelectInput";
import ToggleSwitch from "../ui/ToggleSwitch";

export const PlatformSettings = () => (
  <Card className="bg-white border-0">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <span className="text-slate-700">⚙️</span>
        </div>
        Platform settings
      </CardTitle>
      <p className="text-sm text-muted-foreground">
        Core configuration for your marketplace
      </p>
    </CardHeader>
    <CardContent className="space-y-0 divide-y">

      <SettingRow
        label="Platform name"
        hint="Displayed in emails and the admin UI"
      >
        <div className="flex items-center gap-3">
          <Input
            defaultValue="MarketHub"
            className="flex-1 border-1 border-gray-300"
          />
          <Button className="bg-violet-600 text-white">Edit</Button>
        </div>
      </SettingRow>

      <SettingRow
        label="      Maintenance Mode"
        hint="If ON, non-admin users will see a maintenance page."
      >
        <div className=" float-end items-center justify-between">
       <ToggleSwitch name="escrow_enabled"/>
        </div>
      </SettingRow>

      <SettingRow
        label="Currency"
        hint="Used for listing prices and settlements"
      >
        <div className="float-end">
          <SelectInput
            name="currency"
            options={[
              { value: "NGN", label: "Nigerian Naira (NGN)" },
              { value: "USD", label: "US Dollar (USD)" },
              { value: "EUR", label: "Euro (EUR)" },
            ]}
            placeholder="Select currency"
          />
        </div>
      </SettingRow>

      <SettingRow label="Commission rate" hint="Percentage fee taken per order">
        <div className="flex items-center gap-3">
          <Input defaultValue="10%" className="w-24 border-1 border-gray-300" />
          <span className="text-sm text-muted-foreground">Platform fee</span>
        </div>
      </SettingRow>


      <SettingRow
        label="Require Seller Approval"
        hint="Choose whether new sellers are automatically approved or require manual review."
      >
        <div className="float-end">
          <RadioGroupInput
            name="require_seller_approval"
            options={[
              { value: "auto", label: "Automatic" },
              { value: "manual", label: "Manual" },
            ]}
          />
        </div>
      </SettingRow>
    </CardContent>
    <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
      Tip: Keep branding minimal and consistent across emails.
    </CardFooter>
  </Card>
);
