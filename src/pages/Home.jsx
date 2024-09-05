// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";
import { assets } from "../assets/frontend_assets/assets";
import Footer from "../includes/Footer";
import Subscribe from "../includes/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      {/* Icons Section */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 mx-7 sm:mx-20">
        <div className="">
          <img
            className="w-12 m-auto mb-5"
            src={assets.exchange_icon}
            alt="Easy Exchange Policy"
          />
          <p className=" font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div className="">
          <img
            className="w-12 m-auto mb-5"
            src={assets.quality_icon}
            alt="7 Days Return Policy"
          />
          <p className=" font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div className="">
          <img
            className="w-12 m-auto mb-5"
            src={assets.support_img}
            alt="Best customer support"
          />
          <p className=" font-semibold">Best customer support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
