package ac.za.cput.backendEmployee.repository;

import ac.za.cput.backendEmployee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
