'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { X } from 'lucide-react'
import { useCartStore } from '@/stores/use-cart-store'
import CartItemDrawer from '@/views/cart/cart-item-drawer'
import Button from './ui/button'
import Link from 'next/link'
const ViewCartNavigation = () => {
  const totalItems = useCartStore((state) => state.totalItems)
  const [isOpen, setIsOpen] = useState(false)
  const onCartClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Drawer direction='right' open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <div className='relative flex items-center justify-center size-[26px]'>
            {
              <span className='absolute -top-[8px] -right-[8px] size-[16px] rounded-full bg-[#0094ff] flex items-center justify-center text-white text-[10px] shadow-md'>
                {totalItems || 0}
              </span>
            }
            <Image
              src='/assets/images/cart_gigago.svg'
              width={24}
              height={24}
              alt='cart'
              className='cursor-pointer'
            />
          </div>
        </DrawerTrigger>
        <DrawerContent className='h-dvh md:h-screen w-[340px] md:w-[500px] fixed top-0 right-0 px-4'>
          <DrawerHeader className='flex items-center justify-between  md:py-[25px] border-b-[1px] border-gray-100'>
            <DrawerTitle className='text-[24px]'>My cart</DrawerTitle>
            <div
              onClick={onCartClose}
              className='size-[34px] flex items-center justify-center rounded-md hover:bg-gray-100 duration-100 cursor-pointer'
            >
              <X className='size-[24px]' />
            </div>
          </DrawerHeader>
          <div className='flex-1 max-h-full overflow-y-scroll scrollbar py-2 md:p-4 flex flex-col gap-y-[16px]'>
            <CartItemDrawer onProductClick={() => onCartClose()} />
            <CartItemDrawer onProductClick={() => onCartClose()} />
            <CartItemDrawer onProductClick={() => onCartClose()} />
          </div>
          <DrawerFooter>
            <div className='flex flex-col gap-y-[16px] py-4'>
              <Link href='/cart' scroll={true} onClick={onCartClose}>
                <Button className='w-full bg-gray-100 text-primary hover:text-white hover:bg-primary duration-300 rounded-[25px]'>
                  {' '}
                  View Cart
                </Button>
              </Link>
              <Link href='/checkout'>
                <Button className='w-full bg-primary text-white rounded-[25px]'>
                  {' '}
                  Checkout
                </Button>
              </Link>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ViewCartNavigation
