import React from "react";
import "./Icon22.css";

function Icon22(props) {
  const { src, className } = props;

  return (
    <div className={`atomsicon2019close ${className || ""}`}>
      <div className="group-12" style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  );
}

export default Icon22;
