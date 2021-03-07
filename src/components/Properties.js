/* eslint-disable */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "./Alert";
// import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((res) => {
        console.log(res.data);
        setProperties = res.data;
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, []);

  if (!alert.isSuccess) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }
};

export default Properties;
