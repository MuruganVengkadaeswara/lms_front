import React, { useState, useEffect } from "react";
import { Form, Button, Table, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import "../DeleteEmployee/deleteemployee.css";

const DeleteEmployee = (props) => {
  const [text, setText] = useState("");
  const [emps, setEmps] = useState([]);
  const [tbl, setTbl] = useState();
  const [alert, setAlert] = useState();

 

  const deleteEmp = (e) => {
    setAlert(<Spinner animation="border" />);
    let id = e.target.id
    console.log(e.target.id);
    axios
      .delete(`http://localhost:8080/lms/admin/employee/${id}`)
      .then((res) => {
        if (res.data.error) {
          setAlert(<Alert variant="danger"> Unable to delete employee</Alert>);
        } else {
          setAlert(<Alert variant="success">Employee Deleted SuccessFully</Alert>);
        }
      });
  };

  const getemp = () => {
    axios
      .get("http://localhost:8080/lms/admin/employee/" + text)
      .then((res) => {
        console.log(res);
        setEmps(res.data.response);
        console.log(emps);
        setTbl(
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>EmpId</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {emps.map((emp) => (
                <tr>
                  <td>{emp.employeeId}</td>
                  <td>{emp.firstname}</td>
                  <td>{emp.lastname}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.department}</td>
                  <td>{emp.employeeStatus}</td>
                  <td>
                    <Button id={emp.employeeId} onClick={deleteEmp} variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
      });
  };

  return (
    <div>
      <div className="col-md-4 offset-md-4 card card-body mt-5 delblock">
        <Form action="get">
          <Form.Group>
            <Form.Label>
              <h4>
                <strong>Employee Name / Email</strong>
              </h4>
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setText(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="success" className="offset-md-5" onClick={getemp}>
            <strong>Find</strong>
          </Button>
        </Form>
      </div>
      <br></br>
      <div className="card card-body col-md-8 offset-md-2 tableblock">
        {alert}
        {tbl}
      </div>
    </div>
  );
};

export default DeleteEmployee;
