import React from "react";
import "./Arrow.css";

function Arrow(props) {
  const { atomsIcon2019Close1, atomsIcon2019Close2, className } = props;

  return (
    <div className={`arrow ${className || ""}`}>
      <img className="atomsicon2019close-28" src={atomsIcon2019Close1} alt="ATOMS/ICON/2019/close" />
      <div className="divider-48"></div>
      <img className="atomsicon2019close-28 variant-1" src={atomsIcon2019Close2} alt="ATOMS/ICON/2019/close" />
    </div>
  );
}

export default Arrow;
