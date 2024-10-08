'use client'
import React, { useState } from 'react'
import CartItem from './cart-item'
import Button from '@/components/ui/button'
import CartLoading from './cart-loading'
import PromotionInput from './promotion-input'
import Link from 'next/link'

const CartSection = () => {
  const [isLoading, setLoading] = useState(false)
  const finishUpdate = () => {
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 2000)
  }
  const updating = () => {
    setLoading(true)
    finishUpdate()
  }
  const renderCartItems = () => (
    <div className='w-full flex flex-col border-y-[1px] border-gray-200'>
      {[...Array(2)].map((_, index) => (
        <CartItem key={index} />
      ))}
    </div>
  )
  return (
    <div className='w-full grid grid-cols-12 md:gap-x-[54px] gap-y-[30px]'>
      <div className='col-span-12 md:col-span-8'>
        <div className='relative '>
          {isLoading && <CartLoading />}
          {renderCartItems()}
          <div className='mt-[32px] flex items-center justify-end md:justify-start'>
            <Button
              onClick={updating}
              className='text-primary bg-gray-100 hover:bg-gray-300 transition-all duration-200 rounded-[25px] px-[24px]'
            >
              Update Cart
            </Button>
          </div>
        </div>
      </div>
      <div className='col-span-12 md:col-span-4'>
        <div className='w-full relative min-h-[200px] p-[24px] bg-[#f5f5f8] rounded-[24px]'>
          {isLoading && <CartLoading />}
          <>
            <h5 className='text-[18px] font-semibold mb-[24px]'>Cart totals</h5>
            <PromotionInput />
            <hr className='mt-[24px] mb-[12px]' />
            <div className='flex justify-between items-center mb-[16px]'>
              <span className='text-[14px]'>Sub total</span>
              <span className='text-[14px]'>$19.40</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-[20px] font-semibold'>Total total</span>
              <span className='text-[20px] font-semibold'>$19.40</span>
            </div>
          </>
        </div>
        <div className='hidden md:block mt-[40px]'>
          <Link
            href='/checkout'
            // disabled={isLoading}
            className={`${isLoading ? 'pointer-events-none' : ''} block text-center  w-full bg-primary text-white py-[16px] font-medium rounded-[100px] hover:shadow-[inset_0_0_0_100px_rgba(0,_0,_0,_.2)]
              disabled:cursor-wait disabled:pointer-events-none disabled:opacity-[0.6]
              `}
          >
            {/* <Link href='/checkout' className=''> */}
            Proceed To Checkout
            {/* </Link> */}
          </Link>
        </div>
        <div className='block md:hidden fixed bottom-0 left-0 bg-white w-full h-fit px-[15px] py-[20px] border-t-[1px] border-gray-100'>
          <div className='flex justify-between items-center mb-[16px]'>
            <span className='text-[16px] font-medium'>Total total</span>
            <span className='text-[16px] font-medium'>$19.40</span>
          </div>
          <Button
            disabled={isLoading}
            className={` w-full bg-primary text-white py-[16px] font-medium rounded-[100px] hover:shadow-[inset_0_0_0_100px_rgba(0,_0,_0,_.2)]
              disabled:cursor-wait disabled:pointer-events-none disabled:opacity-[0.6]
              `}
          >
            <Link href='/checkout'>Proceed To Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartSection
