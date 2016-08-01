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
	$("body").removeAttr('class').addClass('nyc');
	}
	// if user submits "San Francisco" or "SF" or "Bay Area"
	else if (input==="San Francsico" || input==="SF" || input==="Bay Area"){
	//make the background of the page sf.jpg
	$("body").removeAttr('class').addClass('sf');
	}
	//If user submits "Los Angeles" or "LA" or "LAX"
	else if (input==="Los Angeles" || input==="LA" || input==="LAX"){
	////make the background of the page la.jpg
	$("body").removeAttr('class').addClass('la');
	}
	// If user submits "Austin" or "ATX"
	else if (input==="Austin" || input==="ATX"){
	//make the background of the page austin.jpg	
	$("body").removeAttr('class').addClass('austin');
	}
	// If user submits "Sydney" or "SYD" 
	else if (input==="Sydney" || input==="SYD"){
	$("body").removeAttr('class').addClass('sydney');
	}
});
});