"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export function StatusDropdown() {
  const [status, setStatus] = React.useState("Active")


  const statusColors = {
    "Active": "text-green-500",
    "Out Of Stock": "text-red-500",
    "Closed For Sale": "text-gray-500",
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
    className="w-56 justify-start border-1 border-gray-300 space-x-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
        >
          <Circle className={cn("w-4 h-4", statusColors[status])} />
          <span>{status}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-white border-0 shadow-lg">

        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={status} onValueChange={setStatus} >
          {Object.keys(statusColors).map((key) => (
            <DropdownMenuRadioItem
              key={key}
              value={key}
              className="flex items-center space-x-2 [&>span:first-child]:hidden  hover:bg-gray-100"
            >
              <Circle className={cn("w-4 h-4", statusColors[key])} />
              <span>{key}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusDropdown;
