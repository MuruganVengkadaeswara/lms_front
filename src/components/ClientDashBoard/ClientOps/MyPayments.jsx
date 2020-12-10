import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const MyPayments = (props) => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    let userEmail = JSON.parse(localStorage.getItem("user")).userEmail;

    Axios.get(`http://localhost:8080/lms/client?email=${userEmail}`).then(
      (res) => {
        console.log(res.data.response);
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

  const goView = (id) => {
    props.history.push({
      pathname: "/client/payments/paymentfull",
      id: id,
    });
  };

  return (
    <div
      className="col-md-6 offset-md-3 card card-body mt-5"
      style={{ fontFamily: "courier new" }}
    >
      <Table striped bordered hover responsive>
        <thead>
          <th>Loan Id</th>
          <th>Loan Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {loans.map((loan) => {
            return (
              <tr>
                <td>{loan.loanId}</td>
                <td>{loan.loantype.loanName}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => {
                      goView(loan.loanId);
                    }}
                  >
                    View Payments
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

export default MyPayments;
