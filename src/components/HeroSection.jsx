import React from 'react';

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-customBeige h-auto md:h-[500px] lg:h-[580px] flex flex-col md:flex-row justify-between items-center pt-6">
        {/* Left Side: Text */}
        <div className="relative z-10 text-center md:text-left px-6 md:px-10 lg:px-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins text-customGreen lg:leading-tight">
            Uncover and Cultivate Your Distinctive Style
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 font-sans text-customGreen w-full md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur. Faucibus odio gravida amet tellus
            adipiscing donec adipiscing dignissim.
          </p>
          <a 
            href="#shop" 
            className="bg-customGreen text-white px-6 py-3 rounded-lg hover:bg-customDarkGreen transition font-poppins md:absolute md:-bottom-10 lg:-bottom-24">

            EXPLORE NOW
          </a>
        </div>
        
        {/* Right Side: Image Div with Overlay */}
        <div className="relative h-full flex items-end px-6 md:px-10 lg:px-20 pt-8"> {/* Removed pt-12 */}
          {/* Background div for overlay */}
          <div className="w-[500] h-[500px] md:w-[450px] md:h-[450px] lg:h-[500px] lg:w-[500px] bg-customGreen relative flex justify-center items-center rounded-t-[50px] md:rounded-t-[80px] lg:rounded-t-[100px]">
            
            {/* Dots on Left Side (Bottom of the div) */}
            <div className="absolute bottom-[10px] left-[20px] grid grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="w-1.5 md:w-2 h-1.5 md:h-2 bg-customDarkGreen rounded-full"></div>
              ))}
            </div>
            
            {/* Dots on Right Side (Top right of the div) */}
            <div className="absolute top-[40px] md:top-[60px] right-[20px] grid grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="w-1.5 md:w-2 h-1.5 md:h-2 bg-customDarkGreen rounded-full"></div>
              ))}
            </div>

            {/* Image */}
            <img
              src="/src/assets/0.png" // Replace with your image path
              alt="Model"
              className="h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



