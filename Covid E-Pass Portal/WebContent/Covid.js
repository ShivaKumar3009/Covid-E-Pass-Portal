var res=``;
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
		console.log(obj["AP"]["districts"]);
		for(let i in obj["AP"]["districts"]){
			if(i == "Foreign Evacuees" || i == "Other State"){
				
			}else{
			res += `<tr>
						<td>${i}</td>
						<td>${obj["AP"]["districts"][i]["total"]["confirmed"]}</td>
						<td>${obj["AP"]["districts"][i]["total"]["deceased"]}</td>
						<td>${obj["AP"]["districts"][i]["total"]["recovered"]}</td>
						<td>${obj["AP"]["districts"][i]["total"]["tested"]}</td>
						<td>${obj["AP"]["districts"][i]["meta"]["tested"]["last_updated"]}</td>		
					</tr>`;
			}
		}
		res += `<tr>
						<th>Total</th>
						<th>${obj["AP"]["total"]["confirmed"]}</th>
						<th>${obj["AP"]["total"]["deceased"]}</th>
						<th>${obj["AP"]["total"]["recovered"]}</th>
						<th>${obj["AP"]["total"]["tested"]}</th>
						<th>${obj["AP"]["meta"]["tested"]["last_updated"]}</th>		
					</tr>`;
		document.getElementById("tableBody").innerHTML = res;
		 	
					
    })
    .catch(function (error) {
      console.log("something wrong");
      console.log(error);
    }); 


