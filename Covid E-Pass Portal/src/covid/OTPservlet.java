package covid;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/OTPservlet")
public class OTPservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			String otp = request.getParameter("otp");
			String pin = String.valueOf(OTP.getPin());
			if(otp.equals(pin)) {
				response.sendRedirect("TravelPass.jsp");
			}else {
				response.sendRedirect("OTP.jsp");
			}
		
	}

}
