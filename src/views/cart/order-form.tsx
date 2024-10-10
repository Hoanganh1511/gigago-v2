'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import Button from '@/components/ui/button'
import { cn } from '@/utils/cn'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GenericModal } from '@/components/modals/generic-modal'
import { useModalStore } from '@/stores/use-modal-store'
interface FormData {
  firstName: string
  lastName: string
  country: string
  state: string
  email: string
  reEmail: string
  phone?: string
  address?: string
  payMethod: string
  confirmTerm: boolean
  confirmDevice: boolean
}
const defaultValues = {
  firstName: '',
  lastName: '',
  country: '',
  state: '',
  email: '',
  reEmail: '',
  phone: '',
  address: '',
  payMethod: 'card',
  confirmTerm: false,
  confirmDevice: false,
}
const schema = yup
  .object({
    firstName: yup.string().required('First Name / is a required field'),
    lastName: yup.string().required('Last Name / is a required field'),
    country: yup.string().required('Country / is  a required field'),
    state: yup.string().required('State / is a required field'),
    email: yup.string().required('Email / is a required field'),
    reEmail: yup
      .string()
      .required('Confirm Email Address / is a required field'),
    phone: yup.string(),
    address: yup.string(),
    payMethod: yup.string().required('Payment method / is a required field'),
    confirmTerm: yup
      .bool()
      .oneOf([true], 'Confirm Term / must be checked')
      .required('Confirm Term / is a required field'),
    confirmDevice: yup
      .bool()
      .oneOf([true], 'Device Term / is a required field')
      .required('Device Term / is a required field'),
  })
  .required()

const OrderForm = () => {
  const modals = useModalStore((s) => s.modals)
  const closeModal = useModalStore((s) => s.closeModal)
  const openModal = useModalStore((s) => s.openModal)
  const [expandedCouponCode, setExpandedCouponcode] = useState(false)
  const promitionCodeInputRef = useRef<HTMLInputElement | null>(null)
  const form = useForm<FormData>({
    defaultValues: schema.cast(defaultValues),
    resolver: yupResolver(schema),
  })
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = form
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  const handleExpand = () => {
    setExpandedCouponcode((prev) => !prev)
    if (promitionCodeInputRef.current) {
      if (expandedCouponCode) {
        // Blur the input
        promitionCodeInputRef.current.blur()
      } else {
        // Focus the input after 400ms
        setTimeout(() => {
          promitionCodeInputRef.current?.focus()
        }, 400)
      }
    }
  }
  const renderError = Object.entries(errors).map(([fieldName, _], idx) => {
    return (
      <p key={idx} className='text-error'>
        <strong>Billing {_.message?.split('/')[0]}</strong>
        {_.message?.split('/')[1]}
      </p>
    )
  })
  return (
    <>
      <GenericModal
        title='Device Compatibility'
        open={!!modals['device-compatibility']}
        onOpenChange={() => closeModal('device-compatibility')}
        className='w-[800px]'
      >
        <div className='pt-[50px]'>
          <p className='font-semibold mb-3'>
            The following devices support eSIM:
          </p>
          <p>
            To use an eSIM, your mobile device must be carrier-unlocked and
            eSIM-compatible. Read on the list below to see if your device
            supports eSIM. (Note that restrictions may apply to specific
            countries and carriers)*.
          </p>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <Button
            onClick={() => {
              setValue('confirmDevice', true)
              closeModal('device-compatibility')
            }}
            className='text-white bg-primary rounded-[10px] px-[20px]'
          >
            READ AND ACCEPT
          </Button>
        </div>
      </GenericModal>
      <div className='mb-[15px]'>
        Have a coupon?{' '}
        <button onClick={handleExpand} className='text-primary'>
          Click here to enter your code
        </button>
      </div>
      <div
        className={` ${expandedCouponCode ? 'h-[110px] opacity-100' : 'h-0 opacity-0'}  overflow-hidden duration-300`}
      >
        <p>If you have a coupon code, please apply it below</p>
        <div className='relative mt-[8px] mb-[30px]'>
          <input
            ref={promitionCodeInputRef}
            className={cn(
              `w-full h-[48px] pl-[14px] pr-[80px] placeholder:text-black/65 bg-white border-gray-200 rounded-[16px] outline-none border-[2px]  focus:border-[2px] focus:border-primary focus:duration-500 `,
            )}
            placeholder='Promotion code (optional)'
          />
          <button className='absolute top-1/2 right-[12px] -translate-y-1/2 text-primary font-medium'>
            Apply
          </button>
        </div>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className='p-[24px] border-dashed border-[2px] border-error mb-[24px]'>
          <div className={'text-error'}>
            Please read and accept the Learn more to proceed with your order.
          </div>

          {renderError}
        </div>
      )}
      <h2 className='text-[24px] font-semibold mb-[30px] uppercase'>
        Contact Info
      </h2>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <div className='grid grid-cols-12 gap-y-[16px] gap-x-[16px]'>
            <div className='col-span-6'>
              <FormField
                key={'firstName'}
                control={control}
                name={'firstName'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.firstName ? 'text-error' : '',
                      )}
                    >
                      First name <span className='text-[#b20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.firstName
                            ? 'border-error focus:border-error'
                            : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-6'>
              {' '}
              <FormField
                key={'lastName'}
                control={control}
                name={'lastName'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.lastName ? 'text-error' : '',
                      )}
                    >
                      Last name <span className='text-[#b20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.lastName
                            ? 'border-error focus:border-error'
                            : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FormField
                key={'country'}
                control={control}
                name={'country'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.country ? 'text-error' : '',
                      )}
                    >
                      Country / Region <span className='text-[#b20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.country
                            ? 'border-error focus:border-error'
                            : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FormField
                key={'state'}
                control={control}
                name={'state'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.state ? 'text-error' : '',
                      )}
                    >
                      State / Country <span className='text-[#b20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.state ? 'border-error focus:border-error' : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FormField
                key={'email'}
                control={control}
                name={'email'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.email ? 'text-error' : '',
                      )}
                    >
                      Email address <span className='text-[#b20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.email ? 'border-error focus:border-error' : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              <FormField
                key={'reEmail'}
                control={control}
                name={'reEmail'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.reEmail ? 'text-error' : '',
                      )}
                    >
                      Confirm Email Address{' '}
                      <span className='text-[#b20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.reEmail
                            ? 'border-error focus:border-error'
                            : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              <FormField
                key={'phone'}
                control={control}
                name={'phone'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.phone ? 'text-error' : '',
                      )}
                    >
                      Phone (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.phone ? 'border-error focus:border-error' : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              {' '}
              <FormField
                key={'address'}
                control={control}
                name={'address'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-[14px] font-normal text-gray-600',
                        errors.address ? 'text-error' : '',
                      )}
                    >
                      Address (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={'text'}
                        className={cn(
                          `text-md h-[48px] rounded-[16px] border-[2px] border-[#f5f5f8] duration-300 `,
                          errors.address
                            ? 'border-error focus:border-error'
                            : '',
                        )}
                        placeholder={''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-12'>
              <hr className='my-4 border-gray-100' />
            </div>
            <div className='col-span-12'>
              <div className='flex items-center mb-[20px]'>
                <RadioGroup defaultValue='card'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <FormField
                      key='payMethod'
                      control={control}
                      name='payMethod'
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <>
                                <RadioGroupItem
                                  value='card'
                                  id='card'
                                  onClick={() => field.onChange('card')}
                                  checked={field.value === 'card'}
                                />
                              </>
                            </FormControl>
                          </FormItem>
                        )
                      }}
                    />

                    <Label
                      htmlFor='card'
                      className='flex tems-center font-normal'
                    >
                      <p className='leading-[24px]'>Pay with cards and more </p>
                      <div className='flex items-center gap-x-[4px] pl-[12px]'>
                        <Image
                          src='/assets/images/pay-method-1.svg'
                          width={35}
                          height={24}
                          alt=''
                          className=''
                        />
                        <Image
                          src='/assets/images/pay-method-2.svg'
                          width={35}
                          height={24}
                          alt=''
                          className=''
                        />
                        <Image
                          src='/assets/images/pay-method-3.svg'
                          width={35}
                          height={24}
                          alt=''
                          className=''
                        />
                        <Image
                          src='/assets/images/pay-method-4.svg'
                          width={35}
                          height={24}
                          alt=''
                          className=''
                        />
                        <Image
                          src='/assets/images/pay-method-5.svg'
                          width={35}
                          height={24}
                          alt=''
                          className=''
                        />
                      </div>
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <FormField
                      key='payMethod'
                      control={control}
                      name='payMethod'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <>
                              <RadioGroupItem
                                value='paypal'
                                id='paypal'
                                onClick={() => field.onChange('paypal')}
                                checked={field.value === 'paypal'}
                              />
                            </>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Label
                      htmlFor='paypal'
                      className='flex tems-center font-normal'
                    >
                      <p className='leading-[24px]'>PayPal</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className='flex items-center mb-[12px]'>
                <FormField
                  key={'confirmTerm'}
                  control={control}
                  name={'confirmTerm'}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Label
                          key={'1'}
                          className='flex items-center gap-[12px] font-normal text-normal '
                        >
                          <Checkbox
                            className={`mt-[2px] ${errors.confirmTerm ? 'outline outline-[1px] outline-red-500 outline-offset-[2px]' : ''}`}
                            onCheckedChange={(checked) => {
                              field.onChange(checked)
                            }}
                            checked={field.value}
                          />
                          <p
                            className={`leading-[24px] ${errors.confirmDevice ? 'text-error' : ''}`}
                          >
                            I have read and agree to the website{' '}
                            <Link href='#' className='text-secondary'>
                              term and conditions
                            </Link>{' '}
                            *
                          </p>
                        </Label>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex items-center mb-[8px]'>
                <FormField
                  key={'confirmDevice'}
                  control={control}
                  name={'confirmDevice'}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Label
                          key={'1'}
                          className='flex items-start gap-[12px] font-normal text-normal'
                        >
                          <Checkbox
                            className={`mt-[2px] ${errors.confirmDevice ? 'outline outline-[1px] outline-red-500 outline-offset-[2px]' : ''}`}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                openModal('device-compatibility')
                              } else {
                                field.onChange(false)
                              }
                            }}
                            checked={field.value}
                          />
                          <p
                            className={`leading-[24px] ${errors.confirmDevice ? 'text-error' : ''}`}
                          >
                            Before completing this order, please confirm your
                            device is eSIM compatible and network-unlocked. *
                          </p>
                        </Label>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className='col-span-12'>
              <Button
                type='submit'
                className='w-full rounded-[100px] hover:shadow-[inset_0_0_0_100px_rgba(0,_0,_0,_.2)] bg-primary text-white'
              >
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}

export default OrderForm
