import React from "react";

const MorePhotos = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-8 mb-4 ">More Photos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-4">
        <div className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-full h-auto md:h-52 lg:h-48 object-cover transition transform duration-500 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-full h-auto md:h-52 lg:h-48 object-cover transition transform duration-500 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-full h-auto md:h-52 lg:h-48 object-cover transition transform duration-500 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-full h-auto md:h-52 lg:h-48 object-cover transition transform duration-500 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6312362/pexels-photo-6312362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-full h-auto md:h-52 lg:h-48 object-cover transition transform duration-500 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-full h-auto md:h-52 lg:h-48 object-cover transition transform duration-500 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MorePhotos;
