import React from "react";
import explore from "../../images/explore.jpg";
const ExploreHeader = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="relative">
        <div className="flex items-center absolute w-full h-full bg-gray-800 bg-opacity-50 top-0">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-white font-bold">
              Expore Our <br className="hidden md:block" /> Apartments
            </h2>
            <div className="w-24 h-1.5 bg-indigo-500 rounded mx-auto md:mx-0 my-2"></div>
          </div>
        </div>
        <div className="w-full h-96">
          <img src={explore} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
