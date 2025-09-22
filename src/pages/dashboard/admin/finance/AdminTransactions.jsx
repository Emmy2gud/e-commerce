import { DollarSign, Store, ShoppingCart, Users, CirclePlus, Download,Clock,XCircle} from "lucide-react"
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
import { AdminProductTable } from "../../../../components/dashboard/products/AdminProductTable";


const orderColumns = [
  { key: "checkbox", type: "checkbox" }, 
  { key: "id", label: "Transaction ID" },
  { key: "product", label: "Product" },
  { key: "price", label: "Amount" },
  { key: "customer", label: "Customer" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status" },
  { key: "actions", type: "actions" }, 
];


const transactions = [
  {
    id: "TXN-2024-001",
    product: "Laptop Stand",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=50&h=50&fit=crop&crop=center",
    price: "$320",
    customer: "Olivia Garcia",
    date: "Sep 15, 2023",
    status: "Shipped",
  },
  {
    id: "TXN-2024-002",
    product: "Portable Charger",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=50&h=50&fit=crop&crop=center",
    price: "$80",
    customer: "Elijah Jones",

    date: "Oct 09, 2023",
    status: "Delivered",
  },
  {
    id: "TXN-2024-003",
    product: "USB Hub",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=50&h=50&fit=crop&crop=center",
    price: "$60",
    customer: "Ava Miller",

    date: "Nov 21, 2023",

    status: "Pending",
  },
  {
    id: "TXN-2024-004",
    product: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=50&h=50&fit=crop&crop=center",
    price: "$45",
    customer: "Isabella Harris",
   
    date: "May 05, 2024",
 
    status: "Pending",
  },
  {
    id: "TXN-2024-005",
    product: "Tablet",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=50&h=50&fit=crop&crop=center",
    price: "$340",
    customer: "Mia Jackson",
  
    date: "Mar 10, 2024",
    status: "Delivered",
  },
  {
    id: "TXN-2024-006",
    product: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop&crop=center",
    price: "$200",
    customer: "Liam Johnson",
 
    date: "Jun 23, 2023",
    status: "Pending",
  },
];

export const AdminTransactions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="">
        <div className="mx-auto flex flex-col sm:flex-row sm:justify-between gap-4 max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Transactions</h1>
            <p className="text-sm sm:text-base text-gray-400">Track your payments, refunds, and transaction</p>   
          </div>
          <div className="flex items-center gap-3 self-start sm:self-center">
            <Button className="bg-violet-600 hover:bg-gray-900 text-white text-sm sm:text-base">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
<StatCard
  title="Total Transactions"
  value="12,156"
  change="+8.2%"
  changeType="increase"
  icon={Store}
  description="All processed payments"
/>

<StatCard
  title="Completed Payments"
  value="9,842"
  change="+6.4%"
  changeType="increase"
  icon={DollarSign}
  description="Successfully settled orders"
/>

<StatCard
  title="Pending Payments"
  value="1,765"
  change="-3.1%"
  changeType="decrease"
  icon={Clock}
  description="Awaiting confirmation or processing"
/>

<StatCard
  title="Refunded / Failed"
  value="549"
  change="+1.8%"
  changeType="increase"
  icon={XCircle}
  description="Refunded or failed transactions"
/>

    </div>


        <div className="grid gap-6 lg:grid-cols-1 mt-5">
    <AdminProductTable columns={orderColumns} data={transactions} />
        </div>
      </main>
    </div>
  );
};

export default AdminTransactions;