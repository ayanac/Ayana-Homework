$(document).ready(function(){

var submitButton = $("#submit-btn");

submitButton.on("click", function(event){
	//prevent form submission
	event.preventDefault();
	//save user input 
	var input = $("#city-type").val();
	console.log(input)
	//If a user submits: "New York" or "New York City" or "NYC" 
	if (input=="NYC" || input=="New York City" || input=="New York"){
	//make the background of the page nyc.jpg
	$("body").addClass('nyc');
	}
	// if user submits "San Francisco" or "SF" or "Bay Area"
	else if (input==="San Francsico" || input==="SF" || input==="Bay Area"){
	//make the background of the page sf.jpg
	$("body").addClass('sf');
	}
	//If user submits "Los Angeles" or "LA" or "LAX"
	else if (input==="Los Angeles" || input==="LA" || input==="LAX"){
	////make the background of the page la.jpg
	$("body").addClass('la');
	}
	// If user submits "Austin" or "ATX"
	else if (input==="Austin" || input==="ATX"){
	//make the background of the page austin.jpg	
	$("body").addCLass('austin');
	}
	// If user submits "Sydney" or "SYD" 
	else (input==="sydney" || input==="SYD"){
	$("body").addCLass('sydney');
	}
});
});