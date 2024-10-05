import React from 'react';

const SimilarProducts = ({title}) => {
  // Sample similar products data
  const similarProducts = [
    {
      id: 13,
      name: 'Womens Denim Jacket',
      price: '700',
      originalPrice: '1000',
      discount: '30%',
      rating: 4.4,
      image: '/src/assets/img1.png' 
    },
    {
      id: 14,
      name: 'Womens Denim Jacket - Variant ',
      price: '700',
      originalPrice: '1000',
      discount: '30%',
      rating: 4.4,
      image: '/src/assets/img5.png' 
    },
    {
      id: 15,
      name: 'Womens Denim Jacket - Variant ',
      price: '700',
      originalPrice: '1000',
      discount: '30%',
      rating: 4.4,
      image: '/src/assets/7.png' 

    },
    {
      id: 16,
      name: 'Womens Denim Jacket - Variant ',
      price: '700',
      originalPrice: '1000',
      discount: '30%',
      rating: 4.4,
      image: '/src/assets/img4.png' 

    }
  ];

  return (
    <div className="mb-20 px-6 mt-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {similarProducts.map((product) => (
        <div
          key={product.id}
          className="text-left shadow-md rounded-xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover  mb-4 rounded-t-xl"
          />
          <div className="px-4 pb-2">

          <h4 className="text-lg font-medium mb-2">{product.name}</h4>
  
          <div className="flex justify-items-left mb-2 space-x-6">
            <p className="text-sm text-gray-500">Brand Name</p>
            <p className="text-sm text-gray-500">{product.rating} ⭐</p>
          </div>
  
          <div className="flex justify-items-center space-x-4">
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
        </div>
      ))}
    </div>
  </div>
  
  );
};
export default SimilarProducts;

