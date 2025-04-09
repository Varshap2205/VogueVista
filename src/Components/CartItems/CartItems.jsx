import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cartitems my-[100px] mx-[10%] md:mx-[170px]'>
            <div className="cartitems-format-main grid grid-cols-2 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[20px] md:gap-[75px] py-5 text-[#454545] text-[16px] md:text-[18px] font-[600]">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-0' />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format grid grid-cols-2 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[20px] md:gap-[75px] py-5 text-[#454545] text-[14px] md:text-[17px] font-[500]">
                                <img src={e.image} alt="" className='carticon-product-icon h-[50px] md:h-[62px]' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity w-[50px] h-[40px] bg-[#fff] border-2 border-[#ebebeb]'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    src={remove_icon}
                                    className='cartitems-remove-icon w-[15px] mx-10 cursor-pointer'
                                    alt=""
                                    onClick={() => { removeFromCart(e.id); }}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down flex flex-col md:flex-row my-[100px] mx-0">
                <div className="cartitems-total flex-1 flex flex-col mr-0 md:mr-[200px] gap-[40px]">
                    <h1 className='text-[25px] md:text-[30px] font-[600]'>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-items justify-between flex py-[15px] px-0'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-items flex justify-between py-[15px] px-0'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-items flex justify-between py-[15px] px-0'>
                            <h3 className='text-[18px] md:text-[20px] font-[600]'>Total</h3>
                            <h3 className='text-[18px] md:text-[20px] font-[600]'>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    {/* <button className='w-full md:w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-[600] cursor-pointer'>PROCEED TO CHECKOUT</button> */}
                </div>
                <div className="cartitems-promocode flex-1 text-[16px] font-[500] mt-[40px] md:mt-0">
                    <p className='text-[#555]'>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox w-full md:w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex">
                        <input className='border-none outline-none bg-transparent text-[16px] w-full h-[50px]' type="text" placeholder="Enter your promo code" />
                        <button className='w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer'>APPLY PROMOCODE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
