import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideNavBar from "../SideNavBar/SideNavBar";

const navs = [
  {
    url: "/client/loans",
    name: "My Loans",
  },
  {
    url: "/client/pendingemis",
    name: "Pending Emis",
  },
  {
    url: "/client/apply",
    name: "Apply for loan",
  },
];

const ClientDashBoard = (props) => {
  return (
    <div>
      <Router>
        <SideNavBar navs={navs} />
        <Route></Route>
      </Router>
    </div>
  );
};

export default ClientDashBoard;
