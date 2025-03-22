import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-5 py-10 px-4 w-full">
      {/* Heading */}
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-10 text-center">
        POPULAR IN WOMEN
      </h1>
      
      {/* Divider */}
      <hr className="w-32 sm:w-40 md:w-48 lg:w-52 h-1 rounded bg-[#252525]" />
      
      {/* Popular Items */}
      <div className="popular-item mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
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
