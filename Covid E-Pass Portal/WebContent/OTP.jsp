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
<title>OTP </title>

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
    
</head>
<body>
	<%	
    	if(session.getAttribute("AadharNum")==null ){
    		//System.out.println("inside otp.jsp");
			response.sendRedirect("Registration.html");
			return;
    	}
      %> 
      
      <div class="container bg-light p-3">
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
        <h6 class="text-center">Government of Andhra Pradesh</h6>
        </div>
      </div>

      <div style="height: 35px;"></div>
	      <c:set var="str" value="${AadharNum}"></c:set>  
	      <sql:setDataSource var="db" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://@localhost:3306/applications" user="ShivaKumar" password="Shiva@3009"  /> 
	      <sql:query var="res" dataSource="${db}"> select * from applicants </sql:query> 
	      <c:forEach items="${res.rows}" var="applicant">
			<c:if test="${fn: contains(str,applicant.aadhar)}">  
			<div class="container mx-auto d-block bg-light p-3" >
				<form action="OTPservlet" method="post" id="formElem" class="form-group" >
					<h6 class="text-success text-center p-3">OTP has been successfully sent to ${applicant.email} </h6>
					<input type="text" class="mx-auto d-block" placeholder="Enter otp" name="otp"><br/>
					<input type="submit" class="btn btn-outline-info mx-auto d-block">
				</form>
			</div>
			</c:if>
		</c:forEach>
	</div>
</body>
</html>