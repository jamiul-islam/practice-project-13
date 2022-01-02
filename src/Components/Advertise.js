import React from "react";
import mobile from "../assets/mobile.png";
import gift from "../assets/gift.png";
import growth from "../assets/growth.png";
import circuit from "../assets/circuit.png";

const Advertise = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F8F7F7", height: "100vh" }}>
        <div className="flex justify-between items-center">
          <div className="ml-48 text-left">
            <div>
              <h1 className="text-7xl font-bold mb-6">
                Get
                <span className="h-4 bg-contain bg-underlineSecond bg-no-repeat bg-bottom">
                  {" "}
                  everyday <br />
                </span>
                newsletters to <br /> your mobile
              </h1>
            </div>
            <div className="mt-24">
              <div className="flex items-center">
                <img src={growth} width="7%" alt="" />{" "}
                <span className="ml-4 text-2xl">
                  Get the daily stock market news
                </span>
              </div>
              <div className="my-10 flex items-center">
                <img src={gift} width="7%" alt="" />{" "}
                <span className="ml-4 text-2xl">
                  Free Stock giveaway everyweek
                </span>
              </div>
              <div className="flex items-center">
                <img src={circuit} width="7%" alt="" />{" "}
                <span className="ml-4 text-2xl">Invest and Earn</span>
              </div>
            </div>
          </div>
          <img src={mobile} className="w-2/4 h-screen" alt="" srcset="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Advertise;
