import React from "react";
import StatusIndicator from "../StatusIndicator";
import "./Cell04Text.css";

function Cell04Text(props) {
  const { label } = props;

  return (
    <div className="cell-04-text">
      <div className="text-icon-59">
        <StatusIndicator />
        <div className="label-156 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
      </div>
    </div>
  );
}

export default Cell04Text;
