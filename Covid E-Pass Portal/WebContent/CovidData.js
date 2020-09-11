//var fetch = require("node-fetch");

function demo(){
	 fetch("https://api.covid19india.org/v4/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
		console.log("inside demo")
		var casesInAP = parseInt(obj["AP"]["total"]["confirmed"]*0.1);
		console.log( "casesInAP" + " " + parseInt(casesInAP));
		var source = document.getElementById("district");
		var destination = document.getElementById("districtDes");
		
		const casesInSource = obj["AP"]["districts"][source.value]["total"]["confirmed"];
		const casesInDestination = obj["AP"]["districts"][destination.value]["total"]["confirmed"];
		
		if(casesInSource >= casesInAP || casesInDestination >= casesInAP ){	
			console.log("inside if covid data js");	
			console.log(casesInAP);	
			console.log(casesInSource);	
			console.log(casesInDestination);					
			//document.getElementById("formElem").method = "GET";
			document.location.href="http://localhost:8080/covid/NoPass.jsp";			
		}   	
			
    })
    .catch(function (error) {
      console.log("something wrong");
      console.log(error);
    }); 

}


	
//demo();
