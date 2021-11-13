import React from "react";
import useAuth from "../../hooks/useAuth";
import dashboard from "../../images/dashboard.png";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">
        Welcome to <span style={{ color: "#8FBE32" }}>Dashboard</span>
      </h2>
      <div className="w-24 h-1.5 rounded mx-auto bg-yellow-400"></div>
      <div className="flex-col-reverse flex lg:flex-row items-center">
        <div className="w-full flex justify-center text-center">
          <div className="">
            <img
              src={user.photoURL}
              className="w-36 h-36 mx-auto shadow-lg rounded-full"
              alt=""
            />
            <h2 className="text-2xl mt-4 font-bold">
              Hello {user.displayName}
            </h2>
            <h2 className="text-xl font-medium">{user.email}</h2>
          </div>
        </div>
        <div className="w-full">
          <img src={dashboard} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
