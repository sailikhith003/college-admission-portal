package model;

public class person extends Student {
	public person(int id,String firstname, String lastname,int rollno,String course,String department,String phoneNumber,String email,String address)
	{
		super(id,firstname,lastname,rollno,course,department,phoneNumber,email,address);
	}
	@Override
	public String displaydetails()
	{
		return "Student [firstname=" + firstname + ", lastname=" + lastname + ", rollno=" + rollno +
        ", course=" + course + ", department=" + department + ", phoneNumber=" + phoneNumber +
        ", email=" + email + ", address=" + address + "]";
	}

}
