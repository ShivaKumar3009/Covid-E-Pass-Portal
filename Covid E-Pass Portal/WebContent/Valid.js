
function validate(){
	/* Applicant Details */
    var name=document.getElementById('name').value;
	var appGen=document.getElementById('gender').value;
    var email=document.getElementById('email').value;
	var mobile=document.getElementById('mobile').value;
	var Aadhar = document.getElementById("Aadhar").value;
    var emailReg=/^([\.-\w]+)@([\.-\w]+).([a-z]{2,10})$/ ;
    var mobileReg=/^[6-9]\d{9}$/ ;
	var AadharReg = /^\d{4}\s\d{4}\s\d{4}$/ ;
	var vehicleReg = /^[A-Za-z]{2}\s[0-9]{2}\s[A-Za-b]{2}\s[0-9]{4}$/;
	
	
	/* Present Address */
	var flat = document.getElementById("flat").value;
	var area = document.getElementById("area").value;
	var town = document.getElementById("town").value;
	var pincode = document.getElementById("pincode").value;
	var pincodeReg = /^\d{6}$/;
	
	var district = document.getElementById("district");
	var districtDes = document.getElementById("districtDes");
	
	
	
	/* Destination Address */
	var flatDes = document.getElementById("flatDes").value;
	var areaDes = document.getElementById("areaDes").value;
	var townDes = document.getElementById("townDes").value;
	var pincodeDes = document.getElementById("pincodeDes").value;
	
	/* Dates */
	var travelType = document.getElementById("travelType");
	var startDate = document.getElementById("startDate");
	var arrivalDate = document.getElementById("arrivalDate");
	var start_at_destination = document.getElementById("start_at_destination");
	var arrival_at_present = document.getElementById("arrival_at_present");
	
	/* Travel Details */
	var reason = document.getElementById("reason").value;
	var vehicleNum = document.getElementById("vehicleNum");
	var pubTransport = document.getElementById("pubTransport");
	var mySelect = document.getElementById("mySelect");
	var vehicle = document.getElementById("vehicle");
	var people = document.getElementById("people");
	
	
	/* Traveller(s) Details */
	var driver = document.getElementById("driver");
	var driverGen = document.getElementById("DriverGender");
	var DriverPhone = document.getElementById("DriverPhone");
	var DriverAadhar = document.getElementById("DriverAadhar");
	
	var coPass1 = document.getElementById("coPass1");
	var coPass1Phone = document.getElementById("coPass1Phone");
	var coPass1Aadhar = document.getElementById("coPass1Aadhar");
	
	var coPass2 = document.getElementById("coPass2");
	var coPass2Phone = document.getElementById("coPass2Phone");
	var coPass2Aadhar = document.getElementById("coPass2Aadhar");
	
	if (name.trim()==''){
        alert("Applicant Name Can Not be Empty");
        return false;
    }else if (!emailReg.test(email)){
        alert("Enter valid email id");
        return false;
    }else if (!mobileReg.test(mobile)){
        alert("Enter valid mobile number");
        return false;
    }else if(!AadharReg.test(Aadhar)) {
		alert("Enter Valid Aadhar Number as shown in the box")
        return false;
    }else if(flat.trim()==''){
		alert("Flat Number Can Not Be Empty in Present Address");
		return false;
	}else if(area.trim()==''){
		alert("Area Name Can Not Be Empty in Present Address");
		return false;
	}else if(town.trim()==''){
		alert("Town/Village Can Not Be Empty in Present Address");
		return false;
	}else if(pincode.trim()==''){
		alert("PinCode can not be Empty in Present Address");
		return false;
	}else if(!pincodeReg.test(pincode)){
		alert("Pincode can not be alphabets and length should be 6 in Present Address");
		return false;
	}else if(flatDes.trim()==''){
		alert("Flat Number Can Not Be Empty in Destination Address");
		return false;
	}else if(areaDes.trim()==''){
		alert("Area Name Can Not Be Empty in Destination Address");
		return false;
	}else if(townDes.trim()==''){
		alert("Town/Village Can Not Be Empty in Destination Address");
		return false;
	}else if(pincodeDes.trim()==''){
		alert("PinCode can not be Empty in Destination Address");
		return false;
	}else if(!pincodeReg.test(pincodeDes)){
		alert("Pincode can not be alphabets and length should be 6 in Destination Address");
		return false;
	}else if(pincodeDes == pincode){
		alert("Source pincode and Destination pincode can not be Same");
		return false;
	}else if(districtDes.value == district.value){
		alert("Present District and Destination district can not be Same");
		return false;
	}else if(reason.trim() == ""){
		alert("Reason for Travel Can not Be Empty");
		return false;
	}else if(travelType.value == "one way"){
		if( arrivalDate.value < startDate.value ){
			alert("Estimated Date of Arrival on Destination Address should not be less than Date of Travel");
			return false;
		}
	}else if(travelType.value == "round trip"){
		if( arrivalDate.value < startDate.value ){
			alert("Estimated Date of Arrival on Destination Address should not be less than Date of Travel");
			return false;
		}else if(start_at_destination.value < arrivalDate.value || start_at_destination.value > arrival_at_present.value ){
			alert("Check your dates of travel please")
			return false;
		}
	}if(mySelect.value == "Public Transport"){
		if(pubTransport.value.trim() == ""){
			alert("Details of Public Transport Can not Be Empty");
			return false;
		}else if(driver.value.trim() == ""){
					alert("Applicant's Name Can not Be Empty in Traveller(s) Details");
					return false;
		}else if( driver.value !== name  ){
					alert("Applicant Name should be Same in Applicant's Details and Travellers(s) Details");
					return false;
		}else if( appGen !== driverGen.value  ){
					alert("Applicant Gender should be Same in Applicant's Details and Travellers(s) Details");
					return false;
		}else if(DriverPhone.value.trim() == ""){
					alert("Applicant's Phone Number Can not Be Empty in Traveller(s) Details");
					return false;
		}else if( DriverPhone.value !== mobile  ){
					alert("Applicant Phone Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
		}else if(DriverAadhar.value.trim() == ""){
					alert("Applicant's Aadhar Number Can not Be Empty in Traveller(s) Details");
					return false;
		}else if( DriverAadhar.value !== Aadhar  ){
					alert("Applicant Aadhar Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
		}
		
	}if(mySelect.value == "Own Arrangement" ){
		if(vehicleNum.value.trim() == ""){
			alert("vehicle number Can not Be Empty");
			return false;
		}if(!vehicleReg.test(vehicleNum.value)){
			alert("Enter Valid Vehicle Number as shown in the Box");
			return false;
		}
		if(vehicle.value == "Four Wheeler"){
			if(people.value == "Driver"){
				
				if(driver.value.trim() == ""){
					alert("Applicant's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( driver.value !== name  ){
					alert("Applicant Name should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if( appGen !== driverGen.value  ){
					alert("Applicant Gender should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverPhone.value.trim() == ""){
					alert("Applicant's Phone Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverPhone.value !== mobile  ){
					alert("Applicant Phone Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverAadhar.value.trim() == ""){
					alert("Applicant's Aadhar Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverAadhar.value !== Aadhar  ){
					alert("Applicant Aadhar Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}
				
			}if(people.value == "Driver + 1"){
				if(driver.value.trim() == ""){
					alert("Applicant's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( driver.value !== name  ){
					alert("Applicant Name should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if( appGen !== driverGen.value  ){
					alert("Applicant Gender should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverPhone.value.trim() == ""){
					alert("Applicant's Phone Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverPhone.value !== mobile  ){
					alert("Applicant Phone Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverAadhar.value.trim() == ""){
					alert("Applicant's Aadhar Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverAadhar.value !== Aadhar  ){
					alert("Applicant Aadhar Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(coPass1.value.trim() == ""){
					alert("Co-Passenger's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if (!mobileReg.test(coPass1Phone.value)){
			        alert("Enter valid mobile number of Co-Passenger 1 ");
			        return false;
			    }else if(!AadharReg.test(coPass1Aadhar.value)) {
					alert("Enter Valid Aadhar Number of Co Passenger 1");
			        return false;
			    }else if(coPass1Aadhar.value == DriverAadhar.value ) {
					alert("Aadhar Numbers of Co Passenger 1 and Traveller can not be same");
			        return false;
			    }
			}if(people.value == "Driver + 2"){
				if(driver.value.trim() == ""){
					alert("Applicant's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( driver.value !== name  ){
					alert("Applicant Name should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if( appGen !== driverGen.value  ){
					alert("Applicant Gender should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverPhone.value.trim() == ""){
					alert("Applicant's Phone Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverPhone.value !== mobile  ){
					alert("Applicant Phone Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverAadhar.value.trim() == ""){
					alert("Applicant's Aadhar Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverAadhar.value !== Aadhar  ){
					alert("Applicant Aadhar Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(coPass1.value.trim() == ""){
					alert("Co-Passenger's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if (!mobileReg.test(coPass1Phone.value)){
			        alert("Enter valid mobile number of Co-Passenger 1 ");
			        return false;
			    }else if(!AadharReg.test(coPass1Aadhar.value)) {
					alert("Enter Valid Aadhar Number of Co Passenger 1");
			        return false;
			    }else if(coPass1Aadhar.value == DriverAadhar.value ) {
					alert("Aadhar Numbers of Co Passenger 1 and Traveller can not be same");
			        return false;
			    }else if(coPass2.value.trim() == ""){
					alert("Co-Passenger's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if (!mobileReg.test(coPass2Phone.value)){
			        alert("Enter valid mobile number of Co-Passenger 2 ");
			        return false;
			    }else if(!AadharReg.test(coPass2Aadhar.value)) {
					alert("Enter Valid Aadhar Number of Co Passenger 2");
			        return false;
			    }else if(coPass2Aadhar.value == DriverAadhar.value ) {
					alert("Aadhar Numbers of Co Passenger 2 and Traveller can not be same");
			        return false;
			    }else if(coPass1Aadhar.value == coPass2Aadhar.value ) {
					alert("Aadhar Numbers of Co Passenger 1 and Co Passenger 2 can not be same");
			        return false;
			    }
				
			}
		}if(vehicle.value == "Two Wheeler"){
			if(driver.value.trim() == ""){
					alert("Applicant's Name Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( driver.value !== name  ){
					alert("Applicant Name should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if( appGen !== driverGen.value  ){
					alert("Applicant Gender should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverPhone.value.trim() == ""){
					alert("Applicant's Phone Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverPhone.value !== mobile  ){
					alert("Applicant Phone Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}else if(DriverAadhar.value.trim() == ""){
					alert("Applicant's Aadhar Number Can not Be Empty in Traveller(s) Details");
					return false;
				}else if( DriverAadhar.value !== Aadhar  ){
					alert("Applicant Aadhar Number should be Same in Applicant's Details and Travellers(s) Details");
					return false;
				}
		}
		
	}


}



