import React from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const BuyServiceForm = ({
  name,
  imgUrl,
  price,
  location,
  bedrooms,
  bathrooms,
  aptSpace,
}) => {
  const { user } = useAuth();
  const { displayName, email } = user;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.aptname = name;
    data.aptimglink = imgUrl;
    data.aptprice = price;
    data.location = location;
    data.bedrooms = bedrooms;
    data.bathrooms = bathrooms;
    data.aptSpace = aptSpace;
    data.bookingstatus = "Pending";
    axios
      .post("https://thawing-brook-28581.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booking Successfully done.");
          reset();
        }
      });
  };
  return (
    <div className="px-4">
      <h2 className="text-3xl text-center font-bold mt-8 my-4">Booking Form</h2>
      <div className="w-24 h-1.5 bg-yellow-400 rounded mx-auto mb-8"></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="User Name"
            type="text"
            readOnly
            {...register("name", setValue("name", displayName))}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="User Email"
            type="email"
            readOnly
            {...register("email", setValue("email", email))}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Where are you living?"
            type="text"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-red-500 font-medium">
              Address is required
            </span>
          )}
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Your Phone Number"
            type="number"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500 font-medium">
              This field is required
            </span>
          )}
          <input
            className="bg-yellow-500 cursor-pointer text-white  p-2 my-2 font-bold w-full rounded-lg outline-none"
            type="submit"
            value="Confirm To Booking "
          />
        </form>
      </div>
    </div>
  );
};

export default BuyServiceForm;
