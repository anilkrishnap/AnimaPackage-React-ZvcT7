import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card7 from "../Card7";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import TableHeader2 from "../TableHeader2";
import TableRow12 from "../TableRow12";
import TableRow2 from "../TableRow2";
import TableRow33 from "../TableRow33";
import TableRow4 from "../TableRow4";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import StatusIconBig3 from "../StatusIconBig3";
import TextIcon82 from "../TextIcon82";
import Cell05Text2 from "../Cell05Text2";
import Table53 from "../Table53";
import Table62 from "../Table62";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Information from "../Information";
import Page from "../Page";
import GoTo from "../GoTo";
import Content from "../Content";
import UserInteraction2 from "../UserInteraction2";
import Stroke from "../Stroke";
import "./DashviewSCREEN08.css";

function DashviewSCREEN08(props) {
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
    icon,
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    actionBarProps,
    tableHeader2Props,
    tableRow12Props,
    tableRow2Props,
    tableRow33Props,
    tableRow4Props,
    table22Props,
    textIcon82Props,
    cell05Text2Props,
    table62Props,
    table72Props,
    dividerProps,
    tableRow6Props,
    scrollbarProps,
    informationProps,
    pageProps,
    userInteraction2Props,
    strokeProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen08 screen">
        <div className="overlap-group3-7">
          <div className="dashview-9">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-9">
              <div className="tab-21">
                <TabItems22 />
                <Link to="/dashview-screen19">
                  <div className="tab-items-20">
                    <div className="item-name-36 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen19">
                  <div className="tab-items-20">
                    <div className="item-name-36 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-8">
              <Card7 />
              <Link to="/dashview-screen11">
                <div className="x-pending-6">
                  <div className="label-287 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-288 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-289 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/dashview-screen12">
                <div className="x-pending-6">
                  <div className="label-287 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-288 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-289 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/dashview-screen13">
                <div className="x-pending-6">
                  <div className="label-287 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-290 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-8 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-8 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-289 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/dashview-screen14">
                <div className="x-pending-6">
                  <div className="label-287 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-288 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-289 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-8">
              <div className="table-105">
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
                <TableRow12
                  table22Props={tableRow12Props.table22Props}
                  table4Props={tableRow12Props.table4Props}
                  table52Props={tableRow12Props.table52Props}
                  table72Props={tableRow12Props.table72Props}
                  table72Props2={tableRow12Props.table72Props2}
                  dividerProps={tableRow12Props.dividerProps}
                />
                <TableRow2
                  table22Props={tableRow2Props.table22Props}
                  cell04TextProps={tableRow2Props.cell04TextProps}
                  table52Props={tableRow2Props.table52Props}
                  cell07Text2Props={tableRow2Props.cell07Text2Props}
                  table72Props={tableRow2Props.table72Props}
                  dividerProps={tableRow2Props.dividerProps}
                />
                <TableRow33
                  table22Props={tableRow33Props.table22Props}
                  cell04Text2Props={tableRow33Props.cell04Text2Props}
                  cell05Text2Props={tableRow33Props.cell05Text2Props}
                  table72Props={tableRow33Props.table72Props}
                  dividerProps={tableRow33Props.dividerProps}
                />
                <TableRow4
                  table221Props={tableRow4Props.table221Props}
                  cell04TextProps={tableRow4Props.cell04TextProps}
                  table52Props={tableRow4Props.table52Props}
                  cell07Text2Props={tableRow4Props.cell07Text2Props}
                  table72Props={tableRow4Props.table72Props}
                  dividerProps={tableRow4Props.dividerProps}
                />
                <div className="table-row-5-5">
                  <div className="inputs-51">
                    <img className="checkbox-53" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-51">
                      <Table22 src={table22Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <Link to="/dashview-screen09">
                        <div className="table-106">
                          <StatusIconBig3 />
                          <TextIcon82>{textIcon82Props.children}</TextIcon82>
                        </div>
                      </Link>
                      <Cell05Text2
                        className={cell05Text2Props.className}
                        textIcon8Props={cell05Text2Props.textIcon8Props}
                      />
                      <Table53 />
                      <Table62 textIcon3Props={table62Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table72Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={dividerProps.className} />
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
                <div className="pagination-9">
                  <Information showPageProps={informationProps.showPageProps} />
                  <Page pagesProps={pageProps.pagesProps} />
                  <GoTo />
                  <div className="button-9">
                    <Content />
                    <div className="dropdown-10">
                      <div className="rectangle-30-10"></div>
                      <img className="icon-60" src={icon} alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UserInteraction2 className={userInteraction2Props.className} />
          <div className="tooltip">
            <div className="overlap-group2-2">
              <img className="arrow-12" src="/img/arrow.svg" alt="Arrow" />
              <Stroke textCopy={strokeProps.textCopy} tooltipTitle3Props={strokeProps.tooltipTitle3Props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN08;
