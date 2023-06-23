import React from "react";
import Icon22 from "../Icon22";
import "./Frame183.css";

function Frame183(props) {
  const { icon22Props } = props;

  return (
    <div className="frame-18-24">
      <div className="frame-32-24">
        <div className="placeholder-text-48 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">Search</div>
      </div>
      <Icon22 src={icon22Props.src} className={icon22Props.className} />
    </div>
  );
}

export default Frame183;
