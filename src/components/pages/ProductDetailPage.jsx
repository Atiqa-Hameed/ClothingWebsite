import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { FaRegHeart } from "react-icons/fa";
import Footer from "../Footer";
import SimilarProducts from "../SimilarProducts";
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../../redux/cartSlice'; // Import action from cartSlice
const ProductDetailPage = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id)); // Find the product based on ID

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const dispatch = useDispatch(); // Use dispatch to trigger actions
  const handleAddToCart = () => {
    dispatch(addToCart()); // Dispatch the addToCart action when button is clicked
  };
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  if (!product) {
    return <div>Product not found!</div>; // Handle case when product is not found
  }

  return (
    <div>
      <Header backgroundColor="white" />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-[5fr,3fr] gap-8">
          {/* Image Section */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Thumbnails on the Left */}
            <div className="flex flex-col space-y-4">
              {product.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-[107px] object-cover cursor-pointer rounded-lg border border-gray-300"
                />
              ))}
            </div>

            {/* Main Image on the Right */}
            <div className="flex-1">
              <img
                src={product.imageUrls[0]}
                alt={product.title}
                className="w-[600px] h-[600px]  object-cover rounded-lg mb-2"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="col-span-1 pl-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h1>
            <h2 className="text-md font-medium text-gray-600 mt-2">
              Brand: Name
            </h2>
            <p className="text-gray-500 mt-1 text-md font-sans">
              Sold by: Sellers Name
            </p>
            {/* Rating */}
            <div className="mt-2 flex items-center">
              <span className="text-xl">{product.rating} ⭐</span>
              <span className="text-gray-600 ml-2">
                ({product.reviewsCount} Reviews)
              </span>
            </div>
            {/* Price and Discount */}
            <div className="flex items-center mt-2">
              <p className="text-xl font-semibold">Rs. {product.price}</p>
              <span className="text-gray-500 line-through ml-4">
                Rs. {product.originalPrice}
              </span>
              <span className="text-green-600 ml-4">({product.discount})</span>
            </div>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Select Size</h3>
              <p className="text-sm text-blue-500 mt-1 cursor-pointer hover:underline">
                {`Size Chart >`}
              </p>

              <div className="flex space-x-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Select Color</h3>
              <div className="flex space-x-4 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color ? "ring-1 ring-gray-800" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Best Offers */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Best Offers</h3>
              <ul className="list-disc ml-4 text-gray-700 mt-2 text-sm">
                {product.offers.map((offer, index) => (
                  <li key={index}>
                    {offer} <span className="text-blue-600">T&C</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6 flex items-center space-x-2">
            <button 
            className="bg-customGreen text-white px-6 py-2 rounded-xl hover:bg-green-700 transition duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <FaRegHeart className="text-2xl text-customGreen" />
              {/* Adjust size and color */}
            </div>
          </div>
        </div>

        <div className="text-center justify-center flex flex-row gap-52 mt-16">
          <h3 className="text-sm  text-gray-900 border-b-2 border-b-gray-900">
            Product Details
          </h3>
          <h3 className="text-sm text-gray-600">Specification</h3>
          <h3 className="text-sm text-gray-600">Ratings & Reviews</h3>
        </div>
        <div className="border-t border-gray-400 text-center mt-4 mx-32"></div>
        <ul className="pl-32 mt-4">
          <li className="font-bold mb-2">Product Details</li>
          <p className="text-sm mb-2">
            Blue washed jacket, has a spread collar, 4 pockets, button closure,
            long sleeves, straight them
          </p>
          <li className="font-bold mb-2">Size & Fit</li>
          <p className="text-sm mb-2">
            The model (height 5'8") is wearing a size S
          </p>
          <li className="font-bold mb-2">Material & Care</li>
          <p className="text-sm">100% cotton</p>
          <p className="text-sm">Machine Wash</p>
        </ul>
      </div>

      <SimilarProducts title="Similar Products"  />
      <SimilarProducts title="Customer Also Like" />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
