import React from "react";
import TextIcon2 from "../TextIcon2";
import "./Cell03Text2.css";

function Cell03Text2(props) {
  const { className } = props;

  return (
    <div className={`cell-03-text-10 ${className || ""}`}>
      <TextIcon2 />
    </div>
  );
}

export default Cell03Text2;
