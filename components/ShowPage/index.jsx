import React from "react";
import InputFields from "../InputFields";
import "./ShowPage.css";

function ShowPage(props) {
  const { inputFieldsProps } = props;

  return (
    <div className="show-page">
      <InputFields atomsIcon2019Close={inputFieldsProps.atomsIcon2019Close} className={inputFieldsProps.className} />
    </div>
  );
}

export default ShowPage;
