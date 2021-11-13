import React from "react";
import ApartmentCard from "../../components/ApartmentCard";
import Loading from "../../components/Loading";
import useApartments from "../../hooks/useApartments";

const ManageProducts = () => {
  const { isloading, apartments, handleDeleteApartment } = useApartments();

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 px-4 gap-4">
          {apartments.map((apartment) => (
            <ApartmentCard
              key={apartment.name}
              {...apartment}
              handleDeleteApartment={handleDeleteApartment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
