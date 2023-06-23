import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card7 from "../Card7";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import TableHeader2 from "../TableHeader2";
import TableRow1 from "../TableRow1";
import TableRow2 from "../TableRow2";
import TableRow3 from "../TableRow3";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import Dropdown3 from "../Dropdown3";
import "./DashviewSCREEN02.css";

function DashviewSCREEN02(props) {
  const {
    itemName1,
    itemName2,
    label1,
    label2,
    label3,
    label4,
    label5,
    label6,
    label7,
    spanText1,
    spanText2,
    label8,
    label9,
    label10,
    label11,
    click2,
    inputField1,
    inputField2,
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    actionBarProps,
    tableHeader2Props,
    tableRow1Props,
    tableRow2Props,
    tableRow3Props,
    tableRow4Props,
    tableRow5Props,
    tableRow6Props,
    scrollbarProps,
    pagination3Props,
    dropdown3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen02 screen">
        <div className="overlap-group4-1">
          <div className="dashview-3">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-3">
              <div className="tab-15">
                <TabItems22 />
                <Link to="/dashview-screen19">
                  <div className="tab-items-14">
                    <div className="item-name-29 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen19">
                  <div className="tab-items-14">
                    <div className="item-name-29 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-2">
              <Card7 />
              <Link to="/dashview-screen11">
                <div className="x-pending-1">
                  <div className="label-229 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-230 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-231 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/dashview-screen12">
                <div className="x-pending-1">
                  <div className="label-229 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-230 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-231 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/dashview-screen13">
                <div className="x-pending-1">
                  <div className="label-229 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-232 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-2 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-2 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-231 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/dashview-screen14">
                <div className="x-pending-1">
                  <div className="label-229 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-230 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-231 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-3">
              <div className="table-89">
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
                <TableHeader2
                  columnHeader25Props={tableHeader2Props.columnHeader25Props}
                  divider2Props={tableHeader2Props.divider2Props}
                />
                <TableRow1
                  table22Props={tableRow1Props.table22Props}
                  table33Props={tableRow1Props.table33Props}
                  table52Props={tableRow1Props.table52Props}
                  table62Props={tableRow1Props.table62Props}
                  table72Props={tableRow1Props.table72Props}
                  dividerProps={tableRow1Props.dividerProps}
                />
                <TableRow2
                  table22Props={tableRow2Props.table22Props}
                  cell04TextProps={tableRow2Props.cell04TextProps}
                  table52Props={tableRow2Props.table52Props}
                  cell07Text2Props={tableRow2Props.cell07Text2Props}
                  table72Props={tableRow2Props.table72Props}
                  dividerProps={tableRow2Props.dividerProps}
                />
                <TableRow3
                  table22Props={tableRow3Props.table22Props}
                  cell04Text2Props={tableRow3Props.cell04Text2Props}
                  cell05Text2Props={tableRow3Props.cell05Text2Props}
                  table62Props={tableRow3Props.table62Props}
                  table72Props={tableRow3Props.table72Props}
                  dividerProps={tableRow3Props.dividerProps}
                />
                <TableRow4
                  table221Props={tableRow4Props.table221Props}
                  cell04TextProps={tableRow4Props.cell04TextProps}
                  table52Props={tableRow4Props.table52Props}
                  cell07Text2Props={tableRow4Props.cell07Text2Props}
                  table72Props={tableRow4Props.table72Props}
                  dividerProps={tableRow4Props.dividerProps}
                />
                <TableRow5
                  table22Props={tableRow5Props.table22Props}
                  table92Props={tableRow5Props.table92Props}
                  cell05Text2Props={tableRow5Props.cell05Text2Props}
                  table62Props={tableRow5Props.table62Props}
                  table72Props={tableRow5Props.table72Props}
                  dividerProps={tableRow5Props.dividerProps}
                />
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
          <div className="click-container-7">
            <img className="click-14" src="/img/click-2.svg" alt="Click" />
            <div className="click-15 neuehaasgroteskdisplaystd-regular-normal-black-10px">{click2}</div>
          </div>
          <div className="overlap-group3-2">
            <Dropdown3
              dropdownMenu1Props={dropdown3Props.dropdownMenu1Props}
              dropdownMenu2Props={dropdown3Props.dropdownMenu2Props}
              dropdownMenu3Props={dropdown3Props.dropdownMenu3Props}
              dropdownMenu4Props={dropdown3Props.dropdownMenu4Props}
              dropdownMenu2Props2={dropdown3Props.dropdownMenu2Props2}
              dropdownMenu5Props={dropdown3Props.dropdownMenu5Props}
              scrollbar2Props={dropdown3Props.scrollbar2Props}
            />
            <img className="input-field" src={inputField1} alt="Input Field" />
            <img className="input-field-1" src={inputField2} alt="Input Field" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN02;
