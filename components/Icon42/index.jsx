import React from "react";
import "./Icon42.css";

function Icon42(props) {
  const { className } = props;

  return <div className={`icon-12 ${className || ""}`}></div>;
}

export default Icon42;
