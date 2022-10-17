package net.javaguides.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@SpringBootApplication
public class EmpmanagementBackendApplication implements CommandLineRunner{
//	commandlinerunner implements the run() method at the start of springboot app..
	public static void main(String[] args) {
		SpringApplication.run(EmpmanagementBackendApplication.class, args);
	}
	
	@Autowired
	public EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		 TODO Auto-generated method stub
//		Employee employee=new Employee();
//		employee.setFirstName("Kartik");
//		employee.setLastName("Khanna");
//		employee.setEmailId("abc@gmail.com");
//		
//		employeeRepository.save(employee);
//		
//		Employee employee1=new Employee();
//		employee1.setFirstName("salu");
//		employee1.setLastName("bhai");
//		employee1.setEmailId("salu@gmail.com");
//		
//		employeeRepository.save(employee1);
		
	}

}
