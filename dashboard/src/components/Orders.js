import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-n5oh.onrender.com/allorders")
      .then((res) => {
        setAllOrders(res.data);
      })
  }, [])

  if (!allOrders.length) {
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
  } else {
    return(
       <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price(₹)</th>
            <th>Mode</th>
            <th>Cur. val(₹)</th>
            <th>Status</th>
          </tr>

          {allOrders.map((stock, idx) => {
            const currVal = stock.price * stock.qty;
        
            return (
              <tr key={idx}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
                <td>{currVal.toFixed(2)}</td>
                <td><p>Success</p></td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
    );
  }
};

export default Orders;
