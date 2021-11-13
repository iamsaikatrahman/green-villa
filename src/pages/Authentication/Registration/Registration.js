import React, { useEffect } from "react";
import registration from "../../../images/registration.jpg";
import logo from "../../../images/logo.png";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Footer from "../../../shared/Footer";

const Registration = () => {
  const { user, signInWithGoogle, registerUser } = useAuth();
  const [createUser, setCreateUser] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (createUser) {
      setTimeout(() => {
        setCreateUser(false);
      }, 5000);
    }
  }, [createUser]);
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your password did not match!!");
      return;
    }
    registerUser(data.email, data.password, data.name, data.photoURL, history);
    reset();
    if (user?.email) {
      setCreateUser(true);
    }
  };
  const handleSignInGoogle = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="grid  xl:grid-cols-3">
          <div className="hidden xl:block xl:col-span-2">
            <img
              src={registration}
              className="w-full h-full min-h-screen"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center min-h-screen">
            <div>
              <label
                className="font-bold text-4xl mb-4  text-center"
                style={{ color: "#154955" }}
              >
                <img src={logo} alt="" className="h-20 block mx-auto" />
                <span className="ml-8 block -mt-2">
                  Green <span style={{ color: "#8FBE32" }}>Villa</span>
                </span>
              </label>
              <form
                className="px-8 md:w-96 mt-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  className="w-full h-12 rounded-lg bg-gray-100 outline-none px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                <input
                  type="text"
                  className="w-full h-12 rounded-lg bg-gray-100 outline-none px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Enter Your Image Link"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-500">
                    Profile Image is required
                  </span>
                )}
                <input
                  type="email"
                  className="w-full h-12 rounded-lg bg-gray-100 outline-none px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
                <input
                  type="password"
                  className="w-full h-12 rounded-lg bg-gray-100 outline-none px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <input
                  type="password"
                  className="w-full h-12 rounded-lg bg-gray-100 outline-none px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Retype Password"
                  {...register("password2", { required: true })}
                />
                {errors.password2 && (
                  <span className="text-red-500">Password is required</span>
                )}
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-2"
                >
                  Registration
                </button>
              </form>

              <p className="text-gray-800 mb-2 text-center">
                ------- or -------
              </p>
              <div className="px-8">
                <button
                  onClick={handleSignInGoogle}
                  className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
                >
                  Sign with Google
                </button>
                <Link to="/login">
                  <p className="text-center font-medium mb-4">
                    Already have an account? Login
                  </p>
                </Link>
              </div>
              {/* <!-- Alert Success --> */}
              {createUser && (
                <div className="absolute left-1 bottom-1 w-1/4 bg-green-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto ">
                  <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                  >
                    <path
                      fill="currentColor"
                      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                    ></path>
                  </svg>
                  <span className="text-green-800">
                    {" "}
                    Your account has been saved.{" "}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
