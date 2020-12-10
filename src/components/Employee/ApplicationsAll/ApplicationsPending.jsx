import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table,Button } from "react-bootstrap";
import ApplicationFull from "../ApplicationFull/ApplicationFull";

const ApplicationsPending = (props) => {
  const [applns, setApplns] = useState([]);
  const [app,setapp] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/lms/employee/applications-pending")
      .then((res) => {
        console.log(res.data);
        setApplns(res.data.response);
        console.log(applns);
      });
  }, []);

  const showAppln = (id)=>{
    console.log(id);
    // props.history.push('./pendLoans/application')
    props.history.push({pathname:"./application",id:id})
    // setapp(<ApplicationFull id={e.target.id}/>)
  }

  return (
    <div className="col-md-8 offset-md-2 card card-body tableblock">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Application Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Loan Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        {applns.map((appln) => (
          <tbody>
            <tr>
              <td>{appln.applicationId}</td>
              <td>{appln.firstName}</td>
              <td>{appln.lastName}</td>
              <td>{appln.loanAmount}</td>
              <td>
                  <Button id={appln.applicationId} onClick={()=>showAppln(appln.applicationId)}>
                      View
                  </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      {app}
    </div>
  );
};

export default ApplicationsPending;
