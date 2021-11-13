import React from "react";

import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FiBox } from "react-icons/fi";

const ExploreApartmentCard = ({
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
    <div>
      <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
        <div className="w-full">
          <img
            alt=""
            className="w-full rounded-md border-2 border-gray-300"
            src={imgUrl}
          />
        </div>
        <div className="w-full flex flex-col ml-5">
          <h4 className="text-xl font-semibold mb-2">{name}</h4>
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
          <div className="flex justify-between items-center my-2">
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

export default ExploreApartmentCard;
