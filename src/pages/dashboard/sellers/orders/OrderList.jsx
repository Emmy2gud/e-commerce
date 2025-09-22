import { Clock, ShoppingCart, Users, CirclePlus,Loader,Truck,CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { OrderTable } from "../../../../components/dashboard/orders/OrderTable";


export const OrderList = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 lg:p-5">
      <header>
        <div className="mx-auto flex flex-col sm:flex-row justify-between max-w-7xl py-4 lg:py-6 px-2 sm:px-4 lg:px-8 gap-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Orders</h1>
          <div className="flex items-center gap-3">
            <Button className="bg-violet-600 hover:bg-gray-900 text-white text-sm">
              <CirclePlus className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Orders</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3 lg:p-6">
        <div className="grid gap-4 lg:gap-6 grid-cols-1">
          <OrderTable/>
        </div>
      </main>
    </div>
  );
};

export default OrderList;