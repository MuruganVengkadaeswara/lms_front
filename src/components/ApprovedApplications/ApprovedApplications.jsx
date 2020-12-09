import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
const ApprovedApplications = (props) => {
  const [applns, setApplns] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8080/lms/employee/applications-approved`).then(
      (res) => {
        console.log(res.data);
        setApplns(res.data.response);
      }
    );
  }, []);

  return (
    <div
      className="col-md-8 offset-md-2 mt-5 card card-body"
      style={{ fontFamily: "courier new" }}
    >
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Name</th>
            <th>Approved On</th>
            <th>Approver Id</th>
            <th>statusId</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applns.map((appln) => {
            let date = new Date(appln.status.approvedOn);

            return (
              <tr>
                <td>{appln.applicationId}</td>
                <td>
                  {appln.firstName} {appln.lastName}
                </td>
                <td>
                  {date.toLocaleDateString()} {date.getHours()}:
                  {date.getMinutes()}:{date.getSeconds()}{" "}
                  {(date.getHours() >=12 ) ? "PM" : "AM"}
                </td>
                <td>{appln.status.approverId}</td>
                <td>{appln.status.statusId}</td>
                <td>
                  <Button>
                    <strong>View</strong>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ApprovedApplications;
