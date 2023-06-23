import React from "react";
import Table22 from "../Table22";
import Cell02Text5 from "../Cell02Text5";
import Cell04Text8 from "../Cell04Text8";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text32 from "../Cell06Text32";
import Cell07Text52 from "../Cell07Text52";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow23.css";

function TableRow23(props) {
  const {
    table22Props,
    cell02Text5Props,
    cell04Text8Props,
    cell05Text2Props,
    cell07Text5Props,
    table72Props,
    dividerProps,
  } = props;

  return (
    <div className="table-row-15">
      <div className="inputs-50">
        <img className="checkbox-52" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-50">
          <Table22 src={table22Props.src} />
          <Cell02Text5 className={cell02Text5Props.className} />
          <Cell04Text8 textIcon11Props={cell04Text8Props.textIcon11Props} />
          <Cell05Text2 className={cell05Text2Props.className} textIcon8Props={cell05Text2Props.textIcon8Props} />
          <Cell06Text32 />
          <Cell07Text52 textIcon3Props={cell07Text5Props.textIcon3Props} />
          <Table3 />
          <Table72 icon6Props={table72Props.icon6Props} />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow23;
