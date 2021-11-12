import ApartmentCard from "../../components/ApartmentCard";
import Loading from "../../components/Loading";
import useApartments from "../../hooks/useApartments";

const Apartments = () => {
  const { isloading, apartments } = useApartments();
  return (
    <div className="container mx-auto px-4 py-8">
      {isloading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.name} {...apartment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apartments;
