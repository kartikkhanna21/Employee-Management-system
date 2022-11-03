import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import {Link} from 'react-router-dom';

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    getEmployees();
  },[])

  const getEmployees=()=>{
    EmployeeService.getAllEmployees().then(response=>{
      setEmployees(response.data)
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }
  const deleteEmployee=(id)=>{
    EmployeeService.deleteEmployee(id).then((response)=>{
      getEmployees();
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="container">
      <h2 className="text-center"> List Employees </h2>
      <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Employee Id </th>
          <th> Employee First Name </th>
          <th> Employee Last Name </th>
          <th> Employee Email Id </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {
            employees.map(
              (employee)=> 
              <tr key={employee.id}>   {/* index carries the index of the current iteration provided by map function*/}
                <td>{employee.id}</td> 
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                  <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>Delete</button>
                </td>
                
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
