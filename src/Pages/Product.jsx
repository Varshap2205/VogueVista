import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10">
      <Breadcrum product={product} />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Product Display */}
        <div className="product-display bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <ProductDisplay product={product} />
        </div>
        
        {/* Right Column - Description and Related Products */}
        <div className="space-y-8">
          {/* Description Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <DescriptionBox />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
  {/* <h3 className="text-xl font-semibold mb-4">Related Products</h3> */}
  <div className="related-products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <RelatedProducts /> {/* Assuming RelatedProducts is a list or component rendering multiple products */}
  </div>
</div>

          
          {/* Add to Cart & Buy Now Buttons */}
          {/* <div className="flex gap-4 mt-6"> */}
            {/* <button className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition-all duration-300">
              Add to Cart
            </button>
            <button className="w-full md:w-auto bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-500 transition-all duration-300">
              Buy Now
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
