import React, { useEffect, useState } from "react";
import banner from "../../images/banner/banner.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const bannerInfo = [
    {
      message: "find the apartment of your dream \nusing our platform.",
      bannerImg: banner,
    },
    {
      message: "choose your \ncomfortable apartment.",
      bannerImg: banner2,
    },
    {
      message: "find the apartment \nperfect for your family.",
      bannerImg: banner3,
    },
  ];
  const { message, bannerImg } = bannerInfo[index];
  const checkNumber = (number) => {
    if (number > bannerInfo.length - 1) {
      return 0;
    }
    if (number < 0) {
      return bannerInfo.length - 1;
    }
    return number;
  };
  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  useEffect(() => {
    setInterval(() => {
      nextSlide();
    }, 3000);
  }, []);
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="relative">
        <div
          className="flex items-center absolute top-0 w-full bg-opacity-50 bg-gray-600"
          style={{ height: "400px", transition: "all 0.3s ease" }}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <FaAngleLeft
              onClick={prevSlide}
              className="text-6xl opacity-30 text-gray-300"
            />
            <div>
              <h2 className="capitalize text-2xl md:text-4xl text-center font-bold text-white">
                {message.split("\n").map((str) => (
                  <p key={str}>{str}</p>
                ))}
              </h2>
            </div>
            <FaAngleRight
              onClick={nextSlide}
              className="text-6xl opacity-30 text-gray-300"
            />
          </div>
        </div>
        <div
          className="w-full"
          style={{ height: "400px", transition: "all 0.3s ease" }}
        >
          <img src={bannerImg} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
