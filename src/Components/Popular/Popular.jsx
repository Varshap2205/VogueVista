import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-5 py-10 w-full'>
      <h1 className='text-[#171717] text-3xl md:text-5xl font-semibold mt-10'>POPULAR IN WOMEN</h1>
      <hr className='w-48 md:w-52 h-1 rounded bg-[#252525]' />
      <div className="popular-item mt-8 flex flex-wrap justify-center gap-5 w-full">
        {data_product.map((item, i) => {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
