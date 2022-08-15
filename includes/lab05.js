
function sendForm(){
	
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var postal = document.getElementById("postal").value;
	
	var errors = document.getElementById("error_messages");
	
	console.log(name);
	console.log(age);
	console.log(email);
	console.log(phone);
	console.log(postal);
	
	var error = "";
	
	if(name == "" || /[\s]+/g.test(name) || name == undefined || name == null){
		error = error + "<br>Name must not be a whiteSpace<br>";
		document.getElementById("name").value = null;
	}
	
	if(!(/^([1][0-2][0])$/g.test(age) || /^([0-9][0-9])$/g.test(age) || /^([1][0-1][0-9])$/g.test(age))){
		error = error + "<br>Invalid age, must be between 0 and 120<br>"
		document.getElementById("age").value = null;
	}
	
	if(!(/^[^\s@]+@[A-Za-z]+\.[A-Za-z]+$/g.test(email))){
		error =  error + "<br>Not a valid email<br>";
		document.getElementById("email").value = null;
	}
	
	if(!(/^[0-9][0-9][0-9][\-][0-9][0-9][0-9][\-][0-9][0-9][0-9][0-9]$/g.test(phone) || /^[0-9][0-9][0-9][\s][0-9][0-9][0-9][\s][0-9][0-9][0-9][0-9]$/g.test(phone) || /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g.test(phone))){
		error =  error + "<br>Invalid phone #<br>";
		document.getElementById("phone").value = null;
	}
	
	if(!(/^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/g.test(postal) || /^[A-Za-z][0-9][A-Za-z][\s][0-9][A-Za-z][0-9]$/g.test(postal))){
		error =  error + "<br>Not a valid postal<br>";
		document.getElementById("postal").value = null;
	}
	
	if(error == ""){
		error = "<br>The form has been successfully sent<br>";
		errors.style.color = "#02AC66"
	}
	else{
		errors.style.color = "#EF280F"
	}
	
	console.log(error);

	errors.innerHTML = error;

	return false;
}

