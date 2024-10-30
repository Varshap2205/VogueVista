import React from 'react'
import all_product from '../Assets/all_product'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-[#171717] text-[50px] font-[600]'>Related Products</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="relatedproducts-item mt-[50px] flex gap-[30px]">
        {all_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
