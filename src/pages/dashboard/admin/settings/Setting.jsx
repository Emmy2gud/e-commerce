import React from "react";

import { Search, Bell, Image, Landmark, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { PlatformSettings } from "../../../../components/dashboard/profile/PlatformSettings";
import { PaymentSettings } from "../../../../components/dashboard/profile/PaymentSettings";
import { NotificationSettings } from "../../../../components/dashboard/profile/NotificationSettings";
import { AdminAccountSettings } from "../../../../components/dashboard/profile/AdminAccountSettings";

function Setting() {
  return (
    <div>
      <div className="min-h-screen bg-slate-50 ">
        <main className="max-w-6xl mx-auto px-4 sm:px-15 py-4 sm:py-6">
          <div className="py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Admin settings
                </h1>
                <Badge variant="secondary">Admin</Badge>
              </div>
              <Button variant="outline" className="self-start sm:self-center bg-violet-600 text-white text-sm sm:text-base">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Button>
            </div>

            <div className="space-y-6">
              <PlatformSettings />
              <PaymentSettings />
              <NotificationSettings />
              <AdminAccountSettings />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Setting;
