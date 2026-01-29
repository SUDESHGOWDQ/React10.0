import React from "react";
import "./index.css";

const Loader = ({ size = 40, color = "#3498db" }) => {
  return (
    <div
      className="loader"
      style={{
        width: size,
        height: size,
        borderTopColor: color,
      }}
    />
  );
};

export default Loader;
