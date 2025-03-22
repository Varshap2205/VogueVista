import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers w-full max-w-[1200px] h-auto md:h-[60vh] flex flex-col md:flex-row m-auto py-10 px-5 md:px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] mt-10">
      {/* Left Section */}
      <div className="offers-left flex flex-1 flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-[#171717] text-4xl sm:text-5xl md:text-[80px] font-[600] leading-tight">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-4xl sm:text-5xl md:text-[80px] font-[600] leading-tight">
          Offers for you!
        </h1>
        <p className="text-[#171717] text-base sm:text-lg md:text-[22px] font-[600] mt-4">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-full max-w-[200px] md:max-w-[282px] h-[50px] md:h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-sm sm:text-lg md:text-[22px] font-[500] mt-6 cursor-pointer">
          Check Now
        </button>
      </div>
      
      {/* Right Section */}
      <div className="offers-right flex flex-1 items-center justify-center mt-10 md:mt-0">
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-full"
          src={exclusive_image}
          alt="Exclusive Offer"
        />
      </div>
    </div>
  );
};

export default Offers;
