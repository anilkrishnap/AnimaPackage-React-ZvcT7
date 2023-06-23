import React from "react";
import TextIcon11 from "../TextIcon11";
import "./Cell04Text8.css";

function Cell04Text8(props) {
  const { textIcon11Props } = props;

  return (
    <div className="cell-04-text-34">
      <TextIcon11 label={textIcon11Props.label} statusIndicator5Props={textIcon11Props.statusIndicator5Props} />
    </div>
  );
}

export default Cell04Text8;
