import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import Cards3 from "../Cards3";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import ColumnHeader from "../ColumnHeader";
import ColumnHeader2 from "../ColumnHeader2";
import ColumnHeader3 from "../ColumnHeader3";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Table92 from "../Table92";
import Table52 from "../Table52";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text3 from "../Cell07Text3";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import StatusIndicator3 from "../StatusIndicator3";
import Cell04Text2 from "../Cell04Text2";
import Cell05Text2 from "../Cell05Text2";
import TableRow4 from "../TableRow4";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import PageNumber4 from "../PageNumber4";
import UserInteraction from "../UserInteraction";
import "./DashviewSCREEN19.css";

function DashviewSCREEN19(props) {
  const {
    itemName1,
    itemName2,
    itemName3,
    label1,
    label2,
    label3,
    headerProps,
    pageHeading3Props,
    cards3Props,
    tableHeaderProps,
    actionBarProps,
    columnHeader6Props,
    divider2Props,
    table221Props,
    table921Props,
    table521Props,
    cell07Text31Props,
    table721Props,
    divider1Props,
    table222Props,
    table522Props,
    cell07Text32Props,
    table722Props,
    divider2Props2,
    table223Props,
    cell04Text2Props,
    cell05Text21Props,
    cell07Text33Props,
    table723Props,
    divider3Props,
    tableRow4Props,
    table224Props,
    table922Props,
    cell05Text22Props,
    cell07Text34Props,
    table724Props,
    divider4Props,
    tableRow6Props,
    scrollbarProps,
    pagination3Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen19 screen">
        <div className="overlap-group3-1">
          <div className="dashview-2">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-2">
              <div className="tab-14">
                <Link to="/dashview-screen01">
                  <div className="tab-items-1-12">
                    <div className="item-name-26 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <div className="tab-items-13">
                  <div className="item-name-27 neuehaasgroteskdisplaystd-bold-black-14px">{itemName2}</div>
                  <div className="bar-23"></div>
                </div>
                <div className="tab-items-13">
                  <Link to="/dashview-screen20">
                    <div className="item-name-28 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName3}</div>
                  </Link>
                </div>
              </div>
            </div>
            <Cards3 card31Props={cards3Props.card31Props} card32Props={cards3Props.card32Props} />
            <div className="dashboard-table-2">
              <div className="table-87">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <ActionBar
                  icon32Props={actionBarProps.icon32Props}
                  icon42Props={actionBarProps.icon42Props}
                  icon42Props2={actionBarProps.icon42Props2}
                  divider2Props={actionBarProps.divider2Props}
                />
                <div className="table-row-7">
                  <div className="inputs-37">
                    <img className="checkbox-35" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-37">
                      <ColumnHeader />
                      <ColumnHeader2 />
                      <ColumnHeader3 />
                      <div className="column-header-4-8">
                        <div className="text-79">
                          <div className="label-205 neuehaasgroteskdisplaystd-bold-black-14px">{label1}</div>
                        </div>
                      </div>
                      <ColumnHeader5 />
                      <ColumnHeader6 text4Props={columnHeader6Props.text4Props} />
                      <div className="column-header-7-10">
                        <div className="text-80">
                          <div className="label-206 neuehaasgroteskdisplaystd-bold-black-14px">{label2}</div>
                        </div>
                      </div>
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <div className="table-row-8">
                  <div className="inputs-37">
                    <img className="checkbox-35" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-37">
                      <Table22 src={table221Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <Table92
                        textIconProps={table921Props.textIconProps}
                        textIconProps2={table921Props.textIconProps2}
                      />
                      <Table52 textIcon4Props={table521Props.textIcon4Props} />
                      <Cell06Text2 />
                      <Cell07Text3 textIcon32Props={cell07Text31Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table721Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <div className="table-row-7">
                  <div className="inputs-37">
                    <img className="checkbox-35" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-37">
                      <Table22 src={table222Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <div className="table-88">
                        <div className="text-icon-106">
                          <StatusIndicator3 />
                          <div className="label-207 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label3}</div>
                        </div>
                      </div>
                      <Table52 textIcon4Props={table522Props.textIcon4Props} />
                      <Cell06Text2 />
                      <Cell07Text3 textIcon32Props={cell07Text32Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table722Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider2Props2.className} />
                </div>
                <div className="table-row-8">
                  <div className="inputs-37">
                    <img className="checkbox-35" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-37">
                      <Table22 src={table223Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <Cell04Text2 statusIndicator5Props={cell04Text2Props.statusIndicator5Props} />
                      <Cell05Text2 textIcon8Props={cell05Text21Props.textIcon8Props} />
                      <Cell06Text2 />
                      <Cell07Text3 textIcon32Props={cell07Text33Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table723Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider3Props.className} />
                </div>
                <TableRow4
                  table221Props={tableRow4Props.table221Props}
                  cell04TextProps={tableRow4Props.cell04TextProps}
                  table52Props={tableRow4Props.table52Props}
                  cell07Text2Props={tableRow4Props.cell07Text2Props}
                  table72Props={tableRow4Props.table72Props}
                  dividerProps={tableRow4Props.dividerProps}
                />
                <div className="table-row-8">
                  <div className="inputs-37">
                    <img className="checkbox-35" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-37">
                      <Table22 src={table224Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <Table92
                        textIconProps={table922Props.textIconProps}
                        textIconProps2={table922Props.textIconProps2}
                      />
                      <Cell05Text2
                        className={cell05Text22Props.className}
                        textIcon8Props={cell05Text22Props.textIcon8Props}
                      />
                      <Cell06Text2 />
                      <Cell07Text3 textIcon32Props={cell07Text34Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table724Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider4Props.className} />
                </div>
                <TableRow6
                  table22Props={tableRow6Props.table22Props}
                  cell04TextProps={tableRow6Props.cell04TextProps}
                  cell05Text2Props={tableRow6Props.cell05Text2Props}
                  cell07Text2Props={tableRow6Props.cell07Text2Props}
                  table72Props={tableRow6Props.table72Props}
                  dividerProps={tableRow6Props.dividerProps}
                />
                <Scrollbar stateProps={scrollbarProps.stateProps} />
                <Pagination3
                  showPageProps={pagination3Props.showPageProps}
                  pagesProps={pagination3Props.pagesProps}
                  goToProps2={pagination3Props.goToProps2}
                />
              </div>
            </div>
          </div>
          <PageNumber4 />
          <UserInteraction click2={userInteractionProps.click2} />
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN19;
