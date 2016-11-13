// function to validate the form
function validateForm(){
	// validate name
	//var letters = /^[A-Za-z]+$/; 
	var x = document.forms["onlineForm"]["name"].value;
	//if (x.match(letters)){
	//	return false;
    //}
    //else {
    //	alert("Name must be alphabetical only")
    //	return false;
    //}
	if (x == null || x == ""){
		alert("Name must be filled out");
		return false;
	}
	// validate surname
	y = document.forms["onlineForm"]["surname"].value;
	if (y == null || y == ""){
		alert("Surname must be filled out");
		return false;
	}
	// validate contact phone number
	z = document.forms["onlineForm"]["number"].value;
	if (z == null || z == ""){
		alert("Number must be filled out");
		return false;
	}
	if (isNaN(z)){
		alert("Can only contain numbers");
		return false;
	}
	// validate email
	a = document.forms["onlineForm"]["email"].value;
	if (a == null || a == ""){
		alert("Email address must be filled out");
		return false;
	}
	// validate confirm email
	b = document.forms["onlineForm"]["confirm_email"].value;
	if (b != a){
		alert("The email does not match");
		return false;
	}
	if (b == null || b == ""){
		alert("You must confirm your email");
		return false;
	}
	// validate leaving from
	c = document.forms["onlineForm"]["From"].value;
	if (c == null || c == ""){
		alert("Departure from must be filled out");
		return false;
	}
	// validate arriving to
	d = document.forms["onlineForm"]["To"].value;
	if (d == null || d == ""){
		alert("Destination must be filled out");
		return false;
	}
	// validate departure date
	e = document.forms["onlineForm"]["Departure"].value;
	if (d == null || d == ""){
		alert("Departure date must be filled out");
		return false;
	}
	
	
}
