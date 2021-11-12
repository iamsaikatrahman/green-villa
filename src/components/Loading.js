import React from "react";
import loading from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-24">
      <div>
        <img src={loading} className="w-8 h-8" alt="" />
      </div>
    </div>
  );
};

export default Loading;
