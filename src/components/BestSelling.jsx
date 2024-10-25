import React from "react";
import Card from "./Card";
import Slider from "./Slider";
const newproducts = [
  { id: 1, title: "Leather Jacket", price: 199.99, imageUrl: "/9.png", rating: 4.5 },
  { id: 2, title: "Denim Jeans", price: 79.99, imageUrl: "/7.png", rating: 4.0 },
  { id: 3, title: "Classic Watch", price: 149.99, imageUrl: "/2.png", rating: 4.8 },
  { id: 4, title: "Womens Denim Jacket", price: 99.99, imageUrl: "/7.png", rating: 5.0 },
  { id: 3, title: "Classic Jeans", price: 149.99, imageUrl: "/img5.png", rating: 4.8 },
  { id: 4, title: "Dior Jacket", price: 99.99, imageUrl: "/img3.png", rating: 5.0 },
  
];

const newdata = [
  { id: 5, title: "Summer Wind T-shirt", price: 31.99, imageUrl: "/18s.png", rating: 4.2 },
  { id: 6, title: "Tailored Jacket", price: 38.99, imageUrl: "/20.png", rating: 4.5 },
  { id: 7, title: "Formal Classic Suit", price: 50.0, imageUrl: "/11.png", rating: 4.0 },
  { id: 8, title: "White Solid Formal T-shirt", price: 42.09, imageUrl: "/15.png", rating: 5.0 },
  { id: 9, title: "Tailored Jacket", price: 41.03, imageUrl: "/17.png", rating: 4.1 },
  { id: 10, title: "Solid White Summer T-shirt", price: 29.99, imageUrl: "/16.png", rating: 4.2 },
  { id: 11, title: "Classic Top", price: 24.54, imageUrl: "/3.png", rating: 3.8 },
  { id: 12, title: "Formal Jeans", price: 38.09, imageUrl: "/19.png", rating: 5.0 }
];


const BestSelling = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-customGreen font-bold text-3xl sm:text-4xl lg:text-5xl pt-20">
        Best Selling
      </h1>
      <p className="font-sans text-sm lg:text-xl mt-4 text-customDarkGreen mb-14">
        Get in on the trend with our curated selection of best-selling stle
      </p>
      <Slider
      products={newproducts} 
      cardSize="medium" // Adjust the card size here
      imageClass="object-cover w-full h-full" // Customizable image class
    />

      {/* See More Button */}
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 px-6 py-2 border-2 border-customDarkGreen text-customGreen hover:bg-gray-200 transition">
          <span className="font-sans text-lg">See more</span>
          <span className="ml-1 text-lg font-bold">→</span>
        </button>
      </div>
      <h1 className="text-customGreen font-bold text-3xl sm:text-4xl lg:text-5xl pt-24">
        Best Selling
      </h1>
      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16 mt-8">
        <li className="font-euclid hover:underline">SALE</li>
        <li className="font-euclid hover:underline">HOT</li>
        <li className="font-euclid border-b-2 border-customDarkGreen">
          NEW ARRIVAL
        </li>
        <li className="font-euclid hover:underline">ACCESSORIES</li>
      </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 my-8">

        {newdata?.map((product) => (
          <div key={product.id}>
            <Card 
              product={product} 
              cardSize="small"
        backgroundColor="bg-gray-200" // Example background color
        imageClass="object-contain w-full h-full" // Customizable image class
            />
          </div>
        ))}
        </div>
       

    </div>
  );
};

export default BestSelling;










