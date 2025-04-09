import React from 'react';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="relatedproducts bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl font-semibold text-center ml-10">
          Related Products
        </h1>
        <hr className="mt-3 w-20 sm:w-28 h-1.5 rounded-full bg-[#252525]" />
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {all_product.slice(0, 1).map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
