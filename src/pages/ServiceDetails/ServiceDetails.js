import React from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import useSingleApartment from "../../hooks/useSingleApartment";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import AnyQuery from "./AnyQuery";
import BuyServiceForm from "./BuyServiceForm";
import MorePhotos from "./MorePhotos";
import ServiceInfo from "./ServiceInfo";

const ServiceDetails = () => {
  const { id } = useParams();
  const { isloading, apartment } = useSingleApartment(id);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <div style={{ paddingTop: "85px" }}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-2">
                {isloading ? <Loading /> : <ServiceInfo {...apartment} />}
              </div>
              <BuyServiceForm {...apartment} />
            </div>
            <div className="grid  lg:grid-cols-3 items-center">
              <div className="lg:col-span-2">
                {isloading ? <Loading /> : <MorePhotos />}
              </div>

              <div>
                <AnyQuery />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
