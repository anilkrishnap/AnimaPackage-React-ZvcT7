import React from "react";
import "./InputFields.css";

function InputFields(props) {
  const { atomsIcon2019Close, className } = props;

  return (
    <div className={`input-fields ${className || ""}`}>
      <div className="elements-25">
        <div className="frame-31">
          <div className="placeholder-text-60 neuehaasgroteskdisplaystd-regular-normal-black-14px">5</div>
          <img className="atomsicon2019close-24" src={atomsIcon2019Close} alt="ATOMS/ICON/2019/close" />
        </div>
        <div className="divider-37"></div>
      </div>
    </div>
  );
}

export default InputFields;
