import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);

  return (
    <div className='cartitems my-[100px] mx-[170px]'>
      <div className="cartitems-format-main grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 text-[#454545] text-[18px] font-[600]">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-[3px] bg-[#e2e2e2] border-0'/>
      <div>
       
        <hr className='h-[3px] bg-[#e2e2e2] border-0'/>
      </div>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return  <div>
            <div className="cartitems-format grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 text-[#454545] text-[17px] font-[500] ">
                <img src={e.image} alt="" className='carticon-product-icon h-[62px]'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity w-[64px] h-[50px] bg-[#fff] border-2 border-[#ebebeb]'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} className='cartitems-remove-icon w-[15px] mx-10 cursor-pointer' alt="" onClick={()=>{removeFromCart(e.id)}} />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down flex my-[100px] mx-0">
        <div className="cartitems-total flex flex-1 flex-col mr-[200px] gap-[40px]">
            <h1 className='text-[30px] font-[600]'>Cart Totals</h1>
            <div>
                <div className='cartitems-total-items justify-between flex  py-[15px] px-0'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-items flex justify-between py-[15px] px-0'>
                    <p >Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-items flex justify-between py-[15px] px-0'>
                    <h3 className='text-[20px] font-[600]'>Total</h3>
                    <h3 className='text-[20px] font-[600]'>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-[600] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode flex-1 text-[16px] font-[500]">
            <p className='text-[#555]'>If you have a promocode Enter it here</p>
            <div className="cartitems-promobox w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex">
                <input className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]' type="text" placeholder="Enter your promocode"/>
                <button className='w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer'>APPLY PROMOCODE</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
