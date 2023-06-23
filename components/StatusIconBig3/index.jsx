import React from "react";
import "./StatusIconBig3.css";

function StatusIconBig3(props) {
  const { className } = props;

  return (
    <div className={`status-icon-big-1 ${className || ""}`}>
      <div className="overlap-group-13">
        <div className="group-54">
          <img className="path-33" src="/img/path-3.svg" alt="Path" />
          <div className="rectangle-48"></div>
        </div>
      </div>
    </div>
  );
}

export default StatusIconBig3;
