import { cn } from '@/utils/cn'
import React from 'react'

const PromotionInput = () => {
  return (
    <div className='relative'>
      <input
        className={cn(
          `w-full h-[48px] pl-[14px] pr-[80px] placeholder:text-black/65 bg-white border-gray-200 rounded-[16px] outline-none border-[2px]  focus:border-[2px] focus:border-primary focus:duration-300 `,
        )}
        placeholder='Promotion code (optional)'
      />
      <button className='absolute top-1/2 right-[12px] -translate-y-1/2 text-primary'>
        Apply
      </button>
    </div>
  )
}

export default PromotionInput
