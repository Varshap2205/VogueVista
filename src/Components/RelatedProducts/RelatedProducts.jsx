import React from 'react';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-4 h-auto py-10">
      <h1 className="text-[#171717] text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Related Products
      </h1>
      <hr className="w-24 md:w-36 h-1.5 rounded-full bg-[#252525]" />
      <div className="relatedproducts-item mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
        {all_product.slice(0, 3).map((item, i) => (
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
  );
};

export default RelatedProducts;
