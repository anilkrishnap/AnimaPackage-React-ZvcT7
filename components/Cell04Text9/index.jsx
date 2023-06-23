import React from "react";
import StatusIndicator5 from "../StatusIndicator5";
import "./Cell04Text9.css";

function Cell04Text9(props) {
  const { label, statusIndicatorProps } = props;

  return (
    <div className="cell-04-text-14">
      <div className="text-icon-95">
        <StatusIndicator5 stateProps={statusIndicatorProps.stateProps} />
        <div className="label-192 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
      </div>
    </div>
  );
}

export default Cell04Text9;
