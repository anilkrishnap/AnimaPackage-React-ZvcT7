import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Table4 from "../Table4";
import Table52 from "../Table52";
import Cell06Text3 from "../Cell06Text3";
import Cell07Text5 from "../Cell07Text5";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow12.css";

function TableRow12(props) {
  const { table22Props, table4Props, table52Props, table72Props, table72Props2, dividerProps } = props;

  return (
    <div className="table-row-1-2">
      <div className="inputs-42">
        <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-42">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Table4 textIconProps={table4Props.textIconProps} />
          <Table52 textIcon4Props={table52Props.textIcon4Props} />
          <Cell06Text3 />
          <Cell07Text5 textIcon12Props={table72Props.textIcon12Props} />
          <Table3 />
          <Table72 icon6Props={table72Props2.icon6Props} />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow12;
