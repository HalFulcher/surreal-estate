/* eslint-disable */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
// import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const [];

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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  if (!alert.isSuccess) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }

  return <SideBar />;
};

export default Properties;
