import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditEmployee = (props)=>{

    const [emp,setEmp] = useState({});

    useEffect(()=>{
        Axios.get(`http://localhost:8080/lms/admin/employees/${props.location.id}`).
        then((res)=>{
            console.log(res.data);
            setEmp(res.data.response)
            console.log(emp);

        })
    },[])

    return (
        <div>
            Edit Employee
            {props.location.id}
        </div>
    )
}

export default EditEmployee;