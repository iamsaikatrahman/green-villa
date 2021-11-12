import React from "react";
import design1 from "../../images/designsolution/design1.png";
import design2 from "../../images/designsolution/design2.png";
import design3 from "../../images/designsolution/design3.png";
import architectural from "../../images/designsolution/architectural.jpg";

const DesignSolution = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center md:text-left mt-8  md:ml-8 lg:ml-12 md:mt-20 lg:mt-24 md:-mb-36">
        Providing Customized <br />
        Design Solutions that <br /> Fits Every Space.
      </h2>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
        <div className="mt-4 md:mt-56">
          <img src={design3} className="h-96" alt="" />
          <div className="md:ml-10  lg:mr-24 text-center md:text-left mt-4 ">
            <h3 className="font-medium">Lighting Design</h3>
            <p className="mt-2 text-justify">
              Lighting design is the process of delivering lighting to spaces.
              It begins with a conversation with the owner about organizational
              and user needs.
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-28">
          <img src={design2} className="h-96" alt="" />
          <div className="md:ml-10 lg:mr-24 text-center md:text-left mt-4 ">
            <h3 className="font-medium">Interior Design</h3>
            <p className="mt-2 text-justify">
              An interior designer is responsible for the layout of the internal
              space in a building or structure.
            </p>
          </div>
        </div>
        <div>
          <img src={design1} className="h-96" alt="" />
          <div className="md:ml-10 lg:mr-24 text-center md:text-left mt-4">
            <h3 className="font-medium">Architectural Design</h3>
            <p className="mt-2 text-justify">
              Architectural design is a concept that focuses on components or
              elements of a structure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end -mt-80">
        <img
          src={architectural}
          className=" opacity-0 md:opacity-10 h-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default DesignSolution;
