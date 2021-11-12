import { useEffect, useState } from "react";

const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/apartments")
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setIsLoading(false);
      });
  }, []);
  return { isloading, apartments };
};
export default useApartments;
