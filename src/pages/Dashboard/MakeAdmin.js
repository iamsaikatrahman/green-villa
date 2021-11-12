import React from "react";
import makeAdmin from "../../images/makeadmin.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react/cjs/react.development";

const MakeAdmin = () => {
  const { token } = useAuth();
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="px-4">
      <h2 className="text-center text-3xl font-bold">Make an Admin</h2>
      <div className="flex-col-reverse flex lg:flex-row items-center">
        <div className="w-full">
          <form
            onSubmit={handleAdminSubmit}
            className="flex flex-col w-full  lg:w-96  bg-white rounded shadow-lg p-12 mt-12"
          >
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Username or Email
            </label>
            <input
              className="flex items-center h-12 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="email"
              onBlur={handleOnBlur}
            />
            <button
              type="submit"
              className="flex items-center justify-center h-12 px-6  bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
            >
              Make Admin
            </button>
          </form>
        </div>
        <div className="w-full">
          <img src={makeAdmin} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
