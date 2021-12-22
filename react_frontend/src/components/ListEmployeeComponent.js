import React,{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
       
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to = "/add-employee" className = "bt-btn-primary mb-2>"> Add Employee</Link>
            <table className = "table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}>
                            <td> {employee.Id}</td>
                            <td> {employee.firstName}</td>
                            <td> {employee.lastName}</td>
                            <td> {employee.emailID}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default ListEmployeeComponent
