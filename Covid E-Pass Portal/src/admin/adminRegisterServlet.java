package admin;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/adminRegisterServlet")
public class adminRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("admin");
		String password = request.getParameter("pass");
		String phone = request.getParameter("phone");
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://@localhost:3306/applications","ShivaKumar","Shiva@3009");
			PreparedStatement stmt = conn.prepareStatement("insert into admin values(?,?,?)");
			stmt.setString(1, email);
			stmt.setString(2, password);
			stmt.setString(3, phone);
			stmt.executeUpdate();
			HttpSession session = request.getSession();
			session.setAttribute("Email", email);
			response.sendRedirect("Applicants.jsp");
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("inside adminRegisterServlet");
			response.sendRedirect("adminRegistration.html");
		}
	}

}
