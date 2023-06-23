import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Cell04Text9 from "../Cell04Text9";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text2 from "../Cell07Text2";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow4.css";

function TableRow4(props) {
  const { table221Props, cell04TextProps, table52Props, cell07Text2Props, table72Props, dividerProps } = props;

  return (
    <div className="table-row-4">
      <div className="inputs-16">
        <img className="checkbox-16" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-16">
          <Table22 src={table221Props.src} />
          <Table32 />
          <Cell03Text />
          <Cell04Text9 label={cell04TextProps.label} statusIndicatorProps={cell04TextProps.statusIndicatorProps} />
          <Cell05Text2 textIcon8Props={table52Props.textIcon8Props} />
          <Cell06Text2 />
          <Cell07Text2 textIcon3Props={cell07Text2Props.textIcon3Props} />
          <Table3 />
          <Table72 icon6Props={table72Props.icon6Props} />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow4;
