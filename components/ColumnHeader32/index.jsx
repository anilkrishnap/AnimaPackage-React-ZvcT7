import React from "react";
import Text3 from "../Text3";
import "./ColumnHeader32.css";

function ColumnHeader32(props) {
  const { className } = props;

  return (
    <div className={`column-header-3-7 ${className || ""}`}>
      <Text3 />
    </div>
  );
}

export default ColumnHeader32;
