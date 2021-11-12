import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Banner from "./Banner";
import DesignSolution from "./DesignSolution";
import LatestApartments from "./LatestApartments";
import Reviews from "./Reviews";
import ShortAboutUs from "./ShortAboutUs";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <Banner />
        <DesignSolution />
        <LatestApartments />
        <ShortAboutUs />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
