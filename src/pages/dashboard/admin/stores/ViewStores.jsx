import { DollarSign, Store, ShoppingCart, Users, CirclePlus } from "lucide-react"
import { Button } from "@/components/ui/button";
import { StatCard } from "../../../../components/dashboard/products/StatCard";
import { ProductTable } from "../../../../components/dashboard/products/ProductTable";
import { AdminProductTable } from "../../../../components/dashboard/products/AdminProductTable";


const storeColumns = [
  { key: "checkbox", type: "checkbox" }, 
  { key: "id", label: "Category ID" },
    { key: "name", label: "Name" },
  { key: "product", label: " Description " },
  { key: "total_products", label: "Total Products" },
  { key: "date", label: "Date" },
  { key: "actions", type: "actions" }, 
];


const stores = [
  {
    id: "#45542",
    name:"Electronics",
    description:"Gadgets & devices",
    total_products:" 120",
    date: "Sep 15, 2023",

  },
  {
    id: "#54345",
    name:"Fashion ",
    description:"Clothes & Accessories",
    total_products:"80",
    date: "Sep 15, 2023",
  },
  {
    id: "#64257",
    name:"Fashion ",
    description:"Clothes & Accessories",
    total_products:"80",
     date: "Nov 21, 2023",
  },
  {
    id: "#14672",
    name:"Fashion ",
    description:"Clothes & Accessories",
    total_products:"80",

      date: "May 05, 2024",
  },
  {
    id: "#10232",
    name:"Electronics ",
    description:"Gadgets & devices",
    total_products:"80",

      date: "Mar 10, 2024",
  },
  {
    id: "#12342",
    name:"Electronics ",
    description:"Gadgets & devices",
    total_products:"80",

      date: "Jun 23, 2023",
  },
];

export const ViewStores = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="">
        <div className="mx-auto flex flex-col sm:flex-row sm:justify-between gap-4 max-w-7xl py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">All Stores</h1>
          <div className="flex items-center gap-3">
            {/* Add buttons here if needed */}
          </div>
        </div>
      </header>

      <main className="p-3 sm:p-6">


        <div className="grid gap-6 lg:grid-cols-1 mt-5">
    <AdminProductTable title='Stores List' description='View and manage all product stores' columns={storeColumns} data={stores } />
        </div>
      </main>
    </div>
  );
};

export default ViewStores;