import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const DeleteEmployee = (props) => {
  const [text, setText] = useState("");
  const [employee, setEmp] = useState({});

  let emp;
  const getemp = () => {
    axios
      .get("http://localhost:8080/lms/admin/employee/" + text)
      .then((res) => {
        console.log(res);
        setEmp(res.data.response);
        console.log(res.data.response.firstname);
      });
  };

  return (
    <div className="col-md-4 offset-md-4 card card-body mt-5">
      <Form action="get">
        <Form.Group>
          <Form.Label>Employee Name / Email</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setText(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={getemp}>Find</Button>
        <div>
          <ul>{employee.firstname}</ul>
        </div>
      </Form>
    </div>
  );
};

export default DeleteEmployee;
