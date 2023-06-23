import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DashviewSCREEN01 from "./components/DashviewSCREEN01";
import DashviewSCREEN20 from "./components/DashviewSCREEN20";
import DashviewSCREEN19 from "./components/DashviewSCREEN19";
import DashviewSCREEN02 from "./components/DashviewSCREEN02";
import DashviewSCREEN14 from "./components/DashviewSCREEN14";
import DashviewSCREEN13 from "./components/DashviewSCREEN13";
import DashviewSCREEN12 from "./components/DashviewSCREEN12";
import DashviewSCREEN07 from "./components/DashviewSCREEN07";
import DashviewSCREEN11 from "./components/DashviewSCREEN11";
import DashviewSCREEN08 from "./components/DashviewSCREEN08";
import DashviewSCREEN09 from "./components/DashviewSCREEN09";
import DashviewSCREEN10 from "./components/DashviewSCREEN10";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashview-screen01">
          <DashviewSCREEN01 {...dashviewSCREEN01Data} />
        </Route>
        <Route path="/dashview-screen20">
          <DashviewSCREEN20 {...dashviewSCREEN20Data} />
        </Route>
        <Route path="/dashview-screen19">
          <DashviewSCREEN19 {...dashviewSCREEN19Data} />
        </Route>
        <Route path="/:path(|dashview-screen02)">
          <DashviewSCREEN02 {...dashviewSCREEN02Data} />
        </Route>
        <Route path="/dashview-screen14">
          <DashviewSCREEN14 {...dashviewSCREEN14Data} />
        </Route>
        <Route path="/dashview-screen13">
          <DashviewSCREEN13 {...dashviewSCREEN13Data} />
        </Route>
        <Route path="/dashview-screen12">
          <DashviewSCREEN12 {...dashviewSCREEN12Data} />
        </Route>
        <Route path="/dashview-screen07">
          <DashviewSCREEN07 {...dashviewSCREEN07Data} />
        </Route>
        <Route path="/dashview-screen11">
          <DashviewSCREEN11 {...dashviewSCREEN11Data} />
        </Route>
        <Route path="/dashview-screen08">
          <DashviewSCREEN08 {...dashviewSCREEN08Data} />
        </Route>
        <Route path="/dashview-screen09">
          <DashviewSCREEN09 {...dashviewSCREEN09Data} />
        </Route>
        <Route path="/dashview-screen10">
          <DashviewSCREEN10 {...dashviewSCREEN10Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const menuLogo1Data = {
    className: "",
};

const icon221Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame181Data = {
    icon22Props: icon221Data,
};

const aTOMSICON2019notification1Data = {
    className: "",
};

const aTOMSICON2019support1Data = {
    className: "",
};

const aTOMSAVATARDEFAULT1Data = {
    className: "",
};

const header1Data = {
    menuLogoProps: menuLogo1Data,
    frame18Props: frame181Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification1Data,
    aTOMSICON2019supportProps: aTOMSICON2019support1Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT1Data,
};

const divider2Data = {
    className: "atomsdividersline2-pxblack",
};

const pageHeading31Data = {
    dividerProps: divider2Data,
};

const divider3Data = {
    className: "divider",
};

const divider22Data = {
    className: "",
};

const tableHeader1Data = {
    dividerProps: divider3Data,
    dividerProps2: divider22Data,
};

const saveGridSettings1Data = {
    className: "",
};

const icon321Data = {
    saveGridSettingsProps: saveGridSettings1Data,
};

const icon222Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1831Data = {
    icon22Props: icon222Data,
};

const searchInput1Data = {
    frame183Props: frame1831Data,
};

const divider23Data = {
    className: "divider-13",
};

const text41Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader61Data = {
    text4Props: text41Data,
};

const divider24Data = {
    className: "divider-14",
};

const tableHeader21Data = {
    columnHeader25Props: columnHeader61Data,
    divider2Props: divider24Data,
};

const table221Data = {
    src: "/img/icon.svg",
};

const textIcon821Data = {
    children: "4 Hours",
};

const table331Data = {
    textIconProps: textIcon821Data,
};

const textIcon41Data = {
    children: "5 Days",
};

const table521Data = {
    textIcon4Props: textIcon41Data,
};

const textIcon321Data = {
    children: "John Carter",
};

const table621Data = {
    textIcon3Props: textIcon321Data,
};

const icon621Data = {
    className: "",
};

const table721Data = {
    icon6Props: icon621Data,
};

const divider4Data = {
    className: "divider",
};

const tableRow11Data = {
    table22Props: table221Data,
    table33Props: table331Data,
    table52Props: table521Data,
    table62Props: table621Data,
    table72Props: table721Data,
    dividerProps: divider4Data,
};

const table222Data = {
    src: "/img/icon-1.svg",
};

const cell04Text1Data = {
    label: "Final Pending - Open",
};

const textIcon42Data = {
    children: "2 Days",
};

const table522Data = {
    textIcon4Props: textIcon42Data,
};

const textIcon33Data = {
    children: "John Carter",
};

const cell07Text21Data = {
    textIcon3Props: textIcon33Data,
};

const icon622Data = {
    className: "icon-38-2",
};

const table722Data = {
    icon6Props: icon622Data,
};

const divider5Data = {
    className: "divider",
};

const tableRow21Data = {
    table22Props: table222Data,
    cell04TextProps: cell04Text1Data,
    table52Props: table522Data,
    cell07Text2Props: cell07Text21Data,
    table72Props: table722Data,
    dividerProps: divider5Data,
};

const table223Data = {
    src: "/img/icon.svg",
};

const state2Data = {
    className: "rectangle-5-2",
};

const statusIndicator51Data = {
    stateProps: state2Data,
};

const cell04Text21Data = {
    statusIndicator5Props: statusIndicator51Data,
};

const textIcon81Data = {
    children: "20 Days",
};

const cell05Text21Data = {
    textIcon8Props: textIcon81Data,
};

const textIcon322Data = {
    children: "--",
    className: "",
};

const table622Data = {
    textIcon3Props: textIcon322Data,
};

const icon623Data = {
    className: "",
};

const table723Data = {
    icon6Props: icon623Data,
};

const divider6Data = {
    className: "divider",
};

const tableRow31Data = {
    table22Props: table223Data,
    cell04Text2Props: cell04Text21Data,
    cell05Text2Props: cell05Text21Data,
    table62Props: table622Data,
    table72Props: table723Data,
    dividerProps: divider6Data,
};

const table224Data = {
    src: "/img/icon-4@2x.png",
};

const state3Data = {
    className: "rectangle-5-2",
};

const statusIndicator52Data = {
    stateProps: state3Data,
};

const cell04Text91Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator52Data,
};

const textIcon83Data = {
    children: "20 Days",
};

const cell05Text22Data = {
    textIcon8Props: textIcon83Data,
};

const textIcon34Data = {
    children: "John Carter",
};

const cell07Text22Data = {
    textIcon3Props: textIcon34Data,
};

const icon624Data = {
    className: "",
};

const table724Data = {
    icon6Props: icon624Data,
};

const divider7Data = {
    className: "divider",
};

const tableRow41Data = {
    table221Props: table224Data,
    cell04TextProps: cell04Text91Data,
    table52Props: cell05Text22Data,
    cell07Text2Props: cell07Text22Data,
    table72Props: table724Data,
    dividerProps: divider7Data,
};

const table225Data = {
    src: "/img/icon.svg",
};

const statusIconBig31Data = {
    className: "",
};

const textIcon822Data = {
    children: "Initial Pending",
};

const table921Data = {
    textIconProps: statusIconBig31Data,
    textIconProps2: textIcon822Data,
};

const textIcon84Data = {
    children: "4 Hours",
};

const cell05Text23Data = {
    className: "cell-05-text-8",
    textIcon8Props: textIcon84Data,
};

const textIcon323Data = {
    children: "John Carter",
    className: "text-icon-50",
};

const table623Data = {
    textIcon3Props: textIcon323Data,
};

const icon625Data = {
    className: "",
};

const table725Data = {
    icon6Props: icon625Data,
};

const divider8Data = {
    className: "divider",
};

const tableRow51Data = {
    table22Props: table225Data,
    table92Props: table921Data,
    cell05Text2Props: cell05Text23Data,
    table62Props: table623Data,
    table72Props: table725Data,
    dividerProps: divider8Data,
};

const table226Data = {
    src: "/img/icon-1.svg",
};

const cell04Text3Data = {
    label: "Initial Pending",
};

const textIcon85Data = {
    children: "4 Hours",
};

const cell05Text24Data = {
    className: "cell-05-text-8",
    textIcon8Props: textIcon85Data,
};

const textIcon35Data = {
    children: "John Carter",
};

const cell07Text23Data = {
    textIcon3Props: textIcon35Data,
};

const icon626Data = {
    className: "icon-38",
};

const table726Data = {
    icon6Props: icon626Data,
};

const divider9Data = {
    className: "divider",
};

const tableRow61Data = {
    table22Props: table226Data,
    cell04TextProps: cell04Text3Data,
    cell05Text2Props: cell05Text24Data,
    cell07Text2Props: cell07Text23Data,
    table72Props: table726Data,
    dividerProps: divider9Data,
};

const state5Data = {
    className: "scroller",
};

const scrollbar1Data = {
    stateProps: state5Data,
};

const inputFields1Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
    className: "",
};

const showPage1Data = {
    inputFieldsProps: inputFields1Data,
};

const information1Data = {
    showPageProps: showPage1Data,
};

const arrow1Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-3.svg",
    className: "",
};

const pageNumber21Data = {
    children: "2",
};

const pageNumber22Data = {
    children: "3",
};

const pageNumber23Data = {
    children: "4",
};

const pageNumber24Data = {
    children: "5",
};

const pageNumber31Data = {
    children: "6",
};

const pageNumber25Data = {
    children: "7",
};

const pageNumber32Data = {
    children: "8",
};

const pageNumber33Data = {
    children: "9",
};

const arrow2Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-4.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
    className: "",
};

const pages1Data = {
    arrow1Props: arrow1Data,
    pageNumber21Props: pageNumber21Data,
    pageNumber22Props: pageNumber22Data,
    pageNumber23Props: pageNumber23Data,
    pageNumber24Props: pageNumber24Data,
    pageNumber25Props: pageNumber31Data,
    pageNumber26Props: pageNumber25Data,
    pageNumber27Props: pageNumber32Data,
    pageNumber28Props: pageNumber33Data,
    arrow2Props: arrow2Data,
};

const page1Data = {
    pagesProps: pages1Data,
};

const dropdown1Data = {
    src: "/img/icon-6.svg",
};

const button1Data = {
    dropdownProps: dropdown1Data,
};

const pagination31Data = {
    showPageProps: information1Data,
    pagesProps: page1Data,
    goToProps2: button1Data,
};

const dashviewSCREEN01Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    click2: "",
    number: "4",
    headerProps: header1Data,
    pageHeading3Props: pageHeading31Data,
    tableHeaderProps: tableHeader1Data,
    icon32Props: icon321Data,
    searchInputProps: searchInput1Data,
    divider2Props: divider23Data,
    tableHeader2Props: tableHeader21Data,
    tableRow1Props: tableRow11Data,
    tableRow2Props: tableRow21Data,
    tableRow3Props: tableRow31Data,
    tableRow4Props: tableRow41Data,
    tableRow5Props: tableRow51Data,
    tableRow6Props: tableRow61Data,
    scrollbarProps: scrollbar1Data,
    pagination3Props: pagination31Data,
};

const menuLogo2Data = {
    className: "",
};

const icon223Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame184Data = {
    icon22Props: icon223Data,
};

const aTOMSICON2019notification2Data = {
    className: "",
};

const aTOMSICON2019support2Data = {
    className: "",
};

const aTOMSAVATARDEFAULT2Data = {
    className: "",
};

const header2Data = {
    menuLogoProps: menuLogo2Data,
    frame18Props: frame184Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification2Data,
    aTOMSICON2019supportProps: aTOMSICON2019support2Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT2Data,
};

const divider11Data = {
    className: "atomsdividersline2-pxblack-1",
};

const pageHeading32Data = {
    dividerProps: divider11Data,
};

const divider12Data = {
    className: "divider-1",
};

const divider25Data = {
    className: "",
};

const tableHeader3Data = {
    dividerProps: divider12Data,
    dividerProps2: divider25Data,
};

const saveGridSettings2Data = {
    className: "",
};

const icon322Data = {
    saveGridSettingsProps: saveGridSettings2Data,
};

const icon224Data = {
    src: "/img/shape-17.svg",
    className: "menu-logo-1",
};

const frame1832Data = {
    icon22Props: icon224Data,
};

const searchInput2Data = {
    className: "",
    frame183Props: frame1832Data,
};

const icon422Data = {
    className: "",
};

const divider26Data = {
    className: "divider-15",
};

const actionBar1Data = {
    icon32Props: icon322Data,
    icon42Props: searchInput2Data,
    icon42Props2: icon422Data,
    divider2Props: divider26Data,
};

const divider27Data = {
    className: "divider-16",
};

const state6Data = {
    className: "rectangle-5-20",
};

const statusIndicator53Data = {
    stateProps: state6Data,
};

const textIcon92Data = {
    children: "04/04/2023 05:30",
};

const textIcon36Data = {
    children: "Tom Parker",
};

const divider13Data = {
    className: "divider-1",
};

const tableRow141Data = {
    statusIndicator5Props: statusIndicator53Data,
    textIcon9Props: textIcon92Data,
    textIcon3Props: textIcon36Data,
    dividerProps: divider13Data,
};

const state7Data = {
    className: "rectangle-5-20",
};

const statusIndicator54Data = {
    stateProps: state7Data,
};

const textIcon93Data = {
    children: "04/04/2023 05:30",
};

const textIcon37Data = {
    children: "Tom Parker",
};

const divider14Data = {
    className: "divider-1",
};

const tableRow142Data = {
    statusIndicator5Props: statusIndicator54Data,
    textIcon9Props: textIcon93Data,
    textIcon3Props: textIcon37Data,
    dividerProps: divider14Data,
};

const state8Data = {
    className: "rectangle-5-20",
};

const statusIndicator55Data = {
    stateProps: state8Data,
};

const textIcon94Data = {
    children: "04/04/2023 05:30",
};

const textIcon38Data = {
    children: "Tom Parker",
};

const divider15Data = {
    className: "divider-1",
};

const tableRow143Data = {
    statusIndicator5Props: statusIndicator55Data,
    textIcon9Props: textIcon94Data,
    textIcon3Props: textIcon38Data,
    dividerProps: divider15Data,
};

const state9Data = {
    className: "rectangle-5-20",
};

const statusIndicator56Data = {
    stateProps: state9Data,
};

const textIcon95Data = {
    children: "04/04/2023 05:30",
};

const textIcon39Data = {
    children: "Tom Parker",
};

const divider16Data = {
    className: "divider-1",
};

const tableRow144Data = {
    statusIndicator5Props: statusIndicator56Data,
    textIcon9Props: textIcon95Data,
    textIcon3Props: textIcon39Data,
    dividerProps: divider16Data,
};

const state10Data = {
    className: "rectangle-5-20",
};

const statusIndicator57Data = {
    stateProps: state10Data,
};

const textIcon96Data = {
    children: "04/04/2023 05:30",
};

const textIcon310Data = {
    children: "Tom Parker",
};

const divider17Data = {
    className: "divider-1",
};

const tableRow145Data = {
    statusIndicator5Props: statusIndicator57Data,
    textIcon9Props: textIcon96Data,
    textIcon3Props: textIcon310Data,
    dividerProps: divider17Data,
};

const state11Data = {
    className: "rectangle-5-20",
};

const statusIndicator58Data = {
    stateProps: state11Data,
};

const textIcon97Data = {
    children: "04/04/2023 05:30",
};

const textIcon311Data = {
    children: "Tom Parker",
};

const divider18Data = {
    className: "divider-1",
};

const tableRow146Data = {
    statusIndicator5Props: statusIndicator58Data,
    textIcon9Props: textIcon97Data,
    textIcon3Props: textIcon311Data,
    dividerProps: divider18Data,
};

const state12Data = {
    className: "scroller-1",
};

const scrollbar2Data = {
    stateProps: state12Data,
};

const inputFields3Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
    className: "",
};

const showPage2Data = {
    inputFieldsProps: inputFields3Data,
};

const information2Data = {
    showPageProps: showPage2Data,
};

const arrow3Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-3.svg",
    className: "",
};

const pageNumber26Data = {
    children: "2",
};

const pageNumber27Data = {
    children: "3",
};

const pageNumber28Data = {
    children: "4",
};

const pageNumber29Data = {
    children: "5",
};

const pageNumber34Data = {
    children: "6",
};

const pageNumber210Data = {
    children: "7",
};

const pageNumber35Data = {
    children: "8",
};

const pageNumber36Data = {
    children: "9",
};

const arrow4Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-4.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
    className: "",
};

const pages2Data = {
    arrow1Props: arrow3Data,
    pageNumber21Props: pageNumber26Data,
    pageNumber22Props: pageNumber27Data,
    pageNumber23Props: pageNumber28Data,
    pageNumber24Props: pageNumber29Data,
    pageNumber25Props: pageNumber34Data,
    pageNumber26Props: pageNumber210Data,
    pageNumber27Props: pageNumber35Data,
    pageNumber28Props: pageNumber36Data,
    arrow2Props: arrow4Data,
};

const page2Data = {
    pagesProps: pages2Data,
};

const dropdown2Data = {
    src: "/img/icon-6.svg",
};

const button2Data = {
    dropdownProps: dropdown2Data,
};

const pagination32Data = {
    showPageProps: information2Data,
    pagesProps: page2Data,
    goToProps2: button2Data,
};

const dashviewSCREEN20Data = {
    itemName1: "Current Reports",
    itemName2: "My Reports",
    itemName3: "Submitted Reports",
    label1: "Status",
    label2: "Workbench - Remedy",
    label3: "Submitted on (UTC)",
    label4: "Submitted by",
    headerProps: header2Data,
    pageHeading3Props: pageHeading32Data,
    tableHeaderProps: tableHeader3Data,
    actionBarProps: actionBar1Data,
    divider2Props: divider27Data,
    tableRow141Props: tableRow141Data,
    tableRow142Props: tableRow142Data,
    tableRow143Props: tableRow143Data,
    tableRow144Props: tableRow144Data,
    tableRow145Props: tableRow145Data,
    tableRow146Props: tableRow146Data,
    scrollbarProps: scrollbar2Data,
    pagination3Props: pagination32Data,
};

const menuLogo3Data = {
    className: "",
};

const icon225Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame185Data = {
    icon22Props: icon225Data,
};

const aTOMSICON2019notification3Data = {
    className: "",
};

const aTOMSICON2019support3Data = {
    className: "",
};

const aTOMSAVATARDEFAULT3Data = {
    className: "",
};

const header3Data = {
    menuLogoProps: menuLogo3Data,
    frame18Props: frame185Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification3Data,
    aTOMSICON2019supportProps: aTOMSICON2019support3Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT3Data,
};

const divider20Data = {
    className: "atomsdividersline2-pxblack-2",
};

const pageHeading33Data = {
    dividerProps: divider20Data,
};

const card31Data = {
    label1: "Initial Pending",
    label2: "22",
    label3: "12 Non-automated Reports",
};

const card32Data = {
    label1: "Final Pending - Restored",
    label2: "14",
    label3: "12 Unassigned Reports",
};

const cards3Data = {
    card31Props: card31Data,
    card32Props: card32Data,
};

const divider21Data = {
    className: "divider-2",
};

const divider28Data = {
    className: "",
};

const tableHeader4Data = {
    dividerProps: divider21Data,
    dividerProps2: divider28Data,
};

const saveGridSettings3Data = {
    className: "",
};

const icon323Data = {
    saveGridSettingsProps: saveGridSettings3Data,
};

const icon226Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1833Data = {
    icon22Props: icon226Data,
};

const searchInput3Data = {
    className: "",
    frame183Props: frame1833Data,
};

const icon423Data = {
    className: "",
};

const divider29Data = {
    className: "divider-17",
};

const actionBar2Data = {
    icon32Props: icon323Data,
    icon42Props: searchInput3Data,
    icon42Props2: icon423Data,
    divider2Props: divider29Data,
};

const text42Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader62Data = {
    text4Props: text42Data,
};

const divider210Data = {
    className: "divider-18",
};

const table227Data = {
    src: "/img/icon.svg",
};

const statusIconBig32Data = {
    className: "status-icon-big-9",
};

const textIcon823Data = {
    children: "Final Pending - Open",
};

const table922Data = {
    textIconProps: statusIconBig32Data,
    textIconProps2: textIcon823Data,
};

const textIcon43Data = {
    children: "5 Days",
};

const table523Data = {
    textIcon4Props: textIcon43Data,
};

const textIcon324Data = {
    children: "No",
    className: "",
};

const cell07Text31Data = {
    textIcon32Props: textIcon324Data,
};

const icon627Data = {
    className: "",
};

const table727Data = {
    icon6Props: icon627Data,
};

const divider30Data = {
    className: "divider-2",
};

const table228Data = {
    src: "/img/icon-1.svg",
};

const textIcon44Data = {
    children: "2 Days",
};

const table524Data = {
    textIcon4Props: textIcon44Data,
};

const textIcon325Data = {
    children: "Yes",
    className: "",
};

const cell07Text32Data = {
    textIcon32Props: textIcon325Data,
};

const icon628Data = {
    className: "icon-39-2",
};

const table728Data = {
    icon6Props: icon628Data,
};

const divider31Data = {
    className: "divider-2",
};

const table229Data = {
    src: "/img/icon.svg",
};

const state14Data = {
    className: "rectangle-5-4",
};

const statusIndicator59Data = {
    stateProps: state14Data,
};

const cell04Text22Data = {
    statusIndicator5Props: statusIndicator59Data,
};

const textIcon86Data = {
    children: "20 Days",
};

const cell05Text25Data = {
    textIcon8Props: textIcon86Data,
};

const textIcon326Data = {
    children: "Yes",
    className: "",
};

const cell07Text33Data = {
    textIcon32Props: textIcon326Data,
};

const icon629Data = {
    className: "",
};

const table729Data = {
    icon6Props: icon629Data,
};

const divider32Data = {
    className: "divider-2",
};

const table2210Data = {
    src: "/img/icon-4@2x.png",
};

const state15Data = {
    className: "rectangle-5-4",
};

const statusIndicator510Data = {
    stateProps: state15Data,
};

const cell04Text92Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator510Data,
};

const textIcon87Data = {
    children: "20 Days",
};

const cell05Text26Data = {
    textIcon8Props: textIcon87Data,
};

const textIcon312Data = {
    children: "No",
};

const cell07Text24Data = {
    textIcon3Props: textIcon312Data,
};

const icon6210Data = {
    className: "",
};

const table7210Data = {
    icon6Props: icon6210Data,
};

const divider33Data = {
    className: "divider-2",
};

const tableRow42Data = {
    table221Props: table2210Data,
    cell04TextProps: cell04Text92Data,
    table52Props: cell05Text26Data,
    cell07Text2Props: cell07Text24Data,
    table72Props: table7210Data,
    dividerProps: divider33Data,
};

const table2211Data = {
    src: "/img/icon.svg",
};

const statusIconBig33Data = {
    className: "",
};

const textIcon824Data = {
    children: "Initial Pending",
};

const table923Data = {
    textIconProps: statusIconBig33Data,
    textIconProps2: textIcon824Data,
};

const textIcon88Data = {
    children: "4 Hours",
};

const cell05Text27Data = {
    className: "cell-05-text-10",
    textIcon8Props: textIcon88Data,
};

const textIcon327Data = {
    children: "Yes",
    className: "",
};

const cell07Text34Data = {
    textIcon32Props: textIcon327Data,
};

const icon6211Data = {
    className: "",
};

const table7211Data = {
    icon6Props: icon6211Data,
};

const divider34Data = {
    className: "divider-2",
};

const table2212Data = {
    src: "/img/icon-1.svg",
};

const cell04Text4Data = {
    label: "Initial Pending",
};

const textIcon89Data = {
    children: "4 Hours",
};

const cell05Text28Data = {
    className: "cell-05-text-10",
    textIcon8Props: textIcon89Data,
};

const textIcon313Data = {
    children: "Yes",
};

const cell07Text25Data = {
    textIcon3Props: textIcon313Data,
};

const icon6212Data = {
    className: "icon-39",
};

const table7212Data = {
    icon6Props: icon6212Data,
};

const divider35Data = {
    className: "divider-2",
};

const tableRow62Data = {
    table22Props: table2212Data,
    cell04TextProps: cell04Text4Data,
    cell05Text2Props: cell05Text28Data,
    cell07Text2Props: cell07Text25Data,
    table72Props: table7212Data,
    dividerProps: divider35Data,
};

const state17Data = {
    className: "scroller-2",
};

const scrollbar3Data = {
    stateProps: state17Data,
};

const inputFields4Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
    className: "",
};

const showPage3Data = {
    inputFieldsProps: inputFields4Data,
};

const information3Data = {
    showPageProps: showPage3Data,
};

const arrow5Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-3.svg",
    className: "",
};

const pageNumber211Data = {
    children: "2",
};

const pageNumber212Data = {
    children: "3",
};

const pageNumber213Data = {
    children: "4",
};

const pageNumber214Data = {
    children: "5",
};

const pageNumber37Data = {
    children: "6",
};

const pageNumber215Data = {
    children: "7",
};

const pageNumber38Data = {
    children: "8",
};

const pageNumber39Data = {
    children: "9",
};

const arrow6Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-4.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
    className: "",
};

const pages3Data = {
    arrow1Props: arrow5Data,
    pageNumber21Props: pageNumber211Data,
    pageNumber22Props: pageNumber212Data,
    pageNumber23Props: pageNumber213Data,
    pageNumber24Props: pageNumber214Data,
    pageNumber25Props: pageNumber37Data,
    pageNumber26Props: pageNumber215Data,
    pageNumber27Props: pageNumber38Data,
    pageNumber28Props: pageNumber39Data,
    arrow2Props: arrow6Data,
};

const page3Data = {
    pagesProps: pages3Data,
};

const dropdown3Data = {
    src: "/img/icon-6.svg",
};

const button3Data = {
    dropdownProps: dropdown3Data,
};

const pagination33Data = {
    showPageProps: information3Data,
    pagesProps: page3Data,
    goToProps2: button3Data,
};

const userInteraction1Data = {
    click2: "",
};

const dashviewSCREEN19Data = {
    itemName1: "Current Reports",
    itemName2: "My Reports",
    itemName3: "Submitted Reports",
    label1: "Status",
    label2: "Macro Site",
    label3: "Final Pending - Open",
    headerProps: header3Data,
    pageHeading3Props: pageHeading33Data,
    cards3Props: cards3Data,
    tableHeaderProps: tableHeader4Data,
    actionBarProps: actionBar2Data,
    columnHeader6Props: columnHeader62Data,
    divider2Props: divider210Data,
    table221Props: table227Data,
    table921Props: table922Data,
    table521Props: table523Data,
    cell07Text31Props: cell07Text31Data,
    table721Props: table727Data,
    divider1Props: divider30Data,
    table222Props: table228Data,
    table522Props: table524Data,
    cell07Text32Props: cell07Text32Data,
    table722Props: table728Data,
    divider2Props2: divider31Data,
    table223Props: table229Data,
    cell04Text2Props: cell04Text22Data,
    cell05Text21Props: cell05Text25Data,
    cell07Text33Props: cell07Text33Data,
    table723Props: table729Data,
    divider3Props: divider32Data,
    tableRow4Props: tableRow42Data,
    table224Props: table2211Data,
    table922Props: table923Data,
    cell05Text22Props: cell05Text27Data,
    cell07Text34Props: cell07Text34Data,
    table724Props: table7211Data,
    divider4Props: divider34Data,
    tableRow6Props: tableRow62Data,
    scrollbarProps: scrollbar3Data,
    pagination3Props: pagination33Data,
    userInteractionProps: userInteraction1Data,
};

const menuLogo4Data = {
    className: "",
};

const icon227Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame186Data = {
    icon22Props: icon227Data,
};

const aTOMSICON2019notification4Data = {
    className: "",
};

const aTOMSICON2019support4Data = {
    className: "",
};

const aTOMSAVATARDEFAULT4Data = {
    className: "",
};

const header4Data = {
    menuLogoProps: menuLogo4Data,
    frame18Props: frame186Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification4Data,
    aTOMSICON2019supportProps: aTOMSICON2019support4Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT4Data,
};

const divider37Data = {
    className: "atomsdividersline2-pxblack-3",
};

const pageHeading34Data = {
    dividerProps: divider37Data,
};

const divider38Data = {
    className: "divider-3",
};

const divider211Data = {
    className: "",
};

const tableHeader5Data = {
    dividerProps: divider38Data,
    dividerProps2: divider211Data,
};

const saveGridSettings4Data = {
    className: "",
};

const icon324Data = {
    saveGridSettingsProps: saveGridSettings4Data,
};

const icon228Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1834Data = {
    icon22Props: icon228Data,
};

const searchInput4Data = {
    className: "",
    frame183Props: frame1834Data,
};

const icon424Data = {
    className: "icon-15",
};

const divider212Data = {
    className: "divider-19",
};

const actionBar3Data = {
    icon32Props: icon324Data,
    icon42Props: searchInput4Data,
    icon42Props2: icon424Data,
    divider2Props: divider212Data,
};

const text43Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader63Data = {
    text4Props: text43Data,
};

const divider213Data = {
    className: "divider-20",
};

const tableHeader22Data = {
    columnHeader25Props: columnHeader63Data,
    divider2Props: divider213Data,
};

const table2213Data = {
    src: "/img/icon.svg",
};

const textIcon825Data = {
    children: "Final Pending - Open",
};

const table332Data = {
    textIconProps: textIcon825Data,
};

const textIcon45Data = {
    children: "5 Days",
};

const table525Data = {
    textIcon4Props: textIcon45Data,
};

const textIcon328Data = {
    children: "--",
    className: "",
};

const table624Data = {
    textIcon3Props: textIcon328Data,
};

const icon6213Data = {
    className: "",
};

const table7213Data = {
    icon6Props: icon6213Data,
};

const divider39Data = {
    className: "divider-3",
};

const tableRow12Data = {
    table22Props: table2213Data,
    table33Props: table332Data,
    table52Props: table525Data,
    table62Props: table624Data,
    table72Props: table7213Data,
    dividerProps: divider39Data,
};

const table2214Data = {
    src: "/img/icon-1.svg",
};

const cell04Text5Data = {
    label: "Final Pending - Open",
};

const textIcon46Data = {
    children: "2 Days",
};

const table526Data = {
    textIcon4Props: textIcon46Data,
};

const textIcon314Data = {
    children: "John Carter",
};

const cell07Text26Data = {
    textIcon3Props: textIcon314Data,
};

const icon6214Data = {
    className: "icon-40-2",
};

const table7214Data = {
    icon6Props: icon6214Data,
};

const divider40Data = {
    className: "divider-3",
};

const tableRow22Data = {
    table22Props: table2214Data,
    cell04TextProps: cell04Text5Data,
    table52Props: table526Data,
    cell07Text2Props: cell07Text26Data,
    table72Props: table7214Data,
    dividerProps: divider40Data,
};

const table2215Data = {
    src: "/img/icon.svg",
};

const state19Data = {
    className: "rectangle-5-6",
};

const statusIndicator511Data = {
    stateProps: state19Data,
};

const cell04Text23Data = {
    statusIndicator5Props: statusIndicator511Data,
};

const textIcon810Data = {
    children: "20 Days",
};

const cell05Text29Data = {
    textIcon8Props: textIcon810Data,
};

const textIcon329Data = {
    children: "--",
    className: "",
};

const table625Data = {
    textIcon3Props: textIcon329Data,
};

const icon6215Data = {
    className: "",
};

const table7215Data = {
    icon6Props: icon6215Data,
};

const divider41Data = {
    className: "divider-3",
};

const tableRow32Data = {
    table22Props: table2215Data,
    cell04Text2Props: cell04Text23Data,
    cell05Text2Props: cell05Text29Data,
    table62Props: table625Data,
    table72Props: table7215Data,
    dividerProps: divider41Data,
};

const table2216Data = {
    src: "/img/icon-4@2x.png",
};

const state20Data = {
    className: "rectangle-5-6",
};

const statusIndicator512Data = {
    stateProps: state20Data,
};

const cell04Text93Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator512Data,
};

const textIcon811Data = {
    children: "20 Days",
};

const cell05Text210Data = {
    textIcon8Props: textIcon811Data,
};

const textIcon315Data = {
    children: "John Carter",
};

const cell07Text27Data = {
    textIcon3Props: textIcon315Data,
};

const icon6216Data = {
    className: "",
};

const table7216Data = {
    icon6Props: icon6216Data,
};

const divider42Data = {
    className: "divider-3",
};

const tableRow43Data = {
    table221Props: table2216Data,
    cell04TextProps: cell04Text93Data,
    table52Props: cell05Text210Data,
    cell07Text2Props: cell07Text27Data,
    table72Props: table7216Data,
    dividerProps: divider42Data,
};

const table2217Data = {
    src: "/img/icon.svg",
};

const statusIconBig34Data = {
    className: "",
};

const textIcon826Data = {
    children: "Initial Pending",
};

const table924Data = {
    textIconProps: statusIconBig34Data,
    textIconProps2: textIcon826Data,
};

const textIcon812Data = {
    children: "4 Hours",
};

const cell05Text211Data = {
    className: "cell-05-text-12",
    textIcon8Props: textIcon812Data,
};

const textIcon3210Data = {
    children: "John Carter",
    className: "text-icon-52",
};

const table626Data = {
    textIcon3Props: textIcon3210Data,
};

const icon6217Data = {
    className: "",
};

const table7217Data = {
    icon6Props: icon6217Data,
};

const divider43Data = {
    className: "divider-3",
};

const tableRow52Data = {
    table22Props: table2217Data,
    table92Props: table924Data,
    cell05Text2Props: cell05Text211Data,
    table62Props: table626Data,
    table72Props: table7217Data,
    dividerProps: divider43Data,
};

const table2218Data = {
    src: "/img/icon-1.svg",
};

const cell04Text6Data = {
    label: "Initial Pending",
};

const textIcon813Data = {
    children: "4 Hours",
};

const cell05Text212Data = {
    className: "cell-05-text-12",
    textIcon8Props: textIcon813Data,
};

const textIcon316Data = {
    children: "John Carter",
};

const cell07Text28Data = {
    textIcon3Props: textIcon316Data,
};

const icon6218Data = {
    className: "icon-40",
};

const table7218Data = {
    icon6Props: icon6218Data,
};

const divider44Data = {
    className: "divider-3",
};

const tableRow63Data = {
    table22Props: table2218Data,
    cell04TextProps: cell04Text6Data,
    cell05Text2Props: cell05Text212Data,
    cell07Text2Props: cell07Text28Data,
    table72Props: table7218Data,
    dividerProps: divider44Data,
};

const state22Data = {
    className: "scroller-3",
};

const scrollbar4Data = {
    stateProps: state22Data,
};

const inputFields5Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
    className: "",
};

const showPage4Data = {
    inputFieldsProps: inputFields5Data,
};

const information4Data = {
    showPageProps: showPage4Data,
};

const arrow7Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-3.svg",
    className: "",
};

const pageNumber216Data = {
    children: "2",
};

const pageNumber217Data = {
    children: "3",
};

const pageNumber218Data = {
    children: "4",
};

const pageNumber219Data = {
    children: "5",
};

const pageNumber310Data = {
    children: "6",
};

const pageNumber220Data = {
    children: "7",
};

const pageNumber311Data = {
    children: "8",
};

const pageNumber312Data = {
    children: "9",
};

const arrow8Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-4.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
    className: "",
};

const pages4Data = {
    arrow1Props: arrow7Data,
    pageNumber21Props: pageNumber216Data,
    pageNumber22Props: pageNumber217Data,
    pageNumber23Props: pageNumber218Data,
    pageNumber24Props: pageNumber219Data,
    pageNumber25Props: pageNumber310Data,
    pageNumber26Props: pageNumber220Data,
    pageNumber27Props: pageNumber311Data,
    pageNumber28Props: pageNumber312Data,
    arrow2Props: arrow8Data,
};

const page4Data = {
    pagesProps: pages4Data,
};

const dropdown4Data = {
    src: "/img/icon-6.svg",
};

const button4Data = {
    dropdownProps: dropdown4Data,
};

const pagination34Data = {
    showPageProps: information4Data,
    pagesProps: page4Data,
    goToProps2: button4Data,
};

const state23Data = {
    className: "state",
};

const dropdownMenu41Data = {
    text: "Name",
    stateProps: state23Data,
};

const state24Data = {
    className: "state-1",
};

const dropdownMenu42Data = {
    text: "Duplicates",
    stateProps: state24Data,
};

const state25Data = {
    className: "state",
};

const dropdownMenu43Data = {
    text: "Unassigned",
    stateProps: state25Data,
};

const state26Data = {
    className: "state",
};

const dropdownMenu44Data = {
    text: "Open Reports",
    stateProps: state26Data,
};

const state27Data = {
    className: "state",
};

const dropdownMenu2Data = {
    text: "Name",
    icon: "/img/icon-21.svg",
    stateProps: state27Data,
};

const state28Data = {
    className: "state",
};

const dropdownMenu45Data = {
    text: "None",
    stateProps: state28Data,
};

const state29Data = {
    className: "scroller-4",
};

const scrollbar22Data = {
    stateProps: state29Data,
};

const dropdown32Data = {
    dropdownMenu1Props: dropdownMenu41Data,
    dropdownMenu2Props: dropdownMenu42Data,
    dropdownMenu3Props: dropdownMenu43Data,
    dropdownMenu4Props: dropdownMenu44Data,
    dropdownMenu2Props2: dropdownMenu2Data,
    dropdownMenu5Props: dropdownMenu45Data,
    scrollbar2Props: scrollbar22Data,
};

const dashviewSCREEN02Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    click2: "",
    inputField1: "/img/input-field@2x.png",
    inputField2: "/img/input-field-1@2x.png",
    headerProps: header4Data,
    pageHeading3Props: pageHeading34Data,
    tableHeaderProps: tableHeader5Data,
    actionBarProps: actionBar3Data,
    tableHeader2Props: tableHeader22Data,
    tableRow1Props: tableRow12Data,
    tableRow2Props: tableRow22Data,
    tableRow3Props: tableRow32Data,
    tableRow4Props: tableRow43Data,
    tableRow5Props: tableRow52Data,
    tableRow6Props: tableRow63Data,
    scrollbarProps: scrollbar4Data,
    pagination3Props: pagination34Data,
    dropdown3Props: dropdown32Data,
};

const menuLogo5Data = {
    className: "",
};

const icon229Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame187Data = {
    icon22Props: icon229Data,
};

const aTOMSICON2019notification5Data = {
    className: "",
};

const aTOMSICON2019support5Data = {
    className: "",
};

const aTOMSAVATARDEFAULT5Data = {
    className: "",
};

const header5Data = {
    menuLogoProps: menuLogo5Data,
    frame18Props: frame187Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification5Data,
    aTOMSICON2019supportProps: aTOMSICON2019support5Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT5Data,
};

const divider46Data = {
    className: "atomsdividersline2-pxblack-4",
};

const pageHeading35Data = {
    dividerProps: divider46Data,
};

const card33Data = {
    label1: "All",
    label2: "104",
    label3: "",
};

const divider47Data = {
    className: "divider-4",
};

const divider214Data = {
    className: "",
};

const tableHeader6Data = {
    dividerProps: divider47Data,
    dividerProps2: divider214Data,
};

const saveGridSettings5Data = {
    className: "",
};

const icon325Data = {
    saveGridSettingsProps: saveGridSettings5Data,
};

const icon2210Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1835Data = {
    icon22Props: icon2210Data,
};

const searchInput5Data = {
    className: "",
    frame183Props: frame1835Data,
};

const icon425Data = {
    className: "icon-16",
};

const divider215Data = {
    className: "divider-21",
};

const actionBar4Data = {
    icon32Props: icon325Data,
    icon42Props: searchInput5Data,
    icon42Props2: icon425Data,
    divider2Props: divider215Data,
};

const text44Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader64Data = {
    text4Props: text44Data,
};

const divider216Data = {
    className: "divider-22",
};

const table2219Data = {
    src: "/img/icon-29.svg",
};

const state30Data = {
    className: "rectangle-5-8",
};

const statusIndicator513Data = {
    stateProps: state30Data,
};

const textIcon317Data = {
    children: "Tom Parker",
};

const cell07Text29Data = {
    textIcon3Props: textIcon317Data,
};

const icon6219Data = {
    className: "",
};

const table7219Data = {
    icon6Props: icon6219Data,
};

const divider48Data = {
    className: "divider-4",
};

const table2220Data = {
    src: "/img/icon-30.svg",
};

const cell03Text23Data = {
    className: "cell-03-text-8",
};

const textIcon410Data = {
    children: "2 Days",
};

const cell05Text41Data = {
    textIcon4Props: textIcon410Data,
};

const textIcon318Data = {
    children: "John Carter",
};

const cell07Text210Data = {
    textIcon3Props: textIcon318Data,
};

const icon6220Data = {
    className: "icon-41-2",
};

const table7220Data = {
    icon6Props: icon6220Data,
};

const divider49Data = {
    className: "divider-4",
};

const table2221Data = {
    src: "/img/icon-29.svg",
};

const cell03Text24Data = {
    className: "cell-03-text-8",
};

const state32Data = {
    className: "rectangle-5-8",
};

const statusIndicator514Data = {
    stateProps: state32Data,
};

const cell04Text42Data = {
    statusIndicator5Props: statusIndicator514Data,
};

const textIcon319Data = {
    children: "Tom Parker",
};

const cell07Text211Data = {
    textIcon3Props: textIcon319Data,
};

const icon6221Data = {
    className: "",
};

const table7221Data = {
    icon6Props: icon6221Data,
};

const divider50Data = {
    className: "divider-4",
};

const table2222Data = {
    src: "/img/icon-4@2x.png",
};

const cell03Text25Data = {
    className: "cell-03-text-8",
};

const state33Data = {
    className: "rectangle-5-8",
};

const statusIndicator515Data = {
    stateProps: state33Data,
};

const cell04Text43Data = {
    statusIndicator5Props: statusIndicator515Data,
};

const textIcon320Data = {
    children: "John Carter",
};

const cell07Text212Data = {
    textIcon3Props: textIcon320Data,
};

const icon6222Data = {
    className: "",
};

const table7222Data = {
    icon6Props: icon6222Data,
};

const divider51Data = {
    className: "divider-4",
};

const table2223Data = {
    src: "/img/icon-30.svg",
};

const cell03Text26Data = {
    className: "cell-03-text-8",
};

const textIcon814Data = {
    children: "4 Hours",
};

const cell05Text213Data = {
    className: "cell-05-text-23",
    textIcon8Props: textIcon814Data,
};

const cell07Text213Data = {
    textIcon3Props: textIcon321Data,
};

const icon6223Data = {
    className: "icon-41-3",
};

const table7223Data = {
    icon6Props: icon6223Data,
};

const divider52Data = {
    className: "divider-4",
};

const table2224Data = {
    src: "/img/icon-30.svg",
};

const cell03Text27Data = {
    className: "cell-03-text-8",
};

const textIcon330Data = {
    children: "John Carter",
};

const cell07Text214Data = {
    textIcon3Props: textIcon330Data,
};

const icon6224Data = {
    className: "icon-41",
};

const table7224Data = {
    icon6Props: icon6224Data,
};

const divider53Data = {
    className: "divider-4",
};

const state36Data = {
    className: "scroller-5",
};

const scrollbar5Data = {
    stateProps: state36Data,
};

const inputFields6Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-25@2x.png",
    className: "input-fields-4",
};

const showPage5Data = {
    inputFieldsProps: inputFields6Data,
};

const information5Data = {
    showPageProps: showPage5Data,
};

const arrow9Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-26.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
    className: "arrow-4-1",
};

const pageNumber221Data = {
    children: "2",
};

const pageNumber222Data = {
    children: "3",
};

const pageNumber223Data = {
    children: "4",
};

const pageNumber224Data = {
    children: "5",
};

const pageNumber313Data = {
    children: "6",
};

const pageNumber225Data = {
    children: "7",
};

const pageNumber314Data = {
    children: "8",
};

const pageNumber315Data = {
    children: "9",
};

const arrow10Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-28.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-29.svg",
    className: "arrow-4",
};

const pages5Data = {
    arrow1Props: arrow9Data,
    pageNumber21Props: pageNumber221Data,
    pageNumber22Props: pageNumber222Data,
    pageNumber23Props: pageNumber223Data,
    pageNumber24Props: pageNumber224Data,
    pageNumber25Props: pageNumber313Data,
    pageNumber26Props: pageNumber225Data,
    pageNumber27Props: pageNumber314Data,
    pageNumber28Props: pageNumber315Data,
    arrow2Props: arrow10Data,
};

const page5Data = {
    pagesProps: pages5Data,
};

const userInteraction2Data = {
    click2: "",
    className: "user-interaction-1",
};

const dashviewSCREEN14Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Status",
    label10: "Final Pending - Restored",
    icon: "/img/rectangle-4@2x.png",
    headerProps: header5Data,
    pageHeading3Props: pageHeading35Data,
    card3Props: card33Data,
    tableHeaderProps: tableHeader6Data,
    actionBarProps: actionBar4Data,
    columnHeader6Props: columnHeader64Data,
    divider2Props: divider216Data,
    table221Props: table2219Data,
    statusIndicator5Props: statusIndicator513Data,
    cell07Text21Props: cell07Text29Data,
    table721Props: table7219Data,
    divider1Props: divider48Data,
    table222Props: table2220Data,
    cell03Text21Props: cell03Text23Data,
    cell05Text4Props: cell05Text41Data,
    cell07Text22Props: cell07Text210Data,
    table722Props: table7220Data,
    divider2Props2: divider49Data,
    table223Props: table2221Data,
    cell03Text22Props: cell03Text24Data,
    cell04Text41Props: cell04Text42Data,
    cell07Text23Props: cell07Text211Data,
    table723Props: table7221Data,
    divider3Props: divider50Data,
    table224Props: table2222Data,
    cell03Text23Props: cell03Text25Data,
    cell04Text42Props: cell04Text43Data,
    cell07Text24Props: cell07Text212Data,
    table724Props: table7222Data,
    divider4Props: divider51Data,
    table225Props: table2223Data,
    cell03Text24Props: cell03Text26Data,
    cell05Text2Props: cell05Text213Data,
    cell07Text25Props: cell07Text213Data,
    table725Props: table7223Data,
    divider5Props: divider52Data,
    table226Props: table2224Data,
    cell03Text25Props: cell03Text27Data,
    cell07Text26Props: cell07Text214Data,
    table726Props: table7224Data,
    divider6Props: divider53Data,
    scrollbarProps: scrollbar5Data,
    informationProps: information5Data,
    pageProps: page5Data,
    userInteractionProps: userInteraction2Data,
};

const menuLogo6Data = {
    className: "",
};

const icon2211Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame188Data = {
    icon22Props: icon2211Data,
};

const aTOMSICON2019notification6Data = {
    className: "atomsicon2019notification-5",
};

const aTOMSICON2019support6Data = {
    className: "atomsicon2019chat-copy-5",
};

const aTOMSAVATARDEFAULT6Data = {
    className: "",
};

const header6Data = {
    menuLogoProps: menuLogo6Data,
    frame18Props: frame188Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification6Data,
    aTOMSICON2019supportProps: aTOMSICON2019support6Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT6Data,
};

const divider55Data = {
    className: "atomsdividersline2-pxblack-5",
};

const pageHeading36Data = {
    dividerProps: divider55Data,
};

const card34Data = {
    label1: "All",
    label2: "104",
    label3: "",
};

const divider56Data = {
    className: "divider-5",
};

const divider217Data = {
    className: "",
};

const tableHeader7Data = {
    dividerProps: divider56Data,
    dividerProps2: divider217Data,
};

const saveGridSettings6Data = {
    className: "",
};

const icon326Data = {
    saveGridSettingsProps: saveGridSettings6Data,
};

const icon2212Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1836Data = {
    icon22Props: icon2212Data,
};

const searchInput6Data = {
    className: "",
    frame183Props: frame1836Data,
};

const icon426Data = {
    className: "",
};

const divider218Data = {
    className: "divider-23",
};

const actionBar5Data = {
    icon32Props: icon326Data,
    icon42Props: searchInput6Data,
    icon42Props2: icon426Data,
    divider2Props: divider218Data,
};

const columnHeader323Data = {
    className: "column-header-3-8",
};

const text45Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader65Data = {
    text4Props: text45Data,
};

const divider219Data = {
    className: "divider-24",
};

const table2225Data = {
    src: "/img/icon-29.svg",
};

const state37Data = {
    className: "rectangle-5-10",
};

const statusIndicator516Data = {
    stateProps: state37Data,
};

const textIcon112Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator516Data,
};

const textIcon331Data = {
    children: "Tom Parker",
};

const cell07Text215Data = {
    textIcon3Props: textIcon331Data,
};

const icon6225Data = {
    className: "",
};

const table7225Data = {
    icon6Props: icon6225Data,
};

const divider57Data = {
    className: "divider-5",
};

const table2226Data = {
    src: "/img/icon-30.svg",
};

const cell03Text29Data = {
    className: "cell-03-text-9",
};

const textIcon411Data = {
    children: "2 Days",
};

const cell05Text42Data = {
    textIcon4Props: textIcon411Data,
};

const textIcon332Data = {
    children: "John Carter",
};

const cell07Text216Data = {
    textIcon3Props: textIcon332Data,
};

const icon6226Data = {
    className: "icon-42-2",
};

const table7226Data = {
    icon6Props: icon6226Data,
};

const divider58Data = {
    className: "divider-5",
};

const table2227Data = {
    src: "/img/icon-29.svg",
};

const cell03Text210Data = {
    className: "cell-03-text-9",
};

const state39Data = {
    className: "rectangle-5-10",
};

const statusIndicator517Data = {
    stateProps: state39Data,
};

const cell04Text62Data = {
    statusIndicator5Props: statusIndicator517Data,
};

const textIcon333Data = {
    children: "Tom Parker",
};

const cell07Text217Data = {
    textIcon3Props: textIcon333Data,
};

const icon6227Data = {
    className: "",
};

const table7227Data = {
    icon6Props: icon6227Data,
};

const divider59Data = {
    className: "divider-5",
};

const table2228Data = {
    src: "/img/icon-4@2x.png",
};

const cell03Text211Data = {
    className: "cell-03-text-9",
};

const state40Data = {
    className: "rectangle-5-10",
};

const statusIndicator518Data = {
    stateProps: state40Data,
};

const cell04Text63Data = {
    statusIndicator5Props: statusIndicator518Data,
};

const textIcon334Data = {
    children: "John Carter",
};

const cell07Text218Data = {
    textIcon3Props: textIcon334Data,
};

const icon6228Data = {
    className: "",
};

const table7228Data = {
    icon6Props: icon6228Data,
};

const divider60Data = {
    className: "divider-5",
};

const table2229Data = {
    src: "/img/icon-30.svg",
};

const cell03Text212Data = {
    className: "cell-03-text-9",
};

const textIcon815Data = {
    children: "4 Hours",
};

const cell05Text214Data = {
    className: "cell-05-text-24",
    textIcon8Props: textIcon815Data,
};

const textIcon335Data = {
    children: "John Carter",
};

const cell07Text219Data = {
    textIcon3Props: textIcon335Data,
};

const icon6229Data = {
    className: "icon-42-3",
};

const table7229Data = {
    icon6Props: icon6229Data,
};

const divider61Data = {
    className: "divider-5",
};

const table2230Data = {
    src: "/img/icon-30.svg",
};

const cell03Text213Data = {
    className: "cell-03-text-9",
};

const textIcon336Data = {
    children: "John Carter",
};

const cell07Text220Data = {
    textIcon3Props: textIcon336Data,
};

const icon6230Data = {
    className: "icon-42",
};

const table7230Data = {
    icon6Props: icon6230Data,
};

const divider62Data = {
    className: "divider-5",
};

const state43Data = {
    className: "scroller-6",
};

const scrollbar6Data = {
    stateProps: state43Data,
};

const inputFields7Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-25@2x.png",
    className: "input-fields-5",
};

const showPage6Data = {
    inputFieldsProps: inputFields7Data,
};

const information6Data = {
    showPageProps: showPage6Data,
};

const arrow11Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-26.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
    className: "arrow-5-1",
};

const pageNumber226Data = {
    children: "2",
};

const pageNumber227Data = {
    children: "3",
};

const pageNumber228Data = {
    children: "4",
};

const pageNumber229Data = {
    children: "5",
};

const pageNumber316Data = {
    children: "6",
};

const pageNumber230Data = {
    children: "7",
};

const pageNumber317Data = {
    children: "8",
};

const pageNumber318Data = {
    children: "9",
};

const arrow12Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-34.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-29.svg",
    className: "arrow-5",
};

const pages6Data = {
    arrow1Props: arrow11Data,
    pageNumber21Props: pageNumber226Data,
    pageNumber22Props: pageNumber227Data,
    pageNumber23Props: pageNumber228Data,
    pageNumber24Props: pageNumber229Data,
    pageNumber25Props: pageNumber316Data,
    pageNumber26Props: pageNumber230Data,
    pageNumber27Props: pageNumber317Data,
    pageNumber28Props: pageNumber318Data,
    arrow2Props: arrow12Data,
};

const page6Data = {
    pagesProps: pages6Data,
};

const userInteraction3Data = {
    click2: "",
    className: "user-interaction-2",
};

const dashviewSCREEN13Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    label12: "Status",
    label13: "Final Pending - Open",
    icon: "/img/rectangle-4@2x.png",
    headerProps: header6Data,
    pageHeading3Props: pageHeading36Data,
    card3Props: card34Data,
    tableHeaderProps: tableHeader7Data,
    actionBarProps: actionBar5Data,
    columnHeader32Props: columnHeader323Data,
    columnHeader6Props: columnHeader65Data,
    divider2Props: divider219Data,
    table221Props: table2225Data,
    textIcon11Props: textIcon112Data,
    cell07Text21Props: cell07Text215Data,
    table721Props: table7225Data,
    divider1Props: divider57Data,
    table222Props: table2226Data,
    cell03Text21Props: cell03Text29Data,
    cell05Text4Props: cell05Text42Data,
    cell07Text22Props: cell07Text216Data,
    table722Props: table7226Data,
    divider2Props2: divider58Data,
    table223Props: table2227Data,
    cell03Text22Props: cell03Text210Data,
    cell04Text61Props: cell04Text62Data,
    cell07Text23Props: cell07Text217Data,
    table723Props: table7227Data,
    divider3Props: divider59Data,
    table224Props: table2228Data,
    cell03Text23Props: cell03Text211Data,
    cell04Text62Props: cell04Text63Data,
    cell07Text24Props: cell07Text218Data,
    table724Props: table7228Data,
    divider4Props: divider60Data,
    table225Props: table2229Data,
    cell03Text24Props: cell03Text212Data,
    cell05Text2Props: cell05Text214Data,
    cell07Text25Props: cell07Text219Data,
    table725Props: table7229Data,
    divider5Props: divider61Data,
    table226Props: table2230Data,
    cell03Text25Props: cell03Text213Data,
    cell07Text26Props: cell07Text220Data,
    table726Props: table7230Data,
    divider6Props: divider62Data,
    scrollbarProps: scrollbar6Data,
    informationProps: information6Data,
    pageProps: page6Data,
    userInteractionProps: userInteraction3Data,
};

const menuLogo7Data = {
    className: "menu-logo-6",
};

const icon2213Data = {
    src: "/img/shape-70.svg",
    className: "atomsicon2019close-6",
};

const frame189Data = {
    icon22Props: icon2213Data,
};

const aTOMSICON2019notification7Data = {
    className: "",
};

const aTOMSICON2019support7Data = {
    className: "atomsicon2019chat-copy-6",
};

const aTOMSAVATARDEFAULT7Data = {
    className: "",
};

const header7Data = {
    menuLogoProps: menuLogo7Data,
    frame18Props: frame189Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification7Data,
    aTOMSICON2019supportProps: aTOMSICON2019support7Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT7Data,
};

const divider64Data = {
    className: "atomsdividersline2-pxblack-6",
};

const pageHeading37Data = {
    dividerProps: divider64Data,
};

const card35Data = {
    label1: "All",
    label2: "104",
    label3: "",
};

const divider65Data = {
    className: "divider-6",
};

const divider220Data = {
    className: "atomsdividersline2-pxblack-18",
};

const tableHeader8Data = {
    dividerProps: divider65Data,
    dividerProps2: divider220Data,
};

const saveGridSettings7Data = {
    className: "save_-grid_-settings-6",
};

const icon327Data = {
    saveGridSettingsProps: saveGridSettings7Data,
};

const icon2214Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1837Data = {
    icon22Props: icon2214Data,
};

const searchInput7Data = {
    className: "search-input-6",
    frame183Props: frame1837Data,
};

const icon427Data = {
    className: "",
};

const divider221Data = {
    className: "divider-25",
};

const actionBar6Data = {
    className: "action-bar-6",
    icon32Props: icon327Data,
    icon42Props: searchInput7Data,
    icon42Props2: icon427Data,
    divider2Props: divider221Data,
};

const text46Data = {
    children: "Status",
    className: "text-56",
};

const columnHeader66Data = {
    className: "column-header-4-6",
    text4Props: text46Data,
};

const text47Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader67Data = {
    text4Props: text47Data,
};

const divider222Data = {
    className: "divider-26",
};

const table2231Data = {
    src: "/img/icon-43.svg",
};

const cell06Text225Data = {
    className: "cell-06-text-16",
};

const textIcon3211Data = {
    children: "Tom Parker",
    className: "text-icon-53-1",
};

const cell07Text35Data = {
    textIcon32Props: textIcon3211Data,
};

const icon6231Data = {
    className: "icon-43-1",
};

const table7231Data = {
    icon6Props: icon6231Data,
};

const divider66Data = {
    className: "divider-6",
};

const table2232Data = {
    src: "/img/icon-44.svg",
};

const statusIndicator221Data = {
    className: "",
};

const table61Data = {
    statusIndicator22Props: statusIndicator221Data,
};

const textIcon3212Data = {
    children: "John Carter",
    className: "text-icon-53-2",
};

const cell07Text41Data = {
    textIcon32Props: textIcon3212Data,
};

const icon6232Data = {
    className: "",
};

const table7232Data = {
    icon6Props: icon6232Data,
};

const divider67Data = {
    className: "divider-6",
};

const tableRow222Data = {
    table22Props: table2232Data,
    table6Props: table61Data,
    cell07Text4Props: cell07Text41Data,
    table72Props: table7232Data,
    dividerProps: divider67Data,
};

const table2233Data = {
    src: "/img/icon-43.svg",
};

const state45Data = {
    className: "rectangle-5-22",
};

const statusIndicator519Data = {
    stateProps: state45Data,
};

const textIcon816Data = {
    children: "4 Hours",
};

const cell05Text215Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon816Data,
};

const icon6233Data = {
    className: "icon-43",
};

const table7233Data = {
    icon6Props: icon6233Data,
};

const divider68Data = {
    className: "divider-6",
};

const table2234Data = {
    src: "/img/icon-4@2x.png",
};

const statusIndicator222Data = {
    className: "status-indicator-24",
};

const table63Data = {
    statusIndicator22Props: statusIndicator222Data,
};

const textIcon817Data = {
    children: "4 Hours",
};

const cell05Text216Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon817Data,
};

const textIcon3213Data = {
    children: "John Carter",
    className: "text-icon-53-3",
};

const cell07Text42Data = {
    textIcon32Props: textIcon3213Data,
};

const icon6234Data = {
    className: "",
};

const table7234Data = {
    icon6Props: icon6234Data,
};

const divider69Data = {
    className: "divider-6",
};

const table2235Data = {
    src: "/img/icon-44.svg",
};

const statusIconBig35Data = {
    className: "status-icon-big-3",
};

const textIcon98Data = {
    children: "Initial Pending",
    className: "text-icon-105",
};

const textIcon818Data = {
    children: "4 Hours",
};

const cell05Text217Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon818Data,
};

const textIcon3214Data = {
    children: "John Carter",
    className: "text-icon-53-4",
};

const cell07Text36Data = {
    textIcon32Props: textIcon3214Data,
};

const icon6235Data = {
    className: "",
};

const table7235Data = {
    icon6Props: icon6235Data,
};

const divider70Data = {
    className: "divider-6",
};

const table2236Data = {
    src: "/img/icon-44.svg",
};

const statusIndicator223Data = {
    className: "",
};

const table64Data = {
    statusIndicator22Props: statusIndicator223Data,
};

const textIcon3215Data = {
    children: "John Carter",
    className: "text-icon-53",
};

const cell07Text43Data = {
    textIcon32Props: textIcon3215Data,
};

const icon6236Data = {
    className: "",
};

const table7236Data = {
    icon6Props: icon6236Data,
};

const divider71Data = {
    className: "divider-6",
};

const tableRow223Data = {
    table22Props: table2236Data,
    table6Props: table64Data,
    cell07Text4Props: cell07Text43Data,
    table72Props: table7236Data,
    dividerProps: divider71Data,
};

const state46Data = {
    className: "scroller-7",
};

const scrollbar7Data = {
    stateProps: state46Data,
};

const pageNumber51Data = {
    children: "2",
};

const pageNumber52Data = {
    children: "3",
};

const pageNumber53Data = {
    children: "4",
};

const pageNumber54Data = {
    children: "5",
};

const pageNumber61Data = {
    children: "6",
};

const pageNumber55Data = {
    children: "7",
};

const pageNumber62Data = {
    children: "8",
};

const pageNumber63Data = {
    children: "9",
};

const userInteraction4Data = {
    click2: "",
    className: "user-interaction-3",
};

const dashviewSCREEN12Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label5: "5 Reports have less than 2 days",
    label6: "Final Pending - Restored",
    label7: "14",
    label8: "12 Unassigned Reports",
    label9: "Goverment ID",
    label10: "Initial Pending",
    label11: "Initial Pending",
    placeholderText1: "5",
    atomsIcon2019Close1: "/img/rectangle-4@2x.png",
    displaying5Of50Rows: "Displaying 5 of 50 Rows",
    atomsIcon2019Close2: "/img/rectangle-4@2x.png",
    atomsIcon2019Close3: "/img/rectangle-4@2x.png",
    placeholderText2: "1",
    placeholderText3: "10",
    atomsIcon2019Close4: "/img/rectangle-4@2x.png",
    atomsIcon2019Close5: "/img/rectangle-4@2x.png",
    placeholderText4: "2",
    text7: "/ 20",
    icon: "/img/rectangle-4@2x.png",
    screenshot20230601At4531: "/img/screenshot-2023-06-01-at-4-53-1.png",
    headerProps: header7Data,
    pageHeading3Props: pageHeading37Data,
    card3Props: card35Data,
    tableHeaderProps: tableHeader8Data,
    actionBarProps: actionBar6Data,
    columnHeader61Props: columnHeader66Data,
    columnHeader62Props: columnHeader67Data,
    divider2Props: divider222Data,
    table221Props: table2231Data,
    cell06Text2Props: cell06Text225Data,
    cell07Text31Props: cell07Text35Data,
    table721Props: table7231Data,
    divider1Props: divider66Data,
    tableRow221Props: tableRow222Data,
    table222Props: table2233Data,
    statusIndicator5Props: statusIndicator519Data,
    cell05Text21Props: cell05Text215Data,
    table722Props: table7233Data,
    divider2Props2: divider68Data,
    table223Props: table2234Data,
    table6Props: table63Data,
    cell05Text22Props: cell05Text216Data,
    cell07Text4Props: cell07Text42Data,
    table723Props: table7234Data,
    divider3Props: divider69Data,
    table224Props: table2235Data,
    statusIconBig3Props: statusIconBig35Data,
    textIcon9Props: textIcon98Data,
    cell05Text23Props: cell05Text217Data,
    cell07Text32Props: cell07Text36Data,
    table724Props: table7235Data,
    divider4Props: divider70Data,
    tableRow222Props: tableRow223Data,
    scrollbarProps: scrollbar7Data,
    pageNumber51Props: pageNumber51Data,
    pageNumber52Props: pageNumber52Data,
    pageNumber53Props: pageNumber53Data,
    pageNumber54Props: pageNumber54Data,
    pageNumber61Props: pageNumber61Data,
    pageNumber55Props: pageNumber55Data,
    pageNumber62Props: pageNumber62Data,
    pageNumber63Props: pageNumber63Data,
    userInteractionProps: userInteraction4Data,
};

const menuLogo8Data = {
    className: "",
};

const icon2215Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame1810Data = {
    icon22Props: icon2215Data,
};

const aTOMSICON2019notification8Data = {
    className: "atomsicon2019notification-7",
};

const aTOMSICON2019support8Data = {
    className: "atomsicon2019chat-copy-7",
};

const aTOMSAVATARDEFAULT8Data = {
    className: "",
};

const header8Data = {
    menuLogoProps: menuLogo8Data,
    frame18Props: frame1810Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification8Data,
    aTOMSICON2019supportProps: aTOMSICON2019support8Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT8Data,
};

const divider73Data = {
    className: "atomsdividersline2-pxblack-7",
};

const pageHeading38Data = {
    dividerProps: divider73Data,
};

const divider74Data = {
    className: "divider-7",
};

const divider223Data = {
    className: "",
};

const tableHeader9Data = {
    dividerProps: divider74Data,
    dividerProps2: divider223Data,
};

const saveGridSettings8Data = {
    className: "",
};

const icon328Data = {
    saveGridSettingsProps: saveGridSettings8Data,
};

const icon2216Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1838Data = {
    icon22Props: icon2216Data,
};

const searchInput8Data = {
    className: "",
    frame183Props: frame1838Data,
};

const icon428Data = {
    className: "",
};

const divider224Data = {
    className: "divider-27",
};

const actionBar7Data = {
    icon32Props: icon328Data,
    icon42Props: searchInput8Data,
    icon42Props2: icon428Data,
    divider2Props: divider224Data,
};

const text48Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader68Data = {
    text4Props: text48Data,
};

const divider225Data = {
    className: "divider-28",
};

const tableHeader23Data = {
    columnHeader25Props: columnHeader68Data,
    divider2Props: divider225Data,
};

const table2237Data = {
    src: "/img/icon.svg",
};

const textIcon68Data = {
    children: "Final Pending - Open",
};

const table41Data = {
    textIconProps: textIcon68Data,
};

const textIcon412Data = {
    children: "5 Days",
};

const table527Data = {
    textIcon4Props: textIcon412Data,
};

const textIcon123Data = {
    className: "text-icon-127",
};

const cell07Text51Data = {
    textIcon12Props: textIcon123Data,
};

const icon6237Data = {
    className: "",
};

const table7237Data = {
    icon6Props: icon6237Data,
};

const divider75Data = {
    className: "divider-7",
};

const tableRow122Data = {
    table22Props: table2237Data,
    table4Props: table41Data,
    table52Props: table527Data,
    table72Props: cell07Text51Data,
    table72Props2: table7237Data,
    dividerProps: divider75Data,
};

const table2238Data = {
    src: "/img/icon-1.svg",
};

const cell04Text8Data = {
    label: "Final Pending - Open",
};

const textIcon413Data = {
    children: "2 Days",
};

const table528Data = {
    textIcon4Props: textIcon413Data,
};

const textIcon337Data = {
    children: "John Carter",
};

const cell07Text221Data = {
    textIcon3Props: textIcon337Data,
};

const icon6238Data = {
    className: "icon-44-2",
};

const table7238Data = {
    icon6Props: icon6238Data,
};

const divider76Data = {
    className: "divider-7",
};

const tableRow23Data = {
    table22Props: table2238Data,
    cell04TextProps: cell04Text8Data,
    table52Props: table528Data,
    cell07Text2Props: cell07Text221Data,
    table72Props: table7238Data,
    dividerProps: divider76Data,
};

const table2239Data = {
    src: "/img/icon-1.svg",
};

const state48Data = {
    className: "rectangle-5-12",
};

const statusIndicator520Data = {
    stateProps: state48Data,
};

const cell04Text24Data = {
    statusIndicator5Props: statusIndicator520Data,
};

const textIcon819Data = {
    children: "20 Days",
};

const cell05Text218Data = {
    textIcon8Props: textIcon819Data,
};

const icon6239Data = {
    className: "icon-44-3",
};

const table7239Data = {
    icon6Props: icon6239Data,
};

const divider77Data = {
    className: "divider-7",
};

const tableRow331Data = {
    table22Props: table2239Data,
    cell04Text2Props: cell04Text24Data,
    cell05Text2Props: cell05Text218Data,
    table72Props: table7239Data,
    dividerProps: divider77Data,
};

const table2240Data = {
    src: "/img/icon-4@2x.png",
};

const state49Data = {
    className: "rectangle-5-12",
};

const statusIndicator521Data = {
    stateProps: state49Data,
};

const cell04Text94Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator521Data,
};

const textIcon820Data = {
    children: "20 Days",
};

const cell05Text219Data = {
    textIcon8Props: textIcon820Data,
};

const textIcon338Data = {
    children: "John Carter",
};

const cell07Text222Data = {
    textIcon3Props: textIcon338Data,
};

const icon6240Data = {
    className: "",
};

const table7240Data = {
    icon6Props: icon6240Data,
};

const divider78Data = {
    className: "divider-7",
};

const tableRow44Data = {
    table221Props: table2240Data,
    cell04TextProps: cell04Text94Data,
    table52Props: cell05Text219Data,
    cell07Text2Props: cell07Text222Data,
    table72Props: table7240Data,
    dividerProps: divider78Data,
};

const table2241Data = {
    src: "/img/icon.svg",
};

const statusIconBig36Data = {
    className: "",
};

const textIcon827Data = {
    children: "Initial Pending",
};

const table925Data = {
    textIconProps: statusIconBig36Data,
    textIconProps2: textIcon827Data,
};

const cell05Text220Data = {
    className: "cell-05-text-14",
    textIcon8Props: textIcon821Data,
};

const textIcon3216Data = {
    children: "John Carter",
    className: "text-icon-54",
};

const table627Data = {
    textIcon3Props: textIcon3216Data,
};

const icon6241Data = {
    className: "",
};

const table7241Data = {
    icon6Props: icon6241Data,
};

const divider79Data = {
    className: "divider-7",
};

const tableRow53Data = {
    table22Props: table2241Data,
    table92Props: table925Data,
    cell05Text2Props: cell05Text220Data,
    table62Props: table627Data,
    table72Props: table7241Data,
    dividerProps: divider79Data,
};

const table2242Data = {
    src: "/img/icon-1.svg",
};

const cell04Text10Data = {
    label: "Initial Pending",
};

const textIcon828Data = {
    children: "4 Hours",
};

const cell05Text221Data = {
    className: "cell-05-text-14",
    textIcon8Props: textIcon828Data,
};

const textIcon339Data = {
    children: "John Carter",
};

const cell07Text223Data = {
    textIcon3Props: textIcon339Data,
};

const icon6242Data = {
    className: "icon-44",
};

const table7242Data = {
    icon6Props: icon6242Data,
};

const divider80Data = {
    className: "divider-7",
};

const tableRow64Data = {
    table22Props: table2242Data,
    cell04TextProps: cell04Text10Data,
    cell05Text2Props: cell05Text221Data,
    cell07Text2Props: cell07Text223Data,
    table72Props: table7242Data,
    dividerProps: divider80Data,
};

const state51Data = {
    className: "scroller-8",
};

const scrollbar8Data = {
    stateProps: state51Data,
};

const inputFields8Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-25@2x.png",
    className: "input-fields-6",
};

const showPage7Data = {
    inputFieldsProps: inputFields8Data,
};

const information7Data = {
    showPageProps: showPage7Data,
};

const arrow13Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-26.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-46.svg",
    className: "arrow-6-1",
};

const pageNumber231Data = {
    children: "2",
};

const pageNumber232Data = {
    children: "3",
};

const pageNumber233Data = {
    children: "4",
};

const pageNumber234Data = {
    children: "5",
};

const pageNumber319Data = {
    children: "6",
};

const pageNumber235Data = {
    children: "7",
};

const pageNumber320Data = {
    children: "8",
};

const pageNumber321Data = {
    children: "9",
};

const arrow14Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-34.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-29.svg",
    className: "arrow-6",
};

const pages7Data = {
    arrow1Props: arrow13Data,
    pageNumber21Props: pageNumber231Data,
    pageNumber22Props: pageNumber232Data,
    pageNumber23Props: pageNumber233Data,
    pageNumber24Props: pageNumber234Data,
    pageNumber25Props: pageNumber319Data,
    pageNumber26Props: pageNumber235Data,
    pageNumber27Props: pageNumber320Data,
    pageNumber28Props: pageNumber321Data,
    arrow2Props: arrow14Data,
};

const page7Data = {
    pagesProps: pages7Data,
};

const dashviewSCREEN07Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    icon: "/img/rectangle-4@2x.png",
    headerProps: header8Data,
    pageHeading3Props: pageHeading38Data,
    tableHeaderProps: tableHeader9Data,
    actionBarProps: actionBar7Data,
    tableHeader2Props: tableHeader23Data,
    tableRow12Props: tableRow122Data,
    tableRow2Props: tableRow23Data,
    tableRow33Props: tableRow331Data,
    tableRow4Props: tableRow44Data,
    tableRow5Props: tableRow53Data,
    tableRow6Props: tableRow64Data,
    scrollbarProps: scrollbar8Data,
    informationProps: information7Data,
    pageProps: page7Data,
};

const menuLogo9Data = {
    className: "menu-logo-8",
};

const icon2217Data = {
    src: "/img/shape-70.svg",
    className: "atomsicon2019close-8",
};

const frame1811Data = {
    icon22Props: icon2217Data,
};

const aTOMSICON2019notification9Data = {
    className: "atomsicon2019notification-8",
};

const aTOMSICON2019support9Data = {
    className: "atomsicon2019chat-copy-8",
};

const aTOMSAVATARDEFAULT9Data = {
    className: "atomsavatardefault-8",
};

const header9Data = {
    menuLogoProps: menuLogo9Data,
    frame18Props: frame1811Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification9Data,
    aTOMSICON2019supportProps: aTOMSICON2019support9Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT9Data,
};

const divider82Data = {
    className: "atomsdividersline2-pxblack-8",
};

const pageHeading39Data = {
    dividerProps: divider82Data,
};

const card36Data = {
    label1: "All",
    label2: "104",
    label3: "",
};

const divider83Data = {
    className: "divider-8",
};

const divider226Data = {
    className: "",
};

const tableHeader10Data = {
    dividerProps: divider83Data,
    dividerProps2: divider226Data,
};

const saveGridSettings9Data = {
    className: "",
};

const icon329Data = {
    saveGridSettingsProps: saveGridSettings9Data,
};

const icon2218Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame1839Data = {
    icon22Props: icon2218Data,
};

const searchInput9Data = {
    className: "",
    frame183Props: frame1839Data,
};

const icon429Data = {
    className: "",
};

const divider227Data = {
    className: "divider-29",
};

const actionBar8Data = {
    icon32Props: icon329Data,
    icon42Props: searchInput9Data,
    icon42Props2: icon429Data,
    divider2Props: divider227Data,
};

const text49Data = {
    children: "Workbench - Remedy",
};

const divider228Data = {
    className: "divider-30",
};

const table2243Data = {
    src: "/img/icon-57.svg",
};

const state52Data = {
    className: "rectangle-5-13",
};

const statusIndicator522Data = {
    stateProps: state52Data,
};

const textIcon829Data = {
    children: "2 Hours",
};

const textIcon125Data = {
    className: "text-icon-129",
};

const icon6243Data = {
    className: "icon-45-1",
};

const table7243Data = {
    icon6Props: icon6243Data,
};

const divider84Data = {
    className: "divider-8",
};

const table2244Data = {
    src: "/img/icon-57.svg",
};

const cell02Text52Data = {
    className: "cell-02-text-15",
};

const state53Data = {
    className: "rectangle-5-13",
};

const statusIndicator523Data = {
    stateProps: state53Data,
};

const textIcon113Data = {
    label: "Clocking",
    statusIndicator5Props: statusIndicator523Data,
};

const cell04Text82Data = {
    textIcon11Props: textIcon113Data,
};

const textIcon830Data = {
    children: "2 Hours",
};

const cell05Text222Data = {
    className: "cell-05-text-22",
    textIcon8Props: textIcon830Data,
};

const textIcon340Data = {
    children: "John Carter",
};

const cell07Text521Data = {
    textIcon3Props: textIcon340Data,
};

const icon6244Data = {
    className: "",
};

const table7244Data = {
    icon6Props: icon6244Data,
};

const divider85Data = {
    className: "divider-8",
};

const tableRow232Data = {
    table22Props: table2244Data,
    cell02Text5Props: cell02Text52Data,
    cell04Text8Props: cell04Text82Data,
    cell05Text2Props: cell05Text222Data,
    cell07Text5Props: cell07Text521Data,
    table72Props: table7244Data,
    dividerProps: divider85Data,
};

const table2245Data = {
    src: "/img/icon-59.svg",
};

const cell02Text53Data = {
    className: "cell-02-text-15",
};

const state54Data = {
    className: "rectangle-5-13",
};

const statusIndicator524Data = {
    stateProps: state54Data,
};

const textIcon114Data = {
    label: "Clocking",
    statusIndicator5Props: statusIndicator524Data,
};

const cell04Text83Data = {
    textIcon11Props: textIcon114Data,
};

const textIcon831Data = {
    children: "2 Hours",
};

const cell05Text223Data = {
    className: "cell-05-text-22",
    textIcon8Props: textIcon831Data,
};

const icon6245Data = {
    className: "icon-45-2",
};

const table7245Data = {
    icon6Props: icon6245Data,
};

const divider86Data = {
    className: "divider-8",
};

const table2246Data = {
    src: "/img/icon-57.svg",
};

const cell02Text54Data = {
    className: "cell-02-text-15",
};

const state55Data = {
    className: "rectangle-5-23",
};

const statusIndicator525Data = {
    stateProps: state55Data,
};

const textIcon115Data = {
    label: "Notify Pending",
    statusIndicator5Props: statusIndicator525Data,
};

const cell04Text84Data = {
    textIcon11Props: textIcon115Data,
};

const textIcon832Data = {
    children: "4 Hours",
};

const cell05Text224Data = {
    className: "cell-05-text-22",
    textIcon8Props: textIcon832Data,
};

const textIcon341Data = {
    children: "John Carter",
};

const cell07Text522Data = {
    textIcon3Props: textIcon341Data,
};

const icon6246Data = {
    className: "",
};

const table7246Data = {
    icon6Props: icon6246Data,
};

const divider87Data = {
    className: "divider-8",
};

const tableRow233Data = {
    table22Props: table2246Data,
    cell02Text5Props: cell02Text54Data,
    cell04Text8Props: cell04Text84Data,
    cell05Text2Props: cell05Text224Data,
    cell07Text5Props: cell07Text522Data,
    table72Props: table7246Data,
    dividerProps: divider87Data,
};

const table2247Data = {
    src: "/img/icon-57.svg",
};

const cell02Text55Data = {
    className: "cell-02-text-15",
};

const statusIconBig37Data = {
    className: "status-icon-big-5",
};

const textIcon833Data = {
    children: "2 Hours",
};

const cell05Text225Data = {
    className: "cell-05-text-22",
    textIcon8Props: textIcon833Data,
};

const textIcon3217Data = {
    children: "John Carter",
    className: "text-icon-55",
};

const icon6247Data = {
    className: "",
};

const table7247Data = {
    icon6Props: icon6247Data,
};

const divider88Data = {
    className: "divider-8",
};

const table2248Data = {
    src: "/img/icon-59.svg",
};

const cell02Text56Data = {
    className: "cell-02-text-15",
};

const textIcon834Data = {
    children: "2 Hours",
};

const cell05Text226Data = {
    className: "cell-05-text-22",
    textIcon8Props: textIcon834Data,
};

const textIcon342Data = {
    children: "John Carter",
};

const cell07Text523Data = {
    textIcon3Props: textIcon342Data,
};

const icon6248Data = {
    className: "icon-45",
};

const table7248Data = {
    icon6Props: icon6248Data,
};

const divider89Data = {
    className: "divider-8",
};

const state57Data = {
    className: "scroller-9",
};

const scrollbar9Data = {
    stateProps: state57Data,
};

const inputFields9Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-49.svg",
    className: "",
};

const showPage8Data = {
    inputFieldsProps: inputFields9Data,
};

const information8Data = {
    showPageProps: showPage8Data,
};

const arrow15Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-51.svg",
    className: "",
};

const pageNumber236Data = {
    children: "2",
};

const pageNumber237Data = {
    children: "3",
};

const pageNumber238Data = {
    children: "4",
};

const pageNumber239Data = {
    children: "5",
};

const pageNumber322Data = {
    children: "6",
};

const pageNumber240Data = {
    children: "7",
};

const pageNumber323Data = {
    children: "8",
};

const pageNumber324Data = {
    children: "9",
};

const arrow16Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-52.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
    className: "",
};

const pages8Data = {
    arrow1Props: arrow15Data,
    pageNumber21Props: pageNumber236Data,
    pageNumber22Props: pageNumber237Data,
    pageNumber23Props: pageNumber238Data,
    pageNumber24Props: pageNumber239Data,
    pageNumber25Props: pageNumber322Data,
    pageNumber26Props: pageNumber240Data,
    pageNumber27Props: pageNumber323Data,
    pageNumber28Props: pageNumber324Data,
    arrow2Props: arrow16Data,
};

const page8Data = {
    pagesProps: pages8Data,
};

const dropdown5Data = {
    src: "/img/icon-63.svg",
};

const button5Data = {
    dropdownProps: dropdown5Data,
};

const pagination35Data = {
    showPageProps: information8Data,
    pagesProps: page8Data,
    goToProps2: button5Data,
};

const userInteraction5Data = {
    click2: "",
    className: "user-interaction-4",
};

const dashviewSCREEN11Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    label12: "Status",
    label13: "Clocking",
    label14: "Notify Pending",
    label15: "Notify Pending",
    headerProps: header9Data,
    pageHeading3Props: pageHeading39Data,
    card3Props: card36Data,
    tableHeaderProps: tableHeader10Data,
    actionBarProps: actionBar8Data,
    text4Props: text49Data,
    divider2Props: divider228Data,
    table221Props: table2243Data,
    statusIndicator5Props: statusIndicator522Data,
    textIcon8Props: textIcon829Data,
    textIcon12Props: textIcon125Data,
    table721Props: table7243Data,
    divider1Props: divider84Data,
    tableRow231Props: tableRow232Data,
    table222Props: table2245Data,
    cell02Text51Props: cell02Text53Data,
    cell04Text8Props: cell04Text83Data,
    cell05Text21Props: cell05Text223Data,
    table722Props: table7245Data,
    divider2Props2: divider86Data,
    tableRow232Props: tableRow233Data,
    table223Props: table2247Data,
    cell02Text52Props: cell02Text55Data,
    statusIconBig3Props: statusIconBig37Data,
    cell05Text22Props: cell05Text225Data,
    textIcon32Props: textIcon3217Data,
    table723Props: table7247Data,
    divider3Props: divider88Data,
    table224Props: table2248Data,
    cell02Text53Props: cell02Text56Data,
    cell05Text23Props: cell05Text226Data,
    cell07Text52Props: cell07Text523Data,
    table724Props: table7248Data,
    divider4Props: divider89Data,
    scrollbarProps: scrollbar9Data,
    pagination3Props: pagination35Data,
    userInteractionProps: userInteraction5Data,
};

const menuLogo10Data = {
    className: "",
};

const icon2219Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame1812Data = {
    icon22Props: icon2219Data,
};

const aTOMSICON2019notification10Data = {
    className: "atomsicon2019notification-9",
};

const aTOMSICON2019support10Data = {
    className: "atomsicon2019chat-copy-9",
};

const aTOMSAVATARDEFAULT10Data = {
    className: "",
};

const header10Data = {
    menuLogoProps: menuLogo10Data,
    frame18Props: frame1812Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification10Data,
    aTOMSICON2019supportProps: aTOMSICON2019support10Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT10Data,
};

const divider91Data = {
    className: "atomsdividersline2-pxblack-9",
};

const pageHeading310Data = {
    dividerProps: divider91Data,
};

const divider92Data = {
    className: "divider-9",
};

const divider229Data = {
    className: "",
};

const tableHeader11Data = {
    dividerProps: divider92Data,
    dividerProps2: divider229Data,
};

const saveGridSettings10Data = {
    className: "",
};

const icon3210Data = {
    saveGridSettingsProps: saveGridSettings10Data,
};

const icon2220Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame18310Data = {
    icon22Props: icon2220Data,
};

const searchInput10Data = {
    className: "",
    frame183Props: frame18310Data,
};

const icon4210Data = {
    className: "",
};

const divider230Data = {
    className: "divider-31",
};

const actionBar9Data = {
    icon32Props: icon3210Data,
    icon42Props: searchInput10Data,
    icon42Props2: icon4210Data,
    divider2Props: divider230Data,
};

const text410Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader69Data = {
    text4Props: text410Data,
};

const divider231Data = {
    className: "divider-32",
};

const tableHeader24Data = {
    columnHeader25Props: columnHeader69Data,
    divider2Props: divider231Data,
};

const table2249Data = {
    src: "/img/icon-29.svg",
};

const textIcon610Data = {
    children: "Final Pending - Open",
};

const table42Data = {
    textIconProps: textIcon610Data,
};

const textIcon414Data = {
    children: "5 Days",
};

const table529Data = {
    textIcon4Props: textIcon414Data,
};

const textIcon127Data = {
    className: "text-icon-131",
};

const cell07Text53Data = {
    textIcon12Props: textIcon127Data,
};

const icon6249Data = {
    className: "",
};

const table7249Data = {
    icon6Props: icon6249Data,
};

const divider93Data = {
    className: "divider-9",
};

const tableRow123Data = {
    table22Props: table2249Data,
    table4Props: table42Data,
    table52Props: table529Data,
    table72Props: cell07Text53Data,
    table72Props2: table7249Data,
    dividerProps: divider93Data,
};

const table2250Data = {
    src: "/img/icon-30.svg",
};

const cell04Text11Data = {
    label: "Final Pending - Open",
};

const textIcon415Data = {
    children: "2 Days",
};

const table5210Data = {
    textIcon4Props: textIcon415Data,
};

const textIcon343Data = {
    children: "John Carter",
};

const cell07Text224Data = {
    textIcon3Props: textIcon343Data,
};

const icon6250Data = {
    className: "icon-46-2",
};

const table7250Data = {
    icon6Props: icon6250Data,
};

const divider94Data = {
    className: "divider-9",
};

const tableRow24Data = {
    table22Props: table2250Data,
    cell04TextProps: cell04Text11Data,
    table52Props: table5210Data,
    cell07Text2Props: cell07Text224Data,
    table72Props: table7250Data,
    dividerProps: divider94Data,
};

const table2251Data = {
    src: "/img/icon-30.svg",
};

const state59Data = {
    className: "rectangle-5-15",
};

const statusIndicator526Data = {
    stateProps: state59Data,
};

const cell04Text25Data = {
    statusIndicator5Props: statusIndicator526Data,
};

const textIcon835Data = {
    children: "20 Days",
};

const cell05Text227Data = {
    textIcon8Props: textIcon835Data,
};

const icon6251Data = {
    className: "icon-46-3",
};

const table7251Data = {
    icon6Props: icon6251Data,
};

const divider95Data = {
    className: "divider-9",
};

const tableRow332Data = {
    table22Props: table2251Data,
    cell04Text2Props: cell04Text25Data,
    cell05Text2Props: cell05Text227Data,
    table72Props: table7251Data,
    dividerProps: divider95Data,
};

const table2252Data = {
    src: "/img/icon-4@2x.png",
};

const state60Data = {
    className: "rectangle-5-15",
};

const statusIndicator527Data = {
    stateProps: state60Data,
};

const cell04Text95Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator527Data,
};

const textIcon836Data = {
    children: "20 Days",
};

const cell05Text228Data = {
    textIcon8Props: textIcon836Data,
};

const textIcon344Data = {
    children: "John Carter",
};

const cell07Text225Data = {
    textIcon3Props: textIcon344Data,
};

const icon6252Data = {
    className: "",
};

const table7252Data = {
    icon6Props: icon6252Data,
};

const divider96Data = {
    className: "divider-9",
};

const tableRow45Data = {
    table221Props: table2252Data,
    cell04TextProps: cell04Text95Data,
    table52Props: cell05Text228Data,
    cell07Text2Props: cell07Text225Data,
    table72Props: table7252Data,
    dividerProps: divider96Data,
};

const table2253Data = {
    src: "/img/icon-29.svg",
};

const textIcon8210Data = {
    children: "Initial Pending",
};

const textIcon837Data = {
    children: "4 Hours",
};

const cell05Text229Data = {
    className: "cell-05-text-16",
    textIcon8Props: textIcon837Data,
};

const textIcon3218Data = {
    children: "John Carter",
    className: "text-icon-56",
};

const table628Data = {
    textIcon3Props: textIcon3218Data,
};

const icon6253Data = {
    className: "",
};

const table7253Data = {
    icon6Props: icon6253Data,
};

const divider97Data = {
    className: "divider-9",
};

const table2254Data = {
    src: "/img/icon-30.svg",
};

const cell04Text12Data = {
    label: "Initial Pending",
};

const textIcon838Data = {
    children: "4 Hours",
};

const cell05Text230Data = {
    className: "cell-05-text-16",
    textIcon8Props: textIcon838Data,
};

const textIcon345Data = {
    children: "John Carter",
};

const cell07Text226Data = {
    textIcon3Props: textIcon345Data,
};

const icon6254Data = {
    className: "icon-46",
};

const table7254Data = {
    icon6Props: icon6254Data,
};

const divider98Data = {
    className: "divider-9",
};

const tableRow65Data = {
    table22Props: table2254Data,
    cell04TextProps: cell04Text12Data,
    cell05Text2Props: cell05Text230Data,
    cell07Text2Props: cell07Text226Data,
    table72Props: table7254Data,
    dividerProps: divider98Data,
};

const state62Data = {
    className: "scroller-10",
};

const scrollbar10Data = {
    stateProps: state62Data,
};

const inputFields10Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-25@2x.png",
    className: "input-fields-8",
};

const showPage9Data = {
    inputFieldsProps: inputFields10Data,
};

const information9Data = {
    showPageProps: showPage9Data,
};

const arrow17Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-26.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
    className: "arrow-8-1",
};

const pageNumber241Data = {
    children: "2",
};

const pageNumber242Data = {
    children: "3",
};

const pageNumber243Data = {
    children: "4",
};

const pageNumber244Data = {
    children: "5",
};

const pageNumber325Data = {
    children: "6",
};

const pageNumber245Data = {
    children: "7",
};

const pageNumber326Data = {
    children: "8",
};

const pageNumber327Data = {
    children: "9",
};

const arrow18Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-34.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-29.svg",
    className: "arrow-8",
};

const pages9Data = {
    arrow1Props: arrow17Data,
    pageNumber21Props: pageNumber241Data,
    pageNumber22Props: pageNumber242Data,
    pageNumber23Props: pageNumber243Data,
    pageNumber24Props: pageNumber244Data,
    pageNumber25Props: pageNumber325Data,
    pageNumber26Props: pageNumber245Data,
    pageNumber27Props: pageNumber326Data,
    pageNumber28Props: pageNumber327Data,
    arrow2Props: arrow18Data,
};

const page9Data = {
    pagesProps: pages9Data,
};

const userInteraction23Data = {
    className: "user-interaction-7",
};

const tooltipTitle31Data = {
    children: "Auto - Update Report to FCC",
};

const stroke1Data = {
    textCopy: "The report is configured to auto - update the infomation on the FCC system.",
    tooltipTitle3Props: tooltipTitle31Data,
};

const dashviewSCREEN08Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    icon: "/img/rectangle-4@2x.png",
    headerProps: header10Data,
    pageHeading3Props: pageHeading310Data,
    tableHeaderProps: tableHeader11Data,
    actionBarProps: actionBar9Data,
    tableHeader2Props: tableHeader24Data,
    tableRow12Props: tableRow123Data,
    tableRow2Props: tableRow24Data,
    tableRow33Props: tableRow332Data,
    tableRow4Props: tableRow45Data,
    table22Props: table2253Data,
    textIcon82Props: textIcon8210Data,
    cell05Text2Props: cell05Text229Data,
    table62Props: table628Data,
    table72Props: table7253Data,
    dividerProps: divider97Data,
    tableRow6Props: tableRow65Data,
    scrollbarProps: scrollbar10Data,
    informationProps: information9Data,
    pageProps: page9Data,
    userInteraction2Props: userInteraction23Data,
    strokeProps: stroke1Data,
};

const menuLogo11Data = {
    className: "menu-logo-10",
};

const icon2221Data = {
    src: "/img/shape-70.svg",
    className: "atomsicon2019close-10",
};

const frame1813Data = {
    icon22Props: icon2221Data,
};

const aTOMSICON2019notification11Data = {
    className: "",
};

const aTOMSICON2019support11Data = {
    className: "atomsicon2019chat-copy-10",
};

const aTOMSAVATARDEFAULT11Data = {
    className: "atomsavatardefault-10",
};

const header11Data = {
    menuLogoProps: menuLogo11Data,
    frame18Props: frame1813Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification11Data,
    aTOMSICON2019supportProps: aTOMSICON2019support11Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT11Data,
};

const divider100Data = {
    className: "atomsdividersline2-pxblack-10",
};

const pageHeading311Data = {
    dividerProps: divider100Data,
};

const divider101Data = {
    className: "divider-10",
};

const divider232Data = {
    className: "",
};

const tableHeader12Data = {
    dividerProps: divider101Data,
    dividerProps2: divider232Data,
};

const saveGridSettings11Data = {
    className: "",
};

const icon3211Data = {
    saveGridSettingsProps: saveGridSettings11Data,
};

const icon2222Data = {
    src: "/img/shape-4.svg",
    className: "menu-logo-1",
};

const frame18311Data = {
    icon22Props: icon2222Data,
};

const searchInput11Data = {
    className: "",
    frame183Props: frame18311Data,
};

const icon4211Data = {
    className: "",
};

const divider233Data = {
    className: "divider-33",
};

const actionBar10Data = {
    icon32Props: icon3211Data,
    icon42Props: searchInput11Data,
    icon42Props2: icon4211Data,
    divider2Props: divider233Data,
};

const text411Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader610Data = {
    text4Props: text411Data,
};

const divider234Data = {
    className: "divider-34",
};

const tableHeader25Data = {
    columnHeader25Props: columnHeader610Data,
    divider2Props: divider234Data,
};

const table2255Data = {
    src: "/img/icon-29.svg",
};

const textIcon611Data = {
    children: "Final Pending - Open",
};

const textIcon416Data = {
    children: "5 Days",
};

const table5211Data = {
    textIcon4Props: textIcon416Data,
};

const textIcon129Data = {
    className: "text-icon-133",
};

const cell07Text54Data = {
    textIcon12Props: textIcon129Data,
};

const icon6255Data = {
    className: "",
};

const table7255Data = {
    icon6Props: icon6255Data,
};

const divider102Data = {
    className: "divider-10",
};

const table2256Data = {
    src: "/img/icon-30.svg",
};

const cell04Text13Data = {
    label: "Final Pending - Open",
};

const textIcon417Data = {
    children: "2 Days",
};

const table5212Data = {
    textIcon4Props: textIcon417Data,
};

const textIcon346Data = {
    children: "John Carter",
};

const cell07Text227Data = {
    textIcon3Props: textIcon346Data,
};

const icon6256Data = {
    className: "icon-47-2",
};

const table7256Data = {
    icon6Props: icon6256Data,
};

const divider103Data = {
    className: "divider-10",
};

const tableRow25Data = {
    table22Props: table2256Data,
    cell04TextProps: cell04Text13Data,
    table52Props: table5212Data,
    cell07Text2Props: cell07Text227Data,
    table72Props: table7256Data,
    dividerProps: divider103Data,
};

const table2257Data = {
    src: "/img/icon-30.svg",
};

const state64Data = {
    className: "rectangle-5-17",
};

const statusIndicator528Data = {
    stateProps: state64Data,
};

const cell04Text26Data = {
    statusIndicator5Props: statusIndicator528Data,
};

const textIcon839Data = {
    children: "20 Days",
};

const cell05Text231Data = {
    textIcon8Props: textIcon839Data,
};

const icon6257Data = {
    className: "icon-47-3",
};

const table7257Data = {
    icon6Props: icon6257Data,
};

const divider104Data = {
    className: "divider-10",
};

const tableRow333Data = {
    table22Props: table2257Data,
    cell04Text2Props: cell04Text26Data,
    cell05Text2Props: cell05Text231Data,
    table72Props: table7257Data,
    dividerProps: divider104Data,
};

const table2258Data = {
    src: "/img/icon-4@2x.png",
};

const state65Data = {
    className: "rectangle-5-17",
};

const statusIndicator529Data = {
    stateProps: state65Data,
};

const cell04Text96Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator529Data,
};

const textIcon840Data = {
    children: "20 Days",
};

const cell05Text232Data = {
    textIcon8Props: textIcon840Data,
};

const textIcon347Data = {
    children: "John Carter",
};

const cell07Text228Data = {
    textIcon3Props: textIcon347Data,
};

const icon6258Data = {
    className: "",
};

const table7258Data = {
    icon6Props: icon6258Data,
};

const divider105Data = {
    className: "divider-10",
};

const tableRow46Data = {
    table221Props: table2258Data,
    cell04TextProps: cell04Text96Data,
    table52Props: cell05Text232Data,
    cell07Text2Props: cell07Text228Data,
    table72Props: table7258Data,
    dividerProps: divider105Data,
};

const table2259Data = {
    src: "/img/icon-29.svg",
};

const statusIconBig39Data = {
    className: "status-icon-big-7",
};

const textIcon8211Data = {
    children: "Initial Pending",
};

const table926Data = {
    textIconProps: statusIconBig39Data,
    textIconProps2: textIcon8211Data,
};

const textIcon841Data = {
    children: "4 Hours",
};

const cell05Text233Data = {
    className: "cell-05-text-18",
    textIcon8Props: textIcon841Data,
};

const textIcon3219Data = {
    children: "John Carter",
    className: "text-icon-57",
};

const table629Data = {
    textIcon3Props: textIcon3219Data,
};

const icon6259Data = {
    className: "",
};

const table7259Data = {
    icon6Props: icon6259Data,
};

const divider106Data = {
    className: "divider-10",
};

const tableRow54Data = {
    table22Props: table2259Data,
    table92Props: table926Data,
    cell05Text2Props: cell05Text233Data,
    table62Props: table629Data,
    table72Props: table7259Data,
    dividerProps: divider106Data,
};

const table2260Data = {
    src: "/img/icon-30.svg",
};

const cell04Text14Data = {
    label: "Initial Pending",
};

const textIcon842Data = {
    children: "4 Hours",
};

const cell05Text234Data = {
    className: "cell-05-text-18",
    textIcon8Props: textIcon842Data,
};

const textIcon348Data = {
    children: "John Carter",
};

const cell07Text229Data = {
    textIcon3Props: textIcon348Data,
};

const icon6260Data = {
    className: "icon-47",
};

const table7260Data = {
    icon6Props: icon6260Data,
};

const divider107Data = {
    className: "divider-10",
};

const tableRow66Data = {
    table22Props: table2260Data,
    cell04TextProps: cell04Text14Data,
    cell05Text2Props: cell05Text234Data,
    cell07Text2Props: cell07Text229Data,
    table72Props: table7260Data,
    dividerProps: divider107Data,
};

const state67Data = {
    className: "scroller-11",
};

const scrollbar11Data = {
    stateProps: state67Data,
};

const inputFields11Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-25@2x.png",
    className: "input-fields-9",
};

const showPage10Data = {
    inputFieldsProps: inputFields11Data,
};

const information10Data = {
    showPageProps: showPage10Data,
};

const arrow19Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-26.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-64.svg",
    className: "arrow-9-1",
};

const pageNumber246Data = {
    children: "2",
};

const pageNumber247Data = {
    children: "3",
};

const pageNumber248Data = {
    children: "4",
};

const pageNumber249Data = {
    children: "5",
};

const pageNumber328Data = {
    children: "6",
};

const pageNumber250Data = {
    children: "7",
};

const pageNumber329Data = {
    children: "8",
};

const pageNumber330Data = {
    children: "9",
};

const arrow20Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-65.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-29.svg",
    className: "arrow-9",
};

const pages10Data = {
    arrow1Props: arrow19Data,
    pageNumber21Props: pageNumber246Data,
    pageNumber22Props: pageNumber247Data,
    pageNumber23Props: pageNumber248Data,
    pageNumber24Props: pageNumber249Data,
    pageNumber25Props: pageNumber328Data,
    pageNumber26Props: pageNumber250Data,
    pageNumber27Props: pageNumber329Data,
    pageNumber28Props: pageNumber330Data,
    arrow2Props: arrow20Data,
};

const page10Data = {
    pagesProps: pages10Data,
};

const tooltipTitle32Data = {
    children: "2 Duplicates Found",
};

const stroke2Data = {
    textCopy: <React.Fragment>The system has identified two duplicates. <br /><br />To review the reports, please click on MARCL ID.</React.Fragment>,
    className: "stroke-1",
    tooltipTitle3Props: tooltipTitle32Data,
};

const userInteraction24Data = {
    className: "user-interaction-8",
};

const dashviewSCREEN09Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    icon: "/img/rectangle-4@2x.png",
    headerProps: header11Data,
    pageHeading3Props: pageHeading311Data,
    tableHeaderProps: tableHeader12Data,
    actionBarProps: actionBar10Data,
    tableHeader2Props: tableHeader25Data,
    table22Props: table2255Data,
    textIcon6Props: textIcon611Data,
    table52Props: table5211Data,
    cell07Text5Props: cell07Text54Data,
    table72Props: table7255Data,
    dividerProps: divider102Data,
    tableRow2Props: tableRow25Data,
    tableRow33Props: tableRow333Data,
    tableRow4Props: tableRow46Data,
    tableRow5Props: tableRow54Data,
    tableRow6Props: tableRow66Data,
    scrollbarProps: scrollbar11Data,
    informationProps: information10Data,
    pageProps: page10Data,
    strokeProps: stroke2Data,
    userInteraction2Props: userInteraction24Data,
};

const menuLogo12Data = {
    className: "menu-logo-11",
};

const icon2223Data = {
    src: "/img/shape-135.svg",
    className: "atomsicon2019close-11",
};

const frame1814Data = {
    icon22Props: icon2223Data,
};

const aTOMSICON2019notification12Data = {
    className: "",
};

const aTOMSICON2019support12Data = {
    className: "atomsicon2019chat-copy-11",
};

const aTOMSAVATARDEFAULT12Data = {
    className: "atomsavatardefault-11",
};

const header12Data = {
    menuLogoProps: menuLogo12Data,
    frame18Props: frame1814Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification12Data,
    aTOMSICON2019supportProps: aTOMSICON2019support12Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT12Data,
};

const divider109Data = {
    className: "atomsdividersline2-pxblack-11",
};

const pageHeading312Data = {
    dividerProps: divider109Data,
};

const divider110Data = {
    className: "divider-11",
};

const divider235Data = {
    className: "",
};

const tableHeader13Data = {
    dividerProps: divider110Data,
    dividerProps2: divider235Data,
};

const saveGridSettings12Data = {
    className: "",
};

const icon3212Data = {
    saveGridSettingsProps: saveGridSettings12Data,
};

const icon2224Data = {
    src: "/img/shape-137.svg",
    className: "menu-logo-1",
};

const frame18312Data = {
    icon22Props: icon2224Data,
};

const searchInput12Data = {
    className: "",
    frame183Props: frame18312Data,
};

const icon4212Data = {
    className: "",
};

const divider236Data = {
    className: "divider-35",
};

const actionBar11Data = {
    icon32Props: icon3212Data,
    icon42Props: searchInput12Data,
    icon42Props2: icon4212Data,
    divider2Props: divider236Data,
};

const text412Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader611Data = {
    text4Props: text412Data,
};

const divider237Data = {
    className: "divider-36",
};

const tableHeader26Data = {
    columnHeader25Props: columnHeader611Data,
    divider2Props: divider237Data,
};

const table2261Data = {
    src: "/img/icon-44.svg",
};

const textIcon612Data = {
    children: "Final Pending - Open",
};

const table43Data = {
    textIconProps: textIcon612Data,
};

const textIcon418Data = {
    children: "5 Days",
};

const table5213Data = {
    textIcon4Props: textIcon418Data,
};

const textIcon1211Data = {
    className: "text-icon-135",
};

const cell07Text55Data = {
    textIcon12Props: textIcon1211Data,
};

const icon6261Data = {
    className: "",
};

const table7261Data = {
    icon6Props: icon6261Data,
};

const divider111Data = {
    className: "divider-11",
};

const tableRow124Data = {
    table22Props: table2261Data,
    table4Props: table43Data,
    table52Props: table5213Data,
    table72Props: cell07Text55Data,
    table72Props2: table7261Data,
    dividerProps: divider111Data,
};

const table2262Data = {
    src: "/img/icon-43.svg",
};

const cell04Text15Data = {
    label: "Final Pending - Open",
};

const textIcon419Data = {
    children: "2 Days",
};

const table5214Data = {
    textIcon4Props: textIcon419Data,
};

const textIcon349Data = {
    children: "John Carter",
};

const cell07Text230Data = {
    textIcon3Props: textIcon349Data,
};

const icon6262Data = {
    className: "icon-48-2",
};

const table7262Data = {
    icon6Props: icon6262Data,
};

const divider112Data = {
    className: "divider-11",
};

const tableRow26Data = {
    table22Props: table2262Data,
    cell04TextProps: cell04Text15Data,
    table52Props: table5214Data,
    cell07Text2Props: cell07Text230Data,
    table72Props: table7262Data,
    dividerProps: divider112Data,
};

const table2263Data = {
    src: "/img/icon-43.svg",
};

const state69Data = {
    className: "rectangle-5-19",
};

const statusIndicator530Data = {
    stateProps: state69Data,
};

const cell04Text27Data = {
    statusIndicator5Props: statusIndicator530Data,
};

const textIcon843Data = {
    children: "20 Days",
};

const cell05Text235Data = {
    textIcon8Props: textIcon843Data,
};

const icon6263Data = {
    className: "icon-48-3",
};

const table7263Data = {
    icon6Props: icon6263Data,
};

const divider113Data = {
    className: "divider-11",
};

const tableRow334Data = {
    table22Props: table2263Data,
    cell04Text2Props: cell04Text27Data,
    cell05Text2Props: cell05Text235Data,
    table72Props: table7263Data,
    dividerProps: divider113Data,
};

const table2264Data = {
    src: "/img/icon-4@2x.png",
};

const state70Data = {
    className: "rectangle-5-19",
};

const statusIndicator531Data = {
    stateProps: state70Data,
};

const cell04Text97Data = {
    label: "Final Pending - Restored",
    statusIndicatorProps: statusIndicator531Data,
};

const textIcon844Data = {
    children: "20 Days",
};

const cell05Text236Data = {
    textIcon8Props: textIcon844Data,
};

const textIcon350Data = {
    children: "John Carter",
};

const cell07Text231Data = {
    textIcon3Props: textIcon350Data,
};

const icon6264Data = {
    className: "",
};

const table7264Data = {
    icon6Props: icon6264Data,
};

const divider114Data = {
    className: "divider-11",
};

const tableRow47Data = {
    table221Props: table2264Data,
    cell04TextProps: cell04Text97Data,
    table52Props: cell05Text236Data,
    cell07Text2Props: cell07Text231Data,
    table72Props: table7264Data,
    dividerProps: divider114Data,
};

const table2265Data = {
    src: "/img/icon-44.svg",
};

const statusIconBig310Data = {
    className: "status-icon-big-8",
};

const textIcon8212Data = {
    children: "Initial Pending",
};

const table927Data = {
    textIconProps: statusIconBig310Data,
    textIconProps2: textIcon8212Data,
};

const textIcon845Data = {
    children: "4 Hours",
};

const cell05Text237Data = {
    className: "cell-05-text-20",
    textIcon8Props: textIcon845Data,
};

const textIcon3220Data = {
    children: "John Carter",
    className: "text-icon-58",
};

const table6210Data = {
    textIcon3Props: textIcon3220Data,
};

const icon6265Data = {
    className: "",
};

const table7265Data = {
    icon6Props: icon6265Data,
};

const divider115Data = {
    className: "divider-11",
};

const tableRow55Data = {
    table22Props: table2265Data,
    table92Props: table927Data,
    cell05Text2Props: cell05Text237Data,
    table62Props: table6210Data,
    table72Props: table7265Data,
    dividerProps: divider115Data,
};

const table2266Data = {
    src: "/img/icon-43.svg",
};

const cell04Text16Data = {
    label: "Initial Pending",
};

const textIcon846Data = {
    children: "4 Hours",
};

const cell05Text238Data = {
    className: "cell-05-text-20",
    textIcon8Props: textIcon846Data,
};

const textIcon351Data = {
    children: "John Carter",
};

const cell07Text232Data = {
    textIcon3Props: textIcon351Data,
};

const icon6266Data = {
    className: "icon-48",
};

const table7266Data = {
    icon6Props: icon6266Data,
};

const divider116Data = {
    className: "divider-11",
};

const tableRow67Data = {
    table22Props: table2266Data,
    cell04TextProps: cell04Text16Data,
    cell05Text2Props: cell05Text238Data,
    cell07Text2Props: cell07Text232Data,
    table72Props: table7266Data,
    dividerProps: divider116Data,
};

const state72Data = {
    className: "scroller-12",
};

const scrollbar12Data = {
    stateProps: state72Data,
};

const inputFields12Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-25@2x.png",
    className: "input-fields-10",
};

const showPage11Data = {
    inputFieldsProps: inputFields12Data,
};

const information11Data = {
    showPageProps: showPage11Data,
};

const arrow21Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-26.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-70.svg",
    className: "arrow-10-1",
};

const pageNumber251Data = {
    children: "2",
};

const pageNumber252Data = {
    children: "3",
};

const pageNumber253Data = {
    children: "4",
};

const pageNumber254Data = {
    children: "5",
};

const pageNumber331Data = {
    children: "6",
};

const pageNumber255Data = {
    children: "7",
};

const pageNumber332Data = {
    children: "8",
};

const pageNumber333Data = {
    children: "9",
};

const arrow22Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-71.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-29.svg",
    className: "arrow-10",
};

const pages11Data = {
    arrow1Props: arrow21Data,
    pageNumber21Props: pageNumber251Data,
    pageNumber22Props: pageNumber252Data,
    pageNumber23Props: pageNumber253Data,
    pageNumber24Props: pageNumber254Data,
    pageNumber25Props: pageNumber331Data,
    pageNumber26Props: pageNumber255Data,
    pageNumber27Props: pageNumber332Data,
    pageNumber28Props: pageNumber333Data,
    arrow2Props: arrow22Data,
};

const page11Data = {
    pagesProps: pages11Data,
};

const tooltipTitle33Data = {
    children: "California Report found for the same outage",
    className: "tooltip-title-2",
};

const userInteraction6Data = {
    click2: "",
    className: "user-interaction-5",
};

const dashviewSCREEN10Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    icon: "/img/rectangle-4@2x.png",
    headerProps: header12Data,
    pageHeading3Props: pageHeading312Data,
    tableHeaderProps: tableHeader13Data,
    actionBarProps: actionBar11Data,
    tableHeader2Props: tableHeader26Data,
    tableRow12Props: tableRow124Data,
    tableRow2Props: tableRow26Data,
    tableRow33Props: tableRow334Data,
    tableRow4Props: tableRow47Data,
    tableRow5Props: tableRow55Data,
    tableRow6Props: tableRow67Data,
    scrollbarProps: scrollbar12Data,
    informationProps: information11Data,
    pageProps: page11Data,
    tooltipTitle3Props: tooltipTitle33Data,
    userInteractionProps: userInteraction6Data,
};

