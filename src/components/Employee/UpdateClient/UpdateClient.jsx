import Axios from "axios";
import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../UpdateClient/updatecli.css";

const UpdateClient = (props) => {
  const [clientId, setClientId] = useState();
  const [client, setClient] = useState({});

  const getclient = () => {
    console.log(clientId);
    Axios.get(`http://localhost:8080/lms/employee/client/${clientId}`).then(
      (res) => {
        console.log(res);
        let cli = res.data.response;
        setClient(cli);
        console.log(client);
      }
    );
  };

  return (
    <div className="updateblock">
      <div className="col-md-4 offset-md-4 card card-body mt-5 queryblock">
        <Form>
          <Form.Group>
            <Form.Label>Client Id</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setClientId(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Button onClick={getclient} className="offset-md-5" variant="success">
            Find
          </Button>
        </Form>
      </div>
      <div className="card card-body col-md-5 offset-md-2">
        <Form>
          {Object.keys(client).map((key, index) => (
            <h2>
                {key} : {client[key]}
            </h2>
           
          ))}
        </Form>
      </div>
    </div>
  );
};

export default UpdateClient;
