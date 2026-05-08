import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">
        Orders ({allOrders.length})
      </h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((order, index) => {
            const modeClass =
              order.mode === "BUY"
                ? "profit"
                : "loss";

            return (
              <tr key={index}>
                <td>{order.name}</td>

                <td>{order.qty}</td>

                <td>
                  {Number(order.price).toFixed(2)}
                </td>

                <td className={modeClass}>
                  {order.mode}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
