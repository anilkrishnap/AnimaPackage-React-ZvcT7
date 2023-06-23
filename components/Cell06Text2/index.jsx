import React from "react";
import TextIcon22 from "../TextIcon22";
import "./Cell06Text2.css";

function Cell06Text2(props) {
  const { className } = props;

  return (
    <div className={`cell-06-text-6 ${className || ""}`}>
      <TextIcon22 />
    </div>
  );
}

export default Cell06Text2;
