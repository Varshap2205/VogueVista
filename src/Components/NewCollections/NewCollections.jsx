import React from 'react';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className="newcollections flex flex-col items-center gap-5 mb-24 w-full px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <h1 className="text-[#171717] text-3xl md:text-5xl font-semibold mt-10 text-center">
        NEW COLLECTIONS
      </h1>
      <hr className="w-32 sm:w-48 md:w-52 h-1 rounded bg-[#252525]" />

      {/* Collection Items Grid */}
      <div className="collections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-12">
        {new_collection.map((item, i) => {
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

export default NewCollections;
