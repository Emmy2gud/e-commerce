import React, { useState } from "react";
import { CreditCard, Eye, EyeOff } from "lucide-react";
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

export const SellerPaymentSettings = () => {
  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const [bankAccount, setBankAccount] = useState({
    account_name: "",
    account_number: "••••••••••",
    bank_code: ""
  });

  const toggleAccountVisibility = () => {
    setShowAccountNumber(!showAccountNumber);
    if (!showAccountNumber) {
      // In a real app, you'd fetch this from your secure backend
      setBankAccount(prev => ({ ...prev, account_number: "1234567890" }));
    } else {
      setBankAccount(prev => ({ ...prev, account_number: "••••••••••" }));
    }
  };

  return (
    <Card className="bg-white border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-slate-700" />
          </div>
          Payments & Payouts
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Configure your bank account and payout preferences
        </p>
      </CardHeader>
      <CardContent className="space-y-0 divide-y">
        
        <SettingRow
          label="Account Holder Name"
          hint="Full name as it appears on your bank account"
        >
          <div className="flex items-center gap-3">
            <Input 
              placeholder="Enter account holder name" 
              className="flex-1 border-1 border-gray-300"
              value={bankAccount.account_name}
              onChange={(e) => setBankAccount(prev => ({ ...prev, account_name: e.target.value }))}
            />
          </div>
        </SettingRow>

        <SettingRow
          label="Account Number"
          hint="Your bank account number for receiving payouts"
        >
          <div className="flex items-center gap-3">
            <Input 
              type={showAccountNumber ? "text" : "password"}
              placeholder="Enter account number" 
              className="flex-1 border-1 border-gray-300"
              value={bankAccount.account_number}
              onChange={(e) => setBankAccount(prev => ({ ...prev, account_number: e.target.value }))}
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={toggleAccountVisibility}
              className="border-1 border-gray-300"
            >
              {showAccountNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </SettingRow>

        <SettingRow
          label="Bank Code"
          hint="Your bank's routing or sort code"
        >
          <div className="flex items-center gap-3">
            <Input 
              placeholder="Enter bank code" 
              className="w-40 border-1 border-gray-300"
              value={bankAccount.bank_code}
              onChange={(e) => setBankAccount(prev => ({ ...prev, bank_code: e.target.value }))}
            />
            <Button className="bg-violet-600 text-white">
              Save Bank Details
            </Button>
          </div>
        </SettingRow>

        <SettingRow
          label="Auto Withdraw"
          hint="Automatically transfer funds when available (requires admin approval)"
        >
          <div className="flex flex-col gap-2">
            <div className="float-end items-center justify-between">
              <ToggleSwitch name="auto_withdraw_enabled" />
            </div>
            <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
              ⚠️ Auto withdrawals only work when admin has enabled automatic payouts system-wide
            </div>
          </div>
        </SettingRow>

        <SettingRow
          label="Minimum Withdrawal Amount"
          hint="Minimum amount required before withdrawal"
        >
          <div className="flex items-center gap-3">
            <NumberInput 
              name="min_withdrawal_amount" 
              min={100} 
              max={100000}
              placeholder="Amount"
              className="w-32"
            />
            <span className="text-sm text-muted-foreground">NGN</span>
          </div>
        </SettingRow>

      </CardContent>
      <CardFooter className="bg-slate-50 text-sm text-muted-foreground">
        Ensure all bank details are accurate to avoid payout delays. Contact support for bank verification.
      </CardFooter>
    </Card>
  );
};