import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import SideNavBar from "../SideNavBar/SideNavBar";
import '../ClientDashBoard/clientdb.css'
import icon from '../ClientDashBoard/clients.svg'

const ClientDashBoard = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [username, setusername] = useState();

  useEffect(() => {
    console.log("useeffect admin");
    console.log(user);
    if (user == null) {
      props.history.push("/pleaselogin");
    } else if (JSON.parse(user).roleId != 3) {
      props.history.push("/pleaselogin");
    } else {
      let un = JSON.parse(localStorage.getItem("user")).userName;
      setusername(un);
    }
  }, []);

  return (
    <div>
      <div className="offset-md-8 wlcmtxt mt-5">
        Welcome {username}
        <img src={icon} className="icon"></img>
      </div>
      {/* <Router> */}
      <Route></Route>
      {/* </Router> */}
    </div>
  );
};

export default withRouter(ClientDashBoard);
