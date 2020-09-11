package covid;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;




@WebServlet("/RegisterServlet")
@MultipartConfig(maxFileSize = 16177215)
public class RegisterServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html"); 
		
		/* Applican't Details */
		String name = request.getParameter("name");
		String gender = request.getParameter("gender");
		String email = request.getParameter("email");
		String phone = request.getParameter("mobile");
		String aadhar = request.getParameter("Aadhar");		
		
		/* Present Address */
		String flat = request.getParameter("flat");
		String area = request.getParameter("area");
		String town = request.getParameter("town");
		String pincode = request.getParameter("pincode");
		String preDistrict = request.getParameter("preDistrict");
		 
		/* Destination Address */
		String flatDes = request.getParameter("flatDes");
		String areaDes = request.getParameter("areaDes");
		String townDes = request.getParameter("townDes");
		String pincodeDes = request.getParameter("pincodeDes");
		String districtDes = request.getParameter("districtDes");
		
		/* Travel Details */
		String travelType = request.getParameter("travelType");
		String reason = request.getParameter("reason");
		String TravelArrangement = request.getParameter("TravelArrangement");
		String start_at_present="";
		String arrival_at_destination="";
		String start_at_destination="";
		String arrival_at_present="";
		String pubTransport="";
		String vehicleNum="";
		String vehicle="";
		String people="";
		
		/* Copassenger 1 details */
		String coPass1Name="";
		String coPass1Gender="";
		String coPass1Phone="";
		String coPass1Aadhar="";
		String coPass1Health="";
		String coPass1Quar="";
		
		/* Copassenger 2 details */
		String coPass2Name="";
		String coPass2Gender="";
		String coPass2Phone="";
		String coPass2Aadhar="";
		String coPass2Health="";
		String coPass2Quar="";
		
		
		Connection conn = null;
		PreparedStatement stmt=null;
		PreparedStatement present=null;
		PreparedStatement dest=null;
		PreparedStatement TravelDetails=null;
		PreparedStatement coPassengerDetails=null;
		
		
		
		AadharServlet aadharObj = new AadharServlet();
		
		if(aadharObj.check(aadhar)) {
			response.sendRedirect("Registration.html");
			System.out.println("aadhar matched");
		}
		else {
			
			try {
				//Thread.sleep(10000);
				Class.forName("com.mysql.jdbc.Driver");
				conn=DriverManager.getConnection("jdbc:mysql://@localhost:3306/applications","ShivaKumar","Shiva@3009");
				
				 HttpSession session=request.getSession(); 
				  session.setAttribute("AadharNum",  aadhar);
				  session.setAttribute("Email",  email);
				  session.setAttribute("srcDistrict", preDistrict);
				  session.setAttribute("destDistrict", districtDes);
				/* Applicant details */
				stmt = conn.prepareStatement("insert into applicants values(?,?,?,?,?,?)");
				stmt.setString(1, name);
				stmt.setString(2, gender);
				stmt.setString(3, email);
				stmt.setString(4, phone);
				stmt.setString(5, aadhar);	
				InputStream inputStream = null;
				Part filePart = request.getPart("photo");
				if(filePart != null) {
					inputStream = filePart.getInputStream();
				}
				if (inputStream != null) {
					stmt.setBlob(6, inputStream);
				}
				
				int n=stmt.executeUpdate();
				System.out.println(n+"record added successfully");
				
				/* Present Address */
				present = conn.prepareStatement("insert into present_address values(?,?,?,?,?,?)");
				present.setString(1, aadhar);
				present.setString(2, flat);
				present.setString(3, area);
				present.setString(4, town);
				present.setString(5, pincode);
				present.setString(6, preDistrict);
								
				present.executeUpdate();
				
				/* Destination Address */
				
				 dest = conn.prepareStatement("insert into destination values(?,?,?,?,?,?)");
				 dest.setString(1, aadhar); 
				 dest.setString(2, flatDes); 
				 dest.setString(3, areaDes);
				 dest.setString(4, townDes); 
				 dest.setString(5, pincodeDes);
				 dest.setString(6, districtDes);
				  
				 dest.executeUpdate();
				 
				 if(travelType.equals("one way")) { 
					  start_at_present = request.getParameter("start_at_present");
					  arrival_at_destination = request.getParameter("arrival_at_destination");	
					  start_at_destination="null";
					  arrival_at_present="null";
				 }else if(travelType.equals("round trip")) {
					  start_at_present = request.getParameter("start_at_present");
					  arrival_at_destination = request.getParameter("arrival_at_destination");	
					  start_at_destination = request.getParameter("start_at_destination");
					  arrival_at_present = request.getParameter("arrival_at_present");	
				 }
				 
				 if(TravelArrangement.equals("Public Transport")) {
					  pubTransport = request.getParameter("pubTransport");
					  vehicleNum="null";
					  vehicle="null";
					  people="Individual";
				 }else if(TravelArrangement.equals("Own Arrangement")) {
					  pubTransport="null";
					  vehicleNum = request.getParameter("vehicleNum");
					  vehicle = request.getParameter("vehicle");
					 if(vehicle.equals("Four Wheeler")) {
						  people = request.getParameter("people");
							
							  if(people.equals("Driver")) {
								  people="Individual";
							  }else if(people.equals("Driver + 1")) {
								  
								  coPassengerDetails = conn.prepareStatement("insert into copassengers values(?,?,?,?,?,?,?)");								  
								  coPass1Name = request.getParameter("coPass1");
								  coPass1Gender = request.getParameter("coPass1Gender");
								  coPass1Phone = request.getParameter("coPass1Phone");
								  coPass1Aadhar = request.getParameter("coPass1Aadhar");
								  coPass1Health = request.getParameter("coPass1Health");
								  coPass1Quar = request.getParameter("coPass1Quar");
								  
								     coPassengerDetails.setString(1, aadhar); 
								     coPassengerDetails.setString(2, coPass1Name); 
								     coPassengerDetails.setString(3, coPass1Gender);
								     coPassengerDetails.setString(4, coPass1Phone); 
								     coPassengerDetails.setString(5, coPass1Aadhar);
								     coPassengerDetails.setString(6, coPass1Health);
								     coPassengerDetails.setString(7, coPass1Quar);
								     
								     coPassengerDetails.executeUpdate();
							  
							  }else if(people.equals("Driver + 2")) {
								  
								  coPassengerDetails = conn.prepareStatement("insert into copassengers values(?,?,?,?,?,?,?)");
								  coPass1Name = request.getParameter("coPass1");
								  coPass1Gender = request.getParameter("coPass1Gender");
								  coPass1Phone = request.getParameter("coPass1Phone");
								  coPass1Aadhar = request.getParameter("coPass1Aadhar");
								  coPass1Health = request.getParameter("coPass1Health");
								  coPass1Quar = request.getParameter("coPass1Quar");
								  
								     coPassengerDetails.setString(1, aadhar); 
								     coPassengerDetails.setString(2, coPass1Name); 
								     coPassengerDetails.setString(3, coPass1Gender);
								     coPassengerDetails.setString(4, coPass1Phone); 
								     coPassengerDetails.setString(5, coPass1Aadhar);
								     coPassengerDetails.setString(6, coPass1Health);
								     coPassengerDetails.setString(7, coPass1Quar);
								     
								     coPassengerDetails.executeUpdate();
								  
								  coPass2Name = request.getParameter("coPass2");
								  coPass2Gender = request.getParameter("coPass2Gender");
								  coPass2Phone = request.getParameter("coPass2Phone");
								  coPass2Aadhar = request.getParameter("coPass2Aadhar");
								  coPass2Health = request.getParameter("coPass2Health");
								  coPass2Quar = request.getParameter("coPass2Quar");
								  
								     coPassengerDetails.setString(1, aadhar); 
								     coPassengerDetails.setString(2, coPass2Name); 
								     coPassengerDetails.setString(3, coPass2Gender);
								     coPassengerDetails.setString(4, coPass2Phone); 
								     coPassengerDetails.setString(5, coPass2Aadhar);
								     coPassengerDetails.setString(6, coPass2Health);
								     coPassengerDetails.setString(7, coPass2Quar);
								     
								     coPassengerDetails.executeUpdate();
							  
							  }
							 
					 }
				 }
				 
					/*
					 * System.out.println("travel type "+travelType);
					 * System.out.println("reason "+reason);
					 * System.out.println("start_at_present "+start_at_present);
					 * System.out.println("arrival_at_destination "+arrival_at_destination);
					 * System.out.println("start_at_destination "+start_at_destination);
					 * System.out.println("arrival_at_present "+arrival_at_present);
					 * System.out.println("TravelArrangement "+TravelArrangement);
					 * System.out.println("pubTransport "+pubTransport );
					 * System.out.println("vehicle "+vehicle);
					 * System.out.println("vehicleNum "+vehicleNum);
					 * System.out.println("people "+people);
					 */
				 
				 TravelDetails = conn.prepareStatement("insert into travel_details values(?,?,?,?,?,?,?,?,?,?,?,?)"); 
				 TravelDetails.setString(1, aadhar); 
				 TravelDetails.setString(2, travelType); 
				 TravelDetails.setString(3, start_at_present);
				 TravelDetails.setString(4, arrival_at_destination); 
				 TravelDetails.setString(5, start_at_destination);
				 TravelDetails.setString(6, arrival_at_present);
				 
				 TravelDetails.setString(7, reason);
				 TravelDetails.setString(8, TravelArrangement);
				 TravelDetails.setString(9, pubTransport);
				 TravelDetails.setString(10, vehicle);
				 TravelDetails.setString(11, vehicleNum);
				 TravelDetails.setString(12, people);
				 
				 TravelDetails.executeUpdate();			
				System.out.println("statement created");				
				response.sendRedirect("OTPRedirect");
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("statement not created");
				response.sendRedirect("Registration.html");
			}
		}
				
		
	}
	
	
	
	/*
	 * protected void doGet(HttpServletRequest request, HttpServletResponse
	 * response) throws ServletException, IOException {
	 * response.setContentType("text/html"); doPost(request,response); }
	 */
	 
	 

}
