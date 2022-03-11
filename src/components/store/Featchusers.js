import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import About from "../About";

const Featchusers = () => {
  const [data, setData] = useState({});
  const myFuction = async () => {
    let payload = { storeID: 46 };
    let res = await axios.post(
      "https://auction_io.ecommerce.auction/api/getstores",
      payload
    );
    try {
      console.log(res, Object.keys(res.data.response), "this is res");
      if (
        res.data &&
        res.data.response &&
        Object.keys(res.data.response).length !== 0
      ) {
        setData(res.data.response);
        console.log("succes");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    myFuction();
    return () => {};
  }, []);

  return (
    <div className="App">
      {/* <List /> */}
      <About data={data} />
    </div>
  );
};
export default Featchusers;
