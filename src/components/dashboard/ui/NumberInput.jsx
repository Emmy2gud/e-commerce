"use client";

import React from "react";
import { Input } from "@/components/ui/input";




const NumberInput = ({
  name,
  placeholder,
  min,
  max,
  step,
  disabled = false,
}) => {

  return (
    <Input
      id={name}
      type="number"
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      disabled={disabled}

      className="max-w-[200px] border-1 border-gray-300"
    />
  );
};

export default NumberInput;