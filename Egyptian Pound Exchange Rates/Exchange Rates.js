var myInput = document.getElementById("myInput"),

	myDiv = document.getElementById("myDiv"),
	
	myButton = document.getElementById("myButton"),
	
	myCurrency = document.getElementById("myCurrency")
	
myCurrency.onchange = function() {
	
	if (myInput.value === "" || myInput.value === "0"){
		
		myDiv.innerHTML = "This Field Can Not By Empty";
	
	} else if (isNaN(myInput.value)) {
		
		myDiv.innerHTML = "This Field Accepts Numbers Only";
		
	} else if (myInput.value < 0) {
		
		myDiv.innerHTML = "This Field Accepts Positive Numbers Only";
	
	} else 
		
		myDiv.innerHTML = myInput.value + " Is Worth " + (myInput.value * myCurrency.value) + " Egyptian Pounds";

};

