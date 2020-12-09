import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import '../UpdateClient/clientfull.css'

const ClientFull = (props) => {
  const [client, setClient] = useState({});
  const [alert, setAlert] = useState();

  let id = parseInt(props.location.id);
  let cid;

  useEffect(() => {
    setAlert();
    console.log(id);
    Axios.get(`http://localhost:8080/lms/employee/client/${id}`).then((res) => {
      console.log(res.data);
      let cli = res.data.response;
      console.log(cli);
      setClient(cli);
    });
  }, [props.location.id]);

  const deleteClient = (e) => {
    setAlert(<Spinner animation="border" variant="danger" />);
    console.log(e.target.id);
    // Axios.delete(
    //   `http://localhost:8080/lms/employee/manage-clients/${e.target.id}`
    // ).then((res) => {
    //   console.log(res.data);
    //   if (res.data.error) {
    //     setAlert(
    //       <Alert variant="danger">
    //         unable to Delete client ! please try Later
    //       </Alert>
    //     );
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   } else {
    //     setAlert(<Alert variant="success">client Deleted successfully</Alert>);
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }
    // });
  };

  return (
    <div>
      {props.location.id}
      <div className="col-md-6 card card-body offset-md-3 mt-5 block">
        {alert}
        <hr></hr>
        <Table striped hover responsive bordered>
          <thead>
            <th>Field</th>
            <th>Value</th>
          </thead>
          <tbody>
            {Object.keys(client).map((key, index) => {
              if (typeof client[key] != "object") {
                if (typeof key == "clientId") {
                  cid = client[key];
                }
                return (
                  <tr>
                    <td>{key.toLocaleUpperCase()}</td>
                    <td id={key}>{client[key]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
        <span className="offset-md-3">
          <Button variant="info">
            <strong>Edit</strong>
          </Button>
          <Button id={id} className="ml-5" variant="success">
            <strong>Update</strong>
          </Button>
          <Button id={client.clientId} onClick={deleteClient} className="ml-5" variant="danger">
            <strong>Delete</strong>
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ClientFull;
