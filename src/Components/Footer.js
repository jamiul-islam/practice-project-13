import React from "react";
import logoWhite from "../assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div
        className="px-16"
        style={{ backgroundColor: "#181616", height: "30vh" }}
      >
        <div className=" flex flex-row justify-between items-center space-x-2">
          <div className="flex">
            <img src={logoWhite} alt="" srcset="" />
            <h1
              className="text-white font-bold text-4xl cursor-pointer"
              id="#home"
            >
              FlowFinance
            </h1>
          </div>
          <div className="text-white">
            <span className="text-2xl">Follow Us On</span>
            <FontAwesomeIcon className="ml-6 text-2xl" icon={faFacebook} />
            <FontAwesomeIcon className="ml-6 text-2xl" icon={faTwitter} />
            <FontAwesomeIcon className="ml-6 text-2xl" icon={faLinkedin} />
            <FontAwesomeIcon className="mx-6 text-2xl" icon={faInstagram} />
          </div>
        </div>
        <div className="mt-16 text-left font-semibold text-gray-500/70">
          <p className="mb-4">DISCLOSURE</p>
          <p>
            Big Apple meets blockchain... NYC will be the second US city after
            Miami to get its own crypto: NYCCoin. Gotham will keep 30% of each
            NYCCoin that’s mined to support city initiatives, while users keep
            the rest. Users can trade NYCCoin or use it to mint NFTs or build
            blockchain-based apps. MiamiCoin has already earned the city $21M+,
            which it plans to spend on crypto education, underprivileged
            communities, and green initiatives. “City coins” could be the next
            step in crypto mainstreamification. Austin also has one in the
            works.
          </p>
        </div>
        <div className="mt-4 flex flex-row justify-between text-left font-semibold text-gray-500/70">
          <span>&copy; 2021 flowfinance.co</span>
          <span>Contact Us • FAQ • Terms & Conditions</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
