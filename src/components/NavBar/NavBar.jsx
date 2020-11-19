import React, { useContext, useState } from "react";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppContext from "../Context/AppContext";
import brand from "./icons/bank.svg";
import "./nav.css";

function NavBar() {
  const [log, setLog] = useState(1);
  let ele;
  if (log) {
    ele = (
      <NavLink to="/Login">
        <Button
          variant="light"
          size="lg"
          className="loginbtn"
          onClick={() => setLog(0)}
        >
          <strong>Login</strong>
        </Button>
      </NavLink>
    );
  }

  return (
    <div>
      <Navbar variant="dark" className="nbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <NavLink to='/'>
          <Navbar.Brand>
            <img src={brand} id="brandlogo" />
          </Navbar.Brand>
          <strong className="maint">MVBI</strong>
        </NavLink>
          &nbsp;
          <div className="subt d-none d-sm-block">(MV Bank Of India)</div>
          <Nav className="mr-auto"></Nav>
          {ele}
          {/* <Button onClick = {() => con.setTheme('dark')}>theme</Button> */}
        </Navbar.Collapse>
      </Navbar>
      {/* <h1>{con.theme}</h1> */}
    </div>
  );
}

export default NavBar;
