import CartLoading from '@/views/cart/cart-loading'
import React from 'react'

const WithLoading = ({
  isLoading,
  children,
}: {
  isLoading: boolean
  children: React.ReactNode
}) => {
  return (
    <>
      {isLoading && <CartLoading />}
      {children}
    </>
  )
}

export default WithLoading
