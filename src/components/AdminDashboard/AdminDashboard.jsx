import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddEmployee from "../AddEmployee/AddEmployee";
import AddRole from "../AddRole/AddRole";
import DeleteEmployee from "../DeleteEmployee/DeleteEmployee";
import SideNavBar from "../SideNavBar/SideNavBar";
import UpdateRole from "../UpdateRole/UpdateRole";
import "../AdminDashboard/admindb.css";
import icon from "../AdminDashboard/admin.svg";

const navs = [
  {
    url: "/admin/addemp",
    name: "Add employee",
  },
  {
    url: "/admin/deleteEmp",
    name: "Delete employee",
  },
  {
    url: "/admin/addRole",
    name: "Add Role",
  },
  {
    url: "/admin/updateRole",
    name: "Update Role",
  },
];

const AdminDashboard = (props) => {
  // let data = null;
  // try {
  //   data = JSON.parse(localStorage.getItem('user'));
  // } catch {

  // }

  // useEffect(() => {
  //   if(data.userId !==1){
  //     props.history.push('/Login')
  //   }
  // });

  return (
    <div className="admindb">
      <Router>
        {/* <Switch> */}
        <SideNavBar navs={navs} />
        <div className="offset-md-9 wlcmtxt">
          Welcome {JSON.parse(localStorage.getItem("user")).userName}
          <img src={icon} className="icon"></img>
        </div>
        <Route path="/admin/addemp" component={AddEmployee}></Route>
        <Route path="/admin/addrole" render={(props) => <AddRole {...props}/>}></Route>
        <Route path="/admin/updateRole" component={UpdateRole}></Route>
        <Route path="/admin/deleteEmp" component={DeleteEmployee}></Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
};

export default AdminDashboard;
