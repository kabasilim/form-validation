function validateFirstName (){ //test input for  2-15 allowed  character
    var  fName  = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if (rel.test(fName)) { //if input is valid, update page to show successful entry
        document.getElementById("firstNamePrompt").style.color="green";
     	document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>";	
		return true;
	  }
	  else { // if input  is invalid,update page to prompt for new input  
	          document.getElementById("firstNamePrompt").style.color="red";
		      document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2&nbsp</strong>";
			  return false;
	  }
}

function validateFirstName (){ //test input for  2-25 allowed  character
    var  lName  = document.getElementById("LastName").value;
	var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;
	
	if (rel.test(lName)) { //if input is valid, update page to show successful entry
        document.getElementById("LastNamePrompt").style.color="green";
     	document.getElementById("LastNamePrompt").innerHTML="<strong>valid</strong>";	
		return true;
	  }
	  else { // if input  is invalid,update page to prompt for new input  
	          document.getElementById("LastNamePrompt").style.color="red";
		      document.getElementById("LastNamePrompt").innerHTML="<strong>Enter2&nbsp</strong>";
			  return false;
	  }
}

function validatePhone (){ //test xxx-xxx-xxxxx
    var  phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;
	
	if (rel.test(phoneNumber)) { //if input is valid
        document.getElementById("phoneNumberPrompt").style.color="green";
     	document.getElementById("phoneNumberPrompt").innerHTML="<strong>valid</strong>";	
		return true;
	  }
	  else { // if input  is invalid, 
	          document.getElementById("phoneNumberPrompt").style.color="red";
		      document.getElementById("phoneNumberPrompt").innerHTML="<strong>xxx-xxx-xxxxx</strong>";
			  return false;
	  }
}//end function validatePhone

function calcOrder() {
	   var firstName = document.getElementById("firstName").value;
	   var lastName = document.getElementById("lastName").value;
	   var userName = firstName +""+lastName;
	   var phone = document.getElementById("phone").value;
	   var quantity = document.getElementById("quantity").value;
	   var price = document.getElementById("price").value;
	   
	   document.getElementById("orderConfirm").innerHTMl = "<h2>Order Summary:</h2>";
	   document.getElementById("orderConfirm").innerHTMl += "<p>Order Total:#" + price * quantity + "</p>";
}
