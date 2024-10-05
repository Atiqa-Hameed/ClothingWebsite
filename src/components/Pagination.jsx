import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import { CiHeart } from "react-icons/ci";

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ol className="flex justify-start text-xs font-medium space-x-1">
      {/* Previous Button */}
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded ${
            currentPage === 0
              ? "text-gray-900 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <FaChevronLeft className="w-3 h-3" />
        </button>
      </li>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <button
            onClick={() => onPageChange(index)}
            className={`block w-8 h-8 text-center border border-gray-100 rounded leading-8 ${
              currentPage === index ? "bg-black text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded ${
            currentPage === totalPages - 1
              ? "text-gray-900 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <FaChevronRight className="w-3 h-3" />
        </button>
      </li>
    </ol>
  );
};

// Main component that manages the state and renders content based on current page
const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(0); // Start at the first page (0 index)
  const totalPages = 4;

  // Images array for each page
  const imagesPerPage = [
    ["/src/assets/2.png", "/src/assets/img6.png"],
    ["/src/assets/9.png", "/src/assets/img5.png"],
    ["/src/assets/7.png", "/src/assets/img1.png"],
    ["/src/assets/img3.png", "/src/assets/img2.png", "/src/assets/2.png"],
  ];

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Main content area */}
      <div className="relative flex flex-col justify-between h-[450px] w-full max-w-[230px] border p-4 mt-12 sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px]">
        {/* Wish Icon on the top-right */}
        <button className="absolute top-2 right-2 bg-gray-500 p-2">
          <CiHeart className="w-6 h-6 text-white" />
        </button>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Content Area</h2>
          <p className="mt-2">
            Click a page number to display different images for that page.
          </p>

          {/* Display images based on current page */}
          <div className="flex justify-center items-center mt-4">
            <div className="grid grid-cols-1 gap-4 h-32 w-32 mx-auto">
              {imagesPerPage[currentPage].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Page ${currentPage + 1} Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Positioned Outside the Main Content */}
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default PaginationExample;


