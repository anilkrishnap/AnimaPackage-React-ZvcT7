import React from "react";
import StatusIndicator5 from "../StatusIndicator5";
import "./Cell04Text4.css";

function Cell04Text4(props) {
  const { statusIndicator5Props } = props;

  return (
    <div className="cell-04-text-24">
      <div className="text-icon-111">
        <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
        <div className="label-241 neuehaasgroteskdisplaystd-regular-normal-black-14px">Final Pending - Restored</div>
      </div>
    </div>
  );
}

export default Cell04Text4;
