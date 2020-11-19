import React,{useState,useEffect} from "react";
import { Form,Button } from "react-bootstrap";
import axios from 'axios'

const UpdateLoanType = (props) => {

    const [loantype,setloantype] = useState({});

    let mapped =[];
    
    

    const gettypes=()=>{
        axios.get('http://localhost:8080/lms/employee/loantypes').then((res)=>{
            console.log(res);
            console.log(res.data);
            // setloantype(res.data)
            
            console.log(mapped);
        })
    }

   

  return (
    <div className='card card-body mt-5 col-md-4 offset-md-4'>
       {mapped}
        <Button onClick={gettypes}>
            Get Loan Types
        </Button>
    </div>
  );
};

export default UpdateLoanType;
