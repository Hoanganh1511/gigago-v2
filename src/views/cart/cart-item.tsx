'use client'
import Button from '@/components/ui/button'
import useDebounce from '@/hooks/use-debounce'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import qs from 'query-string'
interface CartItemProps {
  className?: string
}
const CartItem = ({ className }: CartItemProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [debouncedQuantity, value, setValue] = useDebounce(1, 500)
  const increment = () => {
    setValue(value + 1)
  }
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1)
    }
  }

  return (
    <div
      className={cn(
        'flex items-stretch justify-between py-[30px] border-b last:border-b-0',
        className,
      )}
    >
      <div className='flex flex-col md:flex-row items-stretch'>
        <div className='flex'>
          <div className='flex items-start w-[48px]'>
            <Image
              src='/assets/images/vn.webp'
              alt={` flag`}
              width={48}
              height={48}
              className='size-[48px] overflow-hidden rounded-full'
            />
          </div>
          <div className='flex-1 flex flex-col md:flex-row items-start md:items-center gap-y-[20px]'>
            <div className='pl-[14px]'>
              <h3 className='text-[18px] font-semibold mb-[6px]'>
                Tailwan eSIM
              </h3>
              <p className='text-[14px] text-gray-700'>Data Plan: 2GB/Day</p>
              <p className='text-[14px] text-gray-700'>Validity: 7 Days</p>
            </div>
            <div className='flex flex-col-reverse gap-y-[20px] md:flex-row items-start'>
              <div className='ml-0 md:ml-[170px] flex items-center justify-center'>
                <div className='flex items-center justify-center border-[1px] border-gray-200 rounded-[100px]'>
                  <Button
                    onClick={decrement}
                    className='w-[52px] h-[52px] flex items-center justify-center text-black hover:text-white text-[22px] rounded-l-full bg-transparent hover:bg-primary'
                  >
                    -
                  </Button>
                  <input
                    value={value}
                    className='w-[40px] h-[52px] outline-none border-none font-bold text-[18px] text-center'
                  />
                  <Button
                    onClick={increment}
                    className='w-[52px] h-[52px] flex items-center justify-center text-black hover:text-white text-[22px] rounded-r-full bg-transparent hover:bg-primary'
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className='md:ml-[100px] flex items-center justify-end'>
                <span className='text-[18px] text-primary font-semibold'>
                  $14.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row  items-center justify-end'>
        <div className='ml-[60px] flex items-center justify-end'>
          <button className=''>
            <IoTrashOutline className='size-[24px] text-gray-500' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
