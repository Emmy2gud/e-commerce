import { Clock, ShoppingCart, Users, CirclePlus,Loader,Truck,CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { OrderTable } from "../../../../components/dashboard/orders/OrderTable";


export const OrderList = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="">
        <div className="mx-auto flex justify-between max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900"> Orders</h1>
          <div className="flex items-center gap-3">

  
            <Button className="bg-violet-600 hover:bg-gray-900 text-white">
              <CirclePlus />
             Orders
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6">


        <div className="grid gap-6 lg:grid-cols-1 ">
    <OrderTable/>
        </div>
      </main>
    </div>
  );
};

export default OrderList;