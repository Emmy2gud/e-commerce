import { DollarSign, Store, ShoppingCart, Users, CirclePlus } from "lucide-react"
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


const categoryColumns = [
  { key: "checkbox", type: "checkbox" }, 
  { key: "id", label: "Request ID" },
    { key: "name", label: "Store Name" },
  { key: "owner", label: " Owner" },
  { key: "status", label: "Status" },
  { key: "date", label: "Requested At" },
  { key: "actions", type: "actions" }, 
];


const request = [
  {
    id: "#45542",
    name:"FashionFix ",
    owner:"Ava Miller",
    status:" Pending",
    date: "Sep 15, 2023",

  },
  {
    id: "#54345",
   name:"FashionFix ",
    owner:"Ava Miller",
    status:" Pending",
    date: "Sep 15, 2023",
  },
  {
    id: "#64257",
   name:"FashionFix ",
    owner:"John Doe",
    status:"completed",
     date: "Nov 21, 2023",
  },
  {
    id: "#14672",
   name:"FashionFix ",
    owner:"Ava Miller",
    status:"banned",
      date: "May 05, 2024",
  },
  {
    id: "#10232",
   name:"FashionFix ",
    owner:"Ava Miller",
    status:" Pending",
      date: "Mar 10, 2024",
  },
  {
    id: "#12342",
   name:"FashionFix ",
    owner:"Ava Miller",
    status:" Pending",     date: "Jun 23, 2023",
  },
];

export const StoreRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="">
        <div className="mx-auto flex flex-col sm:flex-row sm:justify-between gap-4 max-w-7xl py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Store Request</h1>
          <div className="flex items-center gap-3">
            {/* Add buttons here if needed */}
          </div>
        </div>
      </header>

      <main className="p-3 sm:p-6">


        <div className="grid gap-6 lg:grid-cols-1 mt-5">
    <AdminProductTable title='StoreRequests List' description='View and manage all product storerequests.' columns={categoryColumns} data={request} />
        </div>
      </main>
    </div>
  );
};

export default StoreRequest;