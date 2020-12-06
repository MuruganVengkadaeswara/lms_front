import Axios from "axios";
import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import "../AddClient/addclient.css";

const DeleteClient = (props) => {
  const [cid, setcid] = useState();
  const [client, setclient] = useState();
  const [tbl, setTbl] = useState();

  const getclient = () => {
    console.log(cid);
    axios
      .get(`http://localhost:8080/lms/employee/client/${cid}`)
      .then((res) => {
        console.log(res.data.response);
        let cl = res.data.response;
        setclient(cl);
        console.log(client);
        setTbl(
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>ClientName</th>
                <th>email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody> 
                {client.map((cl)=>(
                  <tr>
                    <td>
                      {cl.clientName}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        );
      });
  };

  return (
    <div>
      <div className="col-md-4 offset-md-4 card card-body">
        <Form>
          <Form.Group>
            <Form.Label>Client ID</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                const val = e.target.value;
                setcid((prevState) => {
                  return val;
                });
              }}
            ></Form.Control>
          </Form.Group>
          <Button className="offset-md-5" variant="success" onClick={getclient}>
            Find
          </Button>
        </Form>
      </div>
      <div>
        {tbl}
      </div>
    </div>
  );
};

export default DeleteClient;
