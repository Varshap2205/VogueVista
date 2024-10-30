import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox my-[60px] mx-auto max-w-5xl px-4'>
      <div className="descriptionbox-navigator flex flex-wrap">
        <div className="descriptionbox-nav-box flex items-center justify-center text-[14px] md:text-[16px] font-[600] w-full md:w-[171px] h-[50px] border border-[#d0d0d0] rounded-md hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
          Description
        </div>
        <div className="descriptionbox-nav-box fade flex items-center justify-center text-[14px] md:text-[16px] font-[600] w-full md:w-[171px] h-[50px] border border-[#d0d0d0] bg-[#fbfbfb] text-[#555] rounded-md">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description flex flex-col gap-[20px] border border-[#d0d0d0] p-[24px] md:p-[48px] pb-[50px] rounded-md">
        <p className='text-[14px] md:text-[16px]'>
          VogueVista is your go-to fashion destination, offering a chic and carefully curated collection of clothing for everyone. From must-have dresses and trendy tops to stylish men’s wear and adorable kids' outfits, VogueVista has something to suit every style and occasion. Our collections are constantly updated to reflect the latest trends, so you can stay ahead of the fashion curve with ease. Each piece is selected for its quality and unique design, bringing you the best in fashion, all in one place.
        </p>
        <p className='text-[14px] md:text-[16px]'>
          Shopping at VogueVista is as easy as it is enjoyable. With an elegant layout and simple navigation, finding your next favorite outfit is just a click away. We’re passionate about making fashion accessible and fun, helping you put together looks that let your personality shine. Discover VogueVista today and transform your wardrobe with pieces that make you look and feel your best!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
