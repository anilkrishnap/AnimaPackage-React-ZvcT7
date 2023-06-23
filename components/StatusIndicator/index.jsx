import React from "react";
import State from "../State";
import "./StatusIndicator.css";

function StatusIndicator() {
  return (
    <div className="status-indicator">
      <State />
    </div>
  );
}

export default StatusIndicator;
