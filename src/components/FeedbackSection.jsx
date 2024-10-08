import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const feedbackData = [
  {
    name: 'Maria Shabbir',
    text: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I'm beyond satisfied!",
  },
  {
    name: 'Beenish Mumtaz',
    text: 'I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!',
  },
  {
    name: 'Ayra Khan',
    text: 'I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!',
  },
];

const FeedbackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastClickedButton, setLastClickedButton] = useState(null); // Track the last clicked button

  useEffect(() => {
    // Retrieve last clicked button from localStorage when component mounts
    const storedButton = localStorage.getItem('lastClickedButton');
    if (storedButton) {
      setLastClickedButton(storedButton);
    }
  }, []);

  const handleRightClick = () => {
    setLastClickedButton('right'); // Set last clicked button to right
    localStorage.setItem('lastClickedButton', 'right'); // Save to localStorage
    setActiveIndex((prevIndex) => 
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLeftClick = () => {
    setLastClickedButton('left'); // Set last clicked button to left
    localStorage.setItem('lastClickedButton', 'left'); // Save to localStorage
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? feedbackData.length - 1  : prevIndex - 1
    );
  };

  return (
    <div className="px-4 bg-white flex flex-col justify-center items-center overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-customGreen text-center mb-14 mt-40">
        Clients Feedback
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mt-8">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className={`p-6 w-[350px] max-h-72 text-center ${
              index === activeIndex ? 'bg-[#EFE8C2] scale-105' : 'bg-white'
            }`}
          >
            <p className="text-4xl font-semibold text-left">“</p>
            <h3 className="text-lg font-bold text-left">{feedback.name}</h3>
            <p className="mt-2 text-sm text-left">{feedback.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center my-24 space-x-4">
        <button
          className={`text-2xl p-2 ${
            lastClickedButton === 'left' ? 'bg-[#EFE8C2]' : 'bg-white'
          } hover:bg-[#EFE8C2]`}
          onClick={handleLeftClick}
        >
          <AiOutlineLeft />
        </button>
        <button
          className={`text-2xl p-2 ${
            lastClickedButton === 'right' ? 'bg-[#EFE8C2]' : 'bg-white'
          } hover:bg-[#EFE8C2]`}
          onClick={handleRightClick}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default FeedbackSection;




