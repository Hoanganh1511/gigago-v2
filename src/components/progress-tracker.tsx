'use client'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
interface ProgressTrackerProps {
  currentStep: number
}
interface StepProps {
  stepNumber: number
  title: string
  isActive: boolean
  isCompleted: boolean
}
const Step = ({ stepNumber, title, isActive, isCompleted }: StepProps) => {
  return (
    <Link
      href={stepNumber === 1 ? '/cart' : stepNumber === 2 ? '/checkout' : ''}
      className={`flex flex-col md:flex-row items-center ${stepNumber === 3 ? 'pointer-events-none' : ''}`}
    >
      <div
        className={`w-[24px] h-[24px] rounded-full flex items-center justify-center ${isCompleted ? 'bg-[#6dae43] text-white' : isActive ? 'bg-black text-white' : 'bg-white border-[1px] border-gray-500 text-gray-500'}`}
      >
        {isCompleted ? <FaCheck /> : <span className=''>{stepNumber}</span>}
      </div>
      <span
        className={`flex-1 ml-2 mt-1 md:mt-0 text-[12px] md:text-[14px] font-semibold ${isCompleted || isActive ? 'text-black' : 'text-gray-600'}`}
      >
        {title}
      </span>
    </Link>
  )
}
const ProgressTracker = ({ currentStep }: ProgressTrackerProps) => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Shopping Cart',
    },
    {
      stepNumber: 2,
      title: 'Checkout details',
    },
    {
      stepNumber: 3,
      title: 'Complete',
    },
  ]
  return (
    <div className='flex items-center justify-between sm:justify-center'>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <Step
            stepNumber={step.stepNumber}
            title={step.title}
            isActive={currentStep === step.stepNumber}
            isCompleted={currentStep > step.stepNumber}
          />
          {idx < steps.length - 1 && (
            <div className='w-[20px] sm:w-[40px] md:w-[80px] h-[1px] sm:h-[2px] md:h-[3px]  rounded-full bg-gray-200 mx-1 sm:mx-2 md:mx-[12px]'></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressTracker
