import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Card'; // Assuming you're using a Card component for product display
import Filters from '../Filters';

const newdata = [
  { id: 5, title: "Summer Wind T-shirt", price: 31.99, imageUrl: "/src/assets/18s.png", rating: 4.2 },
  { id: 6, title: "Tailored Jacket", price: 38.99, imageUrl: "/src/assets/20.png", rating: 4.5 },
  { id: 8, title: "White Solid Formal T-shirt", price: 42.09, imageUrl: "/src/assets/15.png", rating: 5.0 },
  { id: 11, title: "Classic Top", price: 24.54, imageUrl: "/src/assets/3.png", rating: 3.8 },
  { id: 9, title: "Tailored Jacket", price: 41.03, imageUrl: "/src/assets/17.png", rating: 4.1 },
  { id: 10, title: "Solid White Summer T-shirt", price: 29.99, imageUrl: "/src/assets/16.png", rating: 4.2 },
  { id: 7, title: "Formal Classic Suit", price: 38.09, imageUrl: "/src/assets/11.png", rating: 5.0 },
  { id: 9, title: "Casual Pants", price: 45.00, imageUrl: "/src/assets/17.png", rating: 4.3 },
  { id: 6, title: "Elegant Dress", price: 55.50, imageUrl: "/src/assets/20.png", rating: 4.7 },
  { id: 9, title: "Stylish Jacket", price: 72.99, imageUrl: "/src/assets/17.png", rating: 4.6 },
  { id: 12, title: "Trendy Shoes", price: 59.99, imageUrl: "/src/assets/19.png", rating: 4.8 },
  { id: 8, title: "Classic Cap", price: 20.99, imageUrl: "/src/assets/15.png", rating: 4.1 },
  { id: 11, title: "T-shirt", price: 22.50, imageUrl: "/src/assets/3.png", rating: 4.5 },
  { id: 9, title: "Luxury Handbag", price: 89.99, imageUrl: "/src/assets/17.png", rating: 4.4 },
  { id: 12, title: "Formal Jeans", price: 45.50, imageUrl: "/src/assets/19.png", rating: 4.6 },
  { id: 6, title: "Sunglasses", price: 30.99, imageUrl: "/src/assets/20.png", rating: 4.8 },
];

const headings = [
  "Women Collection",
  "Men Collection",
  "Accessories",
  "Top Products",
];

const Shop = () => {
  const itemsPerPage = 4; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newdata.length / itemsPerPage);
  const currentData = newdata.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div>
      <Header backgroundColor="white" />

      <div className="px-12 py-10 bg-white">
        {/* Page Heading */}
        <h2 className="text-2xl font-bold text-center mb-6 lg:ml-72">
          {headings[(currentPage - 1) % headings.length] || "Shop"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Filters Section */}
          <Filters />

          {/* Cards Section */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-20">
              {currentData.map(product => (
                <Card 
                  key={product.id} 
                  product={product} 
                  cardSize="medium"
                  backgroundColor="bg-gray-200"
                  imageClass="object-contain w-full h-full"
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div 
                className="flex items-center justify-center w-8 h-8 cursor-pointer border border-gray-300 hover:bg-gray-200 transition duration-200"
                onClick={handlePrevPage}
              >
                <FaChevronLeft className="text-gray-600" />
              </div>

              {/* Page Numbers */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-center w-8 h-8 cursor-pointer border border-gray-300 transition duration-200 
                      ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div 
                className="flex items-center justify-center w-8 h-8 cursor-pointer border border-gray-300 hover:bg-gray-200 transition duration-200"
                onClick={handleNextPage}
              >
                <FaChevronRight className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
