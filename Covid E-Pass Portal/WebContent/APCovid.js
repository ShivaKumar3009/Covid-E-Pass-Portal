
	fetch("https://api.covid19india.org/v4/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
		console.log("inside clickhere");
		/*console.log(obj["AP"]["districts"]);
		console.log(obj["AP"]["total"]["confirmed"]);*/
		var casesInAP = parseInt(obj["AP"]["total"]["confirmed"]);
		console.log( "casesInAP" + " " + parseInt(casesInAP));
		var res="";
		for(let i in obj["AP"]["districts"]){
			res += `<tr>
						<td>${i}</td>
						<td>${obj["AP"]["districts"][i]["total"]["confirmed"]}</td>
						<td>${obj["AP"]["districts"][i]["total"]["deceased"]}</td>
						<td>${obj["AP"]["districts"][i]["total"]["recovered"]}</td>
						<td>${obj["AP"]["districts"][i]["total"]["tested"]}</td>
						<td>${obj["AP"]["districts"][i]["meta"]["tested"]["last_updated"]}</td>		
					</tr>`;
		}
		
		document.getElementById("tableBody").innerHTML = res;
		 	
					
    })
    .catch(function (error) {
      console.log("something wrong");
      console.log(error);
    }); 
