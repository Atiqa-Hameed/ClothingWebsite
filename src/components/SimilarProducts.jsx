import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SimilarProducts = ({ title, products }) => {  
  return (
    <div className="mb-20 px-4 sm:px-6 mt-8">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-left shadow-md rounded-xl">
            {/* Wrap the product in a Link for navigation */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover mb-4 rounded-t-xl"
              />
              <div className="px-4 pb-2">
                <h4 className="text-lg font-medium mb-2">{product.name}</h4>
                
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-gray-500">Brand Name</p>
                  <p className="text-sm text-gray-500">{product.rating} ⭐</p>
                </div>
                
                <div className="flex justify-between space-x-4">
                  {/* Price on the left */}
                  <p className="text-lg font-bold text-black">
                    Rs. {product.price}
                  </p>
                  {/* Discounted Price on the right */}
                  <div className="text-right">
                    <span className="line-through text-gray-500 text-sm">
                      Rs. {product.originalPrice}
                    </span>
                    <span className="text-green-500 font-semibold ml-2">
                      ({product.discount} off)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;

              
              





