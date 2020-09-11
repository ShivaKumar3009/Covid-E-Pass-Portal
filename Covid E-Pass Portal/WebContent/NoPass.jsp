<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.* , java.util.* , java.io.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>NoPass</title>
	
	<!-- CSS only -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />

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
	<script type="module" src="NoPassJs.js"></script>
</head>
<body>

	<%	
		if(session.getAttribute("AadharNum")==null ){
			response.sendRedirect("Registration.html");
			return;
		}
	
		String source="";
		String destination="";
		try{
		 	 source = session.getAttribute("srcDistrict").toString();
		 	destination = session.getAttribute("destDistrict").toString();
		}catch(Exception e){
			System.out.println("inside NoPass.jsp");
			response.sendRedirect("Registration.html");
		}
		
	%>
	
	<div class="container bg-light p-5">
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
    	<div class="container bg-white">
	    	<svg width="5em" height="5em" viewBox="0 0 16 16" class="text-danger mx-auto d-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
			  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
			</svg>
			<h1 class="text-danger text-center">S	o	r	r	y</h1>
			<h5 class="text-center text-dark p-2">Travel Pass  can not be issued</h5>
				<p> We are not issuing Travel Passes for the people who travel from / to a place where the Covid  19 cases are too high and increasing rapidly.</p>
				<p>We are unable to issue Travel Pass for you because there might be more number of cases in <strong class="text-danger"> <%= source %> </strong> or <strong class="text-danger"> <%= destination %> </strong> 
				or cases might be increasing rapidly.So we advice you to stay in <strong class="text-danger"> <%= source %></strong> and <strong>stay safe.</strong> </p>
	    		<div class="border border-dark rounded p-3 text-center mx-auto d-block" style="width: 40%;background-color: rgb(214, 231, 235);">
				 	<p>Check Covid 19 Cases in Andhra Pradesh</p>				 		
					 	<a href="CovidInAP.html" class="btn btn-info mr-4">Covid Details</a>
					 	<a href="sessionServlet" class="btn btn-info ml-4">Go To Home</a>
			 	</div>
		 	</div>
		 </div>
		 <%
		 		String aadharNum="";
		 		try{
		 			aadharNum = session.getAttribute("AadharNum").toString();
		 			System.out.println("inside no pass try "+aadharNum);
		 			Class.forName("com.mysql.jdbc.Driver");
		 			Connection conn=DriverManager.getConnection("jdbc:mysql://@localhost:3306/applications","ShivaKumar","Shiva@3009");
		 			Statement stmt = conn.createStatement();
		 			stmt.executeUpdate("delete from present_address where aadhar='"+aadharNum+"'");
		 			stmt.executeUpdate("delete from destination where aadhar='"+aadharNum+"'");
		 			stmt.executeUpdate("delete from travel_details where aadhar='"+aadharNum+"'");
		 			stmt.executeUpdate("delete from copassengers where Applicant_aadhar='"+aadharNum+"'");
		 			stmt.executeUpdate("delete from applicants where aadhar='"+aadharNum+"'");
		 			System.out.println("deleted");
		 		}catch(Exception e){
		 			System.out.println("inside Nopass.jsp 2");
		 			response.sendRedirect("Registration.html");
		 		}
		 	
		 %>
  </body>
</html>