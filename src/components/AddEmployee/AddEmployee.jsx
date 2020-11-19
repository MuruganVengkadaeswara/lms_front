import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import deptlist from "../AddEmployee/deptlist.json";
import axios from "axios";

const AddEmployee = (props) => {
  const [employee, setEmp] = useState({});

  const addemp = () => {
    console.log(employee);
    axios
      .post("http://localhost:8080/lms/admin/employee", employee)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div className="card card-body col-md-4 offset-md-4 mt-5">
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  const val = e.target.value;
                  setEmp((prevState) => {
                    return { ...prevState, firstname: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  const val = e.target.value;
                  setEmp((prevState) => {
                    return { ...prevState, lastname: val };
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, email: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, department: val };
              });
            }}
          >
            <option disabled>select</option>
            {deptlist.map((dept) => (
              <option key={dept.key} value={dept.key}>
                {dept.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, designation: val };
              });
            }}
          >
            <option>select</option>
            <option>abc</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Employee Status</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select"
            onChange={(e) => {
              const val = e.target.value;
              setEmp((prevState) => {
                return { ...prevState, employeeStatus: val };
              });
            }}
          >
            <option disabled>select</option>
            <option key="act" value="active">
              ACTIVE
            </option>
            <option key="inact" value="inactive">
              INACTIVE
            </option>
          </Form.Control>
        </Form.Group>
        <Button onClick={addemp}>Add Employee</Button>
      </Form>
    </div>
  );
};

export default AddEmployee;
