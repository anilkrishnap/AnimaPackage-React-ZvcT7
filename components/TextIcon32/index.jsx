import React from "react";
import "./TextIcon32.css";

function TextIcon32(props) {
  const { children, className } = props;

  return (
    <div className={`text-icon-50-1 ${className || ""}`}>
      <div className="label-153 neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
    </div>
  );
}

export default TextIcon32;
