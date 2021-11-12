import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("https://thawing-brook-28581.herokuapp.com/reviews")
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
