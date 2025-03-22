import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import RazorpayPayment from '../Components/RazorPay/RazorPay'

const Cart = () => {
  return (
    <div>
      <CartItems/>
      <RazorpayPayment/>
    </div>
  )
}

export default Cart
