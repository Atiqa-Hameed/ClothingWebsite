import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to get the cart count

const Header = ({ backgroundColor = 'bg-customBeige' }) => {
  const cartCount = useSelector((state) => state.cart.count); // Access cart count from Redux

  return (
    <header className={`flex flex-col md:flex-row justify-between items-center pt-6 px-8 md:px-16 lg:px-28 ${backgroundColor}`}>
      {/* Logo */}
      <div className="text-2xl font-bold text-customGreen mb-4 md:mb-0">LOGO</div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12 md:ml-0 lg:ml-80">
        <NavLink to='/'><a href="#home" className="text-customGreen underline underline-offset-1">HOME</a></NavLink>
        <NavLink to='/shoppage'><a href="#shop" className="text-customGreen hover:underline underline-offset-4">SHOP</a></NavLink>
        <NavLink to='/aboutus'><a href="#aboutus" className="text-customGreen hover:underline underline-offset-4">ABOUT US</a></NavLink>
        <a href="#contact" className="text-customGreen hover:underline underline-offset-4">CONTACT</a>
      </nav>

      {/* Icons: Shopping Bag and Login */}
      <div className="flex items-center space-x-6 md:space-x-10 lg:space-x-14 mt-2 md:mt-0">
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
    </header>
  );
}

export default Header;




