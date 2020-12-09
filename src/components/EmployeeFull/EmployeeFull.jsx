import Axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Button, Spinner, Tab, Table } from "react-bootstrap";
import "../EmployeeFull/empfull.css";

const EmployeeFull = (props) => {
  const [emps, setEmps] = useState([]);
  const [alert, setAlert] = useState();

  useEffect(() => {
    console.log(props.location.id);
    Axios.get(
      `http://localhost:8080/lms/admin/employee/${props.location.id}`
    ).then((res) => {
      let arr = res.data.response
      setEmps(arr);
      console.log(emps);
    });
  },[]);

  useEffect(()=>{

  },[alert])

  const deleteEmp = (e) => {
    console.log(e.target.value);
    let id = parseInt(e.target.value)
    setAlert(<Spinner variant="danger" animation="border"/>)
    Axios.delete(`http://localhost:8080/lms/admin/employee/${id}`).
    then((res)=>{
      console.log(res.data);
      if(res.data.error){
        setAlert(<Alert variant="danger">Unable to delete Employee</Alert>)
      }
      else{
        setAlert(<Alert variant="success">Employee Deleted Successfully</Alert>)
      }
    })
  };

  const updateEmp = (e) => {
    console.log(e.target.id);
    props.history.push({
      pathname:"/admin/employees/editEmployee",
      id:e.target.id
    })
  };

  return (
    <div className="col-md-8 offset-md-2 card card-body mt-5 empsblock">
    {alert}
      <h3>
        <strong>Search Results:</strong>
      </h3>
      <Table striped hover responsive bordered>
        <thead>
          <th>EmpId</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {emps.map((emp) => {
            return (
              <tr>
                <td>{emp.employeeId}</td>
                <td>
                  {emp.firstname} {emp.lastname}
                </td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.employeeStatus}</td>
                <td>
                  <span>
                    <Button
                      variant="info"
                      id={emp.employeeId}
                      onClick={updateEmp}
                    >
                      <strong>update</strong>
                    </Button>
                    <Button
                      variant="danger"
                      className="ml-4"
                      value={emp.employeeId}
                      // id={emp.employeeId}
                      onClick={deleteEmp}
                    >
                      <strong>Delete</strong>
                    </Button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* {emps.map((emp) => {
        return Object.keys(emp).map((key, index) => (
          <>
            <h1>{key}</h1>
            <h1>{emp[key]}</h1>
          </>
        ));
      })} */}
      {props.id}
      {props.location.search}
    </div>
  );
};

export default EmployeeFull;
