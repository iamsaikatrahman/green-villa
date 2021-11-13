import { useEffect, useState } from "react";

const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://thawing-brook-28581.herokuapp.com/apartments")
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setIsLoading(false);
      });
  }, []);
  const handleDeleteApartment = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://thawing-brook-28581.herokuapp.com/apartments/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfull");
            const remainingapartment = apartments.filter(
              (item) => item._id !== id
            );
            setApartments(remainingapartment);
          }
        });
    }
  };
  return { isloading, apartments, handleDeleteApartment };
};
export default useApartments;
