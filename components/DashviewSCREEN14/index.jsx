import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card3 from "../Card3";
import Card7 from "../Card7";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import ColumnHeader from "../ColumnHeader";
import ColumnHeader22 from "../ColumnHeader22";
import ColumnHeader32 from "../ColumnHeader32";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader7 from "../ColumnHeader7";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import Cell02Text2 from "../Cell02Text2";
import Cell03Text2 from "../Cell03Text2";
import StatusIndicator5 from "../StatusIndicator5";
import Cell05Text3 from "../Cell05Text3";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text2 from "../Cell07Text2";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import Table32 from "../Table32";
import TextIcon10 from "../TextIcon10";
import Cell05Text4 from "../Cell05Text4";
import Cell04Text4 from "../Cell04Text4";
import Cell05Text5 from "../Cell05Text5";
import Cell05Text6 from "../Cell05Text6";
import Cell04Text5 from "../Cell04Text5";
import Cell05Text2 from "../Cell05Text2";
import Cell05Text7 from "../Cell05Text7";
import Scrollbar from "../Scrollbar";
import Information from "../Information";
import Page from "../Page";
import GoTo from "../GoTo";
import Content from "../Content";
import UserInteraction from "../UserInteraction";
import "./DashviewSCREEN14.css";

function DashviewSCREEN14(props) {
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
    icon,
    headerProps,
    pageHeading3Props,
    card3Props,
    tableHeaderProps,
    actionBarProps,
    columnHeader6Props,
    divider2Props,
    table221Props,
    statusIndicator5Props,
    cell07Text21Props,
    table721Props,
    divider1Props,
    table222Props,
    cell03Text21Props,
    cell05Text4Props,
    cell07Text22Props,
    table722Props,
    divider2Props2,
    table223Props,
    cell03Text22Props,
    cell04Text41Props,
    cell07Text23Props,
    table723Props,
    divider3Props,
    table224Props,
    cell03Text23Props,
    cell04Text42Props,
    cell07Text24Props,
    table724Props,
    divider4Props,
    table225Props,
    cell03Text24Props,
    cell05Text2Props,
    cell07Text25Props,
    table725Props,
    divider5Props,
    table226Props,
    cell03Text25Props,
    cell07Text26Props,
    table726Props,
    divider6Props,
    scrollbarProps,
    informationProps,
    pageProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen14 screen">
        <div className="overlap-group3-3">
          <div className="dashview-4">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-4">
              <div className="tab-16">
                <TabItems22 />
                <Link to="/dashview-screen19">
                  <div className="tab-items-15">
                    <div className="item-name-30 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen19">
                  <div className="tab-items-15">
                    <div className="item-name-30 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-3">
              <Card3 label1={card3Props.label1} label2={card3Props.label2} label3={card3Props.label3} />
              <Link to="/dashview-screen11">
                <div className="x-pending-2">
                  <div className="label-233 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-234 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-235 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/dashview-screen12">
                <div className="x-pending-2">
                  <div className="label-233 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-234 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-235 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/dashview-screen13">
                <div className="x-pending-2">
                  <div className="label-233 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-237 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-3 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-3 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-235 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Card7 />
            </div>
            <div className="dashboard-table-4">
              <div className="table-90">
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
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <ColumnHeader />
                      <ColumnHeader22 />
                      <ColumnHeader32 />
                      <div className="column-header-4-9">
                        <div className="text-83">
                          <div className="label-236 neuehaasgroteskdisplaystd-bold-black-14px">{label9}</div>
                        </div>
                      </div>
                      <ColumnHeader5 />
                      <ColumnHeader6 text4Props={columnHeader6Props.text4Props} />
                      <ColumnHeader7 />
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Table22 src={table221Props.src} />
                      <Cell02Text2 />
                      <Cell03Text2 />
                      <div className="cell-04-text-22">
                        <div className="text-icon-107">
                          <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
                          <div className="label-236 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label10}</div>
                        </div>
                      </div>
                      <Cell05Text3 />
                      <Cell06Text2 />
                      <Cell07Text2 textIcon3Props={cell07Text21Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table721Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Table22 src={table222Props.src} />
                      <Table32 />
                      <Cell03Text2 className={cell03Text21Props.className} />
                      <div className="cell-04-text-23">
                        <TextIcon10 />
                      </div>
                      <Cell05Text4 textIcon4Props={cell05Text4Props.textIcon4Props} />
                      <Cell06Text2 />
                      <Cell07Text2 textIcon3Props={cell07Text22Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table722Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider2Props2.className} />
                </div>
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Table22 src={table223Props.src} />
                      <Table32 />
                      <Cell03Text2 className={cell03Text22Props.className} />
                      <Cell04Text4 statusIndicator5Props={cell04Text41Props.statusIndicator5Props} />
                      <Cell05Text5 />
                      <Cell06Text2 />
                      <Cell07Text2 textIcon3Props={cell07Text23Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table723Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider3Props.className} />
                </div>
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Table22 src={table224Props.src} />
                      <Table32 />
                      <Cell03Text2 className={cell03Text23Props.className} />
                      <Cell04Text4 statusIndicator5Props={cell04Text42Props.statusIndicator5Props} />
                      <Cell05Text6 />
                      <Cell06Text2 />
                      <Cell07Text2 textIcon3Props={cell07Text24Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table724Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider4Props.className} />
                </div>
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Table22 src={table225Props.src} />
                      <Table32 />
                      <Cell03Text2 className={cell03Text24Props.className} />
                      <Cell04Text5 />
                      <Cell05Text2
                        className={cell05Text2Props.className}
                        textIcon8Props={cell05Text2Props.textIcon8Props}
                      />
                      <Cell06Text2 />
                      <Cell07Text2 textIcon3Props={cell07Text25Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table725Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider5Props.className} />
                </div>
                <div className="table-row-9">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Table22 src={table226Props.src} />
                      <Table32 />
                      <Cell03Text2 className={cell03Text25Props.className} />
                      <Cell04Text5 />
                      <Cell05Text7 />
                      <Cell06Text2 />
                      <Cell07Text2 textIcon3Props={cell07Text26Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table726Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider6Props.className} />
                </div>
                <Scrollbar stateProps={scrollbarProps.stateProps} />
                <div className="pagination-5">
                  <Information showPageProps={informationProps.showPageProps} />
                  <Page pagesProps={pageProps.pagesProps} />
                  <GoTo />
                  <div className="button-5">
                    <Content />
                    <div className="dropdown-6">
                      <div className="rectangle-30-6"></div>
                      <img className="icon-56" src={icon} alt="Icon" />
                    </div>
                  </div>
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

export default DashviewSCREEN14;
