import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Banner from "./Banner";
import DesignSolution from "./DesignSolution";
import DisplayReviews from "./DisplayReviews";
import LatestApartments from "./LatestApartments";
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
        <DisplayReviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
