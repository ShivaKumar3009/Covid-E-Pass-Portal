package covid;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AadharServlet {
	
	boolean check(String aadharNum) {
	
		String driver="com.mysql.jdbc.Driver";
		String url="jdbc:mysql://@localhost:3306/applications";
		String username="ShivaKumar";
		String pwd="Shiva@3009";
		
		String query="select * from applicants where aadhar=?";
		try {
			Class.forName(driver);
			Connection con=DriverManager.getConnection(url,username,pwd);
			PreparedStatement stmt=con.prepareStatement(query);
			stmt.setString(1, aadharNum);			
			ResultSet rs=stmt.executeQuery();
			if(rs.next()) {
				return true;
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return false;
		
		
		
		
	}
}

