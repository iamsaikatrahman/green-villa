import React from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div style={{ paddingTop: "80px" }}>
      <h2>This is service Details</h2>
    </div>
  );
};

export default ServiceDetails;
