import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import aboutus from "../../images/aboutus.jpg";
import DisplayReviews from "../Home/DisplayReviews";
import OurAgent from "./OurAgent";
import about from "../../images/about.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <div style={{ paddingTop: "80px" }}>
          <div className="relative">
            <div className="flex items-center absolute w-full h-full bg-gray-800 bg-opacity-50 top-0">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl text-white font-bold">About Us</h2>
                <div className="w-24 h-1.5 bg-yellow-500 rounded mx-auto md:mx-0 my-2"></div>
              </div>
            </div>
            <div className="w-full h-96">
              <img
                src={aboutus}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex-col-reverse flex py-4 lg:flex-row items-center">
              <div className="w-full">
                <h2 className="text-3xl font-bold">
                  We Provide exclusive service especially for those who seek
                  quality of life.
                </h2>
                <p className="text-gray-600 text-lg font-medium mt-4">
                  We are provide serviced apartment is a fully furnished
                  apartment available for short or long-term stays. Service
                  apartments specifically refer to residential properties that
                  come fully-furnished with dedicated features, and are made
                  available for short-term or long-term stays the spaces can
                  vary from studio apartments to four or five bedroom
                  apartments.
                </p>
              </div>
              <div className="w-full">
                <img src={about} className="w-full" alt="" />
              </div>
            </div>
            <DisplayReviews />
            <OurAgent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
