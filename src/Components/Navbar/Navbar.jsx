import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar flex flex-col md:flex-row justify-between items-center p-3 shadow-[0_1px_3px_-2px_rgba(0,0,0,1)]'>
      <div className="nav-logo flex items-center gap-[10px]">
        <img src={logo} alt="VogueVista Logo" className='h-10' />
        <p className='text-[#171717] text-[28px] md:text-[38px] font-[600]'>VogueVista</p>
      </div>
      <ul className="nav-menu flex flex-col md:flex-row items-center gap-[20px] text-[#626262] text-[18px] md:text-[20px] font-[500] list-none">
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("shop") }}>
          <Link to='/'>Shop</Link>
          {menu === "shop" && <hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("mens") }}>
          <Link to='/mens'>Men</Link>
          {menu === "mens" && <hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("womens") }}>
          <Link to='/womens'>Women</Link>
          {menu === "womens" && <hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("kids") }}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr className='border-none w-4/5 h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-[20px] mt-3 md:mt-0">
        <Link to='/login'>
          <button className='w-[130px] h-[50px] outline-none border border-[#7a7a7a] text-[#515151] rounded-[75px] text-[16px] md:text-[20px] font-[600] bg-white cursor-pointer active:bg-[#f3f3f3]'>Login</button>
        </Link>
        <Link to='/cart' className='relative'>
          <img src={cart_icon} alt="Cart Icon" className='w-8 h-8' />
          <div className="nav-cart-count flex justify-center items-center w-[22px] h-[22px] absolute -top-[10px] -right-[10px] rounded-[11px] bg-red-500 text-white text-[14px]">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
