import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL="http://localhost:8080/api/v1/employees";

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,employee);
    }
    getEmployee(id){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+id);
    }
    updateEmployee(id,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL+'/'+id,employee);  //put request is fired when we want to update a record
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+'/'+id); //delete request
    }
}

export default new EmployeeService();