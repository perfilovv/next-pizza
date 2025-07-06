'use client';

import { RefObject, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId?: string;
}

export const ProductsGroupList = ({ title, items, className, listClassName, categoryId }: Props) => {
  const intersectionRef = useRef<HTMLDivElement | null>(null);

  const intersection = useIntersection(intersectionRef as RefObject<HTMLDivElement>, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.items[0].price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
