import React from "react";
import logo from "../../../images/logo.png";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../../shared/Footer";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmail(data.email, data.password, location, history);
  };
  const handleSignInGoogle = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="flex-col min-h-screen">
      <div className="flex-1">
        <div className="flex itmes-center">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-gray-100 shadow-sm border-2 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
              <label
                className="font-bold text-4xl mb-4"
                style={{ color: "#154955" }}
              >
                <img src={logo} alt="" className="h-20" />
                <span className="ml-8 block -mt-2">
                  Green <span style={{ color: "#8FBE32" }}>Villa</span>
                </span>
              </label>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
                <input
                  type="password"
                  className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"
                >
                  Login
                </button>
              </form>
              <label className="text-gray-800 mb-4">------- or -------</label>
              <button
                onClick={handleSignInGoogle}
                className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
              >
                Sign with Google
              </button>
              <Link to="/registration">
                <p className="font-medium">Don't have an account? Sign Up</p>
              </Link>
            </div>
          </div>
          <div className="w-full hidden lg:block my-auto">
            <img src={login} className="w-full" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
