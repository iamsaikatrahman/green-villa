import React from "react";
import addapartment from "../../images/apartment.png";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://thawing-brook-28581.herokuapp.com/apartments", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Apartment Add Sucessfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">
        Add New <span style={{ color: "#8FBE32" }}>Apartment</span>
      </h2>
      <div className="w-24 h-1.5 rounded mx-auto bg-yellow-400"></div>
      <div className="flex-col-reverse flex lg:flex-row items-center">
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full  lg:w-96  bg-white rounded shadow-lg p-12 mt-12"
          >
            {/* Name */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Name of Apartment
            </label>
            <input
              className="flex items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 font-medium">Name is required</span>
            )}
            {/* Image */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Image of Apartment
            </label>
            <input
              className="flex items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              {...register("imgUrl", { required: true })}
            />
            {errors.imgUrl && (
              <span className="text-red-500 font-medium">
                Image is required
              </span>
            )}
            {/* Price */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Price of Apartment
            </label>
            <input
              className="flex items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="number"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500 font-medium">
                Price is required
              </span>
            )}
            {/* location */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Location of Apartment
            </label>
            <input
              className="flex items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <span className="text-red-500 font-medium">
                Location is required
              </span>
            )}

            {/* Room and space */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Room and space of Apartment
            </label>

            <div className="flex">
              <input
                className="flex w-1/3 mr-2 items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="number"
                placeholder="Bed"
                {...register("bedrooms")}
              />
              <input
                className="flex w-1/3 mr-2 items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="number"
                placeholder="Bath"
                {...register("bathrooms")}
              />
              <input
                className="flex w-1/3 items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="number"
                defaultValue="1100sft"
                placeholder="Space"
                {...register("aptSpace")}
              />
            </div>

            {/* Short Description */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Short Description of Apartment
            </label>
            <textarea
              className="flex items-center  px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              rows="3"
              {...register("shortDes", { required: true })}
            />
            {errors.shortDes && (
              <span className="text-red-500 font-medium">
                Short Description is required
              </span>
            )}
            {/* Description */}
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Details Description of Apartment
            </label>
            <textarea
              className="flex items-center  px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              rows="3"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 font-medium">
                Description is required
              </span>
            )}

            <button
              type="submit"
              className="flex items-center justify-center h-12 px-6  bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
            >
              Add Apartment
            </button>
          </form>
        </div>
        <div className="w-full">
          <img src={addapartment} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
