package admin;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
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

/*@WebServlet("/adminLoginServlet")*/
public class adminLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("LoginAdminEmail");
		String password = request.getParameter("LoginPass");
		HttpSession session = request.getSession();
		session.setAttribute("Email", email);
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://@localhost:3306/applications","ShivaKumar","Shiva@3009");
			PreparedStatement stmt = conn.prepareStatement("select * from admin where email=? and password=?");
			stmt.setString(1, email);
			stmt.setString(2, password);
			ResultSet rs = stmt.executeQuery();
			
			if(rs.next()) {
				//System.out.println(rs.getString(1)+"  "+rs.getString(2));
				response.sendRedirect("Applicants.jsp");
			
			}else {
				System.out.println("inside else");
				response.sendRedirect("adminLogin.html");
			}
			
		}catch(Exception e) {
			System.out.println("inside catch");
			e.printStackTrace();
			response.sendRedirect("adminLogin.html");
		}
	}

}
