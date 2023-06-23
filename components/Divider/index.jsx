import React from "react";
import "./Divider.css";

function Divider(props) {
  const { className } = props;

  return <div className={`divider-12 ${className || ""}`}></div>;
}

export default Divider;
