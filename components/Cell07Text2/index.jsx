import React from "react";
import TextIcon3 from "../TextIcon3";
import "./Cell07Text2.css";

function Cell07Text2(props) {
  const { textIcon3Props } = props;

  return (
    <div className="cell-07-text-6">
      <TextIcon3>{textIcon3Props.children}</TextIcon3>
    </div>
  );
}

export default Cell07Text2;
