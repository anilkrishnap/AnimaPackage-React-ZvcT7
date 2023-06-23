import React from "react";
import Icon7 from "../Icon7";
import "./MenuLogo.css";

function MenuLogo(props) {
  const { className } = props;

  return (
    <div className={`menu-logo ${className || ""}`}>
      <Icon7 />
      <img className="marcl-logo" src="/img/marcl-logo.svg" alt="Marcl logo" />
    </div>
  );
}

export default MenuLogo;
