import React from "react";
import testimonialUsers from "../assets/testimonials.png";

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
  backgroundColor: "#2B5AE3",
  opacity: 0.9,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.09)",
};

const Testimonial = () => {
  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: "#181616", height: "130vh" }}
        className="text-white"
      >
        <div className="py-16">
          <h1 className="text-7xl font-bold mb-6">
            See who’s
            <span className="h-4 bg-contain bg-underlineThird bg-no-repeat bg-bottom">
              {" "}
              join with us
            </span>
          </h1>
          <p className="text-3xl pt-4">
            Join with our +10000 finance users club
          </p>
        </div>
        <div className="mt-4">
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
        <img src={testimonialUsers} className="-mt-10" alt="" />
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
