import React from 'react';
import { Checkbox } from '../ui';

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox = ({ text, value, endAdornment, onCheckedChange, checked }: FilterCheckboxProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className='rounded-[8px] w-6 h-6'
        id={`checkbox-${value}`}
      />
      <label htmlFor={`checkbox-${value}`} className='leading-none cursor-pointer flex-1'>
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
