import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import Loading from "../../components/Loading";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";
import useReviews from "../../hooks/useReviews";
import Ratings from "../../components/Rating";
import "./Reviews.css";

const DisplayReviews = () => {
  const { isloading, reviews } = useReviews();
  const [index, setIndex] = useState(0);

  // console.log(userName);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div className=" py-8">
      <SectionHeader
        shortTitle={"TESTIMONIALS"}
        title={"What Our Clients Say"}
      />
      {isloading ? (
        <Loading />
      ) : (
        <div className="bg-reviews">
          <div className="h-80 flex items-center">
            <div className="w-full px-8">
              <div className="flex justify-around items-center py-4">
                <FaAngleLeft
                  onClick={prevPerson}
                  className="hidden md:block text-4xl"
                />
                <div className="w-full md:w-1/2 flex relative">
                  <div className="w-full md:w-9/12 lg:w-10/12">
                    <h2 className="text-justify text-lg font-medium">
                      {reviews[index].message}
                    </h2>
                    <div className="flex justify-center items-center mt-4">
                      <img
                        src={reviews[index].userImg}
                        className="w-16 h-16 rounded-full mr-2"
                        alt=""
                      />
                      <div>
                        <h3 className="font-bold">{reviews[index].userName}</h3>
                        <Ratings value={reviews[index].rating} />
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="absolute right-0">
                    <FaQuoteRight className="text-6xl text-gray-300 hidden md:block" />
                  </div>
                </div>
                <FaAngleRight
                  onClick={nextPerson}
                  className="hidden md:block text-4xl"
                />
              </div>
              <div className="flex justify-evenly">
                <FaAngleLeft onClick={prevPerson} className=" md:hidden" />
                <FaAngleRight onClick={nextPerson} className=" md:hidden" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayReviews;
