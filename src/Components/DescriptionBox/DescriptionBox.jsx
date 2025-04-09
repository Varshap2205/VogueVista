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
          VogueVista
        </p>
        <p className='text-[14px] md:text-[16px]'>
          Shopping justality shine.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
