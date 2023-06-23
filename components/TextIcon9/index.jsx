import React from "react";
import "./TextIcon9.css";

function TextIcon9(props) {
  const { children, className } = props;

  return (
    <div className={`text-icon-104 ${className || ""}`}>
      <div className="label-204 neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
    </div>
  );
}

export default TextIcon9;
