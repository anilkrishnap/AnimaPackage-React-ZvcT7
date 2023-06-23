import React from "react";
import Table22 from "../Table22";
import Cell02Text3 from "../Cell02Text3";
import Cell03Text3 from "../Cell03Text3";
import Table6 from "../Table6";
import Cell05Text7 from "../Cell05Text7";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text4 from "../Cell07Text4";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow22.css";

function TableRow22(props) {
  const { table22Props, table6Props, cell07Text4Props, table72Props, dividerProps } = props;

  return (
    <div className="table-row-12">
      <div className="inputs-41">
        <img className="checkbox-39" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-41">
          <Table22 src={table22Props.src} />
          <Cell02Text3 />
          <Cell03Text3 />
          <Table6 statusIndicator22Props={table6Props.statusIndicator22Props} />
          <Cell05Text7 />
          <Cell06Text2 />
          <Cell07Text4 textIcon32Props={cell07Text4Props.textIcon32Props} />
          <Table3 />
          <Table72 icon6Props={table72Props.icon6Props} />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow22;
