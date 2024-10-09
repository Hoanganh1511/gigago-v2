import ProgressTracker from '@/components/progress-tracker'
import CheckoutSection from '@/views/cart/checkout-section'
import React from 'react'
const CheckoutPage = () => {
  return (
    <div className='max-w-xl w-full mx-auto px-[15px]'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='py-[40px]'>
            <ProgressTracker currentStep={2} />
          </div>
        </div>
        <div className='col-span-12'>
          <h1 className='text-[40px] font-semibold text-center  mt-[20px]'>
            Checkout
          </h1>
          <div className='py-[30px]'>
            <CheckoutSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
