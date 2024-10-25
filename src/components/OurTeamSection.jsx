import React from 'react'
const images = [
    { src: "/men.png", alt: "First Image Description" },
    { src: "/second.png", alt: "Second Image Description" },
    { src: "/men.png", alt: "Third Image Description" },
    { src: "/second.png", alt: "Fourth Image Description" },
  ];
const OurTeamSection = () => {
  return (
    <div>
    <h2 className="text-3xl font-bold text-center mt-14 text-customGreen">
    Our Team
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20 justify-items-center lg:pr-2">
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className="object-cover h-[250px] sm:h-[200px] md:h-[250px] lg:h-[275px] w-[150] md:w-[200] lg:w-[300px]"
      />
    ))}
  </div>
    </div>
  )
}

export default OurTeamSection
