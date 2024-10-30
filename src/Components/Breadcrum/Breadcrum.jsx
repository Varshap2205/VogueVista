import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  
  return (
    <div className='breadcrum flex items-center gap-[8px] text-[#5e5e5e] text-[14px] md:text-[16px] font-[600] mx-auto my-[40px] max-w-6xl px-4 capitalize'>
      HOME <img src={arrow_icon} alt="" className='h-[12px] md:h-[16px]' /> 
      SHOP <img src={arrow_icon} alt="" className='h-[12px] md:h-[16px]' /> 
      {product.category} <img src={arrow_icon} alt="" className='h-[12px] md:h-[16px]' /> 
      {product.name}
    </div>
  );
}

export default Breadcrum;
