import React from "react";
import EmptyMessageCard from "../../components/EmptyMessageCard";
import Loading from "../../components/Loading";
import OrderCard from "../../components/OrderCard";
import useOrders from "../../hooks/useOrders";

const MyOrder = () => {
  const { myOrders, isloading, handleDeleteBooking } = useOrders();
  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {myOrders.length === 0 && (
            <EmptyMessageCard message={"You have no order!!"} />
          )}
          {myOrders.map((item) => (
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

export default MyOrder;
