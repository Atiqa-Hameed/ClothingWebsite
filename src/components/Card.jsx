import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product, cardSize, backgroundColor, imageClass }) => {
  const navigate = useNavigate();

  console.log(product,"PRODUCTTT**********")
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Define size-based Tailwind classes
  const sizeClasses = {
    small: 'w-full h-72', // Small card size
    medium: 'w-full h-96', // Medium card size (default)
  };

  return (
    <div    key={product.id}
    className="overflow-hidden cursor-pointer m-4 " // Set default background for the card
    onClick={() => handleProductClick(product.id)}
  >
    {/* Apply background color only to the image container */}
    <div className={`${backgroundColor} ${sizeClasses[cardSize]} flex items-center justify-center`}>
      <img
        src={product.imageUrl}
        alt={product.title}
        className={imageClass} // Use the passed image class

      />
    </div>

    <div className="p-4">
      <h5 className="text-center font-sans text-black">{product.title}</h5>
      <div className="flex justify-center items-center mt-2 text-black">
        <p className="text-lg font-bold mr-6">{product.price}$</p>
        <span className='text-black'>|</span> {/* Display dynamic rating */}
        <span className='text-black ml-6'>{product.rating} ⭐</span> {/* Display dynamic rating */}
      </div>
    </div>
  </div>
  );
};

export default Card;


