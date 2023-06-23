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
import TableRow5 from "../TableRow5";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Information from "../Information";
import Page from "../Page";
import GoTo from "../GoTo";
import Content from "../Content";
import TooltipTitle3 from "../TooltipTitle3";
import UserInteraction from "../UserInteraction";
import "./DashviewSCREEN10.css";

function DashviewSCREEN10(props) {
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
    tableRow5Props,
    tableRow6Props,
    scrollbarProps,
    informationProps,
    pageProps,
    tooltipTitle3Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen10 screen">
        <div className="overlap-group4-2">
          <div className="dashview-11">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-11">
              <div className="tab-23">
                <TabItems22 />
                <Link to="/dashview-screen19">
                  <div className="tab-items-22">
                    <div className="item-name-38 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen19">
                  <div className="tab-items-22">
                    <div className="item-name-38 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-10">
              <Card7 />
              <Link to="/dashview-screen11">
                <div className="x-pending-8">
                  <div className="label-295 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-296 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-297 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/dashview-screen12">
                <div className="x-pending-8">
                  <div className="label-295 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-296 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-297 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/dashview-screen13">
                <div className="x-pending-8">
                  <div className="label-295 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-298 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-10 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-10 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-297 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/dashview-screen14">
                <div className="x-pending-8">
                  <div className="label-295 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-296 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-297 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-10">
              <div className="table-109">
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
                <div className="pagination-11">
                  <Information showPageProps={informationProps.showPageProps} />
                  <Page pagesProps={pageProps.pagesProps} />
                  <GoTo />
                  <div className="button-11">
                    <Content />
                    <div className="dropdown-12">
                      <div className="rectangle-30-12"></div>
                      <img className="icon-62" src={icon} alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tooltip-2">
            <div className="overlap-group2-4">
              <img className="arrow-14" src="/img/arrow-2.svg" alt="Arrow" />
              <div className="stroke-2">
                <div className="override-this-2">
                  <TooltipTitle3 className={tooltipTitle3Props.className}>{tooltipTitle3Props.children}</TooltipTitle3>
                </div>
              </div>
            </div>
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN10;
