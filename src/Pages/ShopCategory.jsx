import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block mt-8 mb-8 mx-auto w-[90%] md:w-[82%]' src={props.banner} alt="" />
      <div className="shopcategory-indexSort flex mt-0 mb-[50px] mx-auto justify-between items-center flex-col md:flex-row">
        <p className='font-[600] text-center md:text-left'>
          <span className='ml-0 md:ml-32'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-2.5 px-5 rounded-[40px] border border-[#888] mt-4 md:mt-0">
          Sort by <img src={dropdown} alt="" className='inline-block' />
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[30px] gap-[20px] mx-4 md:mx-0">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-10 mx-auto w-[200px] h-[50px] rounded-[75px] bg-[#d1cdcd] text-[16px] font-[500] cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
