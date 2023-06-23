import React from "react";
import Table32 from "../Table32";
import TextIcon2 from "../TextIcon2";
import StatusIndicator5 from "../StatusIndicator5";
import TextIcon9 from "../TextIcon9";
import TextIcon3 from "../TextIcon3";
import Table3 from "../Table3";
import Divider from "../Divider";
import "./TableRow14.css";

function TableRow14(props) {
  const { statusIndicator5Props, textIcon9Props, textIcon3Props, dividerProps } = props;

  return (
    <div className="table-row">
      <div className="inputs-36">
        <div className="row-data-36">
          <div className="cell-01-text-25">
            <img className="icon-54" src="/img/icon.svg" alt="Icon" />
          </div>
          <Table32 />
          <div className="cell-03-text-7">
            <TextIcon2 />
          </div>
          <div className="cell-04-text-21">
            <div className="text-icon-102">
              <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
              <div className="label-202 neuehaasgroteskdisplaystd-regular-normal-black-14px">Submitted</div>
            </div>
          </div>
          <div className="cell-05-text-25">
            <div className="text-icon-103">
              <div className="label-203 neuehaasgroteskdisplaystd-regular-normal-black-14px">WO0000004536543</div>
            </div>
          </div>
          <div className="cell-06-text-17">
            <TextIcon9>{textIcon9Props.children}</TextIcon9>
          </div>
          <div className="cell-07-text-15">
            <TextIcon3>{textIcon3Props.children}</TextIcon3>
          </div>
          <Table3 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow14;
