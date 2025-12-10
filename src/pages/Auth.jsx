import React, { useEffect } from "react";
import restaurant from "../assets/images/restaurant-bg.jpg"
import logo from "../assets/images/logo.jpg"
import Login from "../components/auth/Login";

const Auth = () => {

  useEffect(() => {
    document.title = "POS | Login"
  }, [])

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* BG Image */}
        <img className="w-full h-full object-cover" src={restaurant} alt="Restaurant Image" />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Quote at bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere, and they'll keep coming back."
          <br />
          <span className="block mt-4 text-red-500">- Founder of C'Hub</span>
        </blockquote>
      </div>

      {/* Right Section */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="C'Hub Logo" className="h-14 w-14 border-2 rounded-full p-1" />
          <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">C'Hub</h1>
        </div>

        <h2 className="text-4xl text-center mt-10 font-semibold text-red-500 mb-10">
          Employee Login
        </h2>

        {/* Login Component */}
        <Login />
      </div>
    </div>
  );
};

export default Auth;
