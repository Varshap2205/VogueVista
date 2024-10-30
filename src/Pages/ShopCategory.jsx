import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
    const {all_product} =useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block mt-8 mb-8 mx-auto w-[82%]' src={props.banner} alt="" />
      <div className="shopcategory-indexSort flex mt-0 mb-[170px] mx-auto justify-between items-center">
        <p>
            <span className='font-[600] ml-32'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-2.5 px-5 rounded-[40px] border border-[#888] mr-32">
            Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-4 mt-[50px] gap-[30px] mr-3 ml-3 ">
        {all_product.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
                return null
            }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#d1cdcd] text-[18px] font-[500] cursor-pointer">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
