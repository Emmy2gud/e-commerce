import { DollarSign, Store, ShoppingCart, Users, CirclePlus, Download,CheckCircle,XCircle,Clock } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusDropdown } from "../../../../components/dashboard/ui/StatusDropdown";
import { StatCard } from "../../../../components/dashboard/products/StatCard";
import { ProductTable } from "../../../../components/dashboard/products/ProductTable";


const orderColumns = [
  { key: "checkbox", type: "checkbox" }, 
  { key: "id", label: "Payout ID" },
  { key: "orders", label: "Total Orders" },
  { key: "amount", label: "Gross Amount" },
  { key: "fee", label: "Platform Fee" },
  { key: "net_paid", label: "Net Paid" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status" }, 
  { key: "actions", type: "actions" }, 
];


const payouts = [
  {
    id: "POUT-301",
    orders: "2",
    amount: "$640",
    fee: "$64",
    net_paid: "$576",
    date: "Sep 15, 2023",
    status: "Paid",
  },
  {
    id: "POUT-302",
    orders: "5",
    amount: "$1,200",
    fee: "$120",
    net_paid: "$1,080",
    date: "Oct 09, 2023",
    status: "Pending",
  },
  {
    id: "POUT-303",
    orders: "3",
    amount: "$460",
    fee: "$46",
    net_paid: "$414",
    date: "Nov 21, 2023",
    status: "Failed",
  },
  {
    id: "POUT-304",
    orders: "7",
    amount: "$2,345",
    fee: "$235",
    net_paid: "$2,110",
    date: "May 05, 2024",
    status: "Processing",
  },
  {
    id: "POUT-305",
    orders: "4",
    amount: "$980",
    fee: "$98",
    net_paid: "$882",
    date: "Jun 23, 2024",
    status: "Paid",
  },
];


export const Payouts = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="">
        <div className="mx-auto flex flex-col sm:flex-row sm:justify-between gap-4 max-w-7xl py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Payouts</h1>
            <p className="text-sm sm:text-base text-gray-400">Track your payments, refunds, and payouts</p>   
          </div>
          <div className="flex items-center gap-3 self-start sm:self-center">
            <Button className="bg-violet-600 hover:bg-gray-900 text-white text-sm sm:text-base">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3 sm:p-6">
        <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
<StatCard
  title="Total Payouts"
  value="$42,156"
  change="+6.4%"
  changeType="increase"
  icon={DollarSign}
  description="All disbursed vendor earnings"
/>

<StatCard
  title="Pending Payouts"
  value="$8,765"
  change="-2.1%"
  changeType="decrease"
  icon={Clock}
  description="Awaiting approval or processing"
/>

<StatCard
  title="Completed Payouts"
  value="$33,245"
  change="+5.7%"
  changeType="increase"
  icon={CheckCircle}
  description="Successfully paid vendors"
/>

<StatCard
  title="Failed / Returned"
  value="$146"
  change="+1.3%"
  changeType="increase"
  icon={XCircle}
  description="Failed transfers or returned funds"
/>

    </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 mt-3 sm:mt-5">
    <ProductTable columns={orderColumns} data={payouts} />
        </div>
      </main>
    </div>
  );
};

export default Payouts;