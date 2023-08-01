package studentinformation;

import java.util.List;
import java.util.Scanner;

import model.Student;
import model.person;
import service.StudentService;

public class Main {

	    public static void main(String[] args) {
	        StudentService studentService = new StudentService();
	        Scanner scanner = new Scanner(System.in);

	        while (true) {
	            System.out.println("Student Information System");
	            System.out.println("1. Add Student");
	            System.out.println("2. Update Student Details");
	            System.out.println("3. Delete Student");
	            System.out.println("4. Display Student Records");
	            System.out.println("5. Exit");

	            System.out.print("Enter your choice: ");
	            int choice = scanner.nextInt();
	            scanner.nextLine(); 

	            switch (choice) {
	                case 1:
	                    Student newStudent = getInputStudent(scanner);
	                    studentService.addStudent(newStudent);
	                    System.out.println("Student added successfully!\n");
	                    break;
	                case 2:
	                    System.out.print("Enter Roll Number to update: ");
	                    int rollnoToUpdate = scanner.nextInt();
	                    scanner.nextLine(); 
	                    Student updatedStudent = getInputStudent(scanner);
	                    updatedStudent.setRollno(rollnoToUpdate);
	                    studentService.updateStudent(updatedStudent);
	                    System.out.println("Student details updated successfully!\n");
	                    break;
	                case 3:
	                    System.out.print("Enter Id to delete: ");
	                    int rollnoToDelete = scanner.nextInt();
	                    scanner.nextLine();
	                    studentService.deleteStudent(rollnoToDelete);
	                    System.out.println("Student deleted successfully!\n");
	                    break;
	                case 4:
	                    List<Student> students = studentService.getAllStudents();
	                    if (!students.isEmpty()) {
	                        System.out.println("Student Records:");
	                        for (Student student : students) {
	                            System.out.println(student.toString());
	                            System.out.println("---------------------");
	                        }
	                    } else {
	                        System.out.println("No students found.");
	                    }
	                    break;
	                case 5:
	                    System.out.println("Exiting the program.");
	                    scanner.close();
	                    System.exit(0);
	                    break;
	                default:
	                    System.out.println("Invalid choice. Please try again.\n");
	            }
	        }
	    }

	    private static Student getInputStudent(Scanner scanner) {
	        System.out.print("Enter First Name: ");
	        String firstname = scanner.nextLine();

	        System.out.print("Enter Last Name: ");
	        String lastname = scanner.nextLine();

	        System.out.print("Enter Roll Number: ");
	        int rollno = scanner.nextInt();
	        scanner.nextLine(); 

	        System.out.print("Enter Course: ");
	        String course = scanner.nextLine();

	        System.out.print("Enter Department: ");
	        String department = scanner.nextLine();

	        System.out.print("Enter Phone Number: ");
	        String phoneNumber = scanner.nextLine();

	        System.out.print("Enter Email: ");
	        String email = scanner.nextLine();

	        System.out.print("Enter Address: ");
	        String address = scanner.nextLine();

	        int id = 0;
			return new person(id,firstname, lastname, rollno, course, department, phoneNumber, email, address);
	    }
	}




