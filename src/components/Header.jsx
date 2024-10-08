import React, { useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for hamburger and close menu
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to get the cart count

const Header = ({ backgroundColor = 'bg-customBeige' }) => {
  const cartCount = useSelector((state) => state.cart.count); // Access cart count from Redux
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage toggle state for small screens

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`flex flex-col md:flex-row justify-between items-center pt-8 px-8 md:px-16 lg:px-24 ${backgroundColor}`}>
      
      {/* Small screen: centered logo, bag, and login; toggle on right */}
      <div className="w-full flex justify-between items-center md:hidden">
        {/* Logo, Shopping Bag, and Login */}
        <div className="flex justify-center items-center space-x-6 w-full">
          {/* Logo */}
          <div className="text-2xl font-bold text-customGreen">LOGO</div>
          
          {/* Shopping Bag Icon */}
          <div className="relative">
            <HiOutlineShoppingBag className="text-customGreen" size={30} />
            {cartCount > 0 && (
              <span className="absolute top-4 right-0 bg-black text-white text-sm rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login Button */}
          <NavLink to='/loginpage'>
            <a 
              href="#login" 
              className="border border-customGreen text-customGreen px-6 py-2 md:px-8 md:py-2 rounded-lg hover:bg-customGreen hover:text-white transition">
              LOGIN
            </a>
          </NavLink>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <HiX size={30} className="text-customGreen" /> : <HiMenu size={30} className="text-customGreen" />}
        </button>
      </div>

      {/* Medium and Large screen: Logo, Navigation, Icons */}
      <div className="hidden md:flex w-full justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-customGreen">LOGO</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 md:space-x-12">
          <NavLink to='/' className="text-customGreen hover:underline underline-offset-4">HOME</NavLink>
          <NavLink to='/shoppage' className="text-customGreen hover:underline underline-offset-4">SHOP</NavLink>
          <NavLink to='/aboutus' className="text-customGreen hover:underline underline-offset-4">ABOUT US</NavLink>
          <a href="#contact" className="text-customGreen hover:underline underline-offset-4">CONTACT</a>
        </nav>

        {/* Icons: Shopping Bag and Login */}
        <div className="flex items-center space-x-6 md:space-x-10 lg:space-x-14">
          {/* Shopping Bag Icon */}
          <div className="relative">
            <HiOutlineShoppingBag className="text-customGreen" size={30} />
            {cartCount > 0 && (
              <span className="absolute top-4 right-0 bg-black text-white text-sm rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          {/* Login Button */}
          <NavLink to='/loginpage'>
            <a 
              href="#login" 
              className="border border-customGreen text-customGreen px-6 py-2 md:px-8 md:py-2 rounded-lg hover:bg-customGreen hover:text-white transition">
              LOGIN
            </a>
          </NavLink>
        </div>
      </div>

      {/* Navigation Links for Small Screens (shown in toggle) */}
      <nav className={`flex-wrap flex-row md:hidden gap-6 justify-center ${isMenuOpen ? 'flex' : 'hidden'} mt-4`}>
        <NavLink to='/' className="text-customGreen hover:underline underline-offset-4">HOME</NavLink>
        <NavLink to='/shoppage' className="text-customGreen hover:underline underline-offset-4">SHOP</NavLink>
        <NavLink to='/aboutus' className="text-customGreen hover:underline underline-offset-4">ABOUT US</NavLink>
        <a href="#contact" className="text-customGreen hover:underline underline-offset-4">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
