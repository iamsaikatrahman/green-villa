import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
const HomeApartmentCard = ({
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
      <div className="flex my-10">
        <div className="bg-white  m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
          <img
            src={imgUrl}
            alt=""
            className="w-full h-52 object-cover object-center"
          />
          <div className="p-4">
            <p className="mb-1 text-gray-900 font-semibold">
              {name.substring(0, 35)}...
            </p>

            <span className="text-gray-700">
              This {name} have {bedrooms} bedrooms and {bathrooms} bathrooms.{" "}
              {shortDes.substring(0, 40)}...
              <Link
                to={`/service/${_id}`}
                className="inline-flex text-indigo-500"
              >
                Read More
              </Link>
            </span>
            <p className="font-medium text-gray-500 text-base mt-2">
              <GrLocation className="inline text-indigo-600 text-xl font-bold" />{" "}
              {location.substring(0, 20)}...
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
            <p className="font-bold text-indigo-600 text-xl mt-4">${price}</p>
            <div className="mt-4 mb-3">
              <Link to={`/service/${_id}`}>
                <button className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg font-medium rounded-lg focus:border-4 border-blue-300">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApartmentCard;
