package covid;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



public class photoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;       
    
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 	final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		    final String DB_URL = "jdbc:mysql://localhost:3306/applications";
		    final String User = "ShivaKumar";
		    final String Password = "Shiva@3009";
		    try {
		        Class.forName(JDBC_DRIVER);
		        Connection conn = DriverManager.getConnection(DB_URL, User, Password);

		        PreparedStatement stmt = conn.prepareStatement("select photo from applicants where aadhar=?");
		        HttpSession session=request.getSession();
				stmt.setString(1,session.getAttribute("AadharNum").toString());
		        ResultSet rs = stmt.executeQuery();
		        if (rs.next()) {
		            response.getOutputStream().write(rs.getBytes("photo"));
		        }
		        conn.close();
		    } catch (Exception e) {
		        e.printStackTrace();
		    }
	}

	

}
