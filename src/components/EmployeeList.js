import React, {useContext, useEffect, useState} from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import {EmployeeContext} from '../contenxt/EmployeeContext';
import AddForm from './AddForm';
import Employee from './Employee';
import Pagination from './Pagination';

const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const [showAlerts, setShowAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeePerPage] = useState(2);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleAlert = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleAlert();
        }
    }, [employees]);

    const indexOfLastemployee = currentPage * employeePerPage;
    const indexOfFirstEmployee = indexOfLastemployee - employeePerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastemployee); 

    const totalPagesNum = Math.ceil(employees.length/employeePerPage)
 
    return (
    <div>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
                </div>
            </div>
        </div>
        <Alert show={showAlerts} variant="success" >
            Employee List update successfully.
        </Alert>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                    { 
                    currentEmployees.sort((a,b) => (a.name < b.name ? -1 : 1)).map((employee, key) => (
                        <tr key={key}>
                        <Employee employee={employee}/>
                        </tr>
                    ))
                    }
                
            </tbody>
        </table>

        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} currentEmployees={currentEmployees} employees= {employees} />
        
        <Modal show={show}>
            <Modal.Header>
                    <Modal.Title>Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
            </Modal.Body>
            <Modal.Footer>
                <Button varient="secondary" onClick={handleClose}>Close Form</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default EmployeeList;
