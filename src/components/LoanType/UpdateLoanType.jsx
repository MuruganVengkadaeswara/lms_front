import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import '../LoanType/updateloan.css'

const UpdateLoanType = (props) => {
  const [loantypes, setloantypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/lms/employee/loantypes").then((res) => {
      console.log(res.data);
      setloantypes(res.data.response);
      console.log(loantypes);
    });
  }, []);

  return (
    <div className="card card-body mt-5 col-md-6 offset-md-3 tableblk">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Loan Name</th>
            <th>Interest Rate</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loantypes.map((type) => (
            <tr>
              <td>{type.loanTypeId}</td>
              <td>{type.loanName}</td>
              <td>{type.interestRate}</td>
              <td>
                <Button variant="primary" id={type.loanTypeId}>Update</Button>
              </td>
              <td>
                <Button variant="danger" id={type.loanTypeId}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UpdateLoanType;
