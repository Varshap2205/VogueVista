import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex'>
      <div className="hero-left flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]">
        <h2 className='text-[#090909] text-[26px] font-[600]'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon flex items-center gap-[20px]'>
                <p className='text-[#171717] text-[100px] font-[700]'>new</p>
                <img src={hand_icon} alt="" className='w-[105px]'/>
            </div>
            <p className='text-[#171717] text-[100px] font-[700]'>collections</p>
            <p className='text-[#171717] text-[100px] font-[700]'>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white size-[22px] font-[500]">
            <div>Latest Collections</div>
            <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right flex flex-1 justify-center items-center mt-10">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
