'use client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
const tempData = [
  'Viet Nam',
  'Hong Kong',
  'Thailand',
  'Taiwan',
  'Singapore',
  'South Korea',
  'Japan',
  'Denmark',
  'Sweden',
  'Poland',
  'Portugal',
  'Ireland',
  'Czech Republic',
  'Austria',
  'Belize',
  'Belgium',
  'United Kingdom',
  'France',
  'Finland',
  'Spain',
  'Switzerland',
]
const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative max-w-[490px] w-full'>
      <Search className='absolute top-1/2 left-[25px] -translate-y-1/2' />
      <input
        type='text'
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className='p-[20px_32px_20px_70px] w-full h-[64px] outline-none rounded-xl bg-white shadow-[-6px_8px_16px_rgba(58,42,152,.1)] placeholder:text-black/85 border-[2px] border-[#F5F5F8] focus:border-[2px] focus:border-primary focus:shadow-none duration-200'
        placeholder='Where do you want to travel next?'
      />
      {isOpen && (
        <div className='absolute top-[calc(100%+18px)] left-0 w-full h-fit'>
          <div className='px-[20px]  bg-white rounded-lg h-[300px] sm:h-[400px] shadow-[-6px_8px_16px_rgba(58,42,152,.1)] overflow-y-scroll'>
            <div className='px-[14px] font-semibold mt-[20px] mb-[6px]'>
              <span>Local eSIM</span>
            </div>
            <ul className='flex flex-col'>
              {tempData.map((item, idx) => {
                return (
                  <li key={idx} className=''>
                    <Link
                      href='#'
                      className='flex justify-between px-[14px] py-[12px] rounded-md hover:bg-gray-100'
                    >
                      <div className='flex items-center'>
                        <Image
                          src='/assets/images/vn.webp'
                          width={38}
                          height={38}
                          alt='flag'
                          className='w-[30px] h-[30px] rounded-full mr-[10px]'
                        />
                        <span className='font-medium text-[18px]'> {item}</span>
                      </div>
                      <div className=''>
                        From <span className='text-primary'>$8.9</span>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox
