import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddEmployee from "../AddEmployee/AddEmployee";
import AddRole from "../AddRole/AddRole";
import DeleteEmployee from "../DeleteEmployee/DeleteEmployee";
import SideNavBar from "../SideNavBar/SideNavBar";
import UpdateRole from "../UpdateRole/UpdateRole";

const navs = [
    {
        url:'/addemp',
        name:'Add employee'
    },
    {
        url:'/deleteEmp',
        name:'Delete employee'
    },
    {
        url:'/addRole',
        name:'Add Role'
    },
    {
        url:'/updateRole',
        name:'Update Role'
    }
];

const AdminDashboard = (props) => {
  return (
    <div>
      admin db
      <Router>
        {/* <Switch> */}
        <SideNavBar navs={navs}/>
        <Route path="/addemp" component={AddEmployee}></Route>
        <Route path="/addrole" component={AddRole}></Route>
        <Route path="/updateRole" component={UpdateRole}></Route>
        <Route path="/deleteEmp" component={DeleteEmployee}></Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
};

export default AdminDashboard;
