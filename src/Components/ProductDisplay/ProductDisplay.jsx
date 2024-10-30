import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay flex flex-col md:flex-row mx-auto my-0 max-w-6xl'>
      <div className="productdisplay-left flex flex-col md:flex-row gap-[17px]">
        <div className="productdisplay-img-list flex flex-col gap-[16px]">
          {/* Thumbnail images */}
          <img className='h-[100px] md:h-[150px]' src={product.image} alt="" />
          <img className='h-[100px] md:h-[150px]' src={product.image} alt="" />
          <img className='h-[100px] md:h-[150px]' src={product.image} alt="" />
          <img className='h-[100px] md:h-[150px]' src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className='productdisplay-main-img w-[100%] md:w-[586px] h-[auto] md:h-[650px]' />
        </div>
      </div>
      <div className="productdisplay-right mx-4 md:mx-[70px] flex flex-col">
        <h1 className='text-[30px] md:text-[40px] font-[700] text-[#3d3d3d]'>{product.name}</h1>
        <div className="productdisplay-right-star flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[14px] md:text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex my-4 gap-[20px] md:gap-[30px] text-[20px] md:text-[24px] font-[700]">
          <div className="productdisplay-right-price-old text-[#818181] line-through">${product.old_price}</div>
          <div className="productdisplay-right-price-new text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Elegant and versatile, this knee-length dress features a flowy silhouette with a subtle floral pattern, perfect for both casual outings and evening gatherings.
        </div>
        <div className="productdisplay-right-size">
          <h1 className='text-[16px] md:text-[20px] font-[600] mt-[30px] text-[#656565]'>Select Size</h1>
          <div className="productdisplay-right-sizes flex flex-wrap my-[20px] gap-[10px]">
            <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-4'>S</div>
            <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-4'>M</div>
            <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-4'>L</div>
            <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-4'>XL</div>
            <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-4'>XXL</div>
          </div>
        </div>
        <button className='py-3 px-8 w-[150px] md:w-[200px] text-[14px] md:text-[16px] font-[600] text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer' onClick={() => { addToCart(product.id) }}>
          ADD TO CART
        </button>
        <p className='productdisplay-right-category mt-[10px] mb-[5px]'>
          <span className='font-[600]'>Category: </span>{product.category}, T-Shirt
        </p>
        <p className='productdisplay-right-category mb-[10px]'>
          <span className='font-[600]'>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
