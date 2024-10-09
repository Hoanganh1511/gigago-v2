import ProgressTracker from '@/components/progress-tracker'
import { Skeleton } from '@/components/ui/skeleton'
import CartSection from '@/views/cart/cart-section'
import React, { Suspense } from 'react'
const Cart = () => {
  return (
    <div className='max-w-xl w-full mx-auto px-[15px]'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='py-[40px]'>
            <ProgressTracker currentStep={1} />
          </div>
        </div>
        <div className='col-span-12'>
          <h1 className='text-[40px] font-semibold text-center mt-[20px]'>
            My Cart
          </h1>
          <div className='py-[30px]'>
            <Suspense fallback={<CartSkeleton />}>
              <CartSection />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart

function CartSkeleton() {
  return (
    <section className='grid grid-cols-12 gap-x-[60px]'>
      <div className='col-span-8'>
        <div>
          <div className='flex flex-col gap-y-[12px] border-gray-200 mb-[32px]'>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className='flex h-[132px] w-full flex-col'>
                <Skeleton className='h-[132px] w-full' />
              </div>
            ))}
          </div>
          <Skeleton className='h-[56px] w-[145px] rounded-full' />
        </div>
      </div>
      <div className='col-span-4'>
        <Skeleton className='h-[261px] w-full rounded-xl mb-[40px] ' />
        <Skeleton className='h-[56px] w-full rounded-[100px]' />
      </div>
    </section>
  )
}
