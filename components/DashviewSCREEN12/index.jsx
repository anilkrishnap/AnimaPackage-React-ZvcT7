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
import Text2 from "../Text2";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader7 from "../ColumnHeader7";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import TextIcon from "../TextIcon";
import TextIcon2 from "../TextIcon2";
import StatusIndicator3 from "../StatusIndicator3";
import Cell05Text7 from "../Cell05Text7";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text3 from "../Cell07Text3";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow22 from "../TableRow22";
import Cell02Text4 from "../Cell02Text4";
import Cell03Text4 from "../Cell03Text4";
import StatusIndicator5 from "../StatusIndicator5";
import Cell05Text2 from "../Cell05Text2";
import TextIcon12 from "../TextIcon12";
import Cell02Text3 from "../Cell02Text3";
import Cell03Text3 from "../Cell03Text3";
import Table6 from "../Table6";
import Cell07Text4 from "../Cell07Text4";
import StatusIconBig3 from "../StatusIconBig3";
import TextIcon9 from "../TextIcon9";
import Scrollbar from "../Scrollbar";
import PageNumber5 from "../PageNumber5";
import PageNumber6 from "../PageNumber6";
import Content from "../Content";
import UserInteraction from "../UserInteraction";
import "./DashviewSCREEN12.css";

function DashviewSCREEN12(props) {
  const {
    itemName1,
    itemName2,
    label1,
    label2,
    label3,
    label4,
    spanText1,
    spanText2,
    label5,
    label6,
    label7,
    label8,
    label9,
    label10,
    label11,
    placeholderText1,
    atomsIcon2019Close1,
    displaying5Of50Rows,
    atomsIcon2019Close2,
    atomsIcon2019Close3,
    placeholderText2,
    placeholderText3,
    atomsIcon2019Close4,
    atomsIcon2019Close5,
    placeholderText4,
    text7,
    icon,
    screenshot20230601At4531,
    headerProps,
    pageHeading3Props,
    card3Props,
    tableHeaderProps,
    actionBarProps,
    columnHeader61Props,
    columnHeader62Props,
    divider2Props,
    table221Props,
    cell06Text2Props,
    cell07Text31Props,
    table721Props,
    divider1Props,
    tableRow221Props,
    table222Props,
    statusIndicator5Props,
    cell05Text21Props,
    table722Props,
    divider2Props2,
    table223Props,
    table6Props,
    cell05Text22Props,
    cell07Text4Props,
    table723Props,
    divider3Props,
    table224Props,
    statusIconBig3Props,
    textIcon9Props,
    cell05Text23Props,
    cell07Text32Props,
    table724Props,
    divider4Props,
    tableRow222Props,
    scrollbarProps,
    pageNumber51Props,
    pageNumber52Props,
    pageNumber53Props,
    pageNumber54Props,
    pageNumber61Props,
    pageNumber55Props,
    pageNumber62Props,
    pageNumber63Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashview-screen12 screen">
        <div className="overlap-group3-5">
          <div className="dashview-6">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-6">
              <div className="tab-18">
                <TabItems22 />
                <Link to="/dashview-screen19">
                  <div className="tab-items-17">
                    <div className="item-name-32 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/dashview-screen19">
                  <div className="tab-items-17">
                    <div className="item-name-33 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-5">
              <Card3 label1={card3Props.label1} label2={card3Props.label2} label3={card3Props.label3} />
              <Link to="/dashview-screen11">
                <div className="x-pending-4">
                  <div className="label-259 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-260 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-261 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Card7 />
              <Link to="/dashview-screen13">
                <div className="x-pending-4">
                  <div className="label-259 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-262 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-5 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-5 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-261 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label5}</p>
                </div>
              </Link>
              <Link to="/dashview-screen14">
                <div className="x-pending-4">
                  <div className="label-259 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label6}</div>
                  <div className="label-260 neuehaasgroteskdisplaystd-bold-black-24px">{label7}</div>
                  <div className="label-261 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-initial-pending">
              <div className="table-93">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <ActionBar
                  className={actionBarProps.className}
                  icon32Props={actionBarProps.icon32Props}
                  icon42Props={actionBarProps.icon42Props}
                  icon42Props2={actionBarProps.icon42Props2}
                  divider2Props={actionBarProps.divider2Props}
                />
                <div className="table-92">
                  <div className="inputs-40">
                    <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-40">
                      <ColumnHeader />
                      <div className="column-header-2-10">
                        <Text2 />
                      </div>
                      <div className="column-header-3-9">
                        <div className="text-85">
                          <div className="label-263 neuehaasgroteskdisplaystd-bold-black-14px">{label9}</div>
                        </div>
                      </div>
                      <ColumnHeader6
                        className={columnHeader61Props.className}
                        text4Props={columnHeader61Props.text4Props}
                      />
                      <ColumnHeader5 />
                      <ColumnHeader6 text4Props={columnHeader62Props.text4Props} />
                      <ColumnHeader7 />
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <div className="table-row-11">
                  <div className="inputs-40">
                    <img className="checkbox-38" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-40">
                      <Table22 src={table221Props.src} />
                      <div className="cell-02-text-12">
                        <TextIcon />
                      </div>
                      <div className="cell-03-text-11">
                        <TextIcon2 />
                      </div>
                      <div className="table-94">
                        <div className="text-icon-124">
                          <StatusIndicator3 />
                          <div className="label-264 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label10}</div>
                        </div>
                      </div>
                      <Cell05Text7 />
                      <Cell06Text2 className={cell06Text2Props.className} />
                      <Cell07Text3 textIcon32Props={cell07Text31Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table721Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <TableRow22
                  table22Props={tableRow221Props.table22Props}
                  table6Props={tableRow221Props.table6Props}
                  cell07Text4Props={tableRow221Props.cell07Text4Props}
                  table72Props={tableRow221Props.table72Props}
                  dividerProps={tableRow221Props.dividerProps}
                />
                <div className="table-row-11">
                  <div className="inputs-40">
                    <img className="checkbox-38" src="/img/checkbox-2.svg" alt="Checkbox" />
                    <div className="row-data-40">
                      <Table22 src={table222Props.src} />
                      <Cell02Text4 />
                      <Cell03Text4 />
                      <div className="cell-04-text-30">
                        <div className="text-icon-124">
                          <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
                          <div className="label-265 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label11}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text21Props.className}
                        textIcon8Props={cell05Text21Props.textIcon8Props}
                      />
                      <Cell06Text2 />
                      <div className="cell-07-text-18">
                        <TextIcon12 />
                      </div>
                      <Table3 />
                      <Table72 icon6Props={table722Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider2Props2.className} />
                </div>
                <div className="table-92">
                  <div className="inputs-40">
                    <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-40">
                      <Table22 src={table223Props.src} />
                      <Cell02Text3 />
                      <Cell03Text3 />
                      <Table6 statusIndicator22Props={table6Props.statusIndicator22Props} />
                      <Cell05Text2
                        className={cell05Text22Props.className}
                        textIcon8Props={cell05Text22Props.textIcon8Props}
                      />
                      <Cell06Text2 />
                      <Cell07Text4 textIcon32Props={cell07Text4Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table723Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider3Props.className} />
                </div>
                <div className="table-row-11">
                  <div className="inputs-40">
                    <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-40">
                      <Table22 src={table224Props.src} />
                      <Cell02Text4 />
                      <Cell03Text4 />
                      <div className="table-95">
                        <StatusIconBig3 className={statusIconBig3Props.className} />
                        <TextIcon9 className={textIcon9Props.className}>{textIcon9Props.children}</TextIcon9>
                      </div>
                      <Cell05Text2
                        className={cell05Text23Props.className}
                        textIcon8Props={cell05Text23Props.textIcon8Props}
                      />
                      <Cell06Text2 />
                      <Cell07Text3 textIcon32Props={cell07Text32Props.textIcon32Props} />
                      <Table3 />
                      <Table72 icon6Props={table724Props.icon6Props} />
                    </div>
                  </div>
                  <Divider className={divider4Props.className} />
                </div>
                <TableRow22
                  table22Props={tableRow222Props.table22Props}
                  table6Props={tableRow222Props.table6Props}
                  cell07Text4Props={tableRow222Props.cell07Text4Props}
                  table72Props={tableRow222Props.table72Props}
                  dividerProps={tableRow222Props.dividerProps}
                />
                <Scrollbar stateProps={scrollbarProps.stateProps} />
                <div className="pagination-7">
                  <div className="pagination-item">
                    <div className="show-page-11">
                      <div className="input-fields-19">
                        <div className="elements-47">
                          <div className="frame-31-11">
                            <div className="placeholder-text-128 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                              {placeholderText1}
                            </div>
                            <img
                              className="atomsicon2019close-33"
                              src={atomsIcon2019Close1}
                              alt="ATOMS/ICON/2019/close"
                            />
                          </div>
                          <div className="divider-73"></div>
                        </div>
                      </div>
                    </div>
                    <p className="displaying-5-of-50-rows-11 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                      {displaying5Of50Rows}
                    </p>
                  </div>
                  <div className="page-11">
                    <div className="pages-11">
                      <div className="arrow-11">
                        <img className="atomsicon2019close-34" src={atomsIcon2019Close2} alt="ATOMS/ICON/2019/close" />
                        <div className="divider-72"></div>
                        <img className="atomsicon2019close-35" src={atomsIcon2019Close3} alt="ATOMS/ICON/2019/close" />
                      </div>
                      <div className="page-number-57">
                        <div className="placeholder-text-129 neuehaasgroteskdisplaystd-regular-normal-white-14px">
                          {placeholderText2}
                        </div>
                      </div>
                      <PageNumber5>{pageNumber51Props.children}</PageNumber5>
                      <PageNumber5>{pageNumber52Props.children}</PageNumber5>
                      <PageNumber5>{pageNumber53Props.children}</PageNumber5>
                      <PageNumber5>{pageNumber54Props.children}</PageNumber5>
                      <PageNumber6>{pageNumber61Props.children}</PageNumber6>
                      <PageNumber5>{pageNumber55Props.children}</PageNumber5>
                      <PageNumber6>{pageNumber62Props.children}</PageNumber6>
                      <PageNumber6>{pageNumber63Props.children}</PageNumber6>
                      <div className="page-number-58">
                        <div className="placeholder-text-130 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                          {placeholderText3}
                        </div>
                      </div>
                      <div className="arrow-11">
                        <img className="atomsicon2019close-37" src={atomsIcon2019Close4} alt="ATOMS/ICON/2019/close" />
                        <div className="divider-72"></div>
                        <img className="atomsicon2019close-38" src={atomsIcon2019Close5} alt="ATOMS/ICON/2019/close" />
                      </div>
                    </div>
                  </div>
                  <div className="pagination-item">
                    <div className="input-fields-20">
                      <div className="page-number-59">
                        <div className="placeholder-text-131 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                          {placeholderText4}
                        </div>
                      </div>
                      <div className="divider-74"></div>
                    </div>
                    <div className="text-7-1 neuehaasgroteskdisplaystd-regular-normal-black-14px">{text7}</div>
                  </div>
                  <div className="button-7">
                    <Content />
                    <div className="dropdown-8">
                      <div className="rectangle-30-8"></div>
                      <img className="icon-58" src={icon} alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="screenshot-2023-06-01-at-453-1"
                src={screenshot20230601At4531}
                alt="Screenshot 2023-06-01 at 4.53 1"
              />
            </div>
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default DashviewSCREEN12;
