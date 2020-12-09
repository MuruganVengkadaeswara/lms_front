import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import "../ApplicationFull/applicationfull.css";

const ApplicationFull = (props) => {
  const [appln, setAppln] = useState({});
  const [appAlert, setAppAlert] = useState();
  const [deleteAlert, setDeleteAlert] = useState();
  const [userAlert, setUserAlert] = useState();
  const [clientAlert, setClientAlert] = useState();
  const [loanAlert, setLoanAlert] = useState();

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

  const approveAppln = (e) => {
    console.log(e.target.id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    let user = {
      userName: appln.firstName,
      password: "1234",
      userEmail: appln.email,
      roleId: "3",
    };

    Axios.post(`http://localhost:8080/lms/user/register`, user).then((res) => {
      console.log(res.data.response);
      if (res.data.error) {
        setUserAlert(<Alert variant="danger">Unable to register client</Alert>);
      }
      else{
        setUserAlert(<Alert variant="success">Client Registered Successfully</Alert>)
      }
    });

    let client = {
      firstName: appln.firstName,
      lastName: appln.lastName,
      address1: appln.address1,
      address2: appln.address2,
      mobile1: appln.mobileNo,
      mobile2: appln.mobileNo,
      state: appln.state,
      pincode: appln.pincode,
      email: appln.email,
      clientStatus: "Active",
    };

    let loan = {
      loanAmount: appln.loanAmount,
      emiAmount: "23000",
      collateralType: "other property",
      collateralValue: appln.loanAmount + appln.loanAmount * 0.75,
      emiDuration: appln.loanAmount / 10000,
      pendingEmis: appln.loanAmount / 10000,
      loanTypeId: appln.loanTypeId,
      clientId: "3",
    };

    let status = {
      statusId: appln.status.statusId,
      status: "approved",
      category: null,
      approverId: JSON.parse(localStorage.getItem("user")).userId,
      approvedOn: Date.now(),
    };

    setUserAlert(<Spinner variant="success" animation="border" />);
    setClientAlert(<Spinner variant="success" animation="border" />);
    setLoanAlert(<Spinner variant="success" animation="border" />);
    setAppAlert(<Spinner variant="success" animation="border" />);

    

    Axios.put(
      `http://localhost:8080/lms/employee/manage-loanstatus/${e.target.id}`,status
    ).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        setAppAlert(
          <Alert variant="danger">
            Could not approve Application , Please try later
          </Alert>
        );
      } else {
        setAppAlert(
          <Alert variant="success">Application Approved Successfully</Alert>
        );
      }
    });
    console.log(status);
    console.log(user);
    console.log(client);
    console.log(loan);
  };

  const rejectAppln = (e) => {
    console.log(e.target.id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setDeleteAlert(<Spinner animation="border" variant="danger" />);
    Axios.delete(
      `http://localhost:8080/lms/employee/application/${e.target.id}`
    ).then((res) => {
      console.log(res.data.response);
      if (res.data.error) {
        setDeleteAlert(
          <Alert variant="danger">
            Unable to reject Application , Please try after some time
          </Alert>
        );
      } else {
        setDeleteAlert(<Alert variant="success">Application Rejected !</Alert>);
      }
    });
  };

  return (
    <div className="card card-body col-md-6 offset-md-3 mt-5 applnblock">
      {/* {deleteAlert}
      {userAlert}
      {clientAlert}
      {loanAlert} */}
      {appAlert}
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
                let date = new Date(appln[key]);
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
        <Button
          id={appln.applicationId}
          onClick={approveAppln}
          variant="success"
        >
          Approve
        </Button>
        <Button
          id={appln.applicationId}
          onClick={rejectAppln}
          className="ml-5"
          variant="danger"
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default ApplicationFull;
