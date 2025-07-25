'use client';

import { ChangeEvent, useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItems.slice(0, limit);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item) => (
          <FilterCheckbox
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            key={item.value}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3 cursor-pointer'>
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
