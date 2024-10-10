import { cn } from '@/utils/cn'
import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border-input bg-white text-gary-500 placeholder:text-gray-400  flex h-10 w-full rounded-md border outline-none border-neutral-300  px-4 py-2 text-black file:border-0 file:bg-transparent focus:border-primary  focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
