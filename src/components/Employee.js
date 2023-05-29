import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../contenxt/EmployeeContext';
import { Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';


const Employee = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [employee]);


  return (
    <React.Fragment>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td>
            <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
            <button className="btn text-danger btn-act" onClick={() => deleteEmployee(employee.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
        </td>
        <Modal show={show}>
            <Modal.Header>
                    <Modal.Title>Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm theEmployee={employee}/>
            </Modal.Body>
            <Modal.Footer>
                <Button varient="secondary" onClick={handleClose}>Close Form</Button>
            </Modal.Footer>
        </Modal>
    </React.Fragment>
  )
}

export default Employee;
