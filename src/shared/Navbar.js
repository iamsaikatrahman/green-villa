import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-50 top-0 w-full bg-white text-black shadow-sm">
      <nav className="container mx-auto  flex justify-between items-center h-20 ">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              className="h-20"
              style={{ height: "65px", padding: "5px" }}
              alt=""
            />
            <h2
              className="ml-2 font-bold  text-2xl md:text-3xl"
              style={{ color: "#154955" }}
            >
              Green <span style={{ color: "#8FBE32" }}>Villa</span>
            </h2>
          </div>
        </Link>
        <div className="px-4 cursor-pointer lg:hidden" onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-4 lg:block hidden">
          <Link className="p-2 text-lg font-medium" to="/home">
            Home
          </Link>
          <Link className="p-2 text-lg font-medium" to="/aboutus">
            About Us
          </Link>
          <Link className="p-2 text-lg font-medium" to="/explore">
            Explore
          </Link>
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/dashboard">
              Dashboard
            </Link>
          )}

          {user?.email && (
            <span className="font-medium text-lg">
              <img
                src={user.photoURL}
                alt=""
                className="h-8 w-8 rounded-full inline"
              />{" "}
              {user.displayName}
            </span>
          )}
          {user?.email ? (
            <button
              onClick={logOut}
              className="font-medium m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="font-medium m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </nav>
      {isOpen && (
        <div
          className="grid justify-items-center lg:hidden transition duration-500 ease-in-out"
          onClick={handleMenu}
        >
          <Link className="p-2 text-lg font-medium" to="/home">
            Home
          </Link>
          <Link className="p-2 text-lg font-medium" to="/aboutus">
            About Us
          </Link>
          <Link className="p-2 text-lg font-medium" to="/explore">
            Explore
          </Link>
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/dashboard">
              Dashboard
            </Link>
          )}
          {user?.email && (
            <span className="font-medium text-lg">
              <img
                src={user.photoURL}
                alt=""
                className="h-8 w-8 rounded-full inline"
              />{" "}
              {user.displayName}
            </span>
          )}
          {user?.email ? (
            <button
              onClick={logOut}
              className="font-medium m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="font-medium m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
                LogIn
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
