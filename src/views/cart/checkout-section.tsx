'use client'
import React, { useState } from 'react'
import CartLoading from './cart-loading'
import OrderForm from './order-form'
import WithLoading from '@/hoc/with-loading'
const BillItem = ({
  item,
}: {
  item: { name: string; dataPlan: string; validity: string; price: string }
}) => {
  return (
    <div className='flex justify-between py-[16px] border-b-[1px] border-gray-200'>
      <div>
        <div className='font-semibold text-[14px] mb-[4px]'>{item.name}</div>
        <p className='text-[14px]'>Data plan: {item.dataPlan}</p>
        <p className='text-[14px]'>Validity: {item.validity}</p>
      </div>
      <div className='flex items-center justify-end'>
        <div className='font-semibold text-primary text-[16px]'>
          ${item.price}
        </div>
      </div>
    </div>
  )
}
const CheckoutSection = () => {
  const [isLoading, setLoading] = useState(false)
  const cartItems = [
    {
      name: 'Macao eSIM',
      dataPlan: '3GB/Day',
      validity: '3 Days',
      price: '71.50',
    },
    {
      name: 'Macao eSIM',
      dataPlan: '3GB/Day',
      validity: '3 Days',
      price: '129.00',
    },
    {
      name: 'Macao eSIM',
      dataPlan: '3GB/Day',
      validity: '3 Days',
      price: '229.00',
    },
  ]
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0,
  )
  const total = subtotal

  return (
    <div className='w-full grid grid-cols-12 md:gap-x-[54px] gap-y-[30px]'>
      {/* Left Section */}
      <div className='col-span-12 md:col-span-8 relative pb-[80px]'>
        <WithLoading isLoading={isLoading}>
          <OrderForm />
        </WithLoading>
      </div>

      {/* Right Section */}
      <div className='col-span-12 md:col-span-4 w-full sticky top-[125px] h-fit p-[24px] bg-[#f5f5f8] rounded-[16px]'>
        <WithLoading isLoading={isLoading}>
          <h5 className='text-[18px] font-semibold mb-[24px] tracking-wide'>
            Cart Summary
          </h5>
          <hr className='mt-[24px]' />
          {/* Cart Items */}
          <div className='flex flex-col'>
            {cartItems.map((item, index) => (
              <BillItem key={index} item={item} />
            ))}
          </div>
          {/* Total Section */}
          <div className='pt-[16px]'>
            <div className='flex justify-between items-center'>
              <span className='text-[14px]'>Subtotal</span>
              <span className='text-[14px]'>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between items-center pt-[16px]'>
              <span className='text-[16px] font-semibold'>Total</span>
              <span className='text-[18px] font-semibold'>
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </WithLoading>
      </div>
    </div>
  )
}
export default CheckoutSection
