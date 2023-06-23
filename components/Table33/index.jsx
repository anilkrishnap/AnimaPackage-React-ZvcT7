import React from "react";
import TextIcon82 from "../TextIcon82";
import "./Table33.css";

function Table33(props) {
  const { textIconProps } = props;

  return (
    <div className="table-27">
      <img className="notification" src="/img/notification.svg" alt="Notification" />
      <TextIcon82>{textIconProps.children}</TextIcon82>
    </div>
  );
}

export default Table33;
