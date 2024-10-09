'use client'
import useScrollPosition from '@/hooks/use-scroll-position'
import Link from 'next/link'
import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import { IoChevronUpOutline } from 'react-icons/io5'
const OnTop = () => {
  const position = useScrollPosition()
  const handleOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Link
        href='#'
        className='fixed bottom-[180px] md:bottom-[85px] right-[20px] bg-[rgb(73,_230,_112)] size-[54px] rounded-full flex items-center justify-center shadow-lg'
      >
        <span className='absolute flex items-center justify-center -top-[4px] -right-[4px] size-[16px] rounded-full bg-red-600 text-[10px] text-white'>
          1
        </span>
        <ImWhatsapp className='text-white size-[32px]' />
      </Link>
      {
        <div
          onClick={handleOnTop}
          className={`group fixed bottom-[130px] md:bottom-[20px] right-[20px] size-[38px] bg-transparent hover:bg-primary ${position > 600 ? 'animate-slide-up' : 'opacity-0 translate-y-[30px]'}  border-[2px] border-black/80 rounded-full flex items-center justify-center cursor-pointer duration-300`}
        >
          <IoChevronUpOutline className='size-[14px] text-black/70 group-hover:text-white duration-200' />
        </div>
      }
    </>
  )
}

export default OnTop
