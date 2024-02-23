function submitEmail(){
	var email = document.getElementById('emailaddess').value;
	if(email){
		document.write("You entered: " + email);
	}else{
		alert("Please enter an email address");
	}
	
}