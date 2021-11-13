import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrders = () => {
  const { user } = useAuth();
  const [myOrders, setmyOrders] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `https://thawing-brook-28581.herokuapp.com/myorders/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setmyOrders(data);
        setIsLoading(false);
      });
  }, [user.email]);

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://thawing-brook-28581.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfull");
            const remainingOrders = myOrders.filter((item) => item._id !== id);
            setmyOrders(remainingOrders);
          }
        });
    }
  };
  return {
    myOrders,
    isloading,
    handleDeleteBooking,
  };
};

export default useOrders;
