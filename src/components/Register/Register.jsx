import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Register = (props) => {

  const [user,setUser] = useState({
    "roleId":2
  })


  const regUser = (event) => {
    event.preventDefault();
    console.log("function call");
    console.log(user);
    axios.post("http://localhost:8080/lms/user/register", user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div className="col-md-4 offset-md-4 mt-5 card card-body">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e=>{
            const val = e.target.value;
            setUser(prevState=>{
              return {...prevState,userEmail:val}
            })
          }}/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="email" placeholder="choose username" onChange={e=>{
            const val = e.target.value;
            setUser(prevState=>{
              return {...prevState,userName:val}
            })
          }}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e=>{
            const val = e.target.value;
            setUser(prevState=>{
              return {...prevState,password:val}
            })
          }}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={regUser} className="offset-5">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
