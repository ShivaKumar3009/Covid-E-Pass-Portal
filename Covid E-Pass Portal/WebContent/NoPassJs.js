/*import {srcDistrict,destDistrict} from './covidModule.js';


console.log("source "+srcDistrict());
console.log("destination "+destDistrict());
*/



/*function demoPass(){
  fetch("https://api.covid19india.org/v4/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
		/*console.log(obj["AP"]["districts"]);
		console.log(obj["AP"]["total"]["confirmed"]);
		var res;
		var source = document.getElementById("district");
		var destination = document.getElementById("districtDes");
		console.log("source " +source.value);
		console.log("destination "+destination.value);
		const casesInSource = obj["AP"]["districts"][source.value]["total"]["confirmed"];
		const casesInDestination = obj["AP"]["districts"][destination.value]["total"]["confirmed"];
		
		if(casesInSource >= casesInDestination ){
			res = `<div>
						<p>As per our guidelines</p>
						<p> Covid 19 cases are too high and  increasing very quickly in ${source}</p>
						<p>So we feel the cases are too high to issue Travel Pass</p> 
					</div>
					<div class="p-3">
						<p class="text-center text-danger">Covid details in ${source}</p>
						<table class="table table-bordered text-center">
							<thead>
								<tr>
									<th>District</th>
									<th>Confirmed</th>
				      				<th>Deceased</th>
				      				<th>Recovered</th>
				      				<th>Tested</th>
				      				<th>Last Updated</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>${source.value}</td>
									<td>${casesInSource}</td>
									<td>${obj["AP"]["districts"][source.value]["total"]["deceased"]}</td>
									<td>${obj["AP"]["districts"][source.value]["total"]["recovered"]}</td>
									<td>${obj["AP"]["districts"][source.value]["total"]["tested"]}</td>
									<td>${obj["AP"]["districts"][source.value]["meta"]["tested"]["last_updated"]}</td>	
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<p>For more details <a href="CovidInAP.html" class="btn btn-outline-info">Click Here</a> </p>
					</div>
						`;
			document.getElementById("noPass").innerHTML = res;
		}else{
			res = `<div>
						<p>As per our guidelines</p>
						<p> Covid 19 cases are too high and  increasing very quickly in ${destination}</p>
						<p>So we feel the cases are too high to issue Travel Pass</p> 
					</div>
					<div class="p-3">
						<p class="text-center text-danger">Covid details in ${destination}</p>
						<table class="table table-bordered text-center">
							<thead>
								<tr>
									<th>District</th>
									<th>Confirmed</th>
				      				<th>Deceased</th>
				      				<th>Recovered</th>
				      				<th>Tested</th>
				      				<th>Last Updated</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>${destination.value}</td>
									<td>${casesInDestination}</td>
									<td>${obj["AP"]["districts"][destination.value]["total"]["deceased"]}</td>
									<td>${obj["AP"]["districts"][destination.value]["total"]["recovered"]}</td>
									<td>${obj["AP"]["districts"][destination.value]["total"]["tested"]}</td>
									<td>${obj["AP"]["districts"][destination.value]["meta"]["tested"]["last_updated"]}</td>	
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<p>For more details <a href="CovidInAP.html" class="btn btn-outline-info">Click Here</a> </p>
					</div>
						`;
				document.getElementById("noPass").innerHTML = res;
		}
		
		
		
    })
    .catch(function (error) {
      console.log("something wrong");
      console.log(error);
    }); 
}
*/