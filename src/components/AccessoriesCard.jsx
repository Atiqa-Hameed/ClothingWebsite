import React from 'react';

const accessoriesData = [
  {
    imgSrc: '/src/assets/6.png', // Path to the first image
    bgClass: 'bg-gray-300',
    description: 'Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.'
  },
  {
    imgSrc: '/src/assets/12.png', // Path to the second image
    bgClass: 'bg-pink-100',
    description: 'Lorem ipsum dolor sit amet consectetur. Nisl elit potenti diam quis condimentum sed purus suspendisse.'
  },
  {
    imgSrc: '/src/assets/10.png', // Path to the third image
    bgClass: 'bg-gray-200',
    description: 'Lorem ipsum dolor sit amet consectetur. Fermentum dolor id cras in eu tempor euismod ac.'
  }
];

const AccessoriesCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-customGreen font-bold text-3xl sm:text-4xl lg:text-4xl pt-24">
    Cool & Trendy Clothes For You
    </h1>
    <p className="font-sans text-sm lg:text-xl mt-4">
    Lorem ipsum dolor sit amet consectetur.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-32 mt-20">
      {accessoriesData.map((item, index) => (
        <div key={index} className="flex flex-col items-center bg-white">
          <div className={item.bgClass}>
            <img
              src={item.imgSrc}
              alt="Accessories"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <h2 className="text-gray-800 text-xl font-semibold mt-4">ACCESSORIES</h2>
          <p className="mt-2 text-center">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AccessoriesCard;

