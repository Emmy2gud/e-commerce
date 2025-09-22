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




const reviewColumns = [
  { key: "checkbox", type: "checkbox" },
  { key: "id", label: "ID",sortable: true, },
  { key: "product", label: "Product" },
  { key: "reviewer", label: "Reviewer" },
  { key: "rating", label: "Rating" },
  { key: "comment", label: "Comment",sortable: true, },
  { key: "date", label: "Date",sortable: true, },
  { key: "actions", type: "actions" },
];

const reviews = [
  {
    id: "RV-101",
    product: "Laptop Stand",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=50&h=50&fit=crop&crop=center",
    reviewer: "Olivia Garcia",
    rating: 5,
    comment: "Sturdy and well-built. Works perfectly for my laptop!",
    date: "Sep 15, 2023",
 
  },
  {
    id: "RV-102",
    product: "Portable Charger",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=50&h=50&fit=crop&crop=center",
    reviewer: "Elijah Jones",
    rating: 4,
    comment: "Good charger, but a little heavy to carry around.",
    date: "Oct 09, 2023",
  
  },
  {
    id: "RV-103",
    product: "USB Hub",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=50&h=50&fit=crop&crop=center",
    reviewer: "Ava Miller",
    rating: 3,
    comment: "Works fine, but one port stopped working after a week.",
    date: "Nov 21, 2023",
  
  },
  {
    id: "RV-104",
    product: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=50&h=50&fit=crop&crop=center",
    reviewer: "Isabella Harris",
    rating: 5,
    comment: "Sound quality is excellent for the price.",
    date: "May 05, 2024",
 
  },
  {
    id: "RV-105",
    product: "Tablet",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=50&h=50&fit=crop&crop=center",
    reviewer: "Mia Jackson",
    rating: 2,
    comment: "Performance is slow, not what I expected.",
    date: "Mar 10, 2024",

  },
  {
    id: "RV-106",
    product: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop&crop=center",
    reviewer: "Liam Johnson",
    rating: 4,
    comment: "Comfortable fit, but battery life could be better.",
    date: "Jun 23, 2023",

  },
]


export const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 lg:p-5">
      <header>
        <div className="mx-auto flex flex-col sm:flex-row justify-between max-w-7xl py-4 lg:py-6 px-2 sm:px-4 lg:px-8 gap-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Products Reviews</h1>
          <div className="flex items-center gap-3">
            <Button className="bg-violet-600 hover:bg-gray-900 text-white text-sm">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Reviews</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3 lg:p-6">
        <div className="grid gap-4 lg:gap-6 grid-cols-1 mt-3 lg:mt-5">
          <ProductTable data={reviews} columns={reviewColumns}/>
        </div>
      </main>
    </div>
  );
};

export default Reviews;