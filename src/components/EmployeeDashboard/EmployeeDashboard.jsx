import React from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddLoanType from "../LoanType/AddLoanType";
import UpdateLoanType from "../LoanType/UpdateLoanType";
import AddClient from "../Employee/AddClient/AddClient";
import ApprovedApplications from "../ApprovedApplications/ApprovedApplications";
import ApplicationsPending from "../Employee/ApplicationsAll/ApplicationsPending";
import DeleteClient from "../Employee/DeleteClient/DeleteClient";
import "../EmployeeDashboard/employeedb.css";
import icon from '../EmployeeDashboard/employee.svg'
import UpdateClient from "../Employee/UpdateClient/UpdateClient";
import ApplicationFull from "../Employee/ApplicationFull/ApplicationFull";

const navs = [
  {
    url: "/employee/apprLoans",
    name: "Approved Applications",
  },
  {
    url: "/employee/pendLoans",
    name: "Pending Applications",
  },
  {
    url: "/employee/addclient",
    name: "Add Client",
  },
  {
    url: "/employee/updateclient",
    name: "Update Client",
  },
  {
    url: "/employee/deleteclient",
    name: "Delete Client",
  },
  {
    url: "/employee/addloantype",
    name: "Add Loan Type",
  },
  {
    url: "/employee/updateloantype",
    name: "Update Loan type",
  },
];

const EmployeeDashboard = (props) => {
  return (
    <div className="empdb">
      <Router>
        <SideNavBar navs={navs} />
        <br></br>
        <div className="offset-md-8 wlcmtxt">
          Welcome {JSON.parse(localStorage.getItem("user")).userName}
          <img src = {icon} className="icon"></img>
        </div>

        <Route path="/employee/apprLoans" component={ApprovedApplications}>
          {" "}
        </Route>
        <Route
          path="/employee/pendLoans"
          component={ApplicationsPending}
        ></Route>
        <Route path="/employee/addloantype" component={AddLoanType}></Route>
        <Route
          path="/employee/updateloantype"
          component={UpdateLoanType}
        ></Route>
        <Route path="/employee/deleteclient" component={DeleteClient}></Route>
        <Route path="/employee/addclient" component={AddClient}></Route>
        <Route path="/employee/updateclient" component={UpdateClient}></Route>
        <Route path="/employee/application" component={ApplicationFull}></Route>
      </Router>
    </div>
  );
};

export default EmployeeDashboard;
