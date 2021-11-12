import ApartmentCard from "../../components/ApartmentCard";
import Loading from "../../components/Loading";
import SectionHeader from "../../components/SectionHeader";
import useApartments from "../../hooks/useApartments";

const LatestApartments = () => {
  const { isloading, apartments } = useApartments();
  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        shortTitle={"BROWSE HOT OFFERS"}
        title={"Latest Apartments"}
      />
      {isloading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 py-8 lg:grid-cols-3 gap-4">
          {apartments.slice(0, 6).map((apartment) => (
            <ApartmentCard key={apartment.name} {...apartment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestApartments;
