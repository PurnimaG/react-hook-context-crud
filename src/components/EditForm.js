import React, { useContext, useEffect, useState }from 'react'
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from '../contenxt/EmployeeContext';

const EditForm = ({theEmployee}) => {

    const id = theEmployee.id;

    const [name, setName] = useState(theEmployee.name);
    const [email, setEmail] = useState(theEmployee.email);
    const [address, setAddress] = useState(theEmployee.address);
    const [phone, setPhone] = useState(theEmployee.phone);

    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    };

    
    return (
        <div>
        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Control type="text" placeholder="Name" required  name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="textare" placeholder="Address" rows={3} required name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Phone" required name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>
            <Button variant='success' type="submit" block> Edit Employee</Button>
        </Form>
        </div>
    )
}

export default EditForm;
