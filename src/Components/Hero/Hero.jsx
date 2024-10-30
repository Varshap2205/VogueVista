import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex flex-col lg:flex-row'>
      <div className="hero-left flex-1 flex flex-col justify-center gap-[20px] px-5 lg:px-[180px] leading-[1.1]">
        <h2 className='text-[#090909] text-[20px] md:text-[26px] font-[600]'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon flex items-center gap-[20px]'>
                <p className='text-[#171717] text-[80px] md:text-[100px] font-[700]'>new</p>
                <img src={hand_icon} alt="" className='w-[75px] md:w-[105px]' />
            </div>
            <p className='text-[#171717] text-[80px] md:text-[100px] font-[700]'>collections</p>
            <p className='text-[#171717] text-[80px] md:text-[100px] font-[700]'>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[250px] md:w-[310px] h-[60px] md:h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[18px] md:text-[22px] font-[500]">
            <div>Latest Collections</div>
            <img src={arrow} alt="" className='w-[20px] md:w-[auto]' />
        </div>
      </div>
      <div className="hero-right flex flex-1 justify-center items-center mt-10 lg:mt-0">
        <img src={hero_image} alt="" className='w-[90%] md:w-[auto]' />
      </div>
    </div>
  )
}

export default Hero
