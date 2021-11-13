import ApartmentCard from "../../components/ApartmentCard";
import ExploreApartmentCard from "../../components/ExploreApartmentCard";
import Loading from "../../components/Loading";
import useApartments from "../../hooks/useApartments";

const Apartments = () => {
  const { isloading, apartments } = useApartments();
  return (
    <div className="container mx-auto px-4 py-8">
      {isloading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1  gap-4">
          {apartments.map((apartment) => (
            <ExploreApartmentCard key={apartment.name} {...apartment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apartments;
