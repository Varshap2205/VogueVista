import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category w-full px-4 md:px-8 mt-20">
      {/* Banner */}
      <img
        className="shopcategory-banner block mt-8 mb-8 mx-auto w-full md:w-[82%] rounded-lg"
        src={props.banner}
        alt="Shop Banner"
      />

      {/* Index and Sort Section */}
      <div className="shopcategory-indexSort flex flex-col md:flex-row justify-between items-center gap-4 mx-auto mb-12 w-full md:w-[82%]">
        <p className="font-semibold text-center md:text-left text-gray-700 text-sm md:text-base">
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex items-center justify-between py-2.5 px-5 rounded-full border border-gray-400 text-gray-600 text-sm md:text-base cursor-pointer hover:bg-gray-100">
          Sort by
          <img src={dropdown} alt="Sort Dropdown" className="inline-block ml-2 w-4 h-4" />
        </div>
      </div>

      {/* Product Grid - One Column Layout */}
      <div className="shopcategory-products grid grid-cols-1 gap-6 w-full md:w-[82%] mx-auto">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:scale-105"
              >
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Load More Button */}
      <div className="shopcategory-loadmore flex justify-center items-center mx-auto mt-10 w-48 h-12 rounded-full bg-gray-300 text-gray-700 text-sm md:text-base font-medium cursor-pointer hover:bg-gray-400">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
