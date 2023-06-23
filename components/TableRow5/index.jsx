import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Table92 from "../Table92";
import Cell05Text2 from "../Cell05Text2";
import Table53 from "../Table53";
import Table62 from "../Table62";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow5.css";

function TableRow5(props) {
  const { table22Props, table92Props, cell05Text2Props, table62Props, table72Props, dividerProps } = props;

  return (
    <div className="table-row-5">
      <div className="inputs-23">
        <img className="checkbox-23" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-23">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Table92 textIconProps={table92Props.textIconProps} textIconProps2={table92Props.textIconProps2} />
          <Cell05Text2 className={cell05Text2Props.className} textIcon8Props={cell05Text2Props.textIcon8Props} />
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

export default TableRow5;
