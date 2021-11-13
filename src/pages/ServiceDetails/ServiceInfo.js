import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FiBox } from "react-icons/fi";

const ServiceInfo = ({
  name,
  imgUrl,
  price,
  location,
  bedrooms,
  bathrooms,
  aptSpace,
  shortDes,
  description,
}) => {
  return (
    <div>
      <img src={imgUrl} className="h-96 object-cover w-full" alt="" />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold py-4">{name}</h2>
        <p className="text-4xl font-bold mb-2">${price}</p>
        <div className="flex mt-4">
          <p className="font-medium text-lg mr-4">
            <IoBedOutline className="inline text-indigo-600 text-xl font-bold" />{" "}
            {bedrooms}
          </p>
          <p className="font-medium text-lg mr-4">
            <GiBathtub className="inline text-indigo-600 text-xl font-bold" />{" "}
            {bathrooms}
          </p>
          <p className="font-medium text-lg mr-4">
            <FiBox className="inline text-indigo-600 text-xl font-bold" />{" "}
            {aptSpace} SqFt
          </p>
        </div>
        <p className="font-medium  text-xl mt-4">
          <GrLocation className="inline text-indigo-600 text-xl font-bold" />{" "}
          {location}
        </p>
        <p className="text-xl font-medium mt-4">{shortDes}</p>
        <p className="text-xl  mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceInfo;
