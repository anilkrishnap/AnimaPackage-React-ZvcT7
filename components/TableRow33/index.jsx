import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Cell04Text2 from "../Cell04Text2";
import Cell05Text2 from "../Cell05Text2";
import Table53 from "../Table53";
import TextIcon12 from "../TextIcon12";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow33.css";

function TableRow33(props) {
  const { table22Props, cell04Text2Props, cell05Text2Props, table72Props, dividerProps } = props;

  return (
    <div className="table-row-3-2">
      <div className="inputs-45">
        <img className="checkbox-43" src="/img/checkbox-2.svg" alt="Checkbox" />
        <div className="row-data-45">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Cell04Text2 statusIndicator5Props={cell04Text2Props.statusIndicator5Props} />
          <Cell05Text2 textIcon8Props={cell05Text2Props.textIcon8Props} />
          <Table53 />
          <div className="cell-07-text-24">
            <TextIcon12 />
          </div>
          <Table3 />
          <Table72 icon6Props={table72Props.icon6Props} />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow33;
