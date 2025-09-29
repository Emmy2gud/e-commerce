import React from "react";

import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SellerShippingSettings } from "../../../../components/dashboard/profile/SellerShippingSettings";
import { SellerPaymentSettings } from "../../../../components/dashboard/profile/SellerPaymentSettings";
import { SellerNotificationSettings } from "../../../../components/dashboard/profile/SellerNotificationSettings";
import { SellerAccountSettings } from "../../../../components/dashboard/profile/SellerAccountSettings";

function SellerSetting() {
  return (
    <div>
      <div className="min-h-screen bg-slate-50 ">
        <main className="max-w-6xl mx-auto px-4 sm:px-15 py-4 sm:py-6">
          <div className="py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Seller settings
                </h1>
                <Badge variant="secondary">Seller</Badge>
              </div>
              <Button variant="outline" className="self-start sm:self-center bg-violet-600 text-white text-sm sm:text-base">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Button>
            </div>

            <div className="space-y-6">
              <SellerShippingSettings />
              <SellerPaymentSettings />
              <SellerNotificationSettings />
              <SellerAccountSettings />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SellerSetting;
