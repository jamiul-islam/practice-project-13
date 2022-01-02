import React from "react";
import Navbar from "./Navbar";
import bannerImage from "../assets/banner-image.png";
import darkArrow from "../assets/arrow-down-dark.png";
import grayArrow from "../assets/arrow-down-gray.png";

const inputStyle = {
  width: "284px",
  height: "50px",
  backgroundColor: "#FFFFFF",
  opacity: "0.9",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.09)",
};

const buttonStyle = {
  width: "92px",
  height: "50px",
  backgroundColor: "#181616",
  opacity: 0.9,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.09)",
};

const Banner = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#FEF1DD", height: "100vh" }}>
        <Navbar />
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              src={bannerImage}
              className="my-8 -mb-0 lg:w-1/4 md:w-2/4"
              alt=""
              srcset=""
            />
          </div>
          <div className="my-8">
            <h1 className="text-7xl font-bold mb-6">
              Become smarter in just
              <span className="h-4 bg-contain bg-underline bg-no-repeat bg-bottom">
                {" "}
                5 minutes
              </span>
            </h1>
            <p className="text-3xl">
              Get the daily email that makes reading the news actually
              enjoyable. <br /> Stay informed and entertained, for free.
            </p>
          </div>
          <div>
            <input
              className="px-8 rounded-full placeholder:text-gray-400 ring-2 ring-blue-500  focus:ring-sky-500 focus:ring-2"
              style={inputStyle}
              type="text"
              placeholder="yourname@mail.com"
            />
            <button
              style={buttonStyle}
              className="ml-4 bg-black text-zinc-50 rounded-full hover:scale-110 hover:bg-gray-600 hover:text-white transition"
            >
              Try It
            </button>
          </div>
          <div className="mt-14">
            <img
              src={darkArrow}
              className="mx-auto hover:scale-125 transition cursor-pointer"
              width="1%"
              alt=""
            />
            <img
              src={grayArrow}
              className="mx-auto hover:scale-125 transition cursor-pointer mt-1"
              width="0.7%"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
