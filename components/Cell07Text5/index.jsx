import React from "react";
import TextIcon12 from "../TextIcon12";
import "./Cell07Text5.css";

function Cell07Text5(props) {
  const { textIcon12Props } = props;

  return (
    <div className="cell-07-text-20">
      <TextIcon12 className={textIcon12Props.className} />
    </div>
  );
}

export default Cell07Text5;
