import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import shortaboutus from "../../images/shortAboutUs.png";

const ShortAboutUs = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        shortTitle={"Why Choose Our Apartments"}
        title={"Best Apartment Service"}
      />
      <div className="flex-col-reverse flex lg:flex-row items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold">
            We Provide exclusive service especially for those who seek quality
            of life.
          </h2>
          <p className="text-gray-600 text-lg font-medium mt-4">
            We are provide serviced apartment is a fully furnished apartment
            available for short or long-term stays. Service apartments
            specifically refer to residential properties that come
            fully-furnished with dedicated features, and are made available for
            short-term or long-term stays the spaces can vary from studio
            apartments to four or five bedroom apartments.
          </p>
          <Link to="/aboutus">
            <button className="font-medium mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
              Read More
            </button>
          </Link>
        </div>
        <div className="w-full">
          <img src={shortaboutus} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShortAboutUs;
