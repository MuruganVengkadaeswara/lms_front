import React from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddLoanType from "../LoanType/AddLoanType";
import UpdateLoanType from "../LoanType/UpdateLoanType";

const navs = [
  {
    url: "/applications",
    name: "Loan Applications",
  },
  {
    url: "/apprLoans",
    name: "Approved Loans",
  },
  {
    url: "/pendLoans",
    name: "Pending Loans",
  },
  {
    url: "/addclient",
    name: "Add Client",
  },
  {
    url: "/updateclient",
    name: "Update Client",
  },
  {
    url: "/deleteclient",
    name: "Delete Client",
  },
  {
    url: "/addloantype",
    name: "Add Loan Type",
  },
  {
    url: "/updateloantype",
    name: "Update Loan type",
  },
];

const EmployeeDashboard = (props) => {
  return (
    <div>
        <Router>

      <SideNavBar navs={navs} />
      <Route path='/addloantype' component={AddLoanType}></Route>
      <Route path='/updateloantype' component={UpdateLoanType}></Route>
        </Router>
    </div>
  );
};

export default EmployeeDashboard;
