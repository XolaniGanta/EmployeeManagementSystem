package ac.za.cput.backendEmployee.controller;

import ac.za.cput.backendEmployee.model.Employee;
import ac.za.cput.backendEmployee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }

    //build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

}
