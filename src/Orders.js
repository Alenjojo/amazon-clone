import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import "./Orders.css";
import { getDocs, doc, collection } from "firebase/firestore";
import { db } from "./firebase.js";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useState(() => {
    if (user) {
      const itemRef = collection(db, "users", user?.uid, "orders");
      getDocs(itemRef).then((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Order</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
