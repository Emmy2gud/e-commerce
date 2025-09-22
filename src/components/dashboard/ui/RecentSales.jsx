import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Eye,
  Search,
  Filter,
  MoreHorizontal,
  Package,
  ArrowUpDown,
  Plus,
} from "lucide-react";
import { CategoryCombobox } from "./CategoryCombobox";
import { StatusCombobox } from "./StatusCombobox";

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


export const RecentSales = () => (
  <div className="w-full max-w-7xl mx-auto p-3 md:p-6 space-y-4 md:space-y-6 border-0 shadow-lg bg-gray-50">
    {/* Header */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Recent Sales</h1>
        <p className="text-gray-600 mt-1 text-sm">
          Manage your product orders and track their status
        </p>
      </div>
      <Button className="bg-violet-600 text-white text-sm">
        <Plus className="h-4 w-4 mr-2" />
        <span className="hidden sm:inline">Create Order</span>
        <span className="sm:hidden">Create</span>
      </Button>
    </div>

    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 mb-4">
      <div className="flex-1 min-w-0 sm:max-w-xs">
        <Input type="text" placeholder="Search orders..." className='border-1 border-gray-300 w-full'/>
      </div>
      <div className="flex gap-2">
        <StatusCombobox />
        <CategoryCombobox />
      </div>
    </div>

    <Card className="border-1 border-gray-300">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader className=' '>
            <TableRow className='border-b-2 border-gray-300' >
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold"
                >
                  # <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold"
                >
                  Product Name <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>Customer</TableHead>

              <TableHead>Price</TableHead>
              <TableHead>
                <Button
                
                  size="sm"
                  className="h-auto p-0 text-right font-semibold"
                >
                 Date <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
             
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold"
                >
                  Status <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="h-auto p-0 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-white/50 border-b-2 border-gray-300">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-medium ">{order.product}</span>
                  </div>
                </TableCell>
              
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.email}
                    </div>
                  </div>
                </TableCell>
                         <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{order.price}</div>
                
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.date}
                </TableCell>
       
                <TableCell>
                  <Badge className={`text-xs font-normal rounded-lg text-center items-center  ${order.status === "Delivered"
                      ? "text-green-600 bg-green-100"
                      : order.status === "Shipped"      
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                      }`}
                      >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border-0">
                      <DropdownMenuItem className="hover:bg-gray-100">
                     
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-gray-100">Edit Order</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 hover:bg-gray-100">
                        Cancel Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>

        <div className="p-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </div>
      </CardContent>
    </Card>
  </div>
);
