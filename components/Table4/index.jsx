import React from "react";
import TextIcon6 from "../TextIcon6";
import "./Table4.css";

function Table4(props) {
  const { textIconProps } = props;

  return (
    <div className="table-98">
      <img className="notification-2" src="/img/notification-2.svg" alt="Notification" />
      <TextIcon6>{textIconProps.children}</TextIcon6>
    </div>
  );
}

export default Table4;
