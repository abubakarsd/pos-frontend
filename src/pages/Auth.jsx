import React, { useEffect } from "react";
import restaurant from "../assets/images/restaurant-bg.jpg"
import logo from "../assets/images/logo.jpg"
import Login from "../components/auth/Login";

const Auth = () => {

  useEffect(() => {
    document.title = "POS | Login"
  }, [])

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden">
      {/* Left Section - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        {/* BG Image */}
        <img className="w-full h-full object-cover" src={restaurant} alt="Restaurant Image" />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Quote at bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-xl lg:text-2xl italic text-white">
          "Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere, and they'll keep coming back."
          <br />
          <span className="block mt-4 text-red-500">- Founder of C'Hub</span>
        </blockquote>
      </div>

      {/* Right Section - Full width on mobile, half on large screens */}
      <div className="w-full lg:w-1/2 h-screen bg-[#1a1a1a] p-6 sm:p-10 overflow-y-auto flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <img src={logo} alt="C'Hub Logo" className="h-12 w-12 sm:h-14 sm:w-14 border-2 rounded-full p-1" />
            <h1 className="text-base sm:text-lg font-semibold text-[#f5f5f5] tracking-wide">C'Hub</h1>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold text-red-500 mb-6 sm:mb-10">
            Employee Login
          </h2>

          {/* Login Component */}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Auth;
