import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import usericon from "./icons/user.svg";
import passicon from "./icons/password.svg";
import "./login.css";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "../Register/Register";
import axios from 'axios'
function Login(props) {

  const [creds,setCreds] = useState({
    userEmail:"",
    password:""
  });

  const getcreds = ()=>{
    console.log(creds);
    axios.post('http://localhost:8080/lms/user/login',creds).then(res=>{
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <div className="card card-body col-md-4 offset-md-4  loginbody">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <span>
              <img src={usericon} alt="" className="iconset" />
            </span>
            UserName
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email or username" onChange={e=>{
            const val = e.target.value;
            setCreds(prevState=>{
              return {...prevState,userEmail:val}
            })
          }}/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <span>
              <img src={passicon} alt="" className="iconset" />
            </span>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e=>{
            const val = e.target.value;
            setCreds(prevState=>{
              return {...prevState,password:val}
            })
          }}/>
        </Form.Group>
        {/* <NavLink to="/admin"> */}
          <Button onClick={getcreds} variant="primary" className="offset-5">
            Login
          </Button>
        {/* </NavLink> */}
      </Form>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
}

export default Login;
