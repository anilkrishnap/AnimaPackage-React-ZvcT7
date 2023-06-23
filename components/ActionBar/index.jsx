import React from "react";
import Frame182 from "../Frame182";
import Icon32 from "../Icon32";
import SearchInput from "../SearchInput";
import Icon42 from "../Icon42";
import Icon52 from "../Icon52";
import Divider2 from "../Divider2";
import "./ActionBar.css";

function ActionBar(props) {
  const { className, icon32Props, icon42Props, icon42Props2, divider2Props } = props;

  return (
    <div className={`action-bar-1 ${className || ""}`}>
      <div className="overlap-group1-1">
        <div className="setting-1">
          <div className="template-1">
            <div className="dropdown-input-1">
              <Frame182 />
              <div className="elements-36"></div>
            </div>
            <Icon32 saveGridSettingsProps={icon32Props.saveGridSettingsProps} />
          </div>
          <SearchInput className={icon42Props.className} frame183Props={icon42Props.frame183Props} />
          <Icon42 className={icon42Props2.className} />
          <Icon52 />
        </div>
        <Divider2 className={divider2Props.className} />
      </div>
    </div>
  );
}

export default ActionBar;
