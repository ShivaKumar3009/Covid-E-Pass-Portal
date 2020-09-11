<%-- <%@ errorPage="Registration.html" %>
<%@ isErrorPage="true" %> --%>
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
<title>Travel Pass</title>

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
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
    	
</head>
<body>
	<%
		/* response.setHeader("Cache-Control", "no-store");
		response.setHeader("Pragma", "no-cache");//HTTP 1.0
	 	response.setHeader("Expires", "0"); */
    	if(session.getAttribute("AadharNum")==null ){
			response.sendRedirect("Registration.html");
			return;
    	}
      %> 
     
      
	<div class="container bg-light p-3" id="example">
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
      
    
      
      
      <h5 class="text-success text-center">Travel Pass Issued <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  		<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  		<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
	</svg> </h5>
      <c:set var="str" value="${AadharNum}"></c:set>
      <sql:setDataSource var="db" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://@localhost:3306/applications" user="ShivaKumar" password="Shiva@3009"  />
	
		<sql:query var="applicants" dataSource="${db}"> select * from applicants  </sql:query>
		<sql:query var="PresentAddress" dataSource="${db}"> select * from present_address </sql:query>
		<sql:query var="destinationAddress" dataSource="${db}"> select * from destination  </sql:query>
		<sql:query var="TravelDetails" dataSource="${db}"> select * from travel_details  </sql:query>
		<sql:query var="copassengersDetails" dataSource="${db}"> select * from copassengers  </sql:query>
	
	
	<c:forEach items="${applicants.rows}" var="applicant">
		<c:if test="${fn: contains(str,applicant.aadhar)}">
		<div class=" container p-3 mb-3 bg-white">
			<table class="table table-bordered table-striped text-center">
				<tbody>
					<tr>
						<th class="text-dark">Photo Of The Applicant</th>
						<td> <img src="${pageContext.servletContext.contextPath }/photoServlet?aadhar=${applicant.aadhar}" width="160" height="200">  </td>
					</tr>
					<tr>
						<th class="text-dark">Name Of The Applicant</th> <td> ${applicant.applicant_name} </td>
					</tr>
					<tr>
						<th class="text-dark">Gender</th><td> ${applicant.gender}</td>
					</tr>
					<tr>
						<th class="text-dark">Email ID </th><td> ${applicant.email}</td>
					</tr>
					<tr>
						<th class="text-dark">Contact Number</th><td> ${applicant.phone}</td>
					</tr>
					<tr>
						<th class="text-dark">Aadhar Number</th><td> ${applicant.aadhar}</td>
					</tr>
				</tbody>
			</table>
		</div>
			<h6 class="text-center text-danger"><mark><u> Declaration </u> </mark></h6>
			<p class="text-dark">Information furnished by me/us are true to our best of my/our knowledge. I/we agree uponto abide by any of the actions taken by Government in case of violation of any conditions in this regards. </p>
			<div class="container bg-white p-3 mb-3">
			<h6 class="text-danger text-center mx-auto d-block mb-4"> Permission is granted to move </h6>
			<table class="table table-bordered table-striped text-center">
				<c:forEach items="${PresentAddress.rows}" var="present">
					<c:if test="${fn: contains(str,present.aadhar)}">
						<tr>
							<th class="text-dark">From </th><td> <b>District -</b> ${present.district} ,   <b>Town -</b> ${present.town} ,  <b> Pin code -</b> ${present.pincode}   </td>
						</tr>
					</c:if>
				</c:forEach>
				<c:forEach items="${destinationAddress.rows}" var="destination">
					<c:if test="${fn: contains(str,destination.aadhar)}">
						<tr>
							<th class="text-dark text-center ">To  </th> <td> <b> District -</b> ${destination.district} , <b>Town -</b> ${destination.town} ,  <b> Pin code -</b> ${destination.pincode}  </td>
						</tr>
					</c:if>
				</c:forEach>
				<c:forEach items="${TravelDetails.rows}" var="travel">
					<c:if test="${fn: contains(str,travel.aadhar)}">
						<tr>
							<th class="text-dark text-center">Travel Details </th> <td> ${travel.travel_arrangement} , Vehicle number - ${travel.vehicle_number}  </td>
						</tr>
						<tr>
							<th class="text-dark text-center">Reason For Travel </th><td> ${travel.reason}  </td>
						</tr>
						<tr>
							<th class="text-dark text-center">Approved Date </th> <td>${travel.start_at_present} </td>
						</tr>
					</c:if>
				</c:forEach>
		</table>
		</div>
		<div class="container bg-white p-3">
		<h6 class="text-center text-danger p-3"><mark> CoPassenger's details  </mark></h6>
		<table class="table table-bordered table-striped text-center">
			<thead>
				<tr>
					<th>Passenger's Name</th>
					<th>Aadhar Number</th>
					<th>Gender</th>
					<th>Phone</th>
				</tr>
			</thead>
			<c:forEach items="${copassengersDetails.rows}" var="coPass">
				<c:if test="${fn: contains(str,coPass.Applicant_aadhar)}">					
						<tbody>
							<tr>
								<td>${coPass.name}</td>
								<td>${coPass.copassenger_aadhar}</td>
								<td>${coPass.gender}</td>
								<td>${coPass.phone}</td>
							</tr>
						</tbody>					
				</c:if>
			</c:forEach>
		</table>
		</div>
		</c:if>
	</c:forEach>
	<div class="p-3">
		<h6 class="text-center"><mark>Guidelines</mark></h6>
		<ol>
			<li>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</li>
			<li>Maintain at least 1 meter (3 feet) distance between yourself and others.</li>
			<li>Avoid going to crowded places.</li>
			<li>Avoid touching eyes, nose and mouth.</li>
			<li>Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover.
			 Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. </li>
		</ol>
	</div>
</div>
	<div id="print"></div>
	<div class="p-3 mb-5 container">
	      <!-- <a href="TravelPass.jsp" class="btn btn-outline-info" download="download" target="_blank">Download</a> -->
	      <button type="button" class="btn btn-outline-info float-left ml-5" id="bt" onclick="PDF()"><i class="fa fa-download"></i> Download / <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-printer-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5z"/>
			  <path fill-rule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
			  <path fill-rule="evenodd" d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
			</svg> Print</button>
			<a href="sessionServlet" class="btn btn-outline-info float-right mr-5">Go To Home</a>
	 </div>
	<script type="text/javascript">
	function PDF(){
		
		window.print();
				
	}
</script>
</body>
</html>