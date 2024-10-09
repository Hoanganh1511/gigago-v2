'use client'
import { cn } from '@/utils/cn'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoTrashOutline } from 'react-icons/io5'
import { useCartStore } from '@/stores/use-cart-store'
interface CartItemDrawerProps {
  onProductClick: () => void
  className?: string
}
const CartItemDrawer = (props: CartItemDrawerProps) => {
  const onRemoveItem = useCartStore((state) => state.removeFromCart)
  return (
    <li
      className={cn(
        'flex flex-col md:flex-row items-stretch p-[20px] md:p-[24px] border-[2px] border-gray-100 rounded-[16px]',
        props.className,
      )}
    >
      <div className='size-[48px] rounded-full border-[1px] overflow-hidden'>
        <Image
          src='/assets/images/vn.webp'
          width={48}
          height={48}
          alt='flag'
          className=''
        />
      </div>
      <div className='flex-1 ml-0 mt-2 md:mt-0 md:ml-[24px]'>
        <Link
          href='#'
          onClick={props.onProductClick}
          className='block mb-[8px] text-[18px] font-semibold hover:text-primary'
        >
          Taiwan eSIM
        </Link>
        <div className='text-[14px]'>Data Plan: 2GB/Day</div>
        <div className='text-[14px]'>Validity: 15 Days</div>
        <div className='text-[14px]'>Quantiy: 1</div>
      </div>
      <div className='mt-3 md:mt-0 flex flex-row-reverse md:flex-col items-end justify-between'>
        <IoTrashOutline
          onClick={() => onRemoveItem()}
          className='size-[23px] text-gray-500 cursor-pointer'
        />
        <div className='font-semibold text-primary'>$29.00</div>
      </div>
    </li>
  )
}

export default CartItemDrawer
