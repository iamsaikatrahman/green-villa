import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsloading(false);
      });
  }, []);
  return {
    isloading,
    reviews,
  };
};
export default useReviews;
