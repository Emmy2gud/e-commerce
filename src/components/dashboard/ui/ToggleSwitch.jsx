import React from "react";
import { Switch } from "@/components/ui/switch";


const ToggleSwitch = ({ name, disabled = false,  }) => {

  return (
    <Switch
      id={name}
     className='border-1 border-gray-300'
      disabled={disabled}
    />
  );
};

export default ToggleSwitch;
