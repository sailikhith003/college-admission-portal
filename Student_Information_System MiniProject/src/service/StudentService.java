package service;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Student;
import model.person;

public class StudentService {
	
	    private static final String DB_URL = "jdbc:mysql://localhost:3306/studentinformation";
	    private static final String DB_USER = "root";
	    private static final String DB_PASSWORD = "root";

	    private List<Student> students;

	    public StudentService() {
	        this.students = new ArrayList<>();
	        loadStudentsFromDatabase();
	    }

	    private void loadStudentsFromDatabase() {
	        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
	            String selectQuery = "SELECT * FROM students";
	            try (PreparedStatement statement = conn.prepareStatement(selectQuery);
	                 ResultSet resultSet = statement.executeQuery()) {

	                while (resultSet.next()) {
	                    String firstname = resultSet.getString("firstname");
	                    String lastname = resultSet.getString("lastname");
	                    int rollno = resultSet.getInt("rollno");
	                    String course = resultSet.getString("course");
	                    String department = resultSet.getString("department");
	                    String phoneNumber = resultSet.getString("phonenumber");
	                    String email = resultSet.getString("email");
	                    String address = resultSet.getString("address");

	                    int id = 0;
						Student student = new person(id,firstname, lastname, rollno, course, department, phoneNumber, email, address);
	                    students.add(student);
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void addStudent(Student student) {
	        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
	            String insertQuery = "INSERT INTO students (firstname, lastname, rollno, course, department, phonenumber, email, address) " +
	                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
	            try (PreparedStatement statement = conn.prepareStatement(insertQuery)) {
	                statement.setString(1, student.getFirstname());
	                statement.setString(2, student.getLastname());
	                statement.setInt(3, student.getRollno());
	                statement.setString(4, student.getCourse());
	                statement.setString(5, student.getDepartment());
	                statement.setString(6, student.getPhoneNumber());
	                statement.setString(7, student.getEmail());
	                statement.setString(8, student.getAddress());

	                statement.executeUpdate();
	                students.add(student);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void updateStudent(Student updatedStudent) {
	        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
	            String updateQuery = "UPDATE students SET firstname, lastname, course, department, " +
	                    "phonenumber, email, address WHERE id";
	            try (PreparedStatement statement = conn.prepareStatement(updateQuery)) {
	                statement.setString(1, updatedStudent.getFirstname());
	                statement.setString(2, updatedStudent.getLastname());
	                statement.setString(3, updatedStudent.getCourse());
	                statement.setString(4, updatedStudent.getDepartment());
	                statement.setString(5, updatedStudent.getPhoneNumber());
	                statement.setString(6, updatedStudent.getEmail());
	                statement.setString(7, updatedStudent.getAddress());
	                statement.setInt(8, updatedStudent.getRollno());

	                statement.executeUpdate();

	                for (Student student : students) {
	                    if (student.getRollno() == updatedStudent.getRollno()) {
	                        student.setFirstname(updatedStudent.getFirstname());
	                        student.setLastname(updatedStudent.getLastname());
	                        student.setCourse(updatedStudent.getCourse());
	                        student.setDepartment(updatedStudent.getDepartment());
	                        student.setPhoneNumber(updatedStudent.getPhoneNumber());
	                        student.setEmail(updatedStudent.getEmail());
	                        student.setAddress(updatedStudent.getAddress());
	                        break;
	                    }
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void deleteStudent(int rollno) {
	        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
	            String deleteQuery = "DELETE FROM students WHERE id";
	            try (PreparedStatement statement = conn.prepareStatement(deleteQuery)) {
	                statement.setInt(1, rollno);
	                statement.executeUpdate();

	                students.removeIf(student -> student.getRollno() == rollno);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public Student getStudentByRollno(int id) {
	        for (Student student : students) {
	            if (student.getRollno() == id) {
	                return student;
	            }
	        }
	        return null;
	    }

	    public List<Student> getAllStudents() {
	        return students;
	    }
	}


