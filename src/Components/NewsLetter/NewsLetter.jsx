import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-[30px]'>
      <h1 className='text-[#454545] text-[55px] font-[600]'>Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545] text[20px]'>Subscribe to our newsletter and stay updated!</p>
      <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-border-[#e3e3e3]'>
        <input type="email" placeholder='Enter Your Email Id' className='w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px]'/>
        <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
