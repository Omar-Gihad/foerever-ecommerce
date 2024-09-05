import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 w-full items-center">
      <div className="sm:w-1/2 flex items-center justify-center flex-col">
        <div className="flex flex-col p-5 sm:p-0">
          <div className="flex items-center gap-3">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-outfit font-medium text-sm md:text-base">
              OUR BESTSELLERS
            </p>
          </div>

          <div className="font-prata text-gray-700 text-4xl sm:py-3 lg:text-5xl leading-relaxed items-center justify-center">
            Latest Arrivals
          </div>

          <div className="flex items-center gap-3">
            <p
              onClick={() => nav(`/collection`)}
              className=" font-semibold text-gray-700 hover:underline cursor-pointer text-sm md:text-base"
            >
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
