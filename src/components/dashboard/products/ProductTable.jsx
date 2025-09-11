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
import { StatusCombobox } from "../ui/StatusCombobox";
import { CategoryCombobox } from "../ui/CategoryCombobox";

export const ProductTable = ({ columns, data }) => (
  <div className="w-full max-w-7xl mx-auto p-6 space-y-6 border-0 shadow-lg  bg-white rounded-lg">
    <div className="flex flex-wrap items-center gap-2 mb-4 ">
      <div className="  items-center w-90">
        <Input
          type="text"
          placeholder="Search orders..."
          className="border-1 border-gray-300"
        />
      </div>
      <div className="  ">
        <StatusCombobox />
      </div>
      <div>
        <CategoryCombobox />
      </div>
    </div>

    <Card className="border-1 border-gray-300 ">
      <CardContent className="p-0">
        <Table className="">
          <TableHeader className=" ">
            <TableRow className="border-b-2 border-gray-300">
              {columns.map((column) => (
                <TableHead key={column.key || column.label}>
                  {column.type === "checkbox" ? (
                    <Checkbox className="border-1 border-violet-600" />
                  ) : column.type === "actions" ? (
                    "Actions"
                  ) : column.sortable ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 font-semibold flex items-center"
                    >
                      {column.label}
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </Button>
                  ) : (
                    column.label
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} className="border-b-1 border-gray-300">
                {columns.map((col) => {
                  const value = row[col.key];

                  if (col.type === "checkbox") {
                    return (
                      <TableCell key={col.key}>
                        <Checkbox className="border-1 border-violet-600" />
                      </TableCell>
                    );
                  }

                  if (col.type === "actions") {
                    return (
                      <TableCell key={col.key} className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    );
                  }

                  if (col.key === "status") {
                    return (
                      <TableCell key={col.key}>
                        <Badge
                          className={
                            value === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : value === "Shipped"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {value}
                        </Badge>
                      </TableCell>
                    );
                  } else if (col.key === "stock_alert") {
                    return (
                      <TableCell key={col.key}>
                        <Badge
                          className={
                            value === "In Stock"
                              ? "bg-green-100 text-green-700 "
                              : value === "Low Stock"
                              ? "bg-blue-100 text-blue-700"
                              : value === "Critical"
                              ? "bg-yellow-100 text-yellow-700 "
                              : " bg-red-100 text-red-700"
                          }
                        >
                          {value}
                        </Badge>
                      </TableCell>
                    );
                  }

                  return <TableCell key={col.key}>{value}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Footer */}
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
      </CardContent>
    </Card>
  </div>
);
