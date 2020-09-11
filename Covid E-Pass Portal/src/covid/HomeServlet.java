package covid;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/HomeServlet")
public class HomeServlet extends HttpServlet {
		
	
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String aadhar = request.getParameter("aadhar");
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://@localhost:3306/applications","ShivaKumar","Shiva@3009");
			String sql="select * from applicants where aadhar=?";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setString(1, aadhar);	
			ResultSet rs = stmt.executeQuery();
			rs.next();
			if(rs.getString(5).equals(aadhar)) {
				try {
					HttpSession session = request.getSession();
					session.setAttribute("AadharNum", aadhar);
					OTP.sendOTP(rs.getString("email"));
					System.out.println("otp sent from home");
					response.sendRedirect("OTP.jsp");
				}catch(Exception e) {
					response.sendRedirect("Registration.html");
				}
				
			}else {
				response.sendRedirect("Registration.html");
			}
			
			
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println("inside outer catch");
			response.sendRedirect("Registration.html");
		}
	
			
		
	}

}
