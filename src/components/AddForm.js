import React, { useContext, useState }from 'react'
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from '../contenxt/EmployeeContext';

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name:"", 
        email:"", 
        address:"", 
        phone:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: [e.target.value]});
    };

    const { name, email, address, phone} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone);
    };
    return (
        <div>
        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Control type="text" placeholder="Name" required onChange={(e) => onInputChange(e)} value={name} name="name"/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Email" required onChange={(e) => onInputChange(e)} value={email} name="email"/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="textare" placeholder="Address" rows={3} required onChange={(e) => onInputChange(e)} value={address} name="address"/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Phone" required onChange={(e) => onInputChange(e)} value={phone} name="phone"/>
            </Form.Group>
            <Button variant='success' type="submit" block> Add New Employee</Button>
        </Form>
        </div>
    )
}

export default AddForm;
