import React from "react";
import { FiUser, FiLock } from "react-icons/fi"; // Import icons from react-icons
import { FcGoogle } from "react-icons/fc"; // Google Icon

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/src/assets/Login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-sm p-8 space-y-2">
        {/* Title Section */}
        <h2 className="text-4xl font-semibold text-center">Login</h2>
        <p className="text-center text-sm font-bold font-sans">
          Please enter your Login and your Password
        </p>

        {/* Form Section */}
        <form className="space-y-6">
        <div className="relative">
        <FiUser className="absolute left-3 top-2 h-7 w-7" />
        <input
          type="text"
          placeholder="Username or Email"
          className="bg-transparent w-full pl-12 p-2 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#70693f] focus:border-transparent placeholder-black"
        />
      </div>
      

          <div className="flex flex-col items-end">
          <div className="relative w-full">
            <FiLock className="absolute left-3 top-2 h-7 w-7" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent w-full pl-12 p-2 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#70693f] focus:border-transparent placeholder-black"
            />
          </div>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-[#70693f] mt-1"
          >
            Forgot password?
          </a>
        </div>
        
          <button
            type="submit"
            className="w-full border-2 border-black  text-black p-2 rounded-2xl"
          >
            Login
          </button>
        </form>

        {/* OR Google Login Section */}
        <div className="flex items-center justify-center space-x-4"></div>
        <button className="w-full flex items-center justify-center space-x-2 border border-black bg-gray-800 p-3 rounded-2xl hover:bg-gray-600 transition">
          <FcGoogle className="text-xl" />
          <span className="text-sm text-white">Or, Sign-in with Google</span>
        </button>

        {/* Footer */}
        <div className="text-center text-sm">
          <p className="text-black font-sans">
            Not a member yet?
            <a href="#" className="text-[#70693f] font-bold hover:underline">
              Register!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
