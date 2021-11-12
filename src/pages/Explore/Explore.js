import React from "react";
import Navbar from "../../shared/Navbar";
import Apartments from "./Apartments";
import ExploreHeader from "./ExploreHeader";
import Footer from "../../shared/Footer";

const Explore = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <ExploreHeader />
        <Apartments />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
