import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import useAuth from "../hooks/useAuth";

const OrderCard = ({
  _id,
  aptimglink,
  aptname,
  aptprice,
  location,
  bedrooms,
  bathrooms,
  aptSpace,
  bookingstatus,
  handleDeleteBooking,
}) => {
  const { admin } = useAuth();
  const [isApprove, setIsApprove] = useState(bookingstatus);
  const handleUpdateStatus = (id) => {
    const data = { bookingstatus };
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successfully Done!!");
        }
      });
  };
  const handleApprove = () => {
    if (isApprove === "Pending") {
      const proceed = window.confirm(
        "Are you sure, You want to approve this booking Apartment?"
      );
      if (proceed) {
        setIsApprove((bookingstatus = "Approved"));
        handleUpdateStatus(_id);
      }
    }
  };
  return (
    <div>
      <main className="flex items-center p-10 w-full h-full bg-white">
        <div className="border-t border-b py-4  grid  md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start">
            <div
              className="flex flex-col w-full object-cover  justify-items-center border rounded-lg overflow-hidden"
              style={{ minHeigth: "320px" }}
            >
              <img
                className="w-full h-full object-cover"
                src={aptimglink}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="capitalize text-xl font-bold">{aptname}</h1>
              <h2 className="text-lg font-bold mt-2">${aptprice}</h2>
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
              <p className="text-lg font-medium mt-2">
                Order Status: {isApprove}
              </p>
              <div className="flex items-center gap-4 my-2 cursor-pointer ">
                <button
                  onClick={() => handleDeleteBooking(_id)}
                  className="bg-blue-600 px-5 w-1/2 py-3 font-medium text-white rounded-lg w-2/4 text-center"
                >
                  Cancle Order
                </button>
                {isApprove === "Pending" && admin && (
                  <button
                    onClick={() => handleApprove()}
                    className="bg-blue-600 px-5 w-1/2 py-3 font-medium text-white rounded-lg w-2/4 text-center"
                  >
                    Upadte Status
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderCard;
