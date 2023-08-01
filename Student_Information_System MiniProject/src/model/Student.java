package model;
public abstract class Student {
	private int id;
    protected String firstname;
    protected String lastname;
    protected int rollno;
    protected String course;
    protected String department;
    protected String phoneNumber;
    protected String email;
    protected String address;
    
    public abstract String displaydetails();
    public Student(int id,String firstname, String lastname, int rollno, String course, String department,
                   String phoneNumber, String email, String address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.rollno = rollno;
        this.course = course;
        this.department = department;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
    }

   public int getId()
   {
	   return id;
   }

    public String getFirstname() {
		return firstname;
	}



	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}



	public String getLastname() {
		return lastname;
	}



	public void setLastname(String lastname) {
		this.lastname = lastname;
	}



	public int getRollno() {
		return rollno;
	}



	public void setRollno(int rollno) {
		this.rollno = rollno;
	}



	public String getCourse() {
		return course;
	}



	public void setCourse(String course) {
		this.course = course;
	}



	public String getDepartment() {
		return department;
	}



	public void setDepartment(String department) {
		this.department = department;
	}



	public String getPhoneNumber() {
		return phoneNumber;
	}



	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	@Override
    public String toString() {
        return displaydetails();
    }
}
