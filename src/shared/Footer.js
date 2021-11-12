import React from "react";
import footer from "../images/footer.png";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-4 py-8 text-center justify-items-center  lg:text-left">
          <div className="mt-4">
            <div className="flex items-center justify-center lg:justify-start">
              <img src={footer} className=" w-28" alt="" />
              <h2 className="text-white text-4xl font-bold">
                Green <span style={{ color: "#8FBE32" }}>Villa</span>
              </h2>
            </div>
            <p className="capitalize text-white mt-2 font-medium">
              We Provide exclusive service especially for{" "}
              <br className="lg:hidden" /> those who seek quality of life.
            </p>
            <p className="text-white text-xl mt-2">
              <IoCallSharp className=" inline" /> (611)-399-6830
            </p>
            <p className="text-white text-xl mt-2">
              <MdEmail className=" inline" /> greenvilla@gmail.com
            </p>
          </div>
          <div className="mt-4">
            <div className="text-white">
              <h2 className="font-bold text-xl mb-2">Our Service</h2>
              <p>Future Home</p>
              <p>Apartment Building</p>
              <p>Hotels Building</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-white">
              <h2 className="font-bold text-xl mb-2">Information</h2>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-white">
              <h2 className="font-bold text-xl mb-2">Quick Links</h2>
              <p>Privacy Policy</p>
              <p>Term of Service</p>
              <p>Disclimer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
