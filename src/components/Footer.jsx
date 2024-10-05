import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customGreen text-white py-12 justify-center items-center px-8 md:px-16 lg:px-28 h-auto lg:h-[450px] overflow-hidden">
      {/* Flexbox container to place LOGO and grid side by side */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between mb-8">
        {/* First Section: LOGO and Social Media */}
        <div className="lg:w-1/4 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4 hover:text-gray-300">
            Social Media
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            {/* Social Media Icons */}
            <FiTwitter className="h-6 w-6 hover:text-gray-300" />
            <FaInstagram className="h-6 w-6 hover:text-gray-300" />
            <FaFacebookF className="h-6 w-6 hover:text-gray-300" />
          </div>
        </div>

        {/* Second Section: SHOP, COMPANY, Stay Up To Date (Grid Layout) */}
        <div className="mx-auto lg:mx-24 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Second Grid: SHOP and Links */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4">SHOP</h3>
            <ul>
              <li className="mb-2 hover:text-gray-300">Products</li>
              <li className="mb-2 hover:text-gray-300">Overview</li>
              <li className="mb-2 hover:text-gray-300">Pricing</li>
              <li className="mb-2 hover:text-gray-300">Release</li>
            </ul>
          </div>

          {/* Third Grid: COMPANY */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4">COMPANY</h3>
            <ul>
              <li className="mb-2 hover:text-gray-300">About Us</li>
              <li className="mb-2 hover:text-gray-300">Contact</li>
              <li className="mb-2 hover:text-gray-300">News</li>
              <li className="mb-2 hover:text-gray-300">Support</li>
            </ul>
          </div>

          {/* Fourth Grid: Stay Up To Date */}
          <div>
            <h3 className="mb-4 text-center lg:text-left">Stay Up To Date</h3>
            <div>
            <form className="flex lg:justify-start justify-center ">
            <input
              className="pl-8 w-64 p-2 border-t border-b border-l text-white border-customDarkGreen bg-transparent placeholder-white" 
              placeholder="Enter your email"
            />
            {/* Underline */}
            <button className="bg-white text-black py-2 px-4 uppercase border-customDarkGreen border-t border-b border-r">
              SUBMIT
            </button>
          </form>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Section */}
  {/* Container for links aligned to the right */}
  <div className="mt-12 lg:mt-36">
  <div className="flex items-center justify-between">
    {/* Line to the left */}
    <div className="flex-grow border-b border-gray-300"></div>

    {/* Links aligned to the right */}
    <p className="text-sm text-gray-500 flex space-x-4 pl-4">
      <a href="#" className="hover:text-gray-300 text-white">
        Terms
      </a>
      <a href="#" className="hover:text-gray-300 text-white">
        Privacy
      </a>
      <a href="#" className="hover:text-gray-300 text-white">
        Cookies
      </a>
    </p>
  </div>
</div>

    </footer>
  );
};

export default Footer;
