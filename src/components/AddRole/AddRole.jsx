import React,{useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios'


const AddRole = (props)=>{

    const [role,setRole] = useState({
        roleId:'',
        roleDescription:''
    })


    let handleSubmit=(event)=>{
        event.preventDefault();

        console.log(role);

        axios.post('http://localhost:8080/lms/admin/manage-roles',role).
        then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }


    return(
    <div className='col-md-4 offset-md-4 card card-body mt-5'>
        <Form>
            <Form.Group>
                <Form.Label>
                    Role Id
                </Form.Label>
                <Form.Control type='text'  onChange={e =>{
                    const val = e.target.value;
                    setRole(prevState=>{
                        return {...prevState,roleId:val}
                    })
                }}>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Role Description
                </Form.Label>
                <Form.Control type='text' onChange={e =>{
                    const val = e.target.value;
                    setRole(prevState=>{
                        return {...prevState,roleDescription:val}
                    })
                }}>
                </Form.Control>
            </Form.Group>
            <Button onClick={handleSubmit} variant='success' size='lg'  className='offset-md-4'>Add Role</Button>
        </Form>
    </div>)
}


export default AddRole;