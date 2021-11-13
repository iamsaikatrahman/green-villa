import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FiBox } from "react-icons/fi";

const ApartmentCard = ({
  _id,
  name,
  imgUrl,
  shortDes,
  price,
  location,
  bedrooms,
  bathrooms,
  aptSpace,
}) => {
  return (
    <div className=" overflow-hidden shadow-lg transition duration-500 ease-in-out transform  hover:shadow-2xl rounded-lg h-full w-full  m-auto">
      <div className=" col-span-1 flex flex-col w-full block h-full">
        <div className="overflow-hidden">
          <img
            alt=""
            src={imgUrl}
            className="h-56 w-full object-cover transition transform duration-500 ease-in-out hover:scale-110 "
          />
        </div>
        <div className="bg-white w-full p-4">
          <h2 className="text-xl mb-3 font-bold">{name.substring(0, 35)}...</h2>
          <p className="text-gray-600 font-medium text-justify text-md">
            This {name} have {bedrooms} bedrooms and {bathrooms} bathrooms.{" "}
            {shortDes.substring(0, 50)}...
            <Link
              to={`/service/${_id}`}
              className="inline-flex text-indigo-500"
            >
              Read More
            </Link>
          </p>
          <p className="font-medium text-gray-500 text-base mt-2">
            <GrLocation className="inline text-indigo-600 text-xl font-bold" />{" "}
            {location}
          </p>
          <div className="flex mt-2">
            <p className="font-medium text-base mr-4">
              <IoBedOutline className="inline text-indigo-600 text-xl font-bold" />{" "}
              {bedrooms}
            </p>
            <p className="font-medium text-base mr-4">
              <GiBathtub className="inline text-indigo-600 text-xl font-bold" />{" "}
              {bathrooms}
            </p>
            <p className="font-medium text-base mr-4">
              <FiBox className="inline text-indigo-600 text-xl font-bold" />{" "}
              {aptSpace} SqFt
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-auto">
          <div className="border-b-2"></div>
          <div className="flex justify-between items-center my-2 mx-4">
            <p className="font-bold text-indigo-600 text-xl">${price}</p>
            <Link to={`/service/${_id}`}>
              <button className=" p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg font-medium rounded-lg focus:border-4 border-blue-300">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
