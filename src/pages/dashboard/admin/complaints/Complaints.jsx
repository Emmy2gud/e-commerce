import { DollarSign, Store, ShoppingCart, Users, CirclePlus, Eye } from "lucide-react"
import { Button } from "@/components/ui/button";
import { StatCard } from "../../../../components/dashboard/products/StatCard";
import { ProductTable } from "../../../../components/dashboard/products/ProductTable";
import { AdminProductTable } from "../../../../components/dashboard/products/AdminProductTable";


const usersColumns = [
  { key: "checkbox", type: "checkbox" }, 
  { key: "id", label: "Complaint ID" },
    { key: "name", label: "Name" },
        { key: "description", label: "Description " },
    { key: "status", label: "Status" },
  { key: "date", label: "Created At" },
  { key: "actions", type: "actions" }, 
];

const users= [
  {
    id: "#45542",
    name:"Olivia Garcia",
    type:"Order Issue",
description:"Item not delivered",
    status:"Active",
    date: "Sep 15, 2023",

  },
  {
    id: "#54345",
    name:" Elijah Jones",
    type:"Order Issue",
description:"Item not delivered",
    status:"Pending",
    date: "Sep 15, 2023",
  },
  
];

const Complaints = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 lg:p-5">
      <header>
        <div className="mx-auto flex flex-col sm:flex-row justify-between max-w-7xl py-4 lg:py-6 px-2 sm:px-4 lg:px-8 gap-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Complaints</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm">
              <Eye className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">View Sample Detail</span>
              <span className="sm:hidden">Sample</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3 lg:p-6">
        <div className="grid gap-4 lg:gap-6 grid-cols-1 mt-3 lg:mt-5">
          <AdminProductTable title='Complaints List' description='View and manage all product complaints.' columns={usersColumns} data={users} />
        </div>
      </main>
    </div>
  )
}

export default Complaints