import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;




public class Iterate {

 public static void main(String[] args) throws ClassNotFoundException, SQLException {
  
  Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
  Connection con = DriverManager.getConnection("jdbc:derby:wombat;create=true");
  Statement stmt = con.createStatement();
 
  stmt.execute("CREATE TABLE Class ("
    + "First_name VARCHAR(30),"
    + "Last_name VARCHAR(30),"
    + "Date_of_Birth DATE,");
  

  stmt.execute("INSERT INTO Class (First_name, Last_name, Date_of_Birth) VALUES ('Stefan','Petrov','1995-02-20')");
  stmt.execute("INSERT INTO Class (First_name, Last_name, Date_of_Birth) VALUES ('Anton','Mitkov','1995-10-7')");
  stmt.execute("INSERT INTO Class (First_name, Last_name, Date_of_Birth) VALUES ('Hristo','Hristov','1995-07-26')");
  
  
  stmt = con.createStatement();
  ResultSet rs = stmt.executeQuery("SELECT * FROM Class");
  while (rs.next()) {
	 String s = rs.getString("First_name");
	  System.out.print(s+" ");
 
	  s = rs.getString("Last_name");
	  System.out.print(s+" ");
  
	  s = rs.getString("Date_of_Birth");
	  System.out.print(s+" ");
 
  	}
  
  
  	System.out.println("\n\n");
  
  	stmt = con.createStatement();
  	ResultSet rs2 = stmt.executeQuery("SELECT First_name,Last_name FROM Class WHERE First_name LIKE '%t%'");
  	while (rs2.next()) {
   
  		String s = rs2.getString("First_name");
  		System.out.print(s+" ");
   
  		s = rs2.getString("Last_name");
  		System.out.println(s);
  	}
  
  
 }
}