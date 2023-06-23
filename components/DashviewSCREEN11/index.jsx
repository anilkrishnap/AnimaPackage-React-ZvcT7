import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card3 from "../Card3";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import ColumnHeader from "../ColumnHeader";
import Text2 from "../Text2";
import ColumnHeader5 from "../ColumnHeader5";
import Text4 from "../Text4";
import Text5 from "../Text5";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import Cell02Text5 from "../Cell02Text5";
import StatusIndicator5 from "../StatusIndicator5";
import TextIcon8 from "../TextIcon8";
import TextIcon22 from "../TextIcon22";
import TextIcon12 from "../TextIcon12";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow23 from "../TableRow23";
import Cell04Text8 from "../Cell04Text8";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text32 from "../Cell06Text32";
import Table3 from "../Table3";
import StatusIconBig3 from "../StatusIconBig3";
import TextIcon32 from "../TextIcon32";
import StatusIndicator from "../StatusIndicator";
import Cell07Text52 from "../Cell07Text52";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import UserInteraction from "../UserInteraction";
import "./DashviewSCREEN11.css";

function DashviewSCREEN11(props) {
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
    label12,
    label13,
    label14,
    label15,
    headerProps,
    pageHeading3Props,
    card3Props,
    tableHeaderProps,
    actionBarProps,
    text4Props,
    divider2Props,
    table221Props,
    statusIndicator5Props,
    textIcon8Props,
    textIcon12Props,
    table721Props,
    divider1Props,
    tableRow231Props,
    table222Props,
    cell02Text51Props,
    cell04Text8Props,
    cell05Text21Props,
    table722Props,
    divider2Props2,
    tableRow232Props,
    table223Props,
    cell02Text52Props,
    statusIconBig3Props,
    cell05Text22Props,
    textIcon32Props,
    table723Props,
    divider3Props,
    table224Props,
    cell02Text53Props,
    cell05Text23Props,
    cell07Text52Props,
    table724Props,
    divider4Props,
    scrollbarProps,
    pagination3Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen11 screen">
        <div className="overlap-group3-6">
          <div className="dashview-8">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-8">
              <div className="tab-20">
                <TabItems22 />
                <Link to="/dashview-screen19">
                  <div className="tab-items-19">
                    <div className="item-name-35 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen19">
                  <div className="tab-items-19">
                    <div className="item-name-35 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-7">
              <Card3 label1={card3Props.label1} label2={card3Props.label2} label3={card3Props.label3} />
              <div className="card-7">
                <div className="label-281 neuehaasgroteskdisplaystd-regular-normal-white-lilac-14px">{label1}</div>
                <div className="label-282 neuehaasgroteskdisplaystd-bold-white-lilac-24px">{label2}</div>
                <div className="label-283 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
              </div>
              <Link to="/dashview-screen12">
                <div className="al-pending-1">
                  <div className="label-281 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-282 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-283 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/dashview-screen13">
                <div className="al-pending-1">
                  <div className="label-281 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-285 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-7 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-7 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-283 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/dashview-screen14">
                <div className="al-pending-1">
                  <div className="label-281 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-282 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-283 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-7">
              <div className="table-101">
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
                <div className="table-row-13">
                  <div className="inputs-49">
                    <img className="checkbox-47" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-49">
                      <ColumnHeader />
                      <div className="column-header-2-11">
                        <Text2 />
                      </div>
                      <div className="column-header-10">
                        <div className="text-86">
                          <div className="label-284 neuehaasgroteskdisplaystd-bold-black-14px">{label12}</div>
                        </div>
                      </div>
                      <ColumnHeader5 />
                      <div className="column-header-10">
                        <Text4>{text4Props.children}</Text4>
                      </div>
                      <div className="column-header-10">
                        <Text5 />
                      </div>
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <div className="table-row-14">
                  <div className="inputs-49">
                    <img className="checkbox-48" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-49">
                      <Table22 src={table221Props.src} />
                      <Cell02Text5 />
                      <div className="table-102">
                        <div className="text-icon-136">
                          <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
                          <div className="label-284 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label13}</div>
                        </div>
                      </div>
                      <div className="cell-05-text-37">
                        <TextIcon8>{textIcon8Props.children}</TextIcon8>
                      </div>
                      <div className="cell-06-text-22">
                        <TextIcon22 />
                      </div>
                      <div className="cell-07-text-29">
                        <TextIcon12 className={textIcon12Props.className} />
                      </div>
                      <div className="table-103">
                        <img className="view-12" src="/img/view-48.svg" alt="View" />
                      </div>
                      <Table72 icon6Props={table721Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <TableRow23
                  table22Props={tableRow231Props.table22Props}
                  cell02Text5Props={tableRow231Props.cell02Text5Props}
                  cell04Text8Props={tableRow231Props.cell04Text8Props}
                  cell05Text2Props={tableRow231Props.cell05Text2Props}
                  cell07Text5Props={tableRow231Props.cell07Text5Props}
                  table72Props={tableRow231Props.table72Props}
                  dividerProps={tableRow231Props.dividerProps}
                />
                <div className="table-row-14">
                  <div className="inputs-49">
                    <img className="checkbox-49" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-49">
                      <Table22 src={table222Props.src} />
                      <Cell02Text5 className={cell02Text51Props.className} />
                      <Cell04Text8 textIcon11Props={cell04Text8Props.textIcon11Props} />
                      <Cell05Text2
                        className={cell05Text21Props.className}
                        textIcon8Props={cell05Text21Props.textIcon8Props}
                      />
                      <Cell06Text32 />
                      <div className="cell-07-text-28">
                        <TextIcon12 />
                      </div>
                      <Table3 />
                      <Table72 icon6Props={table722Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider2Props2.className} />
                </div>
                <TableRow23
                  table22Props={tableRow232Props.table22Props}
                  cell02Text5Props={tableRow232Props.cell02Text5Props}
                  cell04Text8Props={tableRow232Props.cell04Text8Props}
                  cell05Text2Props={tableRow232Props.cell05Text2Props}
                  cell07Text5Props={tableRow232Props.cell07Text5Props}
                  table72Props={tableRow232Props.table72Props}
                  dividerProps={tableRow232Props.dividerProps}
                />
                <div className="table-row-14">
                  <div className="inputs-49">
                    <img className="checkbox-50" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-49">
                      <Table22 src={table223Props.src} />
                      <Cell02Text5 className={cell02Text52Props.className} />
                      <div className="table-104">
                        <StatusIconBig3 className={statusIconBig3Props.className} />
                        <div className="text-icon-136">
                          <div className="label-284 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label14}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text22Props.className}
                        textIcon8Props={cell05Text22Props.textIcon8Props}
                      />
                      <Cell06Text32 />
                      <div className="cell-07-text-28">
                        <TextIcon32 className={textIcon32Props.className}>{textIcon32Props.children}</TextIcon32>
                      </div>
                      <Table3 />
                      <Table72 icon6Props={table723Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider3Props.className} />
                </div>
                <div className="table-row-13">
                  <div className="inputs-49">
                    <img className="checkbox-51" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-49">
                      <Table22 src={table224Props.src} />
                      <Cell02Text5 className={cell02Text53Props.className} />
                      <div className="cell-04-text-33">
                        <div className="text-icon-136">
                          <StatusIndicator />
                          <div className="label-286 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label15}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text23Props.className}
                        textIcon8Props={cell05Text23Props.textIcon8Props}
                      />
                      <Cell06Text32 />
                      <Cell07Text52 textIcon3Props={cell07Text52Props.textIcon3Props} />
                      <Table3 />
                      <Table72 icon6Props={table724Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider4Props.className} />
                </div>
                <Scrollbar stateProps={scrollbarProps.stateProps} />
                <Pagination3
                  showPageProps={pagination3Props.showPageProps}
                  pagesProps={pagination3Props.pagesProps}
                  goToProps2={pagination3Props.goToProps2}
                />
              </div>
            </div>
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN11;
