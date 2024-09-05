import React from "react";

const Title = ({ text1, text2 , text3}) => {
  return (
    <div className="text-center py-8 text-3xl mt-6">
      <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-gray-500">
          {text1} <span className="text-gray-700 font-medium"> {text2}</span>
        </p>
        <span className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></span>
      </div>

      <div className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        {text3}
      </div>
    </div>
  );
};

export default Title;
