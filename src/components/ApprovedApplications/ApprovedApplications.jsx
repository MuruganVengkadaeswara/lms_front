import React, { useState } from "react";
import {Table} from 'react-bootstrap'
const ApprovedApplications = (props) => {
  const [applns, setApplns] = useState([]);

  return (
    <div className="col-md-8 offset-md-2">
    approved
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {applns.map((appln) => (
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ApprovedApplications;
