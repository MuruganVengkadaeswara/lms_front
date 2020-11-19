import React, { useState } from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import AddEmployee from "../AddEmployee/AddEmployee";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import CarouselComp from "../Carousel/CarouselComp";
import LoanApplication from "../LoanApplication/LoanApplication";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Register from "../Register/Register";
import HomeContents from "../HomeContents/HomeContents";
import "../Home/home.css";

const navs = [
  {
    url: "/addemp",
    name: "Add employee",
  },
  {
    url: "/deleteEmp",
    name: "Delete employee",
  },
  {
    url: "/addRole",
    name: "Add Role",
  },
  {
    url: "/updateRole",
    name: "Update Role",
  },
];

const Home = (props) => {
  const [appl, setAppl] = useState(1);
  let ele;
  if (1) {
    ele = (
      <NavLink to="/apply">
        <Button variant="outline-light" className="applbtn">
          Apply
        </Button>
      </NavLink>
    );
  }

  return (
    <div>
      <Router>
        <NavBar />
        {ele}
        {/* <Switch> */}
          <Route exact path="/" component={HomeContents}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/apply" component={LoanApplication}></Route>
          <Route path='/admin' component={AdminDashboard}></Route>
          <Route path="/register" component={Register}></Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
};

export default Home;
