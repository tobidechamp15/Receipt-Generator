// Loader.js
import React from "react";
import "./loader.css";

const Loader = ({ loading }) => {
  return loading ? <div className="loader"></div> : null;
};

export default Loader;
