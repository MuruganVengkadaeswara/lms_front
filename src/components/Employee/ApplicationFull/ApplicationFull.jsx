import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "../ApplicationFull/applicationfull.css";

const ApplicationFull = (props) => {
  const [appln, setAppln] = useState({});

  useEffect(() => {
    Axios.get(
      `http://localhost:8080/lms/employee/application/${props.location.id}`
    ).then((res) => {
      console.log(res.data.response);
      let app = res.data.response;
      setAppln(app);
      console.log(typeof res.data.response.loantype);
    });
  }, []);

  return (
    <div className="card card-body col-md-6 offset-md-3 mt-5 applnblock">
      <Table striped bordered hover responsive>
        <thead>
          <th>Field</th>
          <th>value</th>
        </thead>
        <tbody>
          {Object.keys(appln).map((key, index) => {
            if (typeof appln[key] != "object") {
              if (key == "dob") {
                console.log(key);
                let date = new Date(appln[key])
                return (
                    
                  <tr>
                    <td>{key} </td>
                    <td>{date.toDateString()}</td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td>{key} </td>
                    <td>{appln[key]}</td>
                  </tr>
                );
              }
            } else {
              {
                /* let newobj = appln[key];
          Object.keys(newobj).map((key1, index1) => {
              return (
                <h1>
                  {key1} : {newobj[key1]}
                </h1>
              );
          }); */
              }
              return "";
            }
          })}
        </tbody>
      </Table>
        <hr></hr>
      <div className="offset-md-4">
        <Button id={appln.applicationId} variant="success">
          Approve
        </Button>
        <Button id={appln.applicationId} className="ml-5" variant="danger">
          Reject
        </Button>
      </div>
    </div>
  );
};

export default ApplicationFull;
