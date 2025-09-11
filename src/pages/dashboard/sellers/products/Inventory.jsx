import { DollarSign, Store, ShoppingCart, Users, CirclePlus, Eye } from "lucide-react"
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




const inventoryColumns = [
  { key: "checkbox", type: "checkbox" },
  { key: "id", label: "ID",sortable: true, },
  { key: "product", label: "Product" },
   { key: "stock", label: "Stock" },
  { key: "stock_alert", label: "Low Stock Alert" },
  { key: "date", label: "Last Updated",sortable: true, },
  { key: "actions", type: "actions" },
];

const inventory = [
  {
    id: "INV-101",
    product: "Laptop Stand",
    stock: 129,
    stock_alert: "In Stock",
    date: "Sep 15, 2023",
  },
  {
    id: "INV-102",
    product: "Portable Charger",
    stock: 20,
    stock_alert: "Low Stock", 
    date: "Oct 09, 2023",
  },
  {
    id: "INV-103",
    product: "USB Hub",
    stock: 10,
    stock_alert: "Low Stock",
    date: "Nov 21, 2023",
  },
  {
    id: "INV-104",
    product: "Earbuds",
    stock: 5,
    stock_alert: "Critical", 
    date: "May 05, 2024",
  },
  {
    id: "INV-105",
    product: "Tablet",
    stock: 0,
    stock_alert: "Out of Stock", 
    date: "Mar 10, 2024",
  },
  {
    id: "INV-106",
    product: "Wireless Headphones",
    stock: 20,
    stock_alert: "Low Stock",
    date: "Jun 23, 2023",
  },
];


export const Inventory = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="">
        <div className="mx-auto flex justify-between max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Products Inventory</h1>
          <div className="flex items-center gap-3">

  
           <Button className="bg-violet-600 hover:bg-gray-900 text-white">
              <CirclePlus />
              Add Product
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3">



        <div className="grid gap-6 lg:grid-cols-1 mt-5">
    <ProductTable data={inventory} columns={inventoryColumns}/>
        </div>
      </main>
    </div>
  );
};

export default Inventory;