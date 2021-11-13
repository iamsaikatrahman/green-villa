import { useEffect, useState } from "react";

const useSingleApartment = (id) => {
  const [apartment, setApartment] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/apartments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApartment(data);
        setIsLoading(false);
      });
  }, [id]);
  return { isloading, apartment };
};

export default useSingleApartment;
