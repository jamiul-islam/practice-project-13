import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 items-center py-6">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="" srcset="" />
        <h1 className="font-bold text-4xl cursor-pointer" id="#home">
          FlowFinance
        </h1>
      </div>
      <div className="flex items-center space-x-8 font-bold">
        <button
          className="
              flex
              items-center
              px-3
              py-2
              mt-auto
              font-semibold
              bg-white
              hover:bg-gray-50 hover:text-gray-800 hover:scale-105
              focus:shadow-outline focus:outline-none
              text-xl
              rounded-full              
              poppins
              transition
              duration-300
              ease-in-out
            "
        >
          hello@flowfinance.co
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
