function TravelType(){
	var travelType = document.getElementById("travelType");
	var res;
	if(travelType.value == "one way"){
		res = `<div class="row mb-3">
	            <div class="col-sm">
	              <h6>Date of Travel <span class="text-danger">*</span></h6>
	              <input
	                type="date"
	                class="form-control"
					id="startDate"	
					name="start_at_present"
					required               
	              />
	            </div>
	            <div class="col-sm">
	              <h6>Estimated Date of Arrival on Destination Address <span class="text-danger">*</span></h6>
	              <input
	                type="date"
	                class="form-control"
					id="arrivalDate"	
					name="arrival_at_destination"
					required                               
	              />
	            </div>
	          </div>`;

	
	
	}else if(travelType.value == "round trip"){
		res = `<div class="row mb-3">
	            <div class="col-sm">
	              <h6>Date of Travel <span class="text-danger">*</span></h6>
	              <input
	                type="date" 
	                class="form-control"
					id="startDate"
					name="start_at_present"
					required	                	                
	              />
	            </div>
	            <div class="col-sm">
	              <h6>Estimated Date of Arrival on Destination Address <span class="text-danger">*</span></h6>
	              <input
	                type="date"
	                class="form-control"
					id="arrivalDate"
					name="arrival_at_destination"
					required	                                
	              />
	            </div>
	          </div>
			<div class="row mb-3">
	            <div class="col-sm">
	              <h6>Date of Return Travel <span class="text-danger">*</span></h6>
	              <input
	                type="date"
	                class="form-control"
					id="start_at_destination"	
					name="start_at_destination"
					required                	                
	              />
	            </div>
	            <div class="col-sm">
	              <h6>Estimated Date of Arrival on Return Address <span class="text-danger">*</span></h6>
	              <input
	                type="date"
	                class="form-control"
					id="arrival_at_present"
					name="arrival_at_present"
					required                	                
	              />
	            </div>
	          </div> `;
	} else{
			
			res = ``;
	}
	
	var myId5 = document.getElementById("myId5");
	myId5.innerHTML = res;
	
}

function tryIt() {
  var mySelect = document.getElementById("mySelect");
  var myId2 = document.getElementById("myId2");
  var myId3 = document.getElementById("myId3");
  var myId4 = document.getElementById("myId4");
  var res;
  if (mySelect.value == "Public Transport") {
    res = `<div class="row mb-3">
                <div class="col-sm">
                <h6>Brief Details of Public Transport<span class="text-danger">*</span></h6>
                <textarea class="form-control" rows="2" id="pubTransport" name="pubTransport" required></textarea>
                </div>
                <div class="col-sm"></div>
            </div>`;
	var myId = document.getElementById("myId");
 	myId.innerHTML = res;
	myId2.innerHTML = ``;
	myId3.innerHTML = ``;
	myId4.innerHTML = ``;
  } else if(mySelect.value == "Own Arrangement") {
			res= `<div class="row mb-3">
	                <div class="col-sm">
	                <h6>Type of Vehicle <span class="text-danger">*</span></h6>
	            			<select class="text-info form-control" id="vehicle" name="vehicle" onchange="pop()" required>
					            <option value="">please select</option>
					            <option value="Two Wheeler">Two Wheeler</option>
					            <option value="Four Wheeler">Four Wheeler</option>
			          		</select>
	                </div>
	                <div class="col-sm">
						<h6>Vehicle Number<span class="text-danger">*</span></h6>
						<input type="text"  class="form-control" id="vehicleNum" name="vehicleNum" placeholder="eg: AP 22 DQ 9999" required/>
					</div>
	            </div>`;
	var myId = document.getElementById("myId");
 	myId.innerHTML = res;
	}
	else{
		res = ``;
		//console.log("try it");
		var myId = document.getElementById("myId");
 		myId.innerHTML = res;
		myId2.innerHTML = res;
		
	 	myId3.innerHTML = res;
	 	myId4.innerHTML = res;
	 	
	}
  
}

 function pop(){
	var vehicle = document.getElementById("vehicle");
	var mySelect = document.getElementById("mySelect");
	var myId2 = document.getElementById("myId2");
  	var res = ``;
	if (vehicle.value == "Four Wheeler") {
    res = `<div class="row mb-3">
                <div class="col-sm">
                <h6>Travelling as <span class="text-danger">*</span></h6>
                <select class="text-info form-control" id="people" name="people" onchange="popLast()" required >
					  <option value="">please select</option>
					  <option value="Driver">Driver</option>	
					  <option value="Driver + 1">Driver + 1</option>
					  <option value="Driver + 2">Driver + 2</option>
			    </select>
                </div>
                <div class="col-sm"></div>
            </div>`;
    
 	myId2.innerHTML = res;
  }else{
		res=``;
	 	myId2.innerHTML = res;
		var myId3 = document.getElementById("myId3");
		var myId4 = document.getElementById("myId4");
	 	myId3.innerHTML = res;
	 	myId4.innerHTML = res;
	}
}

function popLast(){
	var people = document.getElementById("people");
  	var res;
	res= `<div class="row mb-3">
	          <div class="col-sm">
	            <h6>Name<span class="text-danger">*</span></h6>
	            <input type="text" class="form-control" id="coPass1" name="coPass1" required  >
	          </div>
	          <div class="col-sm">
	            <h6>Gender<span class="text-danger">*</span></h6>
	            <select class="text-info form-control" id="coPass1Gender" name="coPass1Gender" required>
	              <option value="">please select</option>
	              <option value="male">male</option>
	              <option value="female">female</option>
	              <option value="others">others</option>
	            </select>
	          </div>
	          <div class="col-sm">
	            <h6>Mobile Number<span class="text-danger">*</span></h6>
	            <input type="text" class="form-control" id="coPass1Phone" name="coPass1Phone" required >
	          </div>
	          <div class="col-sm">
	            <h6>Aadhar Number <span class="text-danger">*</span></h6>
	            <input type="text" class="form-control" id="coPass1Aadhar" name="coPass1Aadhar" required >
	          </div>
	          <div class="col-sm">
	            <h6>cold/cough/fever? <span class="text-danger">*</span></h6>
	            <select class="text-info form-control" id="coPass1Health" name="coPass1Health" required >
				  <option value="">please select</option>
	              <option value="yes">Yes</option>
	              <option value="no">No</option>
	            </select>
	          </div>
	          <div class="col-sm">
	            <h6>quarantined ever? <span class="text-danger">*</span></h6>
	            <select class="text-info form-control" id="coPass1Quar" name="coPass1Quar" required >
				  <option value="">please select</option>
	              <option value="yes">Yes</option>
	              <option value="no">No</option>
	            </select>
	          </div>
	        </div>` ;
	if (people.value == "Driver + 1"){
	var myId3 = document.getElementById("myId3");
 	myId3.innerHTML = res;
	var myId4 = document.getElementById("myId4");
 	myId4.innerHTML = ``;
	} else if (people.value == "Driver + 2"){
	let res2=`<div class="row mb-3">
	          <div class="col-sm">
	            <h6>Name<span class="text-danger">*</span></h6>
	            <input type="text" class="form-control" id="coPass2" name="coPass2" required>
	          </div>
	          <div class="col-sm">
	            <h6>Gender<span class="text-danger">*</span></h6>
	            <select class="text-info form-control" id="coPass2Gender" name="coPass2Gender" required>
	              <option value="">please select</option>
	              <option value="male">male</option>
	              <option value="female">female</option>
	              <option value="others">others</option>
	            </select>
	          </div>
	          <div class="col-sm">
	            <h6>Mobile Number<span class="text-danger">*</span></h6>
	            <input type="text" class="form-control" id="coPass2Phone" name="coPass2Phone"  required>
	          </div>
	          <div class="col-sm">
	            <h6>Aadhar Number <span class="text-danger">*</span></h6>
	            <input type="text" class="form-control" id="coPass2Aadhar" name="coPass2Aadhar" required >
	          </div>
	          <div class="col-sm">
	            <h6>cold/cough/fever? <span class="text-danger">*</span></h6>
	            <select class="text-info form-control" id="coPass2Health" name="coPass2Health" required>
				  <option value="">please select</option>
	              <option value="yes">Yes</option>
	              <option value="no">No</option>
	            </select>
	          </div>
	          <div class="col-sm">
	            <h6>quarantined ever? <span class="text-danger">*</span></h6>
	            <select class="text-info form-control" id="coPass2Quar" name="coPass2Quar" required>
				  <option value="">please select</option>
	              <option value="yes">Yes</option>
	              <option value="no">No</option>
	            </select>
	          </div>
	        </div>` ;
	var myId3 = document.getElementById("myId3");
	var myId4 = document.getElementById("myId4");
 	myId3.innerHTML = res;
 	myId4.innerHTML = res2;
	} else {
		
		var myId3 = document.getElementById("myId3");
		var myId4 = document.getElementById("myId4");
	 	myId3.innerHTML = ``;
	 	myId4.innerHTML = ``;
	}
} 

