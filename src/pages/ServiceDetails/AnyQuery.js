import React from "react";
import { IoCallSharp } from "react-icons/io5";
import anyquery from "../../images/anyquery.png";

const AnyQuery = () => {
  return (
    <div className="w-full">
      <img src={anyquery} className="w-full" alt="" />
      <h2 className="text-2xl font-bold text-center">Have Any Query</h2>
      <div className="w-24 h-1.5 bg-yellow-500 rounded mx-auto my-4"></div>
      <h2 className="text-xl font-bold text-center">
        <IoCallSharp className=" inline" /> (611)-399-6830
      </h2>
      <button className="font-medium block mx-auto mt-4 m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
        Contact Us
      </button>
    </div>
  );
};

export default AnyQuery;
