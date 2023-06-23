import React from "react";
import StatusIndicator5 from "../StatusIndicator5";
import "./Cell04Text6.css";

function Cell04Text6(props) {
  const { statusIndicator5Props } = props;

  return (
    <div className="cell-04-text-28">
      <div className="text-icon-122">
        <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
        <div className="label-257 neuehaasgroteskdisplaystd-regular-normal-black-14px">Final Pending - Open</div>
      </div>
    </div>
  );
}

export default Cell04Text6;
