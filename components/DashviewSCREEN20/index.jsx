import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import Text from "../Text";
import ColumnHeader2 from "../ColumnHeader2";
import Text3 from "../Text3";
import ColumnHeader8 from "../ColumnHeader8";
import Divider2 from "../Divider2";
import TableRow14 from "../TableRow14";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import PageNumber4 from "../PageNumber4";
import "./DashviewSCREEN20.css";

function DashviewSCREEN20(props) {
  const {
    itemName1,
    itemName2,
    itemName3,
    label1,
    label2,
    label3,
    label4,
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    actionBarProps,
    divider2Props,
    tableRow141Props,
    tableRow142Props,
    tableRow143Props,
    tableRow144Props,
    tableRow145Props,
    tableRow146Props,
    scrollbarProps,
    pagination3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen20 screen">
        <div className="overlap-group2">
          <div className="dashview-1">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-1">
              <div className="tab-13">
                <Link to="/dashview-screen01">
                  <div className="tab-items-1-11">
                    <div className="item-name-23 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen14">
                  <div className="tab-items-2-1">
                    <div className="item-name-24 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
                <div className="tab-items-3-1">
                  <div className="item-name-25 neuehaasgroteskdisplaystd-bold-black-14px">{itemName3}</div>
                  <div className="bar-22"></div>
                </div>
              </div>
            </div>
            <div className="dashboard-table-1">
              <div className="table-86">
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
                <div className="table-row-header">
                  <div className="inputs-35">
                    <div className="row-data-35">
                      <div className="column-header-1-11">
                        <Text />
                      </div>
                      <ColumnHeader2 />
                      <div className="column-header">
                        <Text3 />
                      </div>
                      <div className="column-header-4-7">
                        <div className="text-77">
                          <div className="label-199 neuehaasgroteskdisplaystd-bold-black-14px">{label1}</div>
                        </div>
                      </div>
                      <div className="column-header-5-11">
                        <div className="text-78">
                          <div className="label-199 neuehaasgroteskdisplaystd-bold-black-14px">{label2}</div>
                        </div>
                      </div>
                      <div className="column-header">
                        <div className="text-76">
                          <div className="label-200 neuehaasgroteskdisplaystd-bold-black-14px">{label3}</div>
                        </div>
                      </div>
                      <div className="column-header-7-9">
                        <div className="text-76">
                          <div className="label-201 neuehaasgroteskdisplaystd-bold-black-14px">{label4}</div>
                        </div>
                      </div>
                      <ColumnHeader8 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <TableRow14
                  statusIndicator5Props={tableRow141Props.statusIndicator5Props}
                  textIcon9Props={tableRow141Props.textIcon9Props}
                  textIcon3Props={tableRow141Props.textIcon3Props}
                  dividerProps={tableRow141Props.dividerProps}
                />
                <TableRow14
                  statusIndicator5Props={tableRow142Props.statusIndicator5Props}
                  textIcon9Props={tableRow142Props.textIcon9Props}
                  textIcon3Props={tableRow142Props.textIcon3Props}
                  dividerProps={tableRow142Props.dividerProps}
                />
                <TableRow14
                  statusIndicator5Props={tableRow143Props.statusIndicator5Props}
                  textIcon9Props={tableRow143Props.textIcon9Props}
                  textIcon3Props={tableRow143Props.textIcon3Props}
                  dividerProps={tableRow143Props.dividerProps}
                />
                <TableRow14
                  statusIndicator5Props={tableRow144Props.statusIndicator5Props}
                  textIcon9Props={tableRow144Props.textIcon9Props}
                  textIcon3Props={tableRow144Props.textIcon3Props}
                  dividerProps={tableRow144Props.dividerProps}
                />
                <TableRow14
                  statusIndicator5Props={tableRow145Props.statusIndicator5Props}
                  textIcon9Props={tableRow145Props.textIcon9Props}
                  textIcon3Props={tableRow145Props.textIcon3Props}
                  dividerProps={tableRow145Props.dividerProps}
                />
                <TableRow14
                  statusIndicator5Props={tableRow146Props.statusIndicator5Props}
                  textIcon9Props={tableRow146Props.textIcon9Props}
                  textIcon3Props={tableRow146Props.textIcon3Props}
                  dividerProps={tableRow146Props.dividerProps}
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
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN20;
