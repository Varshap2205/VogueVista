import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar flex justify-around p-[1px] shadow-[0_1px_3px_-2px_rgba(0,0,0,1)]'>
      <div className="nav-logo flex items-center gap-[10px]">
        <img src={logo} alt="" />
        <p className='text-[#171717] text-[38px] font-[600]'>VogueVista</p>
      </div>
      <ul className="nav-menu flex items-center gap-[50px] text-[#626262] text-[20px] font-[500] list-none">
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]'/>:<></>}</li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]'/>:<></>}</li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]'/>:<></>}</li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]'/>:<></>}</li>
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px]">
        <Link to='/login'><button className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] text-[#515151] rounded-[75px] text-[20px] font-[600] bg-white cursor-pointer active:bg-[#f3f3f3]'>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count flex justify-center items-center w-[22px] h-[22px] mt-[-35px] ml-[-55px] rounded-[11px] bg-red-500 text-white text-[14px]">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
