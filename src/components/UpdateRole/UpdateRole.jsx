import React,{useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';


const UpdateRole = (props)=>{

    const [id,setId] = useState(0);

    let roleobj;

    let findrole=(event)=>{
        console.log(id);
        axios.get('https://localhost:8080/admin/manage-roles',id).
        then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }



    return(
    <div className='col-md-4 mt-5 offset-md-4 card card-body'>
    <Form>
        <Form.Group>
            <Form.Label>
                RoleId
            </Form.Label>
            <Form.Control type='number' onChange={e => setId(e.target.value)}>
            </Form.Control>
        </Form.Group>
            <Button onClick={findrole}>Find</Button>
     </Form>
    </div>);
}



export default UpdateRole;