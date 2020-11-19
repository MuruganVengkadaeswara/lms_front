import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddLoanType = (props) => {
  const [type, setType] = useState({});

  const addtype = () => {
    console.log(type);
    axios.post('http://localhost:8080/lms/employee/loantype',type).
    then(res=>{
        console.log(res);
        console.log(res.data);
    })
  };

  return (
    <div className="col-md-4 offset-md-4 card card-body mt-5">
      <Form>
        <Form.Group>
          <Form.Label>Loan Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setType((prevState) => {
                return { ...prevState, loanName: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              const val = e.target.value;
              setType((prevState) => {
                return { ...prevState, interestRate: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setType((prevState) => {
                return { ...prevState, bankName: val };
              });
            }}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button onClick={addtype}>Add</Button>
    </div>
  );
};

export default AddLoanType;
