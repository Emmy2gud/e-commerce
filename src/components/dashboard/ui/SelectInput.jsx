import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";




const SelectInput = ({
  name,
  options,
  placeholder,
  disabled = false,
}) => {


  return (
    <Select

 
      disabled={disabled}
    >
      <SelectTrigger id={name} className="max-w-[200px] border-1 border-gray-300">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className='bg-white border-1 border-gray-300'>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;