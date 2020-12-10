import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const MyLoans = (props) => {
  const [client, setClient] = useState({});
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    let userEmail = JSON.parse(localStorage.getItem("user")).userEmail;
    console.log(userEmail);
    Axios.get(`http://localhost:8080/lms/client?email=${userEmail}`).then(
      (res) => {
        console.log(res.data.response);
        setClient(res.data.response);
        fetchAllLoans(res.data.response.clientId);
      }
    );
  }, []);

  const fetchAllLoans = (id) => {
    Axios.get(`http://localhost:8080/lms/client/loans/${id}`).then((res) => {
      console.log(res.data);
      setLoans(res.data.response);
      console.log(loans);
    });
  };

  const gopay = (id) => {
    props.history.push({
      pathname: "/client/payment",
      id: id,
    });
  };

  return (
    <div
      className="col-md-8  offset-md-2 card card-body mt-5"
      style={{ fontFamily: "courier new" }}
    >
      <h2>
        <strong>Your Loans :</strong>
      </h2>
      <hr></hr>
      <Table bordered striped hover responsive>
        <thead>
          <th>LoanId</th>
          <th>Loan Type</th>
          <th>Loan Amount</th>
          <th>Pending Emis</th>
          <th>Emi Amount</th>
          <th>Emi Duration</th>
          <th>Pay Emi</th>
        </thead>
        <tbody>
          {loans.map((loan) => {
            return (
              <tr>
                <td>{loan.loanId}</td>
                <td>{loan.loantype.loanName}</td>
                <td>{loan.loanAmount}</td>
                <td>{loan.pendingEmis}</td>
                <td>{loan.emiAmount} / mo</td>
                <td>{loan.emiDuration}</td>
                <td>
                  <Button variant="success" onClick={() => gopay(loan.loanId)}>
                    PayEmi
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

export default MyLoans;
