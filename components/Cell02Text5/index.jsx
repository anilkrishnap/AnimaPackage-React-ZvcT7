import React from "react";
import TextIcon from "../TextIcon";
import "./Cell02Text5.css";

function Cell02Text5(props) {
  const { className } = props;

  return (
    <div className={`cell-02-text-16 ${className || ""}`}>
      <TextIcon />
    </div>
  );
}

export default Cell02Text5;
