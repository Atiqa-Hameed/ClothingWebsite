import React from 'react'

const ExclusiveOffersection = () => {
  return (
    <div className="relative w-full h-auto md:h-[520px] bg-customBeige flex flex-col md:flex-row justify-between items-center mt-6">
    {/* Left Side Image */}
    <div className="relative w-full md:w-1/2 h-[250px] md:h-full flex items-end justify-center">
      <img
        src="/src/assets/13.png"
        alt="Exclusive Offer"
        className="w-[400px] md:w-[600px] lg:w-[700px] h-auto object-cover"
      />
    </div>

    {/* Right Side Text Content */}
    <div className="relative md:absolute md:right-10 text-center md:text-left w-full md:w-1/2 p-4 md:p-0">
      <h2 className="text-xl md:text-4xl font-bold text-customGreen mt-4 md:mt-6">
        Exclusive Offer
      </h2>
      <p className="mt-2 text-customGreen lg:leading-loose text-lg lg:text-2xl font-sans">
        Unlock the unlimited style upgrade with our exclusive offer. Enjoy
        savings of up to 40% off on your latest New Arrivals.
      </p>

      {/* Countdown Timer */}
      <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 md:gap-8 w-[90%] md:w-[70%] mx-auto md:ml-0">
        <div className="bg-white p-3 md:p-4 rounded-2xl text-center h-20 md:h-24 w-full flex flex-col items-center justify-center">
          <span className="text-customGreen text-xl md:text-2xl">
            05
          </span>
          <span className="text-sm md:text-lg text-customGreen font-medium">
            Days
          </span>
        </div>
        <div className="bg-white p-3 md:p-4 rounded-2xl text-center h-20 md:h-24 w-full flex flex-col items-center justify-center">
          <span className="text-customGreen text-xl md:text-2xl">
            17
          </span>
          <span className="text-sm md:text-lg text-customGreen font-medium">
            Hours
          </span>
        </div>
        <div className="bg-white p-3 md:p-4 rounded-2xl text-center h-20 md:h-24 w-full flex flex-col items-center justify-center">
          <span className="text-customDarkGreen text-xl md:text-2xl">
            20
          </span>
          <span className="text-sm md:text-lg text-customGreen font-medium">
            Min
          </span>
        </div>
      </div>

      {/* Shop Now Button */}
      <button className="mt-6 md:mt-8 py-3 px-8 md:py-5 md:px-14 bg-customGreen text-white text-base md:text-lg rounded-xl">
        SHOP NOW
      </button>
    </div>

    {/* Dots on Left Side */}
    <div className="absolute bottom-[25px] left-[25px] md:left-[45px] grid grid-cols-4 gap-2 md:gap-4 lg:gap-6">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="w-1.5 md:w-2 h-1.5 md:h-2 bg-customDarkGreen rounded-full"
        ></div>
      ))}
    </div>
  </div>
  )
}

export default ExclusiveOffersection
