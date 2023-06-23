import React from "react";
import StatusIconBig3 from "../StatusIconBig3";
import TextIcon82 from "../TextIcon82";
import "./Table92.css";

function Table92(props) {
  const { textIconProps, textIconProps2 } = props;

  return (
    <div className="table-81">
      <StatusIconBig3 className={textIconProps.className} />
      <TextIcon82>{textIconProps2.children}</TextIcon82>
    </div>
  );
}

export default Table92;
