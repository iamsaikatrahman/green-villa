import React, { useEffect, useState } from "react";
import EmptyMessageCard from "../../components/EmptyMessageCard";
import Loading from "../../components/Loading";
import OrderCard from "../../components/OrderCard";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, []);
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfull");
            const remainingOrders = orders.filter((item) => item._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {orders.length === 0 && (
            <EmptyMessageCard message={"You have no order!!"} />
          )}
          {orders.map((item) => (
            <OrderCard
              key={item._id}
              {...item}
              handleDeleteBooking={handleDeleteBooking}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
