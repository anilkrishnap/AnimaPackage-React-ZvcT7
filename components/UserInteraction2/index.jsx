import React from "react";
import "./UserInteraction2.css";

function UserInteraction2(props) {
  const { className } = props;

  return (
    <div className={`user-interaction-6 ${className || ""}`}>
      <img className="icon-filled-cursor" src="/img/icon---filled---cursor.svg" alt="Icon / Filled / Cursor" />
      <div className="hover neuehaasgroteskdisplaystd-regular-normal-black-10px">HOVER</div>
    </div>
  );
}

export default UserInteraction2;
