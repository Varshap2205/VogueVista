import React from 'react';

const NewsLetter = () => {
  return (
    <div className='newsletter w-full md:w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto py-10 px-5 mb-24 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-5'>
      <h1 className='text-[#454545] text-4xl md:text-5xl font-semibold text-center'>Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545] text-base md:text-lg text-center'>Subscribe to our newsletter and stay updated!</p>
      <div className='flex flex-col md:flex-row items-center justify-between bg-white w-full md:w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]'>
        <input 
          type="email" 
          placeholder='Enter Your Email Id' 
          className='flex-1 ml-5 md:ml-8 border-none outline-none text-[#616161] text-base md:text-lg h-full rounded-l-[80px]' 
        />
        <button className='w-full md:w-[210px] h-[70px] rounded-[80px] bg-black text-white text-base md:text-lg cursor-pointer'>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
