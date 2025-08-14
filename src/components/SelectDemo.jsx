
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
const [value, setValue] = React.useState("");

return (
    <Select value={value} onValueChange={setValue} className="rounded-md shadow-sm 0">
        <SelectTrigger className="w-[180px] border-0 focus-visible:ring-0 focus:ring-violet-500  shadow-sm shadow-violet-300 hover:shadow-md transition-shadow duration-200">
            <SelectValue
                placeholder={
                    <span className="font-normal text-lg text-gray-500">{value ?`${value}`:"Filter"}</span>
                }
       
            />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
            <SelectGroup className="text-lg font-medium">
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
)
}
export default SelectDemo;