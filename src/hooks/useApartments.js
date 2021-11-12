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
  return { isloading, apartments };
};
export default useApartments;
