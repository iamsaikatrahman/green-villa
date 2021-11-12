import React from "react";
import Navbar from "../../shared/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "80px" }} className="min-h-screen">
        <h2>Page not found</h2>
      </div>
    </div>
  );
};

export default NotFound;
