// function to validate the form

function validateForm() {
	// validate name
	var letters = /^[a-zA-Z]+$/;
	var numbers = /^[0-9]+$/;
	x = document.forms["onlineForm"]["name"].value;
	if (x == null || x == "") {
		document.getElementById("errName").innerHTML = "Name is required";
		return false;
	}
	if (x.match(letters)){
		
	}
	else{
		document.getElementById("errName").innerHTML = "Name must be alphabetical only";
		return false;
	}
	// validate surname
	y = document.forms["onlineForm"]["surname"].value;
	if (y == null || y == "") {
		document.getElementById("errSurn").innerHTML = "Surname is required";
		return false;
	}
	// validate contact phone number
	z = document.forms["onlineForm"]["number"].value;
	if (z == null || z == "") {
		document.getElementById("errNum").innerHTML = "Number must be filled out";
		return false;
	}
	if (isNaN(z)) {
		document.getElementById("errNum").innerHTML = "Can only contain numbers";
		return false;
	}
	// validate email
	a = document.forms["onlineForm"]["email"].value;
	if (a == null || a == "") {
		document.getElementById("errEmail").innerHTML = "Email address must be filled out";
		return false;
	}
	// validate confirm email
	b = document.forms["onlineForm"]["confirm_email"].value;
	if (b != a) {
		document.getElementById("errConfEmail").innerHTML = "The two email do not match";
		return false;
	}
	if (b == null || b == "") {
		document.getElementById("errConEmail").innerHTML = "You must confirm your email";
		return false;
	}
	// validate leaving from
	c = document.forms["onlineForm"]["From"].value;
	if (c == null || c == "") {
		document.getElementById("errFrom").innerHTML = "Leaving from must be filled out";
		return false;
	}
	// validate arriving to
	d = document.forms["onlineForm"]["To"].value;
	if (d == null || d == "") {
		document.getElementById("errTo").innerHTML = "Destination must be filled out";
		return false;
	}
	// validate departure date
	e = document.forms["onlineForm"]["Departure"].value;
	if (e == null || e == "") {
		document.getElementById("errDate").innerHTML = "Departure date must be filled out";
		return false;
	}
	
	
}
