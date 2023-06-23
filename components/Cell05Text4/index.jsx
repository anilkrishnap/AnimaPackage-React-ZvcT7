import React from "react";
import TextIcon4 from "../TextIcon4";
import "./Cell05Text4.css";

function Cell05Text4(props) {
  const { textIcon4Props } = props;

  return (
    <div className="cell-05-text-28">
      <TextIcon4>{textIcon4Props.children}</TextIcon4>
    </div>
  );
}

export default Cell05Text4;
