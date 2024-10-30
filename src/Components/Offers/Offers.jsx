import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] mt-10'>
        <div className="offers-left flex flex-1 flex-col justify-center">
            <h1 className='text-[#171717] text-[80px] font-[600]'>Exclusive</h1>
            <h1 className='text-[#171717] text-[80px] font-[600]'>Offers for you!</h1>
            <p className='text-[#171717] text-[22px] font-[600]'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-[500] mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className="offers-right flex flex-1 items-center justify-center pt-[50px]">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
