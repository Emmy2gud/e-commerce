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


const orderColumns = [
  { key: "checkbox", type: "checkbox" }, 
  { key: "id", label: "Order ID" },
  { key: "product", label: "Product" },
  { key: "price", label: "Price" },
  { key: "customer", label: "Customer" },
  { key: "email", label: "Email" },
  { key: "date", label: "Date" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status" }, 
  { key: "actions", type: "actions" }, 
];


const orders = [
  {
    id: "#45542",
    product: "Laptop Stand",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=50&h=50&fit=crop&crop=center",
    price: "$320",
    customer: "Olivia Garcia",
    email: "olivia@example.com",
    date: "Sep 15, 2023",
    type: "Sale",
    status: "Shipped",
  },
  {
    id: "#54345",
    product: "Portable Charger",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=50&h=50&fit=crop&crop=center",
    price: "$80",
    customer: "Elijah Jones",
    email: "elijah@example.com",
    date: "Oct 09, 2023",
    type: "Sale",
    status: "Delivered",
  },
  {
    id: "#64257",
    product: "USB Hub",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=50&h=50&fit=crop&crop=center",
    price: "$60",
    customer: "Ava Miller",
    email: "ava@example.com",
    date: "Nov 21, 2023",
    type: "Return",
    status: "Pending",
  },
  {
    id: "#14672",
    product: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=50&h=50&fit=crop&crop=center",
    price: "$45",
    customer: "Isabella Harris",
    email: "isabella@example.com",
    date: "May 05, 2024",
    type: "Return",
    status: "Pending",
  },
  {
    id: "#10232",
    product: "Tablet",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=50&h=50&fit=crop&crop=center",
    price: "$340",
    customer: "Mia Jackson",
    email: "mia@example.com",
    date: "Mar 10, 2024",
    type: "Sale",
    status: "Delivered",
  },
  {
    id: "#12342",
    product: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop&crop=center",
    price: "$200",
    customer: "Liam Johnson",
    email: "liam@example.com",
    date: "Jun 23, 2023",
    type: "Sale",
    status: "Pending",
  },
];

export const AllProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-5">
      <header className="">
        <div className="mx-auto flex flex-col sm:flex-row justify-between max-w-7xl py-4 sm:py-6 px-2 sm:px-4 lg:px-8 gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Products</h1>
          <div className="flex items-center gap-3">
            <Button className="bg-violet-600 hover:bg-gray-900 text-white text-sm">
              <CirclePlus className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Add Product</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3 sm:p-6">
    <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Sales"
        value="$284,590"
        change="+12.5%"
        changeType="increase"
        icon={DollarSign}
        description="Revenue across all vendors"
      />
      <StatCard
        title="Number of Sales"
        value="12,156"
        change="+8.2%"
        changeType="increase"
        icon={Store}
        description="Verified active sellers"
      />
      <StatCard
        title="Total Orders"
        value="12,847"
        change="+21.1%"
        changeType="increase"
        icon={ShoppingCart}
        description="Orders this month"
      />
      <StatCard
        title="Customers"
        value="8,549"
        change="-2.4%"
        changeType="decrease"
        icon={Users}
        description="Registered users"
      />
    </div>


        <div className="grid gap-4 md:gap-6 grid-cols-1 mt-3 sm:mt-5">
    <AdminProductTable columns={orderColumns} data={orders} />
        </div>
      </main>
    </div>
  );
};

export default AllProducts;