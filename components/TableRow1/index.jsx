import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Table33 from "../Table33";
import Table52 from "../Table52";
import Table53 from "../Table53";
import Table62 from "../Table62";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow1.css";

function TableRow1(props) {
  const { table22Props, table33Props, table52Props, table62Props, table72Props, dividerProps } = props;

  return (
    <div className="table-row-1">
      <div className="inputs-6">
        <img className="checkbox-6" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-6">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Table33 textIconProps={table33Props.textIconProps} />
          <Table52 textIcon4Props={table52Props.textIcon4Props} />
          <Table53 />
          <Table62 textIcon3Props={table62Props.textIcon3Props} />
          <Table3 />
          <Table72 icon6Props={table72Props.icon6Props} />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow1;
