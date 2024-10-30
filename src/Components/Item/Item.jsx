import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-[350px] transform scale-100 hover:scale-105 transition-all duration-600'>
      <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link>
      <p className='my-[6px] mx-0'>{props.name}</p>
      <div className="item-prices flex gap-[20px]">
      <div className="item-price-new text-[#374151] size-[18px] font-[600]">${props.new_price}</div>
      <div className="item-price-old text-[#8c8c8c] size-[18px] font-[500] line-through">${props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
