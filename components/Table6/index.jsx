import React from "react";
import StatusIndicator22 from "../StatusIndicator22";
import "./Table6.css";

function Table6(props) {
  const { statusIndicator22Props } = props;

  return (
    <div className="table-96">
      <div className="text-icon-125">
        <StatusIndicator22 className={statusIndicator22Props.className} />
        <div className="label-266 neuehaasgroteskdisplaystd-regular-normal-black-14px">Initial Pending</div>
      </div>
    </div>
  );
}

export default Table6;
