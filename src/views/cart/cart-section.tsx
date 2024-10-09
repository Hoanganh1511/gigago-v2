'use client'
import React, { useState } from 'react'
import CartItem from './cart-item'
import Button from '@/components/ui/button'
import CartLoading from './cart-loading'

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
    <div className='w-full grid grid-cols-12 md:space-x-[54px] space-y-[30px]'>
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
            <div className='relative'>
              <input
                className='w-full h-[48px] pl-[14px] pr-[80px] placeholder:text-black/65 bg-white rounded-[16px] outline-none focus:outline focus:outline-[2px] focus:outline-gray-400 focus:duration-200'
                placeholder='Promotion code (optional)'
              />
              <div className='absolute top-1/2 right-[12px] -translate-y-1/2 text-primary'>
                Apply
              </div>
            </div>
            <hr className='mt-[24px] mb-[12px]' />
            <div className='flex justify-between items-center mb-[16px]'>
              <span className='text-[14px]'>Sub total</span>
              <span className='text-[14px]'>$19.40</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-[20px] font-semibold'>Sub total</span>
              <span className='text-[20px] font-semibold'>$19.40</span>
            </div>
          </>
        </div>
        <div className='mt-[40px]'>
          <Button
            disabled={isLoading}
            className={`w-full bg-primary text-white py-[16px] font-medium rounded-[100px] hover:shadow-[inset_0_0_0_100px_rgba(0,_0,_0,_.2)]
              disabled:cursor-wait disabled:pointer-events-none disabled:opacity-[0.6]
              `}
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartSection
