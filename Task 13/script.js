

function getInput(){
	var name = document.getElementById('inputtextname').value;
	var email = document.getElementById('inputtextemail').value;
	if(name.trim() == ""){
		errorshow1.textContent = "You need to enter your name";
	}else{
		errorshow1.textContent = "";
	}
	if(email.trim() == ""){
		errorshow2.textContent = "You need to enter your email";
	}else{
		var x = 0;
		var y = 0;
		for (var i = 0; i < email.length; ++i) {
			if(email[i] == '@'){
				++x;
			}
			if(email[i] == '.'){
				++y;
			}
		}
		if(x == 1 && y >= 1){
			errorshow2.textContent = "Succesfull";
		}else{
			errorshow2.textContent = "You need to enter valid email";
		}
	}
	
}

var btn = document.getElementById('btninput');
btn.addEventListener('click', getInput);


