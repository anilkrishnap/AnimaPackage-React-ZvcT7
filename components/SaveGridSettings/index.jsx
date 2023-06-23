import React from "react";
import "./SaveGridSettings.css";

function SaveGridSettings(props) {
  const { className } = props;

  return (
    <div className={`save_-grid_-settings ${className || ""}`}>
      <div className="rectangle-36"></div>
      <img className="path-5" src="/img/path-1.svg" alt="Path" />
    </div>
  );
}

export default SaveGridSettings;
