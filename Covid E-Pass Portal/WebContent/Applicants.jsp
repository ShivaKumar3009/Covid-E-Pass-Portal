<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.* , java.util.* , java.io.*"%>
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Applicants</title>

	<!-- CSS only -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
    <!-- JS, Popper.js, and jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>

</head>
<body>
	<%
			 if(session.getAttribute("Email") == null){
				response.sendRedirect("adminLogin.html");
			} 
	%>
	<div class="container-fluid bg-light">
		<div
        class="bg-info container-fluid border border-dark"
        style="height: 100px; width: auto; position: relative;"
      >
        <img
          src="AndhraPradesh_Emblem.jpeg"
          alt="AndhraPradesh Emblem"
          class="mx-auto d-block p-2 float-left"
          style="width: 100px; height: 100px; border-radius: 0%;"
        />
        <img
          src="AP_Police.png"
          alt="AndhraPradesh Police"
          class="mx-auto d-block p-2 float-right"
          style="width: 100px; height: 100px; border-radius: 0%;"
        />
        <div class="p-3">
          <h4 class="text-center text-danger">
            Covid 19 E-PASS Portal
          </h4>
          <p class="text-center">Government of Andhra Pradesh</p>
        </div>
      </div>
      <div style="height: 35px;"></div>
      <div>
      		<form method="post">
      			<p class="text-dark text-center"><b>Search for Applicant : </b><input type="text" class=""  name="q" placeholder="Enter Aadhra Number " /></p>
      		</form>
      </div>
      <div style="height: 35px;"></div>
		<a href="adminSession" class="btn btn-outline-info float-right mb-2">Logout</a>
	<div>
		<h6 class="text-center text-danger p-2">List of Applicants ( Travel Pass Issued )</h6>
		<table class="table table-bordered table-striped text-center">
			<thead>
				<tr>
					<th>Applicant's_Aadhar_Number</th>
					<th>Applicant's_Name</th>
					<th>Gender</th>
					<th>Email</th>
					<th>Contact Number</th>
					<th>Source</th>
					<th>Destination</th>
					<th>Travel Type</th>
					<th>Traveling On</th>
					<th>Vehicle Number</th>
					<th>Travel_Start_Date</th>
					<th>Total Passengers</th>
					<th>Applicants's Photograph</th>					
				</tr>
			</thead>
			<tbody>
				<%
				Class.forName("com.mysql.jdbc.Driver");
				Connection conn=DriverManager.getConnection("jdbc:mysql://@localhost:3306/applications","ShivaKumar","Shiva@3009");
				Statement appStmt = conn.createStatement();
				Statement srcStmt = conn.createStatement();
				Statement destStmt = conn.createStatement();
				Statement travelStmt = conn.createStatement();
				String query = request.getParameter("q");
				String applicant;
				String src;
				String dest;
				String travel;
				if(query != null){
					applicant = "select * from applicants where aadhar like '%"+query+"%'";
					 src = "select * from present_address where aadhar like '%"+query+"%'";
					 dest = "select * from destination where aadhar like '%"+query+"%'";
					 travel = "select * from travel_details where aadhar like '%"+query+"%'";
				}else{
					 applicant = "select * from applicants order by aadhar";
					 src = "select * from present_address order by aadhar";
					 dest = "select * from destination order by aadhar";
					 travel = "select * from travel_details order by aadhar";
				}
				ResultSet appData = appStmt.executeQuery(applicant);
				ResultSet srcData = srcStmt.executeQuery(src);
				ResultSet destData = destStmt.executeQuery(dest);
				ResultSet travelData = travelStmt.executeQuery(travel);
				while(appData.next() && srcData.next() && destData.next() && travelData.next())
				{
				%>
				<tr>
					<th><%= appData.getString(5) %></th>
					<td><%= appData.getString(1) %></td>
					<td><%= appData.getString(2) %></td>
					<td><%= appData.getString(3) %></td>
					<td><%= appData.getString(4) %></td>
					<td><%= srcData.getString(6) %></td>
					<td><%= destData.getString(6) %></td>
					<td><%= travelData.getString(2) %></td>
					<td><%= travelData.getString(8) %></td>
					<td><%= travelData.getString(11) %></td>
					<td><%= travelData.getString(3) %></td>
					<% 
						PreparedStatement st = conn.prepareStatement("select * from copassengers where Applicant_aadhar=?");
						st.setString(1,appData.getString(5));
						ResultSet rs = st.executeQuery();
						int c =1 ;
						while(rs.next())
							c++;
					%>
					<td><%= c %></td> 
					<td><img src="${pageContext.servletContext.contextPath }/appPhotoServlet?aadhar=<%= appData.getString("aadhar") %>" width="100" height="100"></td>					
				</tr>
				<%
				}
				%>
			</tbody>
		</table>
		<h6 class="text-center text-danger p-3">List of Co-Passengers</h6>
		<table class="table table-bordered table-striped text-center">
			<thead>
				<tr>
					<th>Applicant's Aadhar Number</th>
					<th>Co-Passenger's Name</th>
					<th>Co-Passenger's Aadhar Number</th>
					<th>Gender</th>
					<th>Contact Number</th>	
				</tr>		
			</thead>
			<tbody>
			<%
			Statement applicantStmt = conn.createStatement();
			Statement coPassStmt = conn.createStatement();
			String app ;
			if(query != null){
				app = "select * from applicants where aadhar like '%"+query+"%'";
			}else{
				app = "select * from applicants order by aadhar";
			}
			 
			ResultSet applicantData = applicantStmt.executeQuery(app);
			
			while(applicantData.next()  ){
				String coPass = "select * from copassengers where Applicant_aadhar='"+applicantData.getString(5)+"' ";
				ResultSet coPassData = coPassStmt.executeQuery(coPass);
				while(coPassData.next()){
			%>
				<tr>
					<th><%= applicantData.getString(5) %></th>
					<td><%= coPassData.getString(2) %></td>
					<td><%= coPassData.getString(5) %></td>
					<td><%= coPassData.getString(3) %></td>
					<td><%= coPassData.getString(4) %></td>
				</tr>
			<%
				}
			}
			%>
			</tbody>
		</table>
	</div>
	
	</div>
</body>
</html>