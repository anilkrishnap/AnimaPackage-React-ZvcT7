import React from "react";
import "./Card3.css";

function Card3(props) {
  const { label1, label2, label3 } = props;

  return (
    <div className="al-pending">
      <div className="label-211 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
      <div className="label-212 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
      <div className="label-213 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label3}</div>
    </div>
  );
}

export default Card3;
