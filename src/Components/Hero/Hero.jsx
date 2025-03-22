import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="hero-left flex-1 flex flex-col justify-center gap-5 px-4 md:px-8 lg:px-[180px] leading-[1.1] text-center lg:text-left">
        <h2 className="text-[#090909] text-[18px] md:text-[26px] font-[600]">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="hero-hand-icon flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-5 lg:gap-[20px]">
            <p className="text-[#171717] text-[40px] md:text-[80px] font-[700]">
              new
            </p>
            <img
              src={hand_icon}
              alt="Hand Icon"
              className="w-[50px] md:w-[75px] lg:w-[105px]"
            />
          </div>
          <p className="text-[#171717] text-[40px] md:text-[80px] font-[700]">
            collections
          </p>
          <p className="text-[#171717] text-[40px] md:text-[80px] font-[700]">
            for everyone
          </p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-[10px] md:gap-[15px] w-[180px] md:w-[250px] lg:w-[310px] h-[50px] md:h-[60px] lg:h-[70px] rounded-[75px] mt-[20px] lg:mt-[30px] bg-[#ff4141] text-white text-[16px] md:text-[18px] lg:text-[22px] font-[500] mx-auto lg:mx-0">
          <div>Latest Collections</div>
          <img
            src={arrow}
            alt="Arrow"
            className="w-[16px] md:w-[20px] lg:w-[auto]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right flex flex-1 justify-center items-center mt-5 lg:mt-0 px-4">
        <img
          src={hero_image}
          alt="Hero Image"
          className="w-[85%] sm:w-[75%] md:w-[60%] lg:w-[auto] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
